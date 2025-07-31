import { CheckCircle, Shield, Award, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

export const SupportingSection = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        {/* Methodology Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Как мы составляем рейтинг</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Наша методика основана на объективных критериях и реальных отзывах учеников
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Проверка аккредитации</h3>
                <p className="text-sm text-muted-foreground">
                  Все школы имеют государственную лицензию и аккредитацию
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Анализ отзывов</h3>
                <p className="text-sm text-muted-foreground">
                  Изучаем отзывы учеников и родителей на независимых платформах
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Качество образования</h3>
                <p className="text-sm text-muted-foreground">
                  Оцениваем программы, методики и результаты ЕГЭ выпускников
                </p>
              </CardContent>
            </Card>
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