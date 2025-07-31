import { CheckCircle, Shield, Award, Mail, BarChart3, Users, Clock, TrendingUp, FileCheck, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const SupportingSection = () => {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-20">
      <div className="container mx-auto px-4">
        {/* Methodology Section */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-blue-50 text-blue-700 rounded-full px-6 py-2 mb-6">
              <BarChart3 className="w-5 h-5" />
              <span className="font-semibold">Прозрачная методология</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Как мы составляем рейтинг
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Наша методика основана на объективных критериях, всестороннем анализе 
              и реальных отзывах учеников и их родителей
            </p>
          </div>

          {/* Main methodology cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="relative overflow-hidden group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-blue-600"></div>
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Shield className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">Проверка аккредитации</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Все школы имеют государственную лицензию и аккредитацию. 
                  Проверяем документы в Рособрнадзоре.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-center space-x-2 text-green-600">
                    <CheckCircle className="w-4 h-4" />
                    <span>Лицензия на образовательную деятельность</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2 text-green-600">
                    <CheckCircle className="w-4 h-4" />
                    <span>Государственная аккредитация</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2 text-green-600">
                    <CheckCircle className="w-4 h-4" />
                    <span>Право на выдачу аттестатов</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-emerald-600"></div>
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-emerald-200 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Users className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">Анализ отзывов</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Изучаем отзывы учеников и родителей на независимых платформах. 
                  Проверяем достоверность каждого отзыва.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-center space-x-2 text-green-600">
                    <Star className="w-4 h-4" />
                    <span>Анализ 2,500+ проверенных отзывов</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2 text-green-600">
                    <FileCheck className="w-4 h-4" />
                    <span>Верификация через соцсети</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2 text-green-600">
                    <TrendingUp className="w-4 h-4" />
                    <span>Динамика удовлетворенности</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-red-500"></div>
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-red-200 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Award className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">Качество образования</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Оцениваем программы, методики и результаты ЕГЭ выпускников. 
                  Анализируем статистику поступления в ВУЗы.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-center space-x-2 text-orange-600">
                    <BarChart3 className="w-4 h-4" />
                    <span>Средний балл ЕГЭ выпускников</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2 text-orange-600">
                    <TrendingUp className="w-4 h-4" />
                    <span>% поступления в топ ВУЗы</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2 text-orange-600">
                    <Award className="w-4 h-4" />
                    <span>Победы в олимпиадах</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Trust indicators */}
          <div className="bg-white rounded-3xl p-8 shadow-soft border border-gray-100">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Гарантии объективности</h3>
              <p className="text-gray-600">Наши принципы работы обеспечивают честный и независимый рейтинг</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Clock className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-1">Регулярное обновление</h4>
                <p className="text-sm text-gray-600">Рейтинг обновляется ежемесячно</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Shield className="w-6 h-6 text-green-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-1">Независимость</h4>
                <p className="text-sm text-gray-600">Не принимаем плату за позицию</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <FileCheck className="w-6 h-6 text-purple-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-1">Проверенные данные</h4>
                <p className="text-sm text-gray-600">Все факты подтверждены документально</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <TrendingUp className="w-6 h-6 text-orange-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-1">Прозрачность</h4>
                <p className="text-sm text-gray-600">Публикуем методологию расчета</p>
              </div>
            </div>
          </div>
        </section>

        {/* Recent Reviews Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Последние отзывы</h2>
            <p className="text-muted-foreground">Что говорят ученики и родители</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Анна М.",
                school: "Онлайн-школа Фоксфорд",
                rating: 5,
                text: "Отличная подготовка к ЕГЭ, удобная платформа. Поступила в МГУ!",
                date: "2 дня назад"
              },
              {
                name: "Дмитрий К.",
                school: "Домашняя школа ИнтернетУрок",
                rating: 4,
                text: "Гибкий график, хорошие учителя. Рекомендую для самостоятельных детей.",
                date: "5 дней назад"
              },
              {
                name: "Мария С.",
                school: "Онлайн-лицей №1",
                rating: 5,
                text: "Сын закончил 11 класс экстерном за полгода. Очень довольны результатом!",
                date: "1 неделю назад"
              }
            ].map((review, index) => (
              <Card key={index} className="h-full">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <div className="font-medium">{review.name}</div>
                      <div className="text-sm text-muted-foreground">{review.school}</div>
                    </div>
                    <div className="flex">
                      {[...Array(review.rating)].map((_, i) => (
                        <span key={i} className="text-yellow-400">★</span>
                      ))}
                    </div>
                  </div>
                  <p className="text-sm mb-3">"{review.text}"</p>
                  <div className="text-xs text-muted-foreground">{review.date}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="text-center">
          <div className="max-w-md mx-auto">
            <h2 className="text-2xl font-bold mb-4">Получайте новости</h2>
            <p className="text-muted-foreground mb-6">
              Подпишитесь на обновления рейтинга и полезные материалы об онлайн-образовании
            </p>
            <div className="flex gap-2">
              <Input type="email" placeholder="Ваш email" className="flex-1" />
              <Button className="flex items-center space-x-1">
                <Mail className="w-4 h-4" />
                <span>Подписаться</span>
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              Не более 1 письма в неделю. Отписаться можно в любой момент.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};