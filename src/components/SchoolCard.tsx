import { Star, Users, Calendar, BookOpen, Phone, ExternalLink, ChevronDown, ChevronUp } from "lucide-react";
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

  const getRankBadgeColor = (rank: number) => {
    if (rank <= 3) return "bg-primary text-primary-foreground";
    if (rank <= 6) return "bg-secondary text-secondary-foreground";
    return "bg-muted text-muted-foreground";
  };

  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center space-x-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-4 h-4 ${
              star <= rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
            }`}
          />
        ))}
        <span className="ml-2 font-medium">{rating.toFixed(1)}/5</span>
      </div>
    );
  };

  return (
    <Card className={`transition-all duration-300 hover:shadow-lg ${rank <= 3 ? 'ring-2 ring-primary/20' : ''}`}>
      <CardContent className="p-6">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Ranking and Logo */}
          <div className="flex items-start space-x-4">
            <div className={`w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold ${getRankBadgeColor(rank)}`}>
              {rank}
            </div>
            <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden">
              {school.logo_url ? (
                <img src={school.logo_url} alt={school.name} className="w-full h-full object-contain" />
              ) : (
                <div className="text-2xl font-bold text-gray-400">{school.name.charAt(0)}</div>
              )}
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* School Info */}
            <div className="lg:col-span-2">
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-xl font-bold">{school.name}</h3>
                {school.is_featured && (
                  <Badge className="bg-orange-100 text-orange-800">Рекомендуем</Badge>
                )}
              </div>
              
              {renderStars(school.rating)}
              
              <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                {school.description}
              </p>

              {/* Quick Stats */}
              <div className="flex flex-wrap gap-4 mt-4 text-sm text-muted-foreground">
                <div className="flex items-center space-x-1">
                  <BookOpen className="w-4 h-4" />
                  <span>{school.subjects_count} предметов</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Users className="w-4 h-4" />
                  <span>{school.student_count.toLocaleString()} учеников</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Calendar className="w-4 h-4" />
                  <span>С {school.established_year} года</span>
                </div>
              </div>

              {/* Price */}
              <div className="mt-4">
                <div className="text-2xl font-bold text-primary">
                  {school.price_from.toLocaleString()} - {school.price_to.toLocaleString()} ₽
                </div>
                <div className="text-sm text-muted-foreground">в месяц</div>
              </div>
            </div>

            {/* Pros and Cons */}
            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-full">
                {/* Pros */}
                <div>
                  <h4 className="font-semibold text-green-700 mb-2 flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    Преимущества
                  </h4>
                  <ul className="space-y-1 text-sm">
                    {school.pros.slice(0, 3).map((pro, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <span className="text-green-500 mt-1">✓</span>
                        <span>{pro}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Cons */}
                <div>
                  <h4 className="font-semibold text-orange-700 mb-2 flex items-center">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                    Особенности
                  </h4>
                  <ul className="space-y-1 text-sm">
                    {school.cons.slice(0, 3).map((con, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <span className="text-orange-500 mt-1">•</span>
                        <span>{con}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Reviews and Actions */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mt-6 pt-6 border-t gap-4">
          <div className="text-sm text-muted-foreground">
            Основано на {school.total_reviews} отзывах • {school.accreditation}
          </div>

          <div className="flex flex-wrap gap-2">
            <Button variant="outline" size="sm">
              Подробнее
            </Button>
            <Button size="sm" className="flex items-center space-x-1">
              <ExternalLink className="w-4 h-4" />
              <span>Перейти на сайт</span>
            </Button>
            <Button variant="outline" size="sm" className="flex items-center space-x-1">
              <Phone className="w-4 h-4" />
              <span>Консультация</span>
            </Button>
          </div>
        </div>

        {/* Expandable Features */}
        {expanded && (
          <div className="mt-6 pt-6 border-t">
            <h4 className="font-semibold mb-3">Ключевые особенности:</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
              {school.features.map((feature, index) => (
                <Badge key={index} variant="secondary" className="text-xs">
                  {feature}
                </Badge>
              ))}
            </div>
          </div>
        )}

        {/* Expand Button */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="w-full mt-4 flex items-center justify-center space-x-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <span>{expanded ? 'Скрыть детали' : 'Показать все особенности'}</span>
          {expanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>
      </CardContent>
    </Card>
  );
};