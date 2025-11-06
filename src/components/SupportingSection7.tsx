import { CheckCircle, Shield, Award, Mail, BarChart3, Users, Clock, TrendingUp, FileCheck, Star, ChevronDown, HelpCircle, GraduationCap, Calendar, Home, Target, Zap, Globe, Heart, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const SupportingSection7 = () => {
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
                  Оцениваем программы, методики и результаты выпускников. 
                  Анализируем статистику успеваемости и развития учеников.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-center space-x-2 text-orange-600">
                    <BarChart3 className="w-4 h-4" />
                    <span>Средний балл успеваемости</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2 text-orange-600">
                    <TrendingUp className="w-4 h-4" />
                    <span>Динамика развития учеников</span>
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

        {/* Enhanced Reviews Section */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-green-50 text-green-700 rounded-full px-6 py-2 mb-6">
              <Star className="w-5 h-5" />
              <span className="font-semibold">Отзывы учеников</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Последние отзывы</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Что говорят ученики и родители о своем опыте обучения в онлайн-школах
            </p>
          </div>

          {/* Reviews Slider */}
          <div className="relative overflow-hidden">
            <div className="flex space-x-6 animate-slide pb-8">
              {[
                {
                  name: "Мария К.",
                  role: "Ученица 7 класса",
                  school: "Онлайн-школа Фоксфорд",
                  rating: 5,
                  avatar: "https://images.unsplash.com/photo-1494790108755-2616c2b4fd68?w=64&h=64&fit=crop&crop=face",
                  text: "Перешла в онлайн-школу в начале года. Успеваю больше заниматься танцами!",
                  results: "Средний балл: 4.8, участие в олимпиаде по математике",
                  achievement: "Призер городской олимпиады",
                  date: "3 дня назад"
                },
                {
                  name: "Артем В.",
                  role: "Ученик 7 класса",
                  school: "Домашняя школа ИнтернетУрок",
                  rating: 4,
                  avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=face",
                  text: "Удобно совмещать с хоккеем. Учителя всегда помогают разобраться.",
                  results: "Средний балл: 4.5, активное участие в проектах",
                  achievement: "КМС по хоккею",
                  date: "1 неделю назад"
                },
                {
                  name: "Елена С.",
                  role: "Мама ученицы 7 класса",
                  school: "Онлайн-лицей №1",
                  rating: 5,
                  avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&fit=crop&crop=face",
                  text: "Дочь стала увереннее в себе, нет стресса из-за одноклассников. Успеваемость выросла.",
                  results: "Все предметы на 4 и 5",
                  achievement: "Повышение успеваемости на 20%",
                  date: "2 недели назад"
                },
                {
                  name: "Максим Л.",
                  role: "Ученик 7 класса",
                  school: "Школа Будущего Онлайн",
                  rating: 5,
                  avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face",
                  text: "Занимаюсь программированием параллельно. Гибкий график - это супер!",
                  results: "Средний балл 4.7, сертификат по Python",
                  achievement: "Участник хакатона",
                  date: "3 недели назад"
                },
                {
                  name: "Ольга М.",
                  role: "Мама ученика",
                  school: "Skysmart",
                  rating: 4,
                  avatar: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=64&h=64&fit=crop&crop=face",
                  text: "Сын учится в удобное время. Индивидуальный подход помог подтянуть математику.",
                  results: "Улучшение по математике с 3 до 5",
                  achievement: "Повышение успеваемости",
                  date: "1 месяц назад"
                },
                {
                  name: "София П.",
                  role: "Ученица 7 класса",
                  school: "Умская Школа",
                  rating: 5,
                  avatar: "https://images.unsplash.com/photo-1494790108755-2616c2b4fd68?w=64&h=64&fit=crop&crop=face",
                  text: "Живем за границей. Очень удобно учиться по российской программе онлайн!",
                  results: "Все предметы сданы успешно",
                  achievement: "Сохранение российского образования",
                  date: "1 месяц назад"
                }
              ].map((review, index) => (
                <div key={index} className="flex-none w-96">
                  <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-primary">
                    <CardContent className="p-6">
                      {/* Header with avatar and rating */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <img
                            src={review.avatar}
                            alt={review.name}
                            className="w-12 h-12 rounded-full object-cover border-2 border-gray-200"
                          />
                          <div>
                            <div className="font-semibold text-gray-900">{review.name}</div>
                            <div className="text-sm text-gray-500">{review.role}</div>
                            <div className="text-xs text-primary font-medium">{review.school}</div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-1">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          ))}
                          {[...Array(5 - review.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-gray-300" />
                          ))}
                        </div>
                      </div>

                      {/* Review text */}
                      <p className="text-gray-700 mb-4 leading-relaxed">"{review.text}"</p>

                      {/* Results */}
                      <div className="bg-green-50 rounded-xl p-3 mb-4">
                        <div className="text-xs font-semibold text-green-700 mb-1">РЕЗУЛЬТАТЫ:</div>
                        <div className="text-sm text-green-800">{review.results}</div>
                      </div>

                      {/* Achievement */}
                      <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-3 mb-4">
                        <div className="text-xs font-semibold text-orange-700 mb-1">ДОСТИЖЕНИЕ:</div>
                        <div className="text-sm text-orange-800 font-medium">{review.achievement}</div>
                      </div>

                      {/* Date */}
                      <div className="text-xs text-gray-500">{review.date}</div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Statistics */}
          <div className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Статистика успеха наших школ</h3>
              <p className="text-gray-600">Реальные результаты учеников за 2025 год</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">92%</div>
                <div className="text-sm text-gray-600">Улучшили успеваемость</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">4.6</div>
                <div className="text-sm text-gray-600">Средний балл учеников</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">96%</div>
                <div className="text-sm text-gray-600">Довольны качеством обучения</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">180+</div>
                <div className="text-sm text-gray-600">Победителей олимпиад</div>
              </div>
            </div>
          </div>
          {/* Payment Options Section */}
          <div className="mt-16 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-3xl p-8 border border-blue-200">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Оплачивайте учёбу ребёнка без вреда для семейного бюджета
              </h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Большинство онлайн-школ предлагают различные способы оплаты и льготные программы, 
                делающие качественное образование доступным для каждой семьи
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              {/* Maternal Capital */}
              <div className="bg-white rounded-2xl p-6 text-center shadow-soft">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">Материнский капитал</h4>
                <p className="text-gray-600 mb-4">
                  Большинство школ принимают материнский капитал частично или полностью. 
                  Школы помогают с оформлением документов.
                </p>
                <div className="text-sm text-green-700 bg-green-50 rounded-lg p-2">
                  Экономия до 631,000 ₽
                </div>
              </div>

              {/* Tax Deduction */}
              <div className="bg-white rounded-2xl p-6 text-center shadow-soft">
                <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <FileCheck className="w-8 h-8 text-orange-600" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">Налоговый вычет до 33,800 ₽</h4>
                <p className="text-gray-600 mb-4">
                  Государство возвращает 13% от стоимости курса. 
                  Многие школы помогают оформить документы для получения вычета.
                </p>
                <div className="text-sm text-orange-700 bg-orange-50 rounded-lg p-2">
                  Возврат 13% от стоимости
                </div>
              </div>

              {/* Flexible Payment */}
              <div className="bg-white rounded-2xl p-6 text-center shadow-soft">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-blue-600" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">Внутренняя и банковская рассрочка</h4>
                <p className="text-gray-600 mb-4">
                  Многие школы предлагают рассрочку без процентов 
                  или партнерство с банками для выгодных условий.
                </p>
                <div className="text-sm text-blue-700 bg-blue-50 rounded-lg p-2">
                  0% переплаты
                </div>
              </div>
            </div>

            {/* Payment Methods */}
            <div className="bg-white rounded-2xl p-6">
              <h4 className="text-xl font-bold text-center text-gray-900 mb-6">Доступные способы оплаты в онлайн-школах</h4>
              <div className="flex flex-wrap justify-center items-center gap-6 text-gray-600">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                    <span className="text-blue-600 font-bold">💳</span>
                  </div>
                  <span>Банковские карты</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                    <span className="text-green-600 font-bold">💰</span>
                  </div>
                  <span>Материнский капитал</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                    <span className="text-purple-600 font-bold">🏦</span>
                  </div>
                  <span>Банковские переводы</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                    <span className="text-orange-600 font-bold">📱</span>
                  </div>
                  <span>Электронные кошельки</span>
                </div>
              </div>
            </div>

            {/* Special Offers */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-6 text-white">
                <h5 className="text-lg font-bold mb-2">Скидки для многодетных семей</h5>
                <p className="text-green-100 mb-3">Дополнительная скидка до 20% на обучение</p>
                <div className="text-sm bg-white/20 rounded-lg p-2 inline-block">
                  Предоставьте справку о многодетности
                </div>
              </div>
              <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl p-6 text-white">
                <h5 className="text-lg font-bold mb-2">Поддержка малообеспеченных семей</h5>
                <p className="text-blue-100 mb-3">Индивидуальные условия оплаты и скидки</p>
                <div className="text-sm bg-white/20 rounded-lg p-2 inline-block">
                  Обратитесь к менеджеру за консультацией
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Online vs Traditional School Benefits */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-green-50 text-green-700 rounded-full px-6 py-2 mb-6">
              <Target className="w-5 h-5" />
              <span className="font-semibold">Преимущества онлайн-образования</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Почему онлайн-школа лучше обычной?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Сравнительный анализ показывает значительные преимущества дистанционного образования 
              для учеников 7 класса
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Left Column - Online School Benefits */}
            <div className="bg-green-50 rounded-3xl p-8 border-l-4 border-green-500">
              <h3 className="text-2xl font-bold text-green-800 mb-6 flex items-center">
                <div className="w-8 h-8 bg-green-200 rounded-lg flex items-center justify-center mr-3">
                  <Globe className="w-5 h-5 text-green-600" />
                </div>
                Онлайн-школа
              </h3>
              <div className="space-y-4">
                {[
                  "Гибкий график - учись когда удобно",
                  "Индивидуальный подход к каждому ученику",
                  "Персональный темп обучения",
                  "Экономия 2+ часов в день на дороге",
                  "Комфортная домашняя обстановка",
                  "Современные интерактивные методики",
                  "Возможность совмещать со спортом/творчеством",
                  "Безопасная среда обучения"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <span className="text-green-500 mt-1">✅</span>
                    <span className="text-green-800">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Traditional School Issues */}
            <div className="bg-red-50 rounded-3xl p-8 border-l-4 border-red-500">
              <h3 className="text-2xl font-bold text-red-800 mb-6 flex items-center">
                <div className="w-8 h-8 bg-red-200 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-red-600 font-bold">📚</span>
                </div>
                Обычная школа
              </h3>
              <div className="space-y-4">
                {[
                  "Фиксированное расписание 6-7 уроков в день",
                  "Большие классы (25-30 учеников)",
                  "Один темп обучения для всех",
                  "Трата времени на дорогу (1-2 часа в день)",
                  "Отвлекающие факторы и конфликты",
                  "Устаревшие методики преподавания",
                  "Невозможность совмещать с другой деятельностью",
                  "Риск буллинга и стресса"
                ].map((issue, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <span className="text-red-500 mt-1">❌</span>
                    <span className="text-red-800">{issue}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Key Statistics Comparison */}
          <div className="bg-white rounded-3xl p-8 shadow-soft border">
            <h3 className="text-2xl font-bold text-center mb-8 text-gray-900">Статистика говорит сама за себя</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">+0.8</div>
                <div className="text-sm text-gray-600 mb-1">балла к среднему</div>
                <div className="text-xs text-gray-500">в среднем выше</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">2x</div>
                <div className="text-sm text-gray-600 mb-1">больше времени</div>
                <div className="text-xs text-gray-500">на хобби и спорт</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">94%</div>
                <div className="text-sm text-gray-600 mb-1">довольных</div>
                <div className="text-xs text-gray-500">родителей</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-600 mb-2">2 ч</div>
                <div className="text-sm text-gray-600 mb-1">экономии</div>
                <div className="text-xs text-gray-500">времени в день</div>
              </div>
            </div>
          </div>

          {/* Ideal Student Profiles */}
          <div className="mt-16">
            <h3 className="text-3xl font-bold text-center mb-12 text-gray-900">
              Онлайн-школа — идеальный выбор для тех, кто:
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                {
                  icon: "🎯",
                  title: "Профессионально занимается спортом или творчеством",
                  description: "и хочет гибкого графика для тренировок"
                },
                {
                  icon: "🏠",
                  title: "Недоволен школой по месту жительства",
                  description: "и хочет качественного образования"
                },
                {
                  icon: "💊",
                  title: "Часто болеет или легко утомляется",
                  description: "и выбирает комфортное домашнее обучение"
                },
                {
                  icon: "🌍",
                  title: "Живет за границей",
                  description: "но планирует получить российское образование"
                },
                {
                  icon: "😔",
                  title: "Столкнулся с травлей или токсичной школьной средой",
                  description: "и ищет безопасную альтернативу"
                },
                {
                  icon: "🧠",
                  title: "Хочет углубленного изучения предметов",
                  description: "и индивидуального подхода"
                },
                {
                  icon: "🎓",
                  title: "Планирует поступление в топ-школы",
                  description: "и нуждается в качественной подготовке"
                },
                {
                  icon: "⚡",
                  title: "Предпочитает самостоятельность",
                  description: "в планировании учебного процесса"
                }
              ].map((profile, index) => (
                <Card key={index} className="text-center p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-white to-gray-50">
                  <div className="text-4xl mb-4">{profile.icon}</div>
                  <h4 className="font-semibold text-gray-900 mb-2 leading-tight">{profile.title}</h4>
                  <p className="text-sm text-gray-600">{profile.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="text-center">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-blue-50 text-blue-700 rounded-full px-6 py-2 mb-6">
              <HelpCircle className="w-5 h-5" />
              <span className="font-semibold">Ответы на вопросы</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Часто задаваемые вопросы
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Всё, что нужно знать о переходе в онлайн-школу для обучения в 7 классе
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="accreditation" className="bg-white rounded-2xl border border-gray-200 px-6">
                <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline py-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                      <Shield className="w-5 h-5 text-blue-600" />
                    </div>
                    <span>Получу ли я официальный аттестат государственного образца?</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-left text-gray-600 pb-6 ml-13 leading-relaxed">
                  Да, абсолютно. Все школы в нашем рейтинге имеют государственную лицензию и аккредитацию. 
                  По окончании 9 класса вы получите аттестат об основном общем образовании государственного образца, 
                  который ничем не отличается от аттестата обычной школы. Этот документ принимается всеми 
                  образовательными учреждениями России без ограничений.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="transition" className="bg-white rounded-2xl border border-gray-200 px-6">
                <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline py-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                      <Calendar className="w-5 h-5 text-green-600" />
                    </div>
                    <span>Можно ли перейти в онлайн-школу в середине 7 класса?</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-left text-gray-600 pb-6 ml-13 leading-relaxed">
                  Да, переход возможен в любое время учебного года. Процедура занимает 1-2 недели. Вам нужно 
                  взять справку о промежуточной аттестации из текущей школы, подать заявление в онлайн-школу 
                  и дождаться зачисления. Программа адаптируется под ваш уровень подготовки, пробелы в знаниях 
                  ликвидируются через дополнительные занятия.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="program" className="bg-white rounded-2xl border border-gray-200 px-6">
                <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline py-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center">
                      <GraduationCap className="w-5 h-5 text-orange-600" />
                    </div>
                    <span>По какой программе идет обучение в 7 классе?</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-left text-gray-600 pb-6 ml-13 leading-relaxed">
                  Все онлайн-школы работают по государственным федеральным образовательным стандартам (ФГОС). 
                  Программа 7 класса включает все обязательные предметы: русский язык, литературу, алгебру, 
                  геометрию, историю, обществознание, географию, физику, биологию, иностранный язык, 
                  информатику, ОБЖ и физкультуру. Некоторые школы предлагают углубленное изучение отдельных предметов.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="schedule" className="bg-white rounded-2xl border border-gray-200 px-6">
                <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline py-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
                      <Clock className="w-5 h-5 text-purple-600" />
                    </div>
                    <span>Сколько времени в день нужно заниматься в 7 классе?</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-left text-gray-600 pb-6 ml-13 leading-relaxed">
                  В среднем 4-5 часов в день при обычном темпе обучения. Это значительно меньше, чем в 
                  обычной школе, где с учетом дороги и ожидания между уроками тратится 7-9 часов. 
                  Главное преимущество - гибкость: можете распределить нагрузку по дням недели как удобно, 
                  заниматься утром или вечером, совмещать с занятиями спортом, музыкой или другими хобби.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="cost" className="bg-white rounded-2xl border border-gray-200 px-6">
                <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline py-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center">
                      <BarChart3 className="w-5 h-5 text-red-600" />
                    </div>
                    <span>Сколько стоит обучение в онлайн-школе для 7 класса?</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-left text-gray-600 pb-6 ml-13 leading-relaxed">
                  Стоимость варьируется от 2,500 до 30,000 рублей в месяц в зависимости от школы и пакета услуг. 
                  Базовые программы стоят 2,500-7,000 рублей, премиум с индивидуальными занятиями - 12,000-30,000 рублей. 
                  Многие школы предлагают рассрочку, скидки для многодетных семей и возможность оплачивать 
                  материнским капиталом. Вы также можете получить налоговый вычет 13% от стоимости обучения.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="technology" className="bg-white rounded-2xl border border-gray-200 px-6">
                <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline py-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-indigo-600" />
                    </div>
                    <span>Какие технические требования для обучения?</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-left text-gray-600 pb-6 ml-13 leading-relaxed">
                  Минимальные требования: компьютер или планшет, стабильный интернет от 5 Мбит/с, 
                  веб-камера и микрофон для онлайн-уроков. Большинство платформ работают через браузер, 
                  не требуя установки специального ПО. Мобильные приложения доступны для iOS и Android. 
                  Техническая поддержка помогает с настройкой в первые дни обучения.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="support" className="bg-white rounded-2xl border border-gray-200 px-6">
                <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline py-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-pink-100 rounded-xl flex items-center justify-center">
                      <Users className="w-5 h-5 text-pink-600" />
                    </div>
                    <span>Есть ли поддержка и кураторы для учеников 7 класса?</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-left text-gray-600 pb-6 ml-13 leading-relaxed">
                  Да, в большинстве школ есть персональные кураторы или классные руководители, которые помогают 
                  с планированием учебы, мотивацией и решением возникающих вопросов. В этом возрасте особенно 
                  важна поддержка в адаптации к самостоятельному обучению. Также работают психологи, техническая 
                  поддержка и методисты. Родители получают регулярные отчеты о прогрессе ребенка.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="socialization" className="bg-white rounded-2xl border border-gray-200 px-6">
                <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline py-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-yellow-100 rounded-xl flex items-center justify-center">
                      <Users className="w-5 h-5 text-yellow-600" />
                    </div>
                    <span>А как же социализация и общение со сверстниками?</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-left text-gray-600 pb-6 ml-13 leading-relaxed">
                  Онлайн-школы предлагают множество возможностей для общения: групповые проекты, 
                  онлайн-клубы по интересам, совместные мероприятия и встречи. Многие организуют офлайн-встречи, 
                  экскурсии и летние лагеря. Плюс освободившееся время можно использовать для секций, кружков 
                  и общения с друзьями по интересам вне школы. Исследования показывают, что качество социализации 
                  важнее количества контактов.
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            {/* CTA after FAQ */}
            <div className="mt-16 bg-gradient-to-r from-primary to-secondary rounded-3xl p-8 text-white text-center">
              <h3 className="text-2xl font-bold mb-4">Остались вопросы?</h3>
              <p className="text-lg mb-6 text-white/90">
                Получите бесплатную консультацию по выбору онлайн-школы
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="accent" 
                  size="lg" 
                  className="bg-white text-primary hover:bg-gray-50 hover:text-primary/90 transition-all duration-200"
                  onClick={() => document.getElementById('ai-school-selector')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Бесплатная консультация
                </Button>
                <Button 
                  size="lg" 
                  className="bg-orange-500 text-white border-0 hover:bg-orange-600 font-semibold transition-all duration-200"
                  onClick={() => {
                    const aiSection = document.getElementById('ai-school-selector');
                    if (aiSection) {
                      aiSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }}
                >
                  Сравнить школы
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
