import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, GraduationCap, FileCheck, Clock, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const OnlineCertificate = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <Button
          variant="ghost"
          onClick={() => navigate("/")}
          className="mb-6 hover:bg-accent/50"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          На главную
        </Button>

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
                      "name": "Аттестат онлайн 11 класса",
                      "item": "https://shkola-11-klass.ru/certificate-online-11th-grade"
                    }
                  ]
                },
                {
                  "@type": "Article",
                  "headline": "Как просто получить аттестат в онлайн-школе для 11-го класса",
                  "description": "Узнайте, как получить аттестат в онлайн-школе для 11-го класса: пошаговая инструкция, требования, сроки и советы от экспертов. Начните обучение прямо сейчас!",
                  "author": {
                    "@type": "Organization",
                    "name": "Школа 11 класс"
                  },
                  "datePublished": "2024-01-15",
                  "dateModified": "2024-01-15"
                }
              ]
            })}
          </script>

          <header className="mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Как просто получить аттестат в онлайн-школе для 11-го класса
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Узнайте, как получить аттестат в онлайн-школе для 11-го класса: пошаговая инструкция, требования, сроки и советы от экспертов. Начните обучение прямо сейчас!
            </p>
          </header>

          <div className="space-y-8">
            <Card className="p-6 gradient-secondary border-l-4 border-l-primary">
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <Users className="w-5 h-5 text-primary" />
                Для кого эта статья:
              </h3>
              <ul className="space-y-2 text-foreground/90">
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  Ученики 11 класса, планирующие получение аттестата в онлайн-школе
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  Родители школьников 11 класса, рассматривающие дистанционное обучение
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  Подростки, нуждающиеся в гибком графике (спорт, творчество, здоровье)
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  Семьи, часто меняющие место жительства или проживающие за границей
                </li>
              </ul>
            </Card>

            <Card className="p-6 bg-primary/5 border border-primary/20">
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <FileCheck className="w-5 h-5 text-primary" />
                Ключевые выводы из статьи:
              </h3>
              <ul className="space-y-2 text-foreground/90">
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">✓</span>
                  Аттестат онлайн-школы равноценен обычному при условии государственной аккредитации
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">✓</span>
                  Процесс получения включает 6 основных этапов - от уведомления до выдачи документа
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">✓</span>
                  Стоимость обучения варьируется от 50 до 200 тысяч рублей в зависимости от формата
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">✓</span>
                  Успешная подготовка к ЕГЭ требует самодисциплины и правильного выбора школы
                </li>
              </ul>
            </Card>

            <section className="space-y-6">
              <h2 className="text-3xl font-bold text-foreground border-b-2 border-primary pb-3 flex items-center gap-3">
                <GraduationCap className="w-8 h-8 text-primary" />
                Пошаговый алгоритм получения аттестата в онлайн-школе
              </h2>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse rounded-lg overflow-hidden shadow-soft">
                  <thead>
                    <tr className="bg-primary text-primary-foreground">
                      <th className="p-4 text-left font-semibold">Этап</th>
                      <th className="p-4 text-left font-semibold">Действие</th>
                      <th className="p-4 text-left font-semibold">Сроки</th>
                      <th className="p-4 text-left font-semibold">Документы</th>
                    </tr>
                  </thead>
                  <tbody className="bg-card">
                    <tr className="border-b border-border">
                      <td className="p-4 font-semibold">1</td>
                      <td className="p-4">Подача уведомления о переходе на семейное обучение</td>
                      <td className="p-4">До 1 сентября</td>
                      <td className="p-4">Заявление в департамент образования</td>
                    </tr>
                    <tr className="border-b border-border bg-muted/50">
                      <td className="p-4 font-semibold">2</td>
                      <td className="p-4">Выбор и зачисление в аккредитованную онлайн-школу</td>
                      <td className="p-4">Август-сентябрь</td>
                      <td className="p-4">Заявление, документы об образовании</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="p-4 font-semibold">3</td>
                      <td className="p-4">Прохождение программы 11 класса</td>
                      <td className="p-4">Сентябрь-май</td>
                      <td className="p-4">Выполнение заданий, контрольных</td>
                    </tr>
                    <tr className="border-b border-border bg-muted/50">
                      <td className="p-4 font-semibold">4</td>
                      <td className="p-4">Сдача промежуточных аттестаций</td>
                      <td className="p-4">По четвертям</td>
                      <td className="p-4">Результаты тестирований</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="p-4 font-semibold">5</td>
                      <td className="p-4">Подготовка и сдача ЕГЭ</td>
                      <td className="p-4">Май-июнь</td>
                      <td className="p-4">Регистрация через школу</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold">6</td>
                      <td className="p-4">Получение аттестата государственного образца</td>
                      <td className="p-4">Июнь-июль</td>
                      <td className="p-4">Результаты ЕГЭ, внутренних экзаменов</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-lg text-foreground/90 leading-relaxed">
                Переход на дистанционное обучение в 11 классе требует особого внимания к выбору образовательной организации. Важно понимать, что{" "}
                <a 
                  href="https://shkola-11-klass.ru/" 
                  className="inline-block px-4 py-2 bg-gradient-primary text-white rounded-full font-semibold shadow-primary hover:shadow-glow transition-all duration-300 hover:-translate-y-0.5 mx-2"
                >
                  семейное обучение в 11 классе
                </a>
                {" "}предоставляет уникальные возможности для индивидуального подхода к подготовке к ЕГЭ и поступлению в вузы. На специализированных ресурсах вы найдете подробную информацию о всех нюансах такого формата образования.
              </p>

              <Card className="p-6 bg-muted border-l-4 border-l-muted-foreground">
                <p className="text-foreground/90 italic text-lg leading-relaxed">
                  Главное преимущество онлайн-школы для выпускного класса - возможность сосредоточиться на предметах ЕГЭ и эффективно распределить время между учебой и подготовкой к поступлению.
                </p>
              </Card>
            </section>

            <section className="space-y-6">
              <h2 className="text-3xl font-bold text-foreground border-b-2 border-primary pb-3">
                Как выбрать онлайн-школу с государственной аккредитацией
              </h2>

              <p className="text-lg text-foreground/90 leading-relaxed">
                Выбор правильной онлайн-школы - критически важный шаг. Школа должна иметь лицензию на образовательную деятельность и государственную аккредитацию, что позволяет выдавать аттестаты государственного образца.
              </p>

              <Card className="p-6 bg-warning/10 border border-warning/30">
                <h4 className="text-lg font-semibold text-warning mb-4 flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  Чек-лист проверки онлайн-школы:
                </h4>
                <ul className="space-y-3 text-foreground/90">
                  <li className="flex items-start gap-3">
                    <span className="text-success font-bold text-lg">✓</span>
                    Проверить лицензию в реестре Рособрнадзора
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-success font-bold text-lg">✓</span>
                    Изучить отзывы выпускников за последние 2-3 года
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-success font-bold text-lg">✓</span>
                    Узнать средний балл ЕГЭ учеников школы
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-success font-bold text-lg">✓</span>
                    Ознакомиться с квалификацией преподавателей
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-success font-bold text-lg">✓</span>
                    Протестировать платформу обучения
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-success font-bold text-lg">✓</span>
                    Уточнить формат проведения аттестаций
                  </li>
                </ul>
              </Card>

              <p className="text-lg text-foreground/90 leading-relaxed">
                Особое внимание следует уделить методике преподавания. Лучшие онлайн-школы предлагают комбинацию живых уроков с опытными преподавателями, записанных лекций для повторения материала и индивидуальных консультаций.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-3xl font-bold text-foreground border-b-2 border-primary pb-3">
                Форматы обучения в 11 классе: что выбрать
              </h2>

              <p className="text-lg text-foreground/90 leading-relaxed">
                Онлайн-школы предлагают различные форматы обучения, каждый из которых имеет свои преимущества:
              </p>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse rounded-lg overflow-hidden shadow-soft">
                  <thead>
                    <tr className="bg-secondary text-secondary-foreground">
                      <th className="p-4 text-left font-semibold">Формат</th>
                      <th className="p-4 text-left font-semibold">Описание</th>
                      <th className="p-4 text-left font-semibold">Кому подходит</th>
                      <th className="p-4 text-left font-semibold">Стоимость</th>
                    </tr>
                  </thead>
                  <tbody className="bg-card">
                    <tr className="border-b border-border">
                      <td className="p-4 font-semibold">Стандартный год</td>
                      <td className="p-4">Обучение с сентября по май по обычному графику</td>
                      <td className="p-4">Большинству учеников</td>
                      <td className="p-4 text-success font-semibold">От 50 тыс. руб.</td>
                    </tr>
                    <tr className="border-b border-border bg-muted/50">
                      <td className="p-4 font-semibold">Экстернат</td>
                      <td className="p-4">Ускоренное прохождение программы за 3-6 месяцев</td>
                      <td className="p-4">Мотивированным ученикам</td>
                      <td className="p-4 text-warning font-semibold">От 80 тыс. руб.</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="p-4 font-semibold">Индивидуальный</td>
                      <td className="p-4">Персональные занятия с преподавателем</td>
                      <td className="p-4">Ученикам, нуждающимся в особом подходе</td>
                      <td className="p-4 text-destructive font-semibold">От 150 тыс. руб.</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold">Смешанный</td>
                      <td className="p-4">Комбинация групповых и индивидуальных занятий</td>
                      <td className="p-4">Желающим гибкий график</td>
                      <td className="p-4 text-accent font-semibold">От 100 тыс. руб.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="space-y-6">
              <h2 className="text-3xl font-bold text-foreground border-b-2 border-primary pb-3">
                Подготовка к ЕГЭ в онлайн-школе
              </h2>

              <p className="text-lg text-foreground/90 leading-relaxed">
                Качественная подготовка к ЕГЭ - основная задача обучения в 11 классе. Лучшие онлайн-школы интегрируют подготовку к экзаменам в основной учебный процесс:
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6 bg-success/5 border border-success/20">
                  <h4 className="font-semibold text-success mb-4">Преимущества онлайн-подготовки:</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-success">✓</span>
                      Систематическое изучение материала с акцентом на темы ЕГЭ
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-success">✓</span>
                      Регулярные пробные экзамены в формате ЕГЭ
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-success">✓</span>
                      Анализ ошибок и работа над слабыми местами
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-success">✓</span>
                      Психологическая подготовка к стрессовым условиям экзамена
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-success">✓</span>
                      Индивидуальные консультации по сложным темам
                    </li>
                  </ul>
                </Card>

                <Card className="p-6 bg-primary/5 border border-primary/20">
                  <h4 className="font-semibold text-primary mb-4">Обязательные предметы 11 класса:</h4>
                  <ul className="space-y-2 text-sm">
                    <li><strong>Русский язык</strong> - 1 час в неделю (обязательный ЕГЭ)</li>
                    <li><strong>Математика</strong> - 4 часа в неделю (обязательный ЕГЭ)</li>
                    <li><strong>История</strong> - 2 часа в неделю</li>
                    <li><strong>Обществознание</strong> - 2 часа в неделю</li>
                    <li><strong>Физическая культура</strong> - 3 часа в неделю</li>
                    <li><strong>ОБЖ</strong> - 1 час в неделю</li>
                  </ul>
                </Card>
              </div>

              <Card className="p-6 bg-muted border-l-4 border-l-muted-foreground">
                <p className="text-foreground/90 italic text-lg leading-relaxed">
                  Успешная сдача ЕГЭ в онлайн-формате требует не только знаний, но и высокого уровня самоорганизации и дисциплины от ученика.
                </p>
              </Card>
            </section>

            <section className="space-y-6">
              <h2 className="text-3xl font-bold text-foreground border-b-2 border-primary pb-3">
                Часто задаваемые вопросы (FAQ)
              </h2>

              <div className="space-y-4">
                <Card className="p-6 border border-border">
                  <h4 className="font-semibold text-primary mb-3">Признается ли аттестат онлайн-школы при поступлении в вуз?</h4>
                  <p className="text-foreground/90">Да, аттестат государственного образца, выданный аккредитованной онлайн-школой, полностью равноценен документу обычной школы и принимается всеми российскими вузами.</p>
                </Card>

                <Card className="p-6 border border-border">
                  <h4 className="font-semibold text-primary mb-3">Можно ли перейти в онлайн-школу в середине 11 класса?</h4>
                  <p className="text-foreground/90">Да, переход возможен в любое время учебного года. Онлайн-школа засчитает пройденные предметы и составит индивидуальный план изучения оставшегося материала.</p>
                </Card>

                <Card className="p-6 border border-border">
                  <h4 className="font-semibold text-primary mb-3">Как проходят экзамены в онлайн-школе?</h4>
                  <p className="text-foreground/90">ЕГЭ сдается в общих пунктах проведения экзаменов наравне с учениками обычных школ. Промежуточные аттестации могут проходить онлайн под наблюдением преподавателей или очно в центрах школы.</p>
                </Card>

                <Card className="p-6 border border-border">
                  <h4 className="font-semibold text-primary mb-3">Сколько времени нужно заниматься в день?</h4>
                  <p className="text-foreground/90">В среднем 4-6 часов в день при стандартном режиме обучения. При экстернате нагрузка может увеличиваться до 8-10 часов в день.</p>
                </Card>

                <Card className="p-6 border border-border">
                  <h4 className="font-semibold text-primary mb-3">Можно ли получить медаль "За особые успехи в учении"?</h4>
                  <p className="text-foreground/90">Да, ученики онлайн-школ могут получить золотую медаль при соблюдении всех требований: отличные оценки, высокие баллы ЕГЭ и зачет по итоговому сочинению.</p>
                </Card>
              </div>
            </section>

            <Card className="p-6 bg-info/10 border border-info/30">
              <h4 className="text-lg font-semibold text-info mb-4">Международное признание российского образования</h4>
              <p className="text-foreground/90 mb-3">
                Согласно{" "}
                <a 
                  href="https://www.alberta.ca/iqas-education-guide-russia" 
                  target="_blank" 
                  rel="noopener"
                  className="text-primary hover:underline"
                >
                  International Education Guide – Russia
                </a>
                , российская система образования признается во многих странах мира. Аттестат о среднем образовании позволяет поступать в зарубежные университеты после прохождения соответствующих процедур оценки документов.
              </p>
              <p className="text-foreground/90">
                Дополнительную информацию о международном признании российских документов об образовании можно найти на сайте{" "}
                <a 
                  href="https://www.wes.org/resource-library/blog/credential-advice/credential-evaluations-russian-students/" 
                  target="_blank" 
                  rel="noopener"
                  className="text-primary hover:underline"
                >
                  World Education Services
                </a>
                .
              </p>
            </Card>
          </div>
        </article>
      </div>
      <Footer />
    </div>
  );
};

export default OnlineCertificate;