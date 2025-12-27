import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Header } from "@/components/Header";

const Top100IndividualProjectTopics = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Лучшие онлайн школы 11 класс", "item": "https://shkola-11-klass.ru/" },
          { "@type": "ListItem", "position": 2, "name": "Темы проектов 11 класса", "item": "https://shkola-11-klass.ru/blog/top-100-individual-project-topics-11th-grade" }
        ]
      }
    ]
  };

  const description = "100 тем индивидуальных проектов для 11 класса по математике, физике, биологии, истории и другим школьным предметам.";

return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold text-gray-800">Онлайн школы 11 класс</h1>
        </div>
      </header>
      
      <div className="container mx-auto px-4 py-8">
        <button
          onClick={handleBackClick}
          className="mb-6 flex items-center text-gray-600 hover:text-gray-800 transition-colors hover:bg-accent/50 px-3 py-2 rounded"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          На главную
        </button>

        <article className="max-w-4xl mx-auto">
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "BreadcrumbList",
                  "itemListElement": [
                    {
                      "@type": "ListItem",
                      "position": 1,
                      "name": "Лучшие онлайн школы 11 класс",
                      "item": "https://shkola-11-klass.ru/"
                    },
                    {
                      "@type": "ListItem",
                      "position": 2,
                      "name": "Темы проектов 11 класса",
                      "item": "https://shkola-11-klass.ru/blog/top-100-individual-project-topics-11th-grade"
                    }
                  ]
                }
              ]
            })}
          </script>

          <header className="mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              ТОП-100 тем проектов 11 класса по школьным предметам
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              100 тем индивидуальных проектов для 11 класса по математике, физике, биологии, истории и другим школьным предметам.
            </p>
          </header>

          <div className="space-y-8">
            <div className="p-6 bg-gradient-to-br from-indigo-600 to-purple-600 text-white rounded-xl shadow-lg border-l-4 border-l-primary">
              <h3 className="text-lg font-semibold mb-4">Для кого эта статья:</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-green-300 mt-1">▶</span>
                  Ученики 11 класса, выбирающие тему для индивидуального проекта
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-300 mt-1">▶</span>
                  Родители старшеклассников, помогающие с выбором и организацией проекта
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-300 mt-1">▶</span>
                  Школьные учителя и кураторы, сопровождающие проекты учеников
                </li>
              </ul>
            </div>

            <div className="p-6 bg-gradient-to-br from-pink-500 to-red-500 text-white rounded-xl shadow-lg border border-primary/20">
              <h3 className="text-lg font-semibold mb-4">Ключевые выводы из статьи:</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-green-300 font-bold">✓</span>
                  5-шаговый алгоритм выбора темы поможет найти идеальный проект за 1 день
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-300 font-bold">✓</span>
                  100 готовых тем с указанием уровня сложности и необходимых ресурсов
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-300 font-bold">✓</span>
                  Пошаговый план реализации проекта с четким распределением по месяцам
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-300 font-bold">✓</span>
                  Готовые критерии оценки и типичные вопросы для успешной защиты
                </li>
              </ul>
            </div>

            <section className="space-y-6">
              <h2 className="text-3xl font-bold text-foreground border-b-2 border-primary pb-3">
                Как быстро выбрать идеальную тему индивидуального проекта: алгоритм из 5 шагов
              </h2>

              <p className="text-lg text-foreground/90 leading-relaxed">
                Выбор темы для индивидуального проекта в 11 классе - это критически важное решение, которое повлияет на итоговую оценку и подготовку к поступлению в вуз. За 15 лет работы с выпускниками мы выделили 5 ключевых шагов, которые помогают найти идеальную тему за один день.
              </p>

              <p className="text-lg text-foreground/90 leading-relaxed">
                Первый шаг - определение своих интересов и сильных сторон. Составьте список из 3-5 предметов, которые вам действительно нравятся, и подумайте о том, какие темы вызывают у вас наибольшее любопытство. Второй шаг - оценка доступных ресурсов: времени, материалов, возможности проведения экспериментов или исследований.
              </p>

              <p className="text-lg text-foreground/90 leading-relaxed">
                Особенно важно правильно спланировать работу над проектом, если вы рассматриваете{" "}
                <a 
                  href="https://shkola-11-klass.ru/" 
                  className="inline-block px-3 py-1 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded font-semibold shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
                >
                  домашнее обучение в школе 11 класса
                </a>
                {" "}— на этой странице вы найдете подробную информацию о том, как организовать самостоятельную работу над проектом, получить необходимые консультации преподавателей и правильно распределить учебную нагрузку для достижения максимальных результатов.
              </p>

              <h3 className="text-xl font-semibold text-foreground">Критерии отбора темы по уровню сложности</h3>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse rounded-lg overflow-hidden shadow-md">
                  <thead>
                    <tr className="bg-indigo-600 text-white">
                      <th className="p-4 text-left font-semibold">Уровень</th>
                      <th className="p-4 text-left font-semibold">Объем работы</th>
                      <th className="p-4 text-left font-semibold">Тип исследования</th>
                      <th className="p-4 text-left font-semibold">Время на реализацию</th>
                      <th className="p-4 text-left font-semibold">Ожидаемая оценка</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white">
                    <tr className="border-b border-gray-200">
                      <td className="p-4">
                        <span className="inline-block px-2 py-1 bg-green-100 text-green-800 rounded text-xs font-medium">Базовый</span>
                      </td>
                      <td className="p-4">15-25 страниц</td>
                      <td className="p-4">Теоретический анализ, обзор литературы</td>
                      <td className="p-4">3-4 месяца</td>
                      <td className="p-4">4-5 баллов</td>
                    </tr>
                    <tr className="border-b border-gray-200 bg-gray-50">
                      <td className="p-4">
                        <span className="inline-block px-2 py-1 bg-yellow-100 text-yellow-800 rounded text-xs font-medium">Продвинутый</span>
                      </td>
                      <td className="p-4">25-40 страниц</td>
                      <td className="p-4">Практическое исследование, эксперимент</td>
                      <td className="p-4">4-5 месяцев</td>
                      <td className="p-4">5 баллов</td>
                    </tr>
                    <tr>
                      <td className="p-4">
                        <span className="inline-block px-2 py-1 bg-red-100 text-red-800 rounded text-xs font-medium">Исследовательский</span>
                      </td>
                      <td className="p-4">40+ страниц</td>
                      <td className="p-4">Авторские гипотезы, социальная значимость</td>
                      <td className="p-4">5-6 месяцев</td>
                      <td className="p-4">5 баллов + рекомендации</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="p-6 bg-green-50 border border-green-200 rounded-lg">
                <h4 className="text-lg font-semibold text-green-800 mb-4">Чек-лист готовности темы к защите</h4>
                <ul className="space-y-2 text-green-700">
                  <li>□ Доступность не менее 15-20 качественных источников информации</li>
                  <li>□ Возможность получения конкретных, измеримых результатов</li>
                  <li>□ Соответствие временным рамкам (4-6 месяцев активной работы)</li>
                  <li>□ Наличие научного руководителя или консультанта по теме</li>
                  <li>□ Актуальность и практическая значимость исследования</li>
                </ul>
              </div>

              <div className="p-6 bg-gray-50 border-l-4 border-indigo-600 rounded-r-lg">
                <p className="text-foreground/90 italic text-lg leading-relaxed">
                  "Успешный проект - это не обязательно сложная тема. Это тема, которая соответствует вашим возможностям и интересам, имеет четкую структуру и приводит к конкретным результатам."
                </p>
              </div>
            </section>

            <section className="space-y-6">
              <h2 className="text-3xl font-bold text-foreground border-b-2 border-primary pb-3">
                Научно-исследовательские проекты
              </h2>

              <h3 className="text-xl font-semibold text-foreground">Физика и астрономия (10 тем)</h3>

              <div className="space-y-4">
                <div className="p-4 bg-white border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                  <div className="font-semibold text-gray-800 mb-2">
                    Исследование энергоэффективности солнечных батарей 
                    <span className="ml-2 inline-block px-2 py-1 bg-yellow-100 text-yellow-800 rounded text-xs font-medium">Продвинутый</span>
                  </div>
                  <p className="text-gray-600">Сравнительный анализ различных типов солнечных панелей, измерение КПД при разных условиях освещения и температуры.</p>
                </div>

                <div className="p-4 bg-white border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                  <div className="font-semibold text-gray-800 mb-2">
                    Влияние магнитного поля на рост кристаллов 
                    <span className="ml-2 inline-block px-2 py-1 bg-red-100 text-red-800 rounded text-xs font-medium">Исследовательский</span>
                  </div>
                  <p className="text-gray-600">Экспериментальное исследование формирования кристаллических структур в магнитном поле различной интенсивности.</p>
                </div>

                <div className="p-4 bg-white border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                  <div className="font-semibold text-gray-800 mb-2">
                    Акустические свойства различных материалов 
                    <span className="ml-2 inline-block px-2 py-1 bg-green-100 text-green-800 rounded text-xs font-medium">Базовый</span>
                  </div>
                  <p className="text-gray-600">Измерение звукопоглощающих и звукоизолирующих свойств бытовых и строительных материалов.</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <ul className="space-y-2 text-foreground/90">
                  <li>• Исследование радиоактивного фона в различных районах города</li>
                  <li>• Создание модели телескопа и наблюдение за небесными объектами</li>
                  <li>• Анализ энергопотребления бытовых приборов и способы его оптимизации</li>
                  <li>• Влияние температуры на электрическое сопротивление различных материалов</li>
                </ul>
                <ul className="space-y-2 text-foreground/90">
                  <li>• Исследование физических принципов работы музыкальных инструментов</li>
                  <li>• Моделирование движения планет с помощью компьютерных программ</li>
                  <li>• Изучение оптических свойств различных типов стекла</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold text-foreground">Химия и биохимия (10 тем)</h3>

              <div className="p-4 bg-white border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <div className="font-semibold text-gray-800 mb-2">
                  Анализ качества питьевой воды из различных источников 
                  <span className="ml-2 inline-block px-2 py-1 bg-yellow-100 text-yellow-800 rounded text-xs font-medium">Продвинутый</span>
                </div>
                <p className="text-gray-600">Химический анализ водопроводной, бутилированной и родниковой воды на содержание тяжелых металлов и органических примесей.</p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <ul className="space-y-2 text-foreground/90">
                  <li>• Исследование антиоксидантных свойств различных сортов чая</li>
                  <li>• Влияние различных консервантов на сохранность пищевых продуктов</li>
                  <li>• Синтез и исследование свойств биоразлагаемых полимеров</li>
                  <li>• Анализ содержания витаминов в свежих и замороженных овощах</li>
                  <li>• Исследование коррозионных процессов различных металлов</li>
                </ul>
                <ul className="space-y-2 text-foreground/90">
                  <li>• Получение красителей из природного сырья и их стабильность</li>
                  <li>• Влияние кислотности почвы на рост растений</li>
                  <li>• Биодеградация пластиковых отходов микроорганизмами</li>
                  <li>• Натуральные индикаторы кислотности из растительного сырья</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold text-foreground">Математика и информатика (10 тем)</h3>

              <div className="p-4 bg-white border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <div className="font-semibold text-gray-800 mb-2">
                  Математическое моделирование распространения эпидемии 
                  <span className="ml-2 inline-block px-2 py-1 bg-red-100 text-red-800 rounded text-xs font-medium">Исследовательский</span>
                </div>
                <p className="text-gray-600">Создание компьютерной модели распространения инфекционных заболеваний с учетом различных факторов и мер профилактики.</p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <ul className="space-y-2 text-foreground/90">
                  <li>• Фрактальная геометрия в природе и искусстве</li>
                  <li>• Теория игр в экономических моделях</li>
                  <li>• Криптографические алгоритмы и их стойкость</li>
                  <li>• Оптимизация маршрутов доставки с помощью алгоритмов</li>
                  <li>• Математические модели роста населения</li>
                </ul>
                <ul className="space-y-2 text-foreground/90">
                  <li>• Анализ больших данных методами машинного обучения</li>
                  <li>• Теория вероятностей в азартных играх и страховании</li>
                  <li>• Алгоритмы сжатия данных и их эффективность</li>
                  <li>• Статистический анализ успеваемости учащихся</li>
                </ul>
              </div>
            </section>

            <section className="space-y-6">
              <h2 className="text-3xl font-bold text-foreground border-b-2 border-primary pb-3">
                Технологические и IT-проекты
              </h2>

              <h3 className="text-xl font-semibold text-foreground">Программирование и мобильные приложения (8 тем)</h3>

              <div className="p-4 bg-white border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <div className="font-semibold text-gray-800 mb-2">
                  Мобильное приложение для изучения иностранных языков 
                  <span className="ml-2 inline-block px-2 py-1 bg-yellow-100 text-yellow-800 rounded text-xs font-medium">Продвинутый</span>
                </div>
                <p className="text-gray-600">Разработка приложения с элементами геймификации, базой данных слов и системой отслеживания прогресса. Платформы: Android Studio/React Native.</p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <ul className="space-y-2 text-foreground/90">
                  <li>• Веб-приложение для управления личными финансами</li>
                  <li>• Чат-бот для консультаций по выбору профессии</li>
                  <li>• Система распознавания объектов на изображениях</li>
                  <li>• Приложение для планирования расписания школьника</li>
                </ul>
                <ul className="space-y-2 text-foreground/90">
                  <li>• Игра-симулятор экологических процессов</li>
                  <li>• Платформа для онлайн-тестирования знаний</li>
                  <li>• Система умного дома на базе Arduino/Raspberry Pi</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold text-foreground">Искусственный интеллект и машинное обучение (5 тем)</h3>

              <ul className="space-y-2 text-foreground/90">
                <li>• Нейронная сеть для диагностики заболеваний по симптомам</li>
                <li>• Система рекомендаций фильмов на основе предпочтений пользователя</li>
                <li>• Алгоритм предсказания погоды на основе исторических данных</li>
                <li>• Анализ тональности текстов в социальных сетях</li>
                <li>• Распознавание эмоций по выражению лица</li>
              </ul>

              <div className="p-6 bg-blue-50 border border-blue-200 rounded-lg">
                <h4 className="text-lg font-semibold text-blue-800 mb-4">Международные ресурсы для вдохновения:</h4>
                <p className="text-blue-700 mb-3">Ведущие образовательные платформы предлагают множество идей для научных проектов старшеклассников:</p>
                <ul className="space-y-2">
                  <li><a href="https://www.sciencebuddies.org/science-fair-projects/science-projects/eleventh-grade" target="_blank" className="text-blue-600 hover:text-blue-800 underline">Science Buddies - Eleventh Grade Science Projects</a></li>
                  <li><a href="https://blog.collegevine.com/research-paper-topics-for-high-schoolers" target="_blank" className="text-blue-600 hover:text-blue-800 underline">CollegeVine - 100 Research Paper Topics for High School</a></li>
                  <li><a href="https://www.polygence.org/blog/passion-project-ideas-for-high-school-students" target="_blank" className="text-blue-600 hover:text-blue-800 underline">Polygence - 77 Passion Project Ideas for High School Students</a></li>
                </ul>
              </div>
            </section>

            <section className="space-y-6">
              <h2 className="text-3xl font-bold text-foreground border-b-2 border-primary pb-3">
                Пошаговый план реализации проекта
              </h2>

              <h3 className="text-xl font-semibold text-foreground">Планирование по месяцам</h3>

              <div className="space-y-4">
                <div className="flex items-center p-4 bg-white border border-gray-200 rounded-lg shadow-sm">
                  <div className="w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                    1-2
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Исследование и источники</h4>
                    <p className="text-gray-600">Поиск и анализ литературы, формулировка гипотезы, составление плана работы, выбор методов исследования</p>
                  </div>
                </div>

                <div className="flex items-center p-4 bg-white border border-gray-200 rounded-lg shadow-sm">
                  <div className="w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                    3-4
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Практическая часть</h4>
                    <p className="text-gray-600">Проведение экспериментов, сбор данных, анкетирование, интервью, создание продукта (если предусмотрено)</p>
                  </div>
                </div>

                <div className="flex items-center p-4 bg-white border border-gray-200 rounded-lg shadow-sm">
                  <div className="w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                    5-6
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Оформление и защита</h4>
                    <p className="text-gray-600">Анализ результатов, написание выводов, оформление работы по ГОСТу, подготовка презентации</p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-gray-50 border-l-4 border-indigo-600 rounded-r-lg">
                <p className="text-foreground/90 italic text-lg leading-relaxed">
                  "Время - ваш главный ресурс. Разбейте большую задачу на маленькие еженедельные цели, и через полгода у вас будет готовый качественный проект, а не ночные переживания перед защитой."
                </p>
              </div>
            </section>

            <section className="space-y-6">
              <h2 className="text-3xl font-bold text-foreground border-b-2 border-primary pb-3">
                FAQ - Часто задаваемые вопросы
              </h2>

              <div className="space-y-4">
                <div className="p-6 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Можно ли менять тему проекта в процессе работы?</h4>
                  <p className="text-gray-600">Небольшие корректировки допустимы, но кардинальную смену темы лучше согласовать с руководителем до начала практической части. Изменения возможны до конца второго месяца работы.</p>
                </div>

                <div className="p-6 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Сколько источников должно быть в списке литературы?</h4>
                  <p className="text-gray-600">Для базового уровня - не менее 10-15 источников, для продвинутого - 15-25, для исследовательского - от 25. Важно качество источников: научные статьи, монографии, официальные сайты.</p>
                </div>

                <div className="p-6 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Влияет ли оценка за проект на аттестат?</h4>
                  <p className="text-gray-600">Да, индивидуальный проект - обязательный элемент учебного плана. Оценка влияет на итоговые отметки и может учитываться при поступлении в вуз как дополнительное достижение.</p>
                </div>

                <div className="p-6 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Что делать, если не хватает времени на завершение проекта?</h4>
                  <p className="text-gray-600">Сразу обратитесь к руководителю проекта. Возможны варианты: упрощение практической части, перенос сроков (в исключительных случаях) или изменение формата презентации результатов.</p>
                </div>
              </div>

              <p className="text-lg text-foreground/90 leading-relaxed font-medium">
                <strong>Итог:</strong> Выбор темы для индивидуального проекта в 11 классе — это инвестиция в ваше будущее. Не спешите с решением, тщательно изучите все доступные варианты, консультируйтесь с преподавателями и выбирайте тему, которая действительно вас увлекает. Помните: качественный проект может стать отличным дополнением к портфолио при поступлении в вуз.
              </p>
            </section>
          </div>
        </article>
      </div>
      
      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p>&copy; 2024 Онлайн школы 11 класс. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Top100IndividualProjectTopics;

