import { Star, Users, Calendar, BookOpen, Phone, ExternalLink, ChevronDown, ChevronUp, Award, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

interface School {
  id: string;
  name: string;
  description: string;
  logo_url: string;
  website_url: string;
  rating: number;
  total_reviews: number;
  price_from: number;
  price_to: number;
  subjects_count: number;
  accreditation: string;
  established_year: number;
  student_count: number;
  pros: string[];
  cons: string[];
  features: string[];
  contact_phone: string;
  contact_email: string;
  ranking_position: number;
  is_featured: boolean;
}

interface SchoolCardProps {
  school: School;
  rank: number;
}

export const SchoolCard = ({ school, rank }: SchoolCardProps) => {
  const [expanded, setExpanded] = useState(false);

  const getRankStyle = (rank: number) => {
    if (rank <= 3) return {
      gradient: "gradient-primary",
      shadow: "shadow-primary",
      border: "border-primary/20",
      badge: "bg-primary text-white"
    };
    if (rank <= 6) return {
      gradient: "gradient-secondary", 
      shadow: "shadow-secondary",
      border: "border-secondary/20",
      badge: "bg-secondary text-white"
    };
    return {
      gradient: "bg-gradient-to-r from-gray-600 to-gray-700",
      shadow: "shadow-soft",
      border: "border-gray-200",
      badge: "bg-gray-600 text-white"
    };
  };

  const rankStyle = getRankStyle(rank);

  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center space-x-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-5 h-5 ${
              star <= rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
            }`}
          />
        ))}
        <span className="ml-2 font-bold text-lg">{rating.toFixed(1)}</span>
        <span className="text-muted-foreground">/5</span>
      </div>
    );
  };

  return (
    <Card className={`transition-all duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden ${rank <= 3 ? 'ring-2 ring-primary/20' : ''}`}>
      {/* Top badge for featured schools */}
      {rank <= 3 && (
        <div className={`${rankStyle.gradient} text-white px-4 py-2 text-center font-bold`}>
          {rank === 1 && "🏆 ЛУЧШИЙ ВЫБОР"}
          {rank === 2 && "⭐ ПОПУЛЯРНЫЙ"}
          {rank === 3 && "💎 ПРЕМИУМ"}
        </div>
      )}
      
      <CardContent className="p-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Ranking and Logo */}
          <div className="flex items-start space-x-6">
            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-bold ${rankStyle.badge} ${rankStyle.shadow}`}>
              {rank}
            </div>
            <div className="w-20 h-20 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl flex items-center justify-center overflow-hidden shadow-soft">
              {school.logo_url ? (
                <img src={school.logo_url} alt={school.name} className="w-full h-full object-contain" />
              ) : (
                <div className="text-3xl font-bold text-gray-400">{school.name.charAt(0)}</div>
              )}
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* School Info */}
            <div className="lg:col-span-3">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-2xl font-bold leading-tight">{school.name}</h3>
                {school.is_featured && (
                  <Badge className="bg-orange-100 text-orange-800 font-semibold">
                    Рекомендуем
                  </Badge>
                )}
              </div>
              
              {renderStars(school.rating)}
              
              <p className="text-muted-foreground mt-3 text-base leading-relaxed">
                {school.description}
              </p>

              {/* Quick Stats */}
              <div className="flex flex-wrap gap-6 mt-6 text-sm">
                <div className="flex items-center space-x-2 bg-blue-50 px-3 py-2 rounded-xl">
                  <BookOpen className="w-4 h-4 text-blue-600" />
                  <span className="font-medium">{school.subjects_count} предметов</span>
                </div>
                <div className="flex items-center space-x-2 bg-green-50 px-3 py-2 rounded-xl">
                  <Users className="w-4 h-4 text-green-600" />
                  <span className="font-medium">{school.student_count.toLocaleString()} учеников</span>
                </div>
                <div className="flex items-center space-x-2 bg-purple-50 px-3 py-2 rounded-xl">
                  <Calendar className="w-4 h-4 text-purple-600" />
                  <span className="font-medium">С {school.established_year} года</span>
                </div>
              </div>

              {/* Price */}
              <div className="mt-6 p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl">
                <div className="text-3xl font-bold text-primary">
                  {school.price_from.toLocaleString()} - {school.price_to.toLocaleString()} ₽
                </div>
                <div className="text-sm text-muted-foreground">в месяц</div>
              </div>
            </div>

            {/* Pros and Cons */}
            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 gap-6 h-full">
                {/* Pros */}
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-4 rounded-2xl">
                  <h4 className="font-bold text-green-700 mb-3 flex items-center">
                    <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                    Преимущества
                  </h4>
                  <ul className="space-y-2 text-sm">
                    {school.pros.slice(0, 3).map((pro, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <span className="text-green-500 mt-1 font-bold">✓</span>
                        <span className="text-green-800">{pro}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Cons */}
                <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-4 rounded-2xl">
                  <h4 className="font-bold text-orange-700 mb-3 flex items-center">
                    <span className="w-3 h-3 bg-orange-500 rounded-full mr-2"></span>
                    Особенности
                  </h4>
                  <ul className="space-y-2 text-sm">
                    {school.cons.slice(0, 3).map((con, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <span className="text-orange-500 mt-1 font-bold">•</span>
                        <span className="text-orange-800">{con}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Reviews and Actions */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mt-8 pt-8 border-t border-gray-100 gap-6">
          <div className="text-sm text-muted-foreground flex items-center space-x-4">
            <span>Основано на {school.total_reviews} отзывах</span>
            <span>•</span>
            <span className="flex items-center space-x-1">
              <Award className="w-4 h-4" />
              {school.accreditation}
            </span>
          </div>

          <div className="flex flex-wrap gap-3">
            <Button variant="outline" size="sm" className="font-semibold">
              Подробнее
            </Button>
            <Button size="sm" className="flex items-center space-x-2 font-semibold">
              <ExternalLink className="w-4 h-4" />
              <span>Перейти на сайт</span>
            </Button>
            <Button variant="secondary" size="sm" className="flex items-center space-x-2 font-semibold">
              <Phone className="w-4 h-4" />
              <span>Консультация</span>
            </Button>
          </div>
        </div>

        {/* Expandable Features */}
        {expanded && (
          <div className="mt-8 pt-8 border-t border-gray-100">
            <h4 className="font-bold mb-4 text-lg">Ключевые особенности:</h4>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {school.features.map((feature, index) => (
                <Badge key={index} variant="secondary" className="text-xs py-2 px-3 rounded-xl">
                  {feature}
                </Badge>
              ))}
            </div>
          </div>
        )}

        {/* Expand Button */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="w-full mt-6 flex items-center justify-center space-x-2 text-sm text-muted-foreground hover:text-primary transition-colors py-2 rounded-xl hover:bg-gray-50"
        >
          <span className="font-medium">{expanded ? 'Скрыть детали' : 'Показать все особенности'}</span>
          {expanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>
      </CardContent>
    </Card>
  );
};