import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const DistanceEducation11Grade = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <Button
          variant="ghost"
          onClick={() => navigate("/")}
          className="mb-6 text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          На главную
        </Button>

        {/* JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
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
                      "name": "Дистанционное обучение 11 класса",
                      "item": "https://shkola-11-klass.ru/distance-education-11-grade"
                    }
                  ]
                }
              ]
            })
          }}
        />

        <article className="prose prose-lg max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8 bg-gradient-primary bg-clip-text text-transparent">
            Дистанционное образование для 11 класса: преимущества
          </h1>

          {/* Target Audience Block */}
          <div className="bg-gradient-to-br from-blue-600 to-indigo-600 text-white p-8 rounded-xl shadow-lg mb-8">
            <h3 className="text-xl font-semibold mb-4">Для кого эта статья:</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-3">
                <span className="text-green-300 font-bold mt-1">✓</span>
                <span>Родители 11-классников, выбирающие дистанционный формат обучения</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-300 font-bold mt-1">✓</span>
                <span>Ученики 11 класса, планирующие или проходящие дистанционное обучение</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-300 font-bold mt-1">✓</span>
                <span>Родители и ученики, готовящиеся к ЕГЭ в онлайн-формате</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-300 font-bold mt-1">✓</span>
                <span>Семьи с особенными обстоятельствами (переезды, спорт, здоровье), нуждающиеся в гибкости</span>
              </li>
            </ul>
          </div>

          {/* Key Conclusions Block */}
          <div className="bg-gradient-to-br from-amber-500 to-orange-500 text-white p-8 rounded-xl shadow-lg mb-8">
            <h3 className="text-xl font-semibold mb-4">Ключевые выводы из статьи:</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-3">
                <span className="text-green-300 font-bold mt-1">✓</span>
                <span>Дистанционное образование для 11 класса предлагает четыре основных формата: онлайн-школы, семейное образование с курсами, экстернат и гибридное обучение</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-300 font-bold mt-1">✓</span>
                <span>Технические требования минимальны: стабильный интернет от 10 Мбит/с, современное устройство и правильно организованное рабочее место</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-300 font-bold mt-1">✓</span>
                <span>Подготовка к ЕГЭ в дистанционном формате требует четкого планирования, но позволяет получить доступ к лучшим преподавателям</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-300 font-bold mt-1">✓</span>
                <span>Стоимость варьируется от бесплатных вариантов до 150 000 рублей в год, при этом важно проверять лицензию и аккредитацию школы</span>
              </li>
            </ul>
          </div>

          <div 
            className="distance-education-content"
            dangerouslySetInnerHTML={{
              __html: `
                <style>
                  .distance-education-content {
                    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                    line-height: 1.6;
                    color: #333;
                  }

                  .comparison-table {
                    width: 100%;
                    border-collapse: collapse;
                    margin: 20px 0;
                    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
                  }

                  .comparison-table th, .comparison-table td {
                    border: 1px solid #ddd;
                    padding: 12px;
                    text-align: left;
                  }

                  .comparison-table th {
                    background: linear-gradient(135deg, #007bff 0%, #0056b3 100%);
                    color: white;
                    font-weight: bold;
                  }

                  .comparison-table tr:nth-child(even) {
                    background-color: #f8f9fa;
                  }

                  .checklist-item {
                    background: #f8f9fa;
                    border: 1px solid #dee2e6;
                    border-radius: 8px;
                    padding: 15px;
                    margin: 10px 0;
                    position: relative;
                  }

                  .checklist-item:before {
                    content: "✓";
                    position: absolute;
                    left: -5px;
                    top: -5px;
                    background: #28a745;
                    color: white;
                    width: 25px;
                    height: 25px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 14px;
                    font-weight: bold;
                  }

                  .quote-block {
                    background: #f8f9fa;
                    border-left: 4px solid #007bff;
                    padding: 20px;
                    margin: 25px 0;
                    font-style: italic;
                    position: relative;
                  }

                  .quote-block:before {
                    content: """;
                    font-size: 60px;
                    color: #007bff;
                    position: absolute;
                    top: -10px;
                    left: 15px;
                    opacity: 0.3;
                  }

                  .important-info-block {
                    background: linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%);
                    border: 1px solid #2196f3;
                    border-radius: 10px;
                    padding: 20px;
                    margin: 25px 0;
                  }

                  .step-block {
                    background: #fff;
                    border: 1px solid #ddd;
                    border-radius: 8px;
                    padding: 20px;
                    margin: 15px 0;
                    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
                  }

                  .step-number {
                    background: #007bff;
                    color: white;
                    width: 30px;
                    height: 30px;
                    border-radius: 50%;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    font-weight: bold;
                    margin-right: 15px;
                  }

                  .pros-cons-container {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 20px;
                    margin: 20px 0;
                  }

                  @media (max-width: 768px) {
                    .pros-cons-container {
                      grid-template-columns: 1fr;
                    }
                  }

                  .pros-block {
                    background: linear-gradient(135deg, #d4edda 0%, #c3e6cb 100%);
                    border: 1px solid #28a745;
                    border-radius: 10px;
                    padding: 20px;
                  }

                  .cons-block {
                    background: linear-gradient(135deg, #f8d7da 0%, #f1b0b7 100%);
                    border: 1px solid #dc3545;
                    border-radius: 10px;
                    padding: 20px;
                  }

                  .faq-item {
                    background: white;
                    border: 1px solid #ddd;
                    border-radius: 8px;
                    margin: 10px 0;
                    overflow: hidden;
                    box-shadow: 0 2px 4px rgba(0,0,0,0.05);
                  }

                  .faq-question {
                    background: #f8f9fa;
                    padding: 18px;
                    font-weight: bold;
                    cursor: pointer;
                    border-bottom: 1px solid #ddd;
                  }

                  .faq-answer {
                    padding: 18px;
                    display: block;
                  }

                  .highlighted-link {
                    background: linear-gradient(135deg, #fff3cd 0%, #ffeaa7 100%);
                    padding: 3px 6px;
                    border-radius: 4px;
                    text-decoration: none;
                    color: #856404;
                    border: 1px solid #ffc107;
                    font-weight: 500;
                    transition: all 0.3s ease;
                  }

                  .highlighted-link:hover {
                    background: linear-gradient(135deg, #ffc107 0%, #e0a800 100%);
                    color: white;
                    text-decoration: none;
                  }

                  .distance-education-content h2 {
                    color: #007bff;
                    border-bottom: 3px solid #007bff;
                    padding-bottom: 10px;
                    margin-top: 35px;
                  }

                  .distance-education-content h3 {
                    color: #0056b3;
                    margin-top: 25px;
                  }

                  .distance-education-content h4 {
                    color: #495057;
                    margin-top: 20px;
                  }
                </style>

                <h2>1. Форматы дистанционного обучения в 11 классе: выбираем подходящий</h2>

                <p>Дистанционное образование в 11 классе открывает перед учениками и их родителями множество возможностей. Выбор правильного формата — ключевой момент для успешного завершения школы и подготовки к ЕГЭ. Рассмотрим основные варианты организации обучения.</p>

                <h3>Онлайн-школа с полным циклом обучения</h3>
                <p>Это наиболее популярный формат, при котором ученик получает полноценное образование через интернет. Онлайн-школы предоставляют:</p>
                <ul>
                  <li>Структурированную учебную программу по всем предметам</li>
                  <li>Живые уроки с преподавателями в реальном времени</li>
                  <li>Персонального куратора для сопровождения</li>
                  <li>Систему контроля знаний и промежуточных аттестаций</li>
                </ul>

                <h3>Семейное образование + онлайн-курсы</h3>
                <p>При этом формате родители берут на себя ответственность за образование ребенка, используя онлайн-ресурсы как вспомогательный инструмент. Если вы рассматриваете этот вариант, обязательно изучите подробную информацию о <a href="https://shkola-11-klass.ru/" class="highlighted-link">семейном образовании в 11 классе</a> — там вы найдете пошаговые инструкции по оформлению, выбору программ и организации процесса обучения.</p>

                <h3>Экстернат с дистанционной поддержкой</h3>
                <p>Ускоренная форма обучения для мотивированных учеников, которые хотят закончить 11 класс за полгода-год. Включает интенсивную подготовку и сдачу промежуточных аттестаций.</p>

                <h3>Гибридное обучение (очно-заочное)</h3>
                <p>Комбинирует онлайн-занятия с периодическими очными встречами, лабораторными работами и консультациями.</p>

                <table class="comparison-table">
                  <thead>
                    <tr>
                      <th>Формат</th>
                      <th>Стоимость в год</th>
                      <th>Время на обучение</th>
                      <th>Подходит для</th>
                      <th>Контроль</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Онлайн-школа</td>
                      <td>50-150 тыс. руб.</td>
                      <td>20-25 часов/неделю</td>
                      <td>Всех категорий</td>
                      <td>Полный</td>
                    </tr>
                    <tr>
                      <td>Семейное + курсы</td>
                      <td>15-50 тыс. руб.</td>
                      <td>Гибко</td>
                      <td>Самостоятельных учеников</td>
                      <td>Родительский</td>
                    </tr>
                    <tr>
                      <td>Экстернат</td>
                      <td>80-200 тыс. руб.</td>
                      <td>30-40 часов/неделю</td>
                      <td>Мотивированных учеников</td>
                      <td>Интенсивный</td>
                    </tr>
                    <tr>
                      <td>Гибридное</td>
                      <td>40-100 тыс. руб.</td>
                      <td>15-20 часов/неделю</td>
                      <td>Нуждающихся в социализации</td>
                      <td>Комбинированный</td>
                    </tr>
                  </tbody>
                </table>

                <h2>2. Как организован учебный процесс в дистанционном 11 классе</h2>

                <h3>Расписание занятий: синхронные и асинхронные уроки</h3>
                <p>Учебный день в дистанционной школе структурирован и включает два типа занятий:</p>

                <div class="step-block">
                  <p><span class="step-number">1</span><strong>Синхронные уроки</strong> — живые занятия с преподавателем в определенное время. Обычно проходят 3-4 раза в неделю по основным предметам (математика, русский язык, профильные предметы для ЕГЭ).</p>
                </div>

                <div class="step-block">
                  <p><span class="step-number">2</span><strong>Асинхронные материалы</strong> — записанные видеоуроки, интерактивные задания и тесты, которые можно изучать в удобное время.</p>
                </div>

                <h3>Система домашних заданий и дедлайнов</h3>
                <p>Большинство онлайн-школ используют систему еженедельных дедлайнов:</p>
                <ul>
                  <li>Задания выдаются на неделю вперед</li>
                  <li>Автоматическая проверка тестов и контрольных</li>
                  <li>Персональная обратная связь по письменным работам</li>
                  <li>Возможность пересдачи при неудовлетворительных результатах</li>
                </ul>

                <h3>Роль персонального куратора/тьютора</h3>
                <p>Куратор выполняет функции классного руководителя в онлайн-формате:</p>
                <ul>
                  <li>Контролирует успеваемость и посещаемость</li>
                  <li>Помогает решать технические проблемы</li>
                  <li>Координирует взаимодействие с преподавателями</li>
                  <li>Поддерживает мотивацию ученика</li>
                </ul>

                <div class="quote-block">
                  Дистанционное образование требует от ученика большей самостоятельности, но при правильной организации дает возможность получить качественные знания и успешно сдать ЕГЭ, не выходя из дома.
                </div>

                <h2>3. Технические требования и настройка рабочего места</h2>

                <h3>Минимальные требования к интернету и устройствам</h3>
                <p>Для комфортного обучения необходимо:</p>

                <div class="checklist-item">
                  <strong>Интернет-соединение:</strong> стабильное подключение от 10 Мбит/с для просмотра видео в HD качестве
                </div>

                <div class="checklist-item">
                  <strong>Устройство:</strong> компьютер или ноутбук с операционной системой не старше 5 лет, планшет подходит только как дополнительное устройство
                </div>

                <div class="checklist-item">
                  <strong>Периферия:</strong> веб-камера, микрофон, наушники для участия в онлайн-уроках
                </div>

                <h3>Необходимое программное обеспечение</h3>
                <ul>
                  <li>Современный браузер (Chrome, Firefox, Safari)</li>
                  <li>Zoom или другая платформа для видеоконференций</li>
                  <li>Microsoft Office или Google Docs для работы с документами</li>
                  <li>PDF-ридер для изучения учебных материалов</li>
                </ul>

                <h3>Чек-лист по настройке домашнего учебного места</h3>
                <div class="checklist-item">Выделите отдельную рабочую зону, желательно в тихом месте</div>
                <div class="checklist-item">Обеспечьте хорошее освещение, лучше естественное</div>
                <div class="checklist-item">Настройте удобное кресло и стол подходящей высоты</div>
                <div class="checklist-item">Уберите отвлекающие факторы (игры, соцсети)</div>
                <div class="checklist-item">Подготовьте канцелярские принадлежности для ведения конспектов</div>

                <h2>4. Подготовка к ЕГЭ в дистанционном формате</h2>

                <h3>Как встроить подготовку к ЕГЭ в учебный план</h3>
                <p>Подготовка к ЕГЭ в дистанционном 11 классе требует четкой стратегии:</p>

                <div class="step-block">
                  <p><span class="step-number">1</span><strong>Определите профильные предметы</strong> до 1 февраля и сообщите в школу для регистрации</p>
                </div>

                <div class="step-block">
                  <p><span class="step-number">2</span><strong>Составьте календарный план</strong> подготовки с учетом сложности предметов</p>
                </div>

                <div class="step-block">
                  <p><span class="step-number">3</span><strong>Выделите дополнительное время</strong> на профильные предметы — до 10-15 часов в неделю</p>
                </div>

                <h3>Пробные экзамены и тестирования</h3>
                <p>Регулярная диагностика — основа успешной подготовки:</p>
                <ul>
                  <li>Пробные ЕГЭ каждые 2-3 недели по профильным предметам</li>
                  <li>Анализ ошибок и работа над пробелами</li>
                  <li>Отработка тайминга и стрессоустойчивости</li>
                  <li>Мониторинг прогресса и корректировка стратегии</li>
                </ul>

                <h3>Регистрация и сдача ЕГЭ для дистанционных учеников</h3>
                <p>Процедура ничем не отличается от обычных школьников:</p>
                <ul>
                  <li>Подача заявления до 1 февраля через школу прикрепления</li>
                  <li>Сдача экзамена в ППЭ по месту жительства</li>
                  <li>Получение результатов в обычном порядке</li>
                </ul>

                <h2>5. Юридические аспекты и документооборот</h2>

                <h3>Официальное оформление перехода на семейное обучение</h3>
                <p>Для легального перевода на дистанционное обучение необходимо:</p>

                <div class="step-block">
                  <p><span class="step-number">1</span><strong>Уведомить департамент образования</strong> о переходе на семейную форму обучения</p>
                </div>

                <div class="step-block">
                  <p><span class="step-number">2</span><strong>Отчислиться из текущей школы</strong> с получением личного дела</p>
                </div>

                <div class="step-block">
                  <p><span class="step-number">3</span><strong>Прикрепиться к школе</strong> для прохождения промежуточных и итоговых аттестаций</p>
                </div>

                <h3>Лицензия и аккредитация онлайн-школ</h3>
                <p>При выборе онлайн-школы обязательно проверьте:</p>
                <ul>
                  <li><strong>Лицензию на образовательную деятельность</strong> — без нее школа работает незаконно</li>
                  <li><strong>Государственную аккредитацию</strong> — дает право выдавать аттестаты государственного образца</li>
                  <li><strong>Реестр Рособрнадзора</strong> — официальный список аккредитованных учреждений</li>
                </ul>

                <div class="important-info-block">
                  <h4>Важная информация о международных стандартах</h4>
                  <p>Согласно международным принципам дистанционного образования, качественное онлайн-обучение должно обеспечивать тот же уровень академических достижений, что и традиционное образование. Более подробно с принципами качественного дистанционного образования можно ознакомиться в документах:</p>
                  <ul>
                    <li><a href="https://reportcenter.highered.texas.gov/agency-publication/miscellaneous/principles-of-good-practice-approved-oct-2023/" target="_blank">Principles of Good Practice for Distance Education</a></li>
                    <li><a href="https://en.wikipedia.org/wiki/Distance_education" target="_blank">Distance education - Wikipedia</a></li>
                  </ul>
                </div>

                <h3>Зачисление в вуз с аттестатом дистанционной школы</h3>
                <p>Аттестат аккредитованной онлайн-школы имеет такую же юридическую силу, как и аттестат обычной школы. Вузы не имеют права отказать в приеме документов по причине дистанционного обучения.</p>

                <div class="quote-block">
                  Качественное дистанционное образование не уступает традиционному, а во многих аспектах превосходит его за счет индивидуального подхода и современных технологий.
                </div>

                <h2>6. Кому подойдет дистанционное обучение в 11 классе</h2>

                <h3>Частые переезды или проживание за границей</h3>
                <p>Онлайн-образование идеально подходит семьям, которые:</p>
                <ul>
                  <li>Часто меняют место жительства по работе</li>
                  <li>Проживают в странах без русскоязычных школ</li>
                  <li>Планируют переезд в течение учебного года</li>
                  <li>Живут в удаленных регионах без качественных школ</li>
                </ul>

                <h3>Профессиональный спорт или творческая деятельность</h3>
                <p>Дистанционное обучение позволяет совмещать образование с:</p>
                <ul>
                  <li>Тренировками и соревнованиями</li>
                  <li>Гастролями и творческими проектами</li>
                  <li>Работой в модельном бизнесе</li>
                  <li>Участием в длительных конкурсах и олимпиадах</li>
                </ul>

                <h3>Проблемы со здоровьем или особенности развития</h3>
                <ul>
                  <li>Хронические заболевания, затрудняющие посещение школы</li>
                  <li>Особенности психического развития (аутизм, СДВГ)</li>
                  <li>Социальная тревожность или буллинг в школе</li>
                  <li>Необходимость в индивидуальном темпе обучения</li>
                </ul>

                <h2>7. Преимущества и риски дистанционного образования</h2>

                <div class="pros-cons-container">
                  <div class="pros-block">
                    <h3>Преимущества</h3>
                    <ul>
                      <li><strong>Гибкость расписания</strong> — возможность учиться в удобное время</li>
                      <li><strong>Индивидуальный темп</strong> — ускорение или замедление изучения материала</li>
                      <li><strong>Экономия времени</strong> — отсутствие трат на дорогу до школы</li>
                      <li><strong>Доступ к лучшим преподавателям</strong> — без географических ограничений</li>
                      <li><strong>Современные технологии</strong> — интерактивные материалы и геймификация</li>
                      <li><strong>Безопасная среда</strong> — отсутствие буллинга и негативного влияния</li>
                    </ul>
                  </div>

                  <div class="cons-block">
                    <h3>Риски и их решения</h3>
                    <ul>
                      <li><strong>Недостаток самодисциплины</strong> → система напоминаний и родительский контроль</li>
                      <li><strong>Социальная изоляция</strong> → участие в онлайн-клубах и очных мероприятиях</li>
                      <li><strong>Технические сбои</strong> → резервные каналы связи и записи уроков</li>
                      <li><strong>Отсутствие лабораторных работ</strong> → виртуальные лаборатории и домашние эксперименты</li>
                      <li><strong>Пропуск важного материала</strong> → система автоматических уведомлений</li>
                    </ul>
                  </div>
                </div>

                <h2>8. Практические советы по организации дистанционного обучения</h2>

                <h3>Составление режима дня и учебного графика</h3>
                <p>Успешное дистанционное обучение требует четкой структуры:</p>

                <div class="step-block">
                  <p><span class="step-number">1</span><strong>Подъем в одно время</strong> — даже если первый урок поздно, сохраняйте режим</p>
                </div>

                <div class="step-block">
                  <p><span class="step-number">2</span><strong>Планирование недели</strong> — каждое воскресенье составляйте план на предстоящую неделю</p>
                </div>

                <div class="step-block">
                  <p><span class="step-number">3</span><strong>Баланс учебы и отдыха</strong> — обязательные перерывы каждые 45-50 минут</p>
                </div>

                <h3>Методы самомотивации и борьбы с прокрастинацией</h3>
                <ul>
                  <li>Техника Pomodoro — 25 минут работы, 5 минут отдыха</li>
                  <li>Система вознаграждений за выполненные задачи</li>
                  <li>Ведение дневника успехов и достижений</li>
                  <li>Поиск единомышленников среди одноклассников</li>
                </ul>

                <h2>9. Стоимость и тарифные планы онлайн-школ</h2>

                <h3>Бесплатные варианты дистанционного обучения</h3>
                <p>Существует несколько способов получить бесплатное онлайн-образование:</p>
                <ul>
                  <li><strong>Российская электронная школа (РЭШ)</strong> — полный курс с 1 по 11 класс</li>
                  <li><strong>Учи.ру</strong> — интерактивные курсы по основным предметам</li>
                  <li><strong>YouTube-каналы</strong> — качественные видеоуроки от ведущих преподавателей</li>
                  <li><strong>Библиотеки с онлайн-доступом</strong> — учебники и дополнительные материалы</li>
                </ul>

                <h3>Средняя стоимость платных онлайн-школ</h3>
                <table class="comparison-table">
                  <thead>
                    <tr>
                      <th>Тип тарифа</th>
                      <th>Стоимость/месяц</th>
                      <th>Стоимость/год</th>
                      <th>Что включено</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Базовый</td>
                      <td>3 000-5 000 ₽</td>
                      <td>30 000-50 000 ₽</td>
                      <td>Видеоуроки, тесты</td>
                    </tr>
                    <tr>
                      <td>Стандарт</td>
                      <td>6 000-10 000 ₽</td>
                      <td>60 000-100 000 ₽</td>
                      <td>+ живые уроки, куратор</td>
                    </tr>
                    <tr>
                      <td>Премиум</td>
                      <td>10 000-15 000 ₽</td>
                      <td>100 000-150 000 ₽</td>
                      <td>+ индивидуальные занятия</td>
                    </tr>
                  </tbody>
                </table>

                <h2>10. Как выбрать онлайн-школу для 11 класса: чек-лист</h2>

                <div class="checklist-item">
                  <strong>Проверьте лицензию и аккредитацию</strong> через сайт Рособрнадзора
                </div>

                <div class="checklist-item">
                  <strong>Изучите учебную программу</strong> — соответствие ФГОС и подготовка к ЕГЭ
                </div>

                <div class="checklist-item">
                  <strong>Протестируйте демо-доступ</strong> — качество видео, удобство платформы
                </div>

                <div class="checklist-item">
                  <strong>Почитайте отзывы</strong> на независимых платформах (Яндекс.Отзывы, отзовик)
                </div>

                <div class="checklist-item">
                  <strong>Уточните условия аттестации</strong> и процедуру получения аттестата
                </div>

                <div class="checklist-item">
                  <strong>Оцените техподдержку</strong> — скорость ответа и компетентность специалистов
                </div>

                <div class="quote-block">
                  Выбор онлайн-школы — это инвестиция в будущее ребенка. Потратьте время на тщательный анализ, чтобы не пожалеть о решении в середине учебного года.
                </div>

                <h2>11. Отзывы учеников и родителей о дистанционном 11 классе</h2>

                <h3>Реальные истории успешного перехода</h3>
                <p><em>Анна, мама ученицы:</em> "Перешли на дистанционное обучение из-за переезда в другой город. Дочь смогла продолжить учебу без стресса, сдала ЕГЭ на 85+ баллов и поступила в желаемый вуз."</p>

                <p><em>Максим, выпускник:</em> "Занимался фигурным катанием профессионально, обычная школа не давала нужной гибкости. В онлайн-школе смог совмещать тренировки и учебу, получил качественные знания."</p>

                <h3>Результаты ЕГЭ выпускников онлайн-школ</h3>
                <p>Статистика ведущих онлайн-школ показывает:</p>
                <ul>
                  <li>Средний балл по русскому языку — 75-80 (выше среднего по стране)</li>
                  <li>85% учеников сдают профильную математику выше 60 баллов</li>
                  <li>90% выпускников поступают в вузы на бюджетные места</li>
                  <li>Высокая успеваемость по предметам по выбору</li>
                </ul>

                <h2>12. Пошаговый план перехода на дистанционное обучение</h2>

                <div class="step-block">
                  <p><span class="step-number">1</span><strong>Анализ ситуации и постановка целей</strong><br>
                  Определите причины перехода, цели на учебный год, требования к результатам ЕГЭ для поступления</p>
                </div>

                <div class="step-block">
                  <p><span class="step-number">2</span><strong>Выбор формата и онлайн-школы</strong><br>
                  Сравните варианты, протестируйте демо-версии, проверьте документы школы</p>
                </div>

                <div class="step-block">
                  <p><span class="step-number">3</span><strong>Оформление документов</strong><br>
                  Подайте уведомление в департамент образования, отчислитесь из текущей школы, заключите договор с онлайн-школой</p>
                </div>

                <div class="step-block">
                  <p><span class="step-number">4</span><strong>Техническая подготовка</strong><br>
                  Настройте оборудование, установите необходимые программы, организуйте рабочее место</p>
                </div>

                <div class="step-block">
                  <p><span class="step-number">5</span><strong>Адаптация к новому формату</strong><br>
                  Изучите платформу, познакомьтесь с преподавателями, установите режим дня</p>
                </div>

                <div class="step-block">
                  <p><span class="step-number">6</span><strong>Контроль результатов и корректировка</strong><br>
                  Регулярно анализируйте успеваемость, корректируйте план подготовки к ЕГЭ</p>
                </div>

                <h2>FAQ — Часто задаваемые вопросы</h2>

                <div class="faq-item">
                  <div class="faq-question">Можно ли перейти на дистанционное обучение в середине 11 класса?</div>
                  <div class="faq-answer">Да, переход возможен в любое время учебного года. Главное — правильно оформить документы и выбрать школу, которая сможет зачесть уже пройденные предметы.</div>
                </div>

                <div class="faq-item">
                  <div class="faq-question">Как проходят лабораторные работы по химии и физике?</div>
                  <div class="faq-answer">Используются виртуальные лаборатории, домашние эксперименты с безопасными материалами, видеодемонстрации опытов. Некоторые школы организуют очные лабораторные сессии.</div>
                </div>

                <div class="faq-item">
                  <div class="faq-question">Признают ли вузы аттестат онлайн-школы?</div>
                  <div class="faq-answer">Аттестат аккредитованной онлайн-школы имеет такую же юридическую силу, как обычной школы. Вузы не могут отказать в приеме документов по этой причине.</div>
                </div>

                <div class="faq-item">
                  <div class="faq-question">Нужно ли сдавать ОГЭ при переходе на семейное обучение в 11 классе?</div>
                  <div class="faq-answer">Если вы уже получили аттестат за 9 класс, ОГЭ пересдавать не нужно. ЕГЭ сдается в обычном порядке в 11 классе.</div>
                </div>

                <div class="faq-item">
                  <div class="faq-question">Можно ли получить медаль при дистанционном обучении?</div>
                  <div class="faq-answer">Да, золотая медаль выдается на общих основаниях при условии отличных оценок по всем предметам и высоких результатов ЕГЭ.</div>
                </div>

                <div class="faq-item">
                  <div class="faq-question">Сколько времени в день нужно тратить на учебу?</div>
                  <div class="faq-answer">В среднем 4-6 часов в день на основную программу плюс 2-3 часа на подготовку к ЕГЭ по профильным предметам. Время может варьироваться в зависимости от индивидуального темпа.</div>
                </div>
              `
            }}
          />
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default DistanceEducation11Grade;