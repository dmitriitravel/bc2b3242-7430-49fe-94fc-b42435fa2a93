import { CheckCircle, Shield, Award, Mail, BarChart3, Users, Clock, TrendingUp, FileCheck, Star, ChevronDown, HelpCircle, GraduationCap, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

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

        {/* Enhanced Reviews Section */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-green-50 text-green-700 rounded-full px-6 py-2 mb-6">
              <Star className="w-5 h-5" />
              <span className="font-semibold">Отзывы выпускников</span>
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
                  name: "Анна М.",
                  role: "Выпускница 2024",
                  school: "Онлайн-школа Фоксфорд",
                  rating: 5,
                  avatar: "https://images.unsplash.com/photo-1494790108755-2616c2b4fd68?w=64&h=64&fit=crop&crop=face",
                  text: "Отличная подготовка к ЕГЭ, удобная платформа. Поступила в МГУ на бюджет!",
                  results: "ЕГЭ: Русский - 96, Математика - 88, Обществознание - 94",
                  achievement: "Поступила в МГУ",
                  date: "2 дня назад"
                },
                {
                  name: "Дмитрий К.",
                  role: "Ученик 11 класса",
                  school: "Домашняя школа ИнтернетУрок",
                  rating: 4,
                  avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=face",
                  text: "Гибкий график, хорошие учителя. Рекомендую для самостоятельных детей.",
                  results: "Средний балл: 4.7, участие в 3 олимпиадах",
                  achievement: "Призер региональной олимпиады",
                  date: "5 дней назад"
                },
                {
                  name: "Мария С.",
                  role: "Мама выпускника",
                  school: "Онлайн-лицей №1",
                  rating: 5,
                  avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&fit=crop&crop=face",
                  text: "Сын закончил 11 класс экстерном за полгода. Очень довольны результатом!",
                  results: "ЕГЭ сдан досрочно, все предметы выше 80 баллов",
                  achievement: "Поступил в МФТИ",
                  date: "1 неделю назад"
                },
                {
                  name: "Александр П.",
                  role: "Выпускник 2024",
                  school: "Школа Будущего Онлайн",
                  rating: 5,
                  avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face",
                  text: "Совмещал учебу со спортом. Индивидуальный график позволил готовиться к соревнованиям.",
                  results: "ЕГЭ: Физика - 92, Математика - 89",
                  achievement: "КМС по плаванию + поступление в МГТУ",
                  date: "2 недели назад"
                },
                {
                  name: "Елена В.",
                  role: "Мама ученицы",
                  school: "Цифровая Школа",
                  rating: 4,
                  avatar: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=64&h=64&fit=crop&crop=face",
                  text: "Дочь изучает программирование параллельно с школьной программой. Отличная техническая поддержка.",
                  results: "Средний балл 4.9, сертификат по Python",
                  achievement: "Победитель хакатона",
                  date: "3 недели назад"
                },
                {
                  name: "Игорь М.",
                  role: "Выпускник 2023",
                  school: "Онлайн-школа Фоксфорд",
                  rating: 5,
                  avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=64&h=64&fit=crop&crop=face",
                  text: "Переехал с родителями за границу, но смог продолжить учебу. Получил российский аттестат.",
                  results: "ЕГЭ: все предметы сданы дистанционно",
                  achievement: "Поступил в европейский университет",
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
              <p className="text-gray-600">Реальные результаты выпускников за 2024 год</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">87%</div>
                <div className="text-sm text-gray-600">Поступили в топ-100 ВУЗов России</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">76</div>
                <div className="text-sm text-gray-600">Средний балл ЕГЭ выпускников</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">94%</div>
                <div className="text-sm text-gray-600">Довольны качеством обучения</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">340+</div>
                <div className="text-sm text-gray-600">Победителей олимпиад</div>
              </div>
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
              Всё, что нужно знать о переходе в онлайн-школу для завершения 11 класса
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
                  Выпускники получают аттестат о среднем общем образовании государственного образца, который 
                  ничем не отличается от аттестата обычной школы. Этот документ принимается всеми российскими 
                  и зарубежными ВУЗами без ограничений.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="transition" className="bg-white rounded-2xl border border-gray-200 px-6">
                <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline py-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                      <Calendar className="w-5 h-5 text-green-600" />
                    </div>
                    <span>Можно ли перейти в онлайн-школу в середине 11 класса?</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-left text-gray-600 pb-6 ml-13 leading-relaxed">
                  Да, переход возможен в любое время учебного года. Процедура занимает 1-2 недели. Вам нужно 
                  взять справку о промежуточной аттестации из текущей школы, подать заявление в онлайн-школу 
                  и дождаться зачисления. Академическая задолженность ликвидируется в индивидуальном порядке, 
                  часто через дополнительные занятия или тестирования.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="ege" className="bg-white rounded-2xl border border-gray-200 px-6">
                <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline py-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center">
                      <GraduationCap className="w-5 h-5 text-orange-600" />
                    </div>
                    <span>Как проходит ЕГЭ для учеников онлайн-школ?</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-left text-gray-600 pb-6 ml-13 leading-relaxed">
                  ЕГЭ сдается точно так же, как и в обычных школах - в специальных пунктах проведения экзаменов (ППЭ). 
                  Онлайн-школа помогает с регистрацией и назначает ППЭ по месту вашего проживания. Никаких отличий 
                  в процедуре нет. Многие онлайн-школы показывают более высокие результаты ЕГЭ благодаря 
                  индивидуальному подходу и интенсивной подготовке.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="schedule" className="bg-white rounded-2xl border border-gray-200 px-6">
                <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline py-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
                      <Clock className="w-5 h-5 text-purple-600" />
                    </div>
                    <span>Сколько времени в день нужно заниматься?</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-left text-gray-600 pb-6 ml-13 leading-relaxed">
                  В среднем 4-6 часов в день при обычном темпе обучения. Если вы выбираете ускоренное обучение 
                  (экстернат), время увеличивается до 6-8 часов. Главное преимущество - гибкость: можете 
                  распределить нагрузку по дням недели как удобно, заниматься утром или вечером, 
                  совмещать с работой, спортом или творчеством.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="cost" className="bg-white rounded-2xl border border-gray-200 px-6">
                <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline py-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center">
                      <BarChart3 className="w-5 h-5 text-red-600" />
                    </div>
                    <span>Сколько стоит обучение в онлайн-школе?</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-left text-gray-600 pb-6 ml-13 leading-relaxed">
                  Стоимость варьируется от 2,500 до 35,000 рублей в месяц в зависимости от школы и пакета услуг. 
                  Базовые программы стоят 2,500-8,000 рублей, премиум с индивидуальными занятиями - 15,000-35,000 рублей. 
                  Многие школы предлагают рассрочку, скидки для многодетных семей и возможность оплачивать 
                  материнским капиталом. Часто это дешевле репетиторов для подготовки к ЕГЭ.
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
                    <span>Есть ли поддержка и кураторы для учеников?</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-left text-gray-600 pb-6 ml-13 leading-relaxed">
                  Да, в большинстве школ есть персональные кураторы, которые помогают с планированием учебы, 
                  мотивацией и решением возникающих вопросов. Также работают психологи, техническая поддержка 
                  и методисты. Связь поддерживается через чаты, видеозвонки и горячую линию. 
                  Родители получают регулярные отчеты о прогрессе ребенка.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="documents" className="bg-white rounded-2xl border border-gray-200 px-6">
                <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline py-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-yellow-100 rounded-xl flex items-center justify-center">
                      <FileCheck className="w-5 h-5 text-yellow-600" />
                    </div>
                    <span>Какие документы нужны для поступления?</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-left text-gray-600 pb-6 ml-13 leading-relaxed">
                  Для поступления нужны: личное дело из текущей школы (или справка о промежуточной аттестации), 
                  копия паспорта ученика, СНИЛС, медицинская карта, 2 фотографии 3×4, заявление от родителей. 
                  Если переходите из-за границы - справка о пройденных предметах с апостилем. 
                  Процесс оформления обычно занимает 3-7 рабочих дней.
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
                <Button variant="accent" size="lg" className="bg-white text-primary hover:bg-gray-100">
                  Бесплатная консультация
                </Button>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
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