import { Star, Users, Calendar, BookOpen, Phone, ExternalLink, ChevronDown, ChevronUp, Award, TrendingUp, CheckCircle } from "lucide-react";
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
  use_link_button?: boolean;
  link_text?: string;
  unique_details?: {
    educational_process: {
      lesson_format: string;
      lesson_duration: string;
      homework: string;
      control_works: string;
      progress_tracking: string;
    };
    support: {
      personal_curator: string;
      tech_support: string;
      parent_control: string;
      student_communication: string;
      teacher_consultations: string;
    };
    platform: {
      web_version: boolean;
      mobile_app: boolean;
      offline_mode: boolean;
      virtual_board: boolean;
      simulations_3d: boolean;
      gaming_elements: boolean;
    };
    exam_results: {
      russian_avg: string;
      math_avg: string;
      university_admission: string;
      graduates_2024: string;
    };
  };
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
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          {/* Ranking Badge */}
          <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-lg font-bold text-white ${rankStyle.badge} ${rankStyle.shadow} flex-shrink-0`}>
            {rank}
          </div>

          {/* Main Content */}
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-xl font-bold leading-tight pr-4">{school.name}</h3>
              {school.is_featured && (
                <Badge className="bg-orange-100 text-orange-800 font-semibold flex-shrink-0">
                  Рекомендуем
                </Badge>
              )}
            </div>
            
            {/* Rating */}
            <div className="flex items-center space-x-1 mb-3">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={`w-4 h-4 ${
                    star <= school.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                  }`}
                />
              ))}
              <span className="ml-2 font-bold text-base">{school.rating.toFixed(1)}</span>
              <span className="text-muted-foreground text-sm">/5</span>
            </div>
            
            {/* Description */}
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              {school.description}
            </p>

            {/* Stats Row */}
            <div className="flex flex-wrap gap-4 mb-4 text-xs">
              <div className="flex items-center space-x-1 text-blue-600">
                <BookOpen className="w-3 h-3" />
                <span>{school.subjects_count} предметов</span>
              </div>
              <div className="flex items-center space-x-1 text-green-600">
                <Users className="w-3 h-3" />
                <span>{school.student_count.toLocaleString()} учеников</span>
              </div>
              <div className="flex items-center space-x-1 text-purple-600">
                <Calendar className="w-3 h-3" />
                <span>С {school.established_year} года</span>
              </div>
            </div>
          </div>

          {/* Right Side - Pros and Price */}
          <div className="flex flex-col items-end gap-4 flex-shrink-0">
            {/* Pros */}
            <div className="bg-green-50 p-3 rounded-xl max-w-xs">
              <h4 className="font-medium text-green-700 text-sm mb-2 flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                Преимущества
              </h4>
              <ul className="space-y-1 text-xs text-green-800">
                {school.pros.slice(0, 3).map((pro, index) => (
                  <li key={index} className="flex items-start space-x-1">
                    <CheckCircle className="w-3 h-3 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>{pro}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Price */}
            <div className="text-right">
              <div className="text-2xl font-bold text-primary">
                {school.price_from.toLocaleString()} - {school.price_to.toLocaleString()} ₽
              </div>
              <div className="text-xs text-muted-foreground">в месяц</div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-100">
          <div className="text-xs text-muted-foreground flex items-center space-x-3">
            <span>Основано на {school.total_reviews} отзывах</span>
            <span>•</span>
            <span className="flex items-center space-x-1">
              <Award className="w-3 h-3" />
              {school.accreditation}
            </span>
          </div>

          <div className="flex gap-2">
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => setExpanded(!expanded)}
              className="text-xs"
            >
              {expanded ? 'Скрыть' : 'Показать все особенности'}
            </Button>
            
            {school.use_link_button ? (
              <a 
                href={school.website_url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-xs font-medium transition-colors bg-orange-500 text-white hover:bg-orange-600 h-8 px-3"
              >
                <ExternalLink className="w-3 h-3 mr-1" />
                {school.link_text || "Перейти на сайт"}
              </a>
            ) : (
              <Button 
                size="sm" 
                className="text-xs bg-orange-500 text-white hover:bg-orange-600 border-0"
                onClick={() => window.open(school.website_url, '_blank')}
              >
                <ExternalLink className="w-3 h-3 mr-1" />
                Перейти на сайт
              </Button>
            )}
          </div>
        </div>

        {/* Expandable Features */}
        {expanded && (
          <div className="mt-8 pt-8 border-t border-gray-100 space-y-6">
            {/* Key Features */}
            <div>
              <h4 className="font-bold mb-4 text-lg">Ключевые особенности:</h4>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {school.features.map((feature, index) => (
                  <Badge key={index} variant="secondary" className="text-xs py-2 px-3 rounded-xl">
                    {feature}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Detailed Information for Selection - Dynamic based on school data */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Educational Details */}
              <div className="bg-blue-50 rounded-2xl p-4">
                <h5 className="font-semibold text-blue-800 mb-3 flex items-center">
                  <BookOpen className="w-4 h-4 mr-2" />
                  Учебный процесс
                </h5>
                <div className="space-y-2 text-sm text-blue-700">
                  <div>• Формат уроков: {school.unique_details?.educational_process.lesson_format || "видео + интерактив"}</div>
                  <div>• Длительность урока: {school.unique_details?.educational_process.lesson_duration || "30-45 минут"}</div>
                  <div>• Домашние задания: {school.unique_details?.educational_process.homework || "автопроверка + ручная"}</div>
                  <div>• Контрольные работы: {school.unique_details?.educational_process.control_works || "еженедельно"}</div>
                  <div>• Прогресс-трекинг: {school.unique_details?.educational_process.progress_tracking || "детальная аналитика"}</div>
                </div>
              </div>

              {/* Support & Communication */}
              <div className="bg-green-50 rounded-2xl p-4">
                <h5 className="font-semibold text-green-800 mb-3 flex items-center">
                  <Users className="w-4 h-4 mr-2" />
                  Поддержка и общение
                </h5>
                <div className="space-y-2 text-sm text-green-700">
                  <div>• Персональный куратор: {school.unique_details?.support.personal_curator || "да"}</div>
                  <div>• Техподдержка: {school.unique_details?.support.tech_support || "24/7 чат"}</div>
                  <div>• Родительский контроль: {school.unique_details?.support.parent_control || "еженедельные отчеты"}</div>
                  <div>• Общение с одноклассниками: {school.unique_details?.support.student_communication || "форумы, чаты"}</div>
                  <div>• Консультации с учителями: {school.unique_details?.support.teacher_consultations || "по расписанию"}</div>
                </div>
              </div>
            </div>

            {/* Technology & Platform */}
            <div className="bg-purple-50 rounded-2xl p-4">
              <h5 className="font-semibold text-purple-800 mb-3 flex items-center">
                <TrendingUp className="w-4 h-4 mr-2" />
                Платформа и технологии
              </h5>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-purple-700">
                <div>
                  <div className="font-medium mb-2">Доступ к платформе:</div>
                  <div>• Веб-версия{school.unique_details?.platform.web_version ? " ✓" : " ✗"}</div>
                  <div>• Мобильное приложение{school.unique_details?.platform.mobile_app ? " ✓" : " ✗"}</div>
                  <div>• Офлайн-режим материалов{school.unique_details?.platform.offline_mode ? " ✓" : " ✗"}</div>
                </div>
                <div>
                  <div className="font-medium mb-2">Интерактивные элементы:</div>
                  <div>• Виртуальная доска{school.unique_details?.platform.virtual_board ? " ✓" : " ✗"}</div>
                  <div>• 3D-модели и симуляции{school.unique_details?.platform.simulations_3d ? " ✓" : " ✗"}</div>
                  <div>• Игровые элементы{school.unique_details?.platform.gaming_elements ? " ✓" : " ✗"}</div>
                </div>
                <div>
                  <div className="font-medium mb-2">Системные требования:</div>
                  <div>• Интернет: стабильное подключение</div>
                  <div>• Устройство: ПК/планшет</div>
                  <div>• Браузер: современный</div>
                </div>
              </div>
            </div>

            {/* Important Selection Criteria */}
            <div className="bg-gray-50 rounded-2xl p-4">
              <h5 className="font-semibold text-gray-800 mb-3 flex items-center">
                <CheckCircle className="w-4 h-4 mr-2" />
                Важно при выборе
              </h5>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700">
                <div>
                  <div className="font-medium text-green-600 mb-2">Сильные стороны:</div>
                  <div>• Аккредитация действует до 2028 года</div>
                  <div>• Лицензия без ограничений</div>
                  <div>• Опыт дистанционного обучения: {new Date().getFullYear() - school.established_year} лет</div>
                </div>
                <div>
                  <div className="font-medium text-orange-600 mb-2">На что обратить внимание:</div>
                  <div>• Нагрузка: 4-6 часов в день</div>
                  <div>• Требуется самодисциплина</div>
                  <div>• Родительский контроль желателен</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};