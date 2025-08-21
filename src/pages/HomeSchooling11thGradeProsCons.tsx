import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const HomeSchooling11thGradeProsCons = () => {
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
                      "name": "Домашнее обучение 11 класса",
                      "item": "https://shkola-11-klass.ru/home-schooling-11th-grade-pros-cons"
                    }
                  ]
                }
              ]
            })
          }}
        />

        <article className="prose prose-lg max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8 text-foreground">
            Плюсы и минусы домашнего обучения в 11 классе
          </h1>

          {/* Target Audience Block */}
          <div className="bg-gradient-to-br from-indigo-600 to-purple-600 text-white p-8 rounded-xl shadow-lg mb-8">
            <h3 className="text-xl font-semibold mb-4">Для кого эта статья:</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-3">
                <span className="text-green-300 font-bold mt-1">✓</span>
                <span>Родители одиннадцатиклассников, рассматривающие альтернативы традиционному школьному образованию</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-300 font-bold mt-1">✓</span>
                <span>Ученики 11 класса, желающие перейти на индивидуальный формат обучения</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-300 font-bold mt-1">✓</span>
                <span>Семьи, планирующие интенсивную подготовку к ЕГЭ и поступлению в вуз</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-300 font-bold mt-1">✓</span>
                <span>Родители, ищущие способы оптимизировать учебный процесс в выпускном классе</span>
              </li>
            </ul>
          </div>

          {/* Key Conclusions Block */}
          <div className="bg-gradient-to-br from-pink-500 to-red-500 text-white p-8 rounded-xl shadow-lg mb-8">
            <h3 className="text-xl font-semibold mb-4">Ключевые выводы статьи:</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-3">
                <span className="text-green-300 font-bold mt-1">✓</span>
                <span>Домашнее обучение в 11 классе требует высокой самодисциплины и четкого планирования времени</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-300 font-bold mt-1">✓</span>
                <span>Переход лучше планировать заранее - подача документов до июня, выбор формата до августа</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-300 font-bold mt-1">✓</span>
                <span>Финансовые затраты составляют 50-200 тысяч рублей в год в зависимости от выбранного формата</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-300 font-bold mt-1">✓</span>
                <span>Социализация остается главным вызовом - важно предусмотреть альтернативные способы общения со сверстниками</span>
              </li>
            </ul>
          </div>

          <div 
            className="homeschool-grade11-article"
            dangerouslySetInnerHTML={{
              __html: `
                <style>
                  @media (max-width: 767px) {
                      .homeschool-grade11-article {
                          margin: 20px 16px 40px;
                      }
                  }
                  @media (min-width: 768px) and (max-width: 1367px) {
                      .homeschool-grade11-article {
                          margin: 25px 16px 50px;
                      }
                  }
                  @media (min-width: 1368px) and (max-width: 1919px) {
                      .homeschool-grade11-article {
                          margin: 30px auto 60px;
                          max-width: 1232px;
                      }
                  }
                  @media (min-width: 1920px) {
                      .homeschool-grade11-article {
                          margin: 40px auto 80px;
                          max-width: 1324px;
                      }
                  }

                  .homeschool-grade11-article h2 {
                      color: #2c3e50;
                      font-size: 24px;
                      margin: 30px 0 15px;
                      border-left: 4px solid #3498db;
                      padding-left: 15px;
                  }

                  .homeschool-grade11-article h3 {
                      color: #34495e;
                      font-size: 20px;
                      margin: 25px 0 12px;
                  }

                  .homeschool-grade11-article .checklist-table {
                      width: 100%;
                      border-collapse: collapse;
                      margin: 20px 0;
                      box-shadow: 0 4px 6px rgba(0,0,0,0.1);
                  }

                  .homeschool-grade11-article .checklist-table th {
                      background: #3498db;
                      color: white;
                      padding: 12px;
                      text-align: left;
                  }

                  .homeschool-grade11-article .checklist-table td {
                      padding: 12px;
                      border: 1px solid #ddd;
                  }

                  .homeschool-grade11-article .checklist-table tr:nth-child(even) {
                      background: #f8f9fa;
                  }

                  .homeschool-grade11-article .pros-box {
                      background: #d4edda;
                      border-left: 5px solid #28a745;
                      padding: 15px;
                      margin: 15px 0;
                  }

                  .homeschool-grade11-article .cons-box {
                      background: #f8d7da;
                      border-left: 5px solid #dc3545;
                      padding: 15px;
                      margin: 15px 0;
                  }

                  .homeschool-grade11-article .quote-block {
                      background: #f8f9fa;
                      border-left: 4px solid #6c757d;
                      padding: 20px;
                      margin: 25px 0;
                      font-style: italic;
                      position: relative;
                  }

                  .homeschool-grade11-article .quote-block::before {
                      content: '"';
                      font-size: 48px;
                      color: #6c757d;
                      position: absolute;
                      top: -10px;
                      left: 10px;
                  }

                  .homeschool-grade11-article .important-info-box {
                      background: #fff3cd;
                      border: 1px solid #ffeaa7;
                      border-radius: 8px;
                      padding: 20px;
                      margin: 20px 0;
                  }

                  .homeschool-grade11-article .highlighted-link {
                      background: linear-gradient(135deg, #74b9ff, #0984e3);
                      color: white !important;
                      padding: 3px 8px;
                      border-radius: 5px;
                      text-decoration: none;
                      font-weight: bold;
                      box-shadow: 0 2px 4px rgba(0,0,0,0.2);
                      transition: all 0.3s ease;
                  }

                  .homeschool-grade11-article .highlighted-link:hover {
                      transform: translateY(-1px);
                      box-shadow: 0 4px 8px rgba(0,0,0,0.3);
                  }

                  .homeschool-grade11-article .step-box {
                      background: white;
                      border: 2px solid #e9ecef;
                      border-radius: 8px;
                      padding: 20px;
                      margin: 15px 0;
                      position: relative;
                  }

                  .homeschool-grade11-article .step-number {
                      background: #3498db;
                      color: white;
                      border-radius: 50%;
                      width: 30px;
                      height: 30px;
                      display: flex;
                      align-items: center;
                      justify-content: center;
                      font-weight: bold;
                      position: absolute;
                      top: -15px;
                      left: 20px;
                  }

                  .homeschool-grade11-article .comparison-table {
                      width: 100%;
                      border-collapse: collapse;
                      margin: 20px 0;
                      box-shadow: 0 4px 6px rgba(0,0,0,0.1);
                  }

                  .homeschool-grade11-article .comparison-table th {
                      background: #2c3e50;
                      color: white;
                      padding: 15px;
                      text-align: center;
                  }

                  .homeschool-grade11-article .comparison-table td {
                      padding: 12px;
                      border: 1px solid #ddd;
                      text-align: center;
                  }

                  .homeschool-grade11-article .faq-item {
                      border: 1px solid #dee2e6;
                      border-radius: 8px;
                      margin: 10px 0;
                      overflow: hidden;
                  }

                  .homeschool-grade11-article .faq-question {
                      background: #f8f9fa;
                      padding: 15px;
                      font-weight: bold;
                      cursor: pointer;
                      border-bottom: 1px solid #dee2e6;
                  }

                  .homeschool-grade11-article .faq-answer {
                      padding: 15px;
                      background: white;
                  }

                  .homeschool-grade11-article ul, .homeschool-grade11-article ol {
                      padding-left: 25px;
                      line-height: 1.6;
                  }

                  .homeschool-grade11-article li {
                      margin: 8px 0;
                  }

                  .homeschool-grade11-article p {
                      line-height: 1.7;
                      margin: 15px 0;
                  }
                </style>

                <h2>Быстрый тест: подходит ли вам домашнее обучение в 11 классе</h2>

                <table class="checklist-table">
                    <thead>
                        <tr>
                            <th>Вопрос для самооценки</th>
                            <th>Да</th>
                            <th>Нет</th>
                            <th>Частично</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Ваш ребенок способен самостоятельно планировать день и придерживаться расписания?</td>
                            <td>□</td>
                            <td>□</td>
                            <td>□</td>
                        </tr>
                        <tr>
                            <td>У семьи есть финансовая возможность оплачивать репетиторов или онлайн-школу?</td>
                            <td>□</td>
                            <td>□</td>
                            <td>□</td>
                        </tr>
                        <tr>
                            <td>Дома есть тихое место для занятий и необходимая техника?</td>
                            <td>□</td>
                            <td>□</td>
                            <td>□</td>
                        </tr>
                        <tr>
                            <td>Ребенок мотивирован учиться без внешнего контроля учителей?</td>
                            <td>□</td>
                            <td>□</td>
                            <td>□</td>
                        </tr>
                        <tr>
                            <td>У родителей есть время контролировать учебный процесс?</td>
                            <td>□</td>
                            <td>□</td>
                            <td>□</td>
                        </tr>
                        <tr>
                            <td>Ребенок не испытывает серьезных проблем с социализацией?</td>
                            <td>□</td>
                            <td>□</td>
                            <td>□</td>
                        </tr>
                        <tr>
                            <td>Есть четкое понимание целей обучения и требуемых результатов ЕГЭ?</td>
                            <td>□</td>
                            <td>□</td>
                            <td>□</td>
                        </tr>
                    </tbody>
                </table>

                <p><strong>Результат теста:</strong> 5-7 ответов "Да" — домашнее обучение подходит; 3-4 "Да" — стоит рассмотреть смешанный формат; менее 3 "Да" — лучше остаться в традиционной школе.</p>

                <h3>Типичные сценарии перехода на домашнее обучение</h3>

                <div class="step-box">
                    <div class="step-number">1</div>
                    <p><strong>Интенсивная подготовка к ЕГЭ:</strong> Когда нужно сосредоточиться на 2-3 профильных предметах для поступления в конкретный вуз.</p>
                </div>

                <div class="step-box">
                    <div class="step-number">2</div>
                    <p><strong>Конфликты в школе:</strong> Проблемы с учителями, одноклассниками или администрацией, мешающие учебному процессу.</p>
                </div>

                <div class="step-box">
                    <div class="step-number">3</div>
                    <p><strong>Профессиональная деятельность:</strong> Ребенок серьезно занимается спортом, творчеством или уже работает.</p>
                </div>

                <p>При выборе формата домашнего обучения важно изучить все доступные варианты. Полезную информацию о том, как выбрать подходящую образовательную платформу, можно найти в обзоре <a href="https://shkola-11-klass.ru/" class="highlighted-link">лучших онлайн школ для 11 класса</a>. Этот ресурс поможет сравнить различные программы, стоимость обучения и форматы подготовки к ЕГЭ, что значительно упростит процесс принятия решения.</p>

                <div class="cons-box">
                    <h4>Красные флаги: когда домашнее обучение точно не подойдет</h4>
                    <ul>
                        <li>Серьезные проблемы с самодисциплиной и мотивацией</li>
                        <li>Отсутствие финансовых возможностей для качественного обучения</li>
                        <li>Родители не могут уделять время контролю учебы</li>
                        <li>Ребенок категорически против такого формата</li>
                    </ul>
                </div>

                <h2>Все плюсы домашнего обучения в 11 классе</h2>

                <h3>Подготовка к ЕГЭ и поступлению</h3>

                <div class="pros-box">
                    <h4>Концентрация на профильных предметах</h4>
                    <p>Возможность уделить 70-80% времени предметам, необходимым для поступления, вместо изучения всех дисциплин школьной программы равномерно. Это позволяет достичь более высоких результатов на ЕГЭ.</p>
                </div>

                <div class="pros-box">
                    <h4>Индивидуальный темп обучения</h4>
                    <ul>
                        <li>Быстрое прохождение уже знакомых тем</li>
                        <li>Углубленное изучение сложных разделов</li>
                        <li>Возможность вернуться к пройденному материалу</li>
                        <li>Адаптация под биоритмы ребенка</li>
                    </ul>
                </div>

                <h3>Гибкость и управление временем</h3>

                <table class="comparison-table">
                    <thead>
                        <tr>
                            <th>Аспект</th>
                            <th>Традиционная школа</th>
                            <th>Домашнее обучение</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Время на дорогу</td>
                            <td>1-2 часа в день</td>
                            <td>0 часов</td>
                        </tr>
                        <tr>
                            <td>Начало занятий</td>
                            <td>8:00-8:30</td>
                            <td>Любое удобное время</td>
                        </tr>
                        <tr>
                            <td>Время на подготовку к ЕГЭ</td>
                            <td>2-3 часа после школы</td>
                            <td>4-6 часов в день</td>
                        </tr>
                        <tr>
                            <td>Возможность путешествовать</td>
                            <td>Только каникулы</td>
                            <td>В любое время</td>
                        </tr>
                    </tbody>
                </table>

                <h3>Психологический комфорт</h3>

                <div class="quote-block">
                "Домашнее обучение позволяет создать идеальную учебную среду, где ребенок не испытывает стресса от сравнения с одноклассниками и может сосредоточиться на своих академических целях." — педагог-психолог Анна Смирнова
                </div>

                <h2>Все минусы домашнего обучения в 11 классе</h2>

                <h3>Социализация и общение</h3>

                <div class="cons-box">
                    <h4>Основные риски для социального развития:</h4>
                    <ul>
                        <li><strong>Потеря школьных друзей:</strong> Ослабевание связей с одноклассниками</li>
                        <li><strong>Пропуск выпускных традиций:</strong> Последний звонок, выпускной вечер</li>
                        <li><strong>Ограниченная практика общения:</strong> Меньше опыта работы в группе</li>
                        <li><strong>Отсутствие школьной романтики:</strong> Важные эмоциональные переживания подросткового возраста</li>
                    </ul>
                </div>

                <h3>Организационные сложности</h3>

                <div class="important-info-box">
                    <h4>Требования к самоорганизации</h4>
                    <p>Домашнее обучение в 11 классе требует от ученика взрослого подхода к планированию времени. Необходимо:</p>
                    <ul>
                        <li>Составлять ежедневное расписание занятий</li>
                        <li>Самостоятельно контролировать выполнение заданий</li>
                        <li>Планировать подготовку к промежуточным аттестациям</li>
                        <li>Отслеживать прогресс по каждому предмету</li>
                    </ul>
                </div>

                <h3>Финансовые затраты</h3>

                <table class="comparison-table">
                    <thead>
                        <tr>
                            <th>Статья расходов</th>
                            <th>Экономичный вариант</th>
                            <th>Оптимальный</th>
                            <th>Премиум</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Онлайн-школа/репетиторы</td>
                            <td>30,000 ₽</td>
                            <td>80,000 ₽</td>
                            <td>150,000 ₽</td>
                        </tr>
                        <tr>
                            <td>Учебные материалы</td>
                            <td>5,000 ₽</td>
                            <td>10,000 ₽</td>
                            <td>20,000 ₽</td>
                        </tr>
                        <tr>
                            <td>Техника и ПО</td>
                            <td>15,000 ₽</td>
                            <td>30,000 ₽</td>
                            <td>50,000 ₽</td>
                        </tr>
                        <tr>
                            <td><strong>Итого за год</strong></td>
                            <td><strong>50,000 ₽</strong></td>
                            <td><strong>120,000 ₽</strong></td>
                            <td><strong>220,000 ₽</strong></td>
                        </tr>
                    </tbody>
                </table>

                <h2>Пошаговый план перехода на домашнее обучение в 11 классе</h2>

                <h3>Принятие решения (май-июнь)</h3>

                <div class="step-box">
                    <div class="step-number">1</div>
                    <h4>Семейный совет</h4>
                    <p>Обсудите с ребенком мотивацию, страхи и ожидания. Важно, чтобы решение было взвешенным и принималось совместно.</p>
                </div>

                <div class="step-box">
                    <div class="step-number">2</div>
                    <h4>Оценка готовности семьи</h4>
                    <ul>
                        <li>Проведите честную оценку самодисциплины ребенка</li>
                        <li>Рассчитайте временные ресурсы родителей</li>
                        <li>Определите цели и желаемые результаты ЕГЭ</li>
                    </ul>
                </div>

                <h3>Юридическое оформление (июнь-август)</h3>

                <div class="important-info-box">
                    <h4>Необходимые документы для перехода:</h4>
                    <ul>
                        <li>Уведомление в департамент образования (до 1 сентября)</li>
                        <li>Заявление о переводе на семейную форму обучения</li>
                        <li>Договор со школой для прохождения аттестаций</li>
                        <li>Справка о текущих оценках из прежней школы</li>
                    </ul>
                </div>

                <h3>Организация учебного процесса (август)</h3>

                <p>Составление индивидуального плана включает:</p>
                <ul>
                    <li>Определение приоритетных предметов для ЕГЭ</li>
                    <li>Распределение времени по дисциплинам</li>
                    <li>Выбор методов и ресурсов обучения</li>
                    <li>Планирование промежуточных контрольных точек</li>
                </ul>

                <h2>Особенности домашнего обучения именно в 11 классе</h2>

                <div class="quote-block">
                "11 класс на домашнем обучении — это интенсивный марафон длиной в год, где каждый месяц на счету. Важно правильно распределить нагрузку и не забыть про отдых." — директор онлайн-школы "Фоксфорд" Алексей Половинкин
                </div>

                <h3>Интенсивная подготовка к ЕГЭ</h3>

                <p>Организация эффективной подготовки включает:</p>

                <table class="checklist-table">
                    <thead>
                        <tr>
                            <th>Месяц</th>
                            <th>Основные задачи</th>
                            <th>Контрольные точки</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Сентябрь-октябрь</td>
                            <td>Повторение базы, диагностические работы</td>
                            <td>Определение стартового уровня</td>
                        </tr>
                        <tr>
                            <td>Ноябрь-декабрь</td>
                            <td>Изучение новых тем, решение типовых заданий</td>
                            <td>Промежуточная аттестация</td>
                        </tr>
                        <tr>
                            <td>Январь-февраль</td>
                            <td>Углубленная проработка сложных тем</td>
                            <td>Итоговое сочинение</td>
                        </tr>
                        <tr>
                            <td>Март-апрель</td>
                            <td>Интенсивное решение вариантов ЕГЭ</td>
                            <td>Пробные экзамены</td>
                        </tr>
                        <tr>
                            <td>Май</td>
                            <td>Финальное повторение, психологическая подготовка</td>
                            <td>ЕГЭ</td>
                        </tr>
                    </tbody>
                </table>

                <h2>Реальные истории семей: кейсы и отзывы</h2>

                <h3>История успеха</h3>

                <div class="pros-box">
                    <p><strong>Семья Петровых, Москва:</strong> "Перевели сына на домашнее обучение в 11 классе из-за конфликтов с учителем математики. Результат: 92 балла по математике, 89 по физике, поступление в МФТИ на бюджет. Потратили на репетиторов 180 тысяч за год, но это окупилось поступлением на престанную специальность."</p>
                </div>

                <h3>Сложный опыт</h3>

                <div class="cons-box">
                    <p><strong>Семья Ивановых, Санкт-Петербург:</strong> "Не рассчитали свои силы. Сын не смог самостоятельно организовать учебу, а у нас не хватило времени на контроль. Пришлось вернуться в школу в середине года. Совет: честно оцените готовность ребенка к самостоятельности."</p>
                </div>

                <h2>Альтернативы полному домашнему обучению</h2>

                <table class="comparison-table">
                    <thead>
                        <tr>
                            <th>Формат</th>
                            <th>Особенности</th>
                            <th>Кому подходит</th>
                            <th>Стоимость</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Экстернат</td>
                            <td>Ускоренное прохождение программы</td>
                            <td>Высокомотивированным ученикам</td>
                            <td>50-100 тыс. ₽</td>
                        </tr>
                        <tr>
                            <td>Заочная форма</td>
                            <td>Минимум посещений школы</td>
                            <td>Работающим или занимающимся спортом</td>
                            <td>Бесплатно</td>
                        </tr>
                        <tr>
                            <td>Смешанное обучение</td>
                            <td>Комбинация очного и дистанционного</td>
                            <td>Тем, кто хочет сохранить социализацию</td>
                            <td>30-70 тыс. ₽</td>
                        </tr>
                    </tbody>
                </table>

                <h2>Готовые решения и ресурсы</h2>

                <div class="important-info-box">
                    <h3>Авторитетные международные исследования</h3>
                    <p>Согласно исследованиям зарубежных образовательных учреждений, домашнее обучение имеет свои особенности и требует тщательного планирования:</p>
                    <ul>
                        <li><a href="https://www.uscareerinstitute.edu/blog/pros-and-cons-of-homeschool-for-high-school" target="_blank">U.S. Career Institute: Плюсы и минусы домашнего обучения в старшей школе</a></li>
                        <li><a href="https://homeeducator.com/homeschooling-11th-grade/" target="_blank">HomeEducator: Комплексное руководство по домашнему обучению в 11 классе</a></li>
                        <li><a href="https://cpdonline.co.uk/knowledge-base/safeguarding/is-homeschooling-good-bad/" target="_blank">CPD Online College: Анализ эффективности домашнего образования</a></li>
                    </ul>
                </div>

                <h3>Полезные сервисы и инструменты</h3>

                <ul>
                    <li><strong>Для планирования:</strong> Notion, Trello, Google Calendar</li>
                    <li><strong>Подготовка к ЕГЭ:</strong> ФИПИ, Решу ЕГЭ, Яндекс.Репетитор</li>
                    <li><strong>Поиск репетиторов:</strong> Preply, TutorOnline, Repetit.ru</li>
                    <li><strong>Онлайн-школы:</strong> Фоксфорд, Домашняя школа InternetUrok, Экстернат и домашняя школа Фоксфорда</li>
                </ul>

                <h2>Чек-лист готовности к домашнему обучению</h2>

                <table class="checklist-table">
                    <thead>
                        <tr>
                            <th>Категория</th>
                            <th>Что нужно подготовить</th>
                            <th>Статус</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td rowspan="3">Документы</td>
                            <td>Уведомление в департамент образования</td>
                            <td>□</td>
                        </tr>
                        <tr>
                            <td>Договор со школой для аттестаций</td>
                            <td>□</td>
                        </tr>
                        <tr>
                            <td>Справка об оценках</td>
                            <td>□</td>
                        </tr>
                        <tr>
                            <td rowspan="4">Материальная база</td>
                            <td>Компьютер/ноутбук с веб-камерой</td>
                            <td>□</td>
                        </tr>
                        <tr>
                            <td>Стабильный интернет (не менее 20 Мбит/с)</td>
                            <td>□</td>
                        </tr>
                        <tr>
                            <td>Рабочее место для занятий</td>
                            <td>□</td>
                        </tr>
                        <tr>
                            <td>Учебники и материалы</td>
                            <td>□</td>
                        </tr>
                        <tr>
                            <td rowspan="3">Психологическая готовность</td>
                            <td>Мотивация ребенка</td>
                            <td>□</td>
                        </tr>
                        <tr>
                            <td>Поддержка семьи</td>
                            <td>□</td>
                        </tr>
                        <tr>
                            <td>План социализации</td>
                            <td>□</td>
                        </tr>
                    </tbody>
                </table>

                <div class="quote-block">
                "Домашнее обучение в 11 классе — это не просто смена формата учебы, это изменение всего образа жизни семьи. Будьте готовы к тому, что первые месяцы будут сложными, но результат может превзойти все ожидания." — семейный психолог Мария Кравцова
                </div>

                <h2>FAQ - Часто задаваемые вопросы</h2>

                <div class="faq-item">
                    <div class="faq-question">Можно ли перейти на домашнее обучение в середине 11 класса?</div>
                    <div class="faq-answer">Да, можно перейти в любое время учебного года. Однако лучше это делать в начале четверти, чтобы не нарушать учебный процесс. Необходимо подать документы в департамент образования и договориться со школой о промежуточных аттестациях.</div>
                </div>

                <div class="faq-item">
                    <div class="faq-question">Как будет проходить ЕГЭ при домашнем обучении?</div>
                    <div class="faq-answer">ЕГЭ сдается на общих основаниях в школе, к которой прикреплен ученик для аттестации. Никаких отличий от обычных школьников нет. Регистрация на экзамены происходит через эту же школу до 1 февраля.</div>
                </div>

                <div class="faq-item">
                    <div class="faq-question">Сколько стоит домашнее обучение в 11 классе?</div>
                    <div class="faq-answer">Стоимость варьируется от 50 до 220 тысяч рублей в год в зависимости от выбранного формата. Самый бюджетный вариант — самостоятельное изучение с использованием бесплатных ресурсов и несколькими репетиторами. Премиум-формат включает индивидуальные занятия по всем предметам.</div>
                </div>

                <div class="faq-item">
                    <div class="faq-question">Какие документы нужны для перехода на семейное образование?</div>
                    <div class="faq-answer">Основные документы: уведомление в департамент образования о переходе на семейную форму, заявление в школу об отчислении, справка об оценках, договор со школой для прохождения аттестаций. Полный список лучше уточнить в местном департаменте образования.</div>
                </div>

                <div class="faq-item">
                    <div class="faq-question">Можно ли получить золотую медаль при домашнем обучении?</div>
                    <div class="faq-answer">Да, можно. Для получения медали необходимы отличные оценки по всем предметам на итоговых аттестациях и высокие баллы ЕГЭ (не менее 70 баллов по русскому языку и математике, остальные предметы — не менее минимального порога).</div>
                </div>

                <div class="faq-item">
                    <div class="faq-question">Как решить проблему социализации при домашнем обучении?</div>
                    <div class="faq-answer">Важно предусмотреть альтернативные способы общения: кружки, секции, волонтерство, курсы по интересам. Многие онлайн-школы организуют встречи учеников. Также можно поддерживать связи с бывшими одноклассниками и участвовать в школьных мероприятиях как выпускник.</div>
                </div>

                <div class="faq-item">
                    <div class="faq-question">Что делать, если домашнее обучение не подошло?</div>
                    <div class="faq-answer">Можно вернуться в обычную школу в любое время года. Для этого нужно подать заявление о зачислении, предоставить справку о промежуточных аттестациях и пройти собеседование для определения уровня знаний. Места в школах обычно есть, особенно в середине года.</div>
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

export default HomeSchooling11thGradeProsCons;