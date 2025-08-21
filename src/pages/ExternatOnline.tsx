import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const ExternatOnline = () => {
  useEffect(() => {
    document.title = "Как закончить 11 класс в онлайн экстернате – пошаговая инструкция";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Узнайте, как закончить 11 класс в онлайн экстернате: пошаговая схема, требования к аттестации, сроки сдачи экзаменов и советы экспертов для успешного выпуска.");
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = "Узнайте, как закончить 11 класс в онлайн экстернате: пошаговая схема, требования к аттестации, сроки сдачи экзаменов и советы экспертов для успешного выпуска.";
      document.head.appendChild(meta);
    }

    // Add JSON-LD schema
    const jsonLd = {
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
              "name": "Закончить 11 класс онлайн",
              "item": "https://shkola-11-klass.ru/finish_11th_grade_online"
            }
          ]
        }
      ]
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(jsonLd);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const content = (
    <article className="max-w-4xl mx-auto px-4 py-8 space-y-8">
      {/* Target Audience Block */}
      <div className="bg-gradient-to-br from-primary via-primary-dark to-secondary p-6 rounded-xl text-primary-foreground">
        <h3 className="text-xl font-semibold mb-4">Для кого эта статья:</h3>
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-xl">👨‍🎓</span>
            <span>Учащиеся 11 класса, желающие завершить обучение в формате онлайн-экстерната</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-xl">👨‍🎓</span>
            <span>Родители старшеклассников, рассматривающие альтернативу традиционной школе</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-xl">👨‍🎓</span>
            <span>Школьники, стремящиеся к ускоренному освоению программы и досрочной сдаче ЕГЭ</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-xl">👨‍🎓</span>
            <span>Старшеклассники с особыми условиями (переезд, работа, интенсивные занятия спортом/искусством)</span>
          </li>
        </ul>
      </div>

      {/* Key Points Block */}
      <div className="bg-gradient-to-br from-accent via-accent-light to-secondary-light p-6 rounded-xl text-accent-foreground">
        <h3 className="text-xl font-semibold mb-4">Ключевые выводы из статьи:</h3>
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-xl">✅</span>
            <span>Экстернат позволяет закончить 11 класс за 1 год с получением аттестата государственного образца</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-xl">✅</span>
            <span>Стоимость обучения в онлайн-экстернате составляет от 50 000 до 150 000 рублей в год</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-xl">✅</span>
            <span>Для успешного завершения экстерната необходима высокая самодисциплина и правильная организация времени</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-xl">✅</span>
            <span>Выпускники экстерната имеют равные права при поступлении в вузы наравне с выпускниками обычных школ</span>
          </li>
        </ul>
      </div>

      <section className="bg-card p-8 rounded-lg shadow-soft border">
        <h2 className="text-3xl font-bold text-primary border-b-4 border-primary pb-3 mb-6">
          Что такое экстернат и кому он подходит
        </h2>
        
        <p className="text-lg leading-relaxed mb-6">
          Экстернат — это форма получения образования, при которой ученик самостоятельно изучает школьную программу и проходит аттестацию в образовательном учреждении. В отличие от дистанционного обучения, где ученик посещает онлайн-уроки по расписанию, экстернат предполагает полную самостоятельность в изучении материала.
        </p>

        <p className="text-lg leading-relaxed mb-6">
          Если вы рассматриваете возможность завершения школьного образования в ускоренном формате, рекомендуем изучить предложения{" "}
          <a href="https://shkola-11-klass.ru/" 
             className="bg-gradient-to-r from-primary to-accent text-primary-foreground px-3 py-1 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5">
            онлайн школ 11 класса с аттестатом
          </a>
          . На этой странице вы найдете подробную информацию о лицензированных школах, стоимости обучения, программах подготовки и сможете выбрать оптимальный вариант для вашей ситуации.
        </p>

        <h3 className="text-2xl font-semibold text-secondary mt-8 mb-4">Кому подходит экстернат:</h3>
        <ul className="space-y-3 ml-6">
          <li><strong>Переезжающим семьям</strong> — при смене места жительства не нужно искать новую школу</li>
          <li><strong>Работающим школьникам</strong> — актерам, спортсменам, блогерам с плотным графиком</li>
          <li><strong>Готовящимся к ЕГЭ</strong> — больше времени на подготовку к экзаменам</li>
          <li><strong>Одаренным детям</strong> — возможность ускоренного обучения</li>
          <li><strong>Школьникам с проблемами социализации</strong> — альтернатива традиционной школе</li>
        </ul>

        <div className="bg-gradient-to-br from-orange-50 to-orange-100 border-2 border-orange-400 p-6 rounded-lg mt-8">
          <h4 className="text-xl font-semibold text-orange-800 mb-4">Важная информация</h4>
          <p className="text-orange-700 leading-relaxed">
            Согласно российскому законодательству, аттестат, полученный через экстернат, имеет точно такую же юридическую силу, как и аттестат обычной школы. Это подтверждают международные исследования системы образования в России:{" "}
            <a href="https://www.expatica.com/ru/education/children-education/the-education-system-in-russia-104072/" 
               target="_blank" 
               rel="noopener noreferrer"
               className="text-orange-800 hover:underline font-medium">
              Education system in Russia (Expatica)
            </a>{" "}
            и{" "}
            <a href="https://wenr.wes.org/2017/06/education-in-the-russian-federation" 
               target="_blank" 
               rel="noopener noreferrer"
               className="text-orange-800 hover:underline font-medium">
              Education in the Russian Federation (WENR)
            </a>.
          </p>
        </div>
      </section>

      <section className="bg-card p-8 rounded-lg shadow-soft border">
        <h2 className="text-3xl font-bold text-primary border-b-4 border-primary pb-3 mb-6">
          Пошаговый алгоритм поступления в онлайн экстернат
        </h2>

        <div className="bg-muted/50 p-6 rounded-lg mb-6">
          <div className="font-bold text-lg mb-4 flex items-center gap-2">
            <span className="text-xl">📋</span>
            Чек-лист документов для зачисления:
          </div>
          <ul className="space-y-2">
            <li className="flex items-start gap-2"><span>📋</span> Заявление на имя директора школы</li>
            <li className="flex items-start gap-2"><span>📋</span> Копия паспорта ученика (с 14 лет) или свидетельства о рождении</li>
            <li className="flex items-start gap-2"><span>📋</span> Копия паспорта родителя/законного представителя</li>
            <li className="flex items-start gap-2"><span>📋</span> Аттестат об основном общем образовании (9 классов)</li>
            <li className="flex items-start gap-2"><span>📋</span> Справка о текущей успеваемости (при переводе из другой школы)</li>
            <li className="flex items-start gap-2"><span>📋</span> 2 фотографии 3×4 см</li>
            <li className="flex items-start gap-2"><span>📋</span> СНИЛС ученика</li>
          </ul>
        </div>

        <h3 className="text-2xl font-semibold text-secondary mt-8 mb-4">Пошаговая процедура зачисления:</h3>
        <ol className="space-y-3 ml-6 list-decimal">
          <li><strong>Выбор школы</strong> — изучите аккредитацию, отзывы, стоимость</li>
          <li><strong>Подача документов</strong> — можно отправить по почте или загрузить на сайт</li>
          <li><strong>Заключение договора</strong> — подписание и оплата обучения</li>
          <li><strong>Отчисление из текущей школы</strong> — получение справки о переводе</li>
          <li><strong>Зачисление в экстернат</strong> — получение приказа о зачислении</li>
          <li><strong>Получение доступов</strong> — логины для онлайн-платформы и материалы</li>
        </ol>

        <div className="mt-8 overflow-x-auto">
          <Table className="w-full border rounded-lg shadow-soft">
            <TableHeader>
              <TableRow className="bg-primary text-primary-foreground">
                <TableHead className="text-primary-foreground font-semibold">Период подачи документов</TableHead>
                <TableHead className="text-primary-foreground font-semibold">Срок зачисления</TableHead>
                <TableHead className="text-primary-foreground font-semibold">Начало обучения</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Май - август</TableCell>
                <TableCell>До 31 августа</TableCell>
                <TableCell>1 сентября</TableCell>
              </TableRow>
              <TableRow className="bg-muted/50">
                <TableCell className="font-medium">Сентябрь - декабрь</TableCell>
                <TableCell>До 25 декабря</TableCell>
                <TableCell>10 января</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Январь - март</TableCell>
                <TableCell>До 25 марта</TableCell>
                <TableCell>1 апреля</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </section>

      <blockquote className="bg-gradient-to-r from-primary/10 to-secondary/10 border-l-4 border-primary p-6 rounded-r-lg italic text-lg relative">
        <span className="absolute text-6xl text-primary/20 -top-2 -left-2">"</span>
        "Экстернат дал мне возможность сосредоточиться на подготовке к ЕГЭ и поступить в МГУ. За один год я освоила программу 11 класса и набрала 285 баллов на ЕГЭ." — Анна К., выпускница экстерната 2023 года
      </blockquote>

      <section className="bg-card p-8 rounded-lg shadow-soft border">
        <h2 className="text-3xl font-bold text-primary border-b-4 border-primary pb-3 mb-6">
          Варианты прохождения программы 11 класса
        </h2>

        <h3 className="text-2xl font-semibold text-secondary mt-6 mb-4">11 класс за 1 год — интенсивная программа</h3>
        <p className="text-lg leading-relaxed mb-6">
          Подходит ученикам, уже имеющим аттестат за 9 классов и желающим быстро получить среднее образование. Программа включает изучение всех обязательных предметов 11 класса за 8-10 месяцев.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-500 p-6 rounded-lg">
            <h4 className="text-xl font-semibold text-green-800 mb-4 text-center">Преимущества</h4>
            <ul className="space-y-2 text-green-700">
              <li>• Быстрое получение аттестата</li>
              <li>• Больше времени на подготовку к ЕГЭ</li>
              <li>• Раннее поступление в вуз</li>
              <li>• Экономия времени</li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-red-50 to-red-100 border-2 border-red-500 p-6 rounded-lg">
            <h4 className="text-xl font-semibold text-red-800 mb-4 text-center">Недостатки</h4>
            <ul className="space-y-2 text-red-700">
              <li>• Высокая учебная нагрузка</li>
              <li>• Требует отличной самодисциплины</li>
              <li>• Сжатые сроки изучения материала</li>
              <li>• Стресс от интенсивного графика</li>
            </ul>
          </div>
        </div>

        <h3 className="text-2xl font-semibold text-secondary mt-8 mb-4">10-11 классы за 1 год — ускоренное обучение</h3>
        <p className="text-lg leading-relaxed mb-6">
          Экстремально сжатая программа для мотивированных учеников. Изучение двухлетней программы старших классов за один учебный год.
        </p>

        <h3 className="text-2xl font-semibold text-secondary mt-8 mb-4">Стандартное прохождение за 2 года</h3>
        <p className="text-lg leading-relaxed mb-6">
          Обычный темп изучения с акцентом на качественную подготовку к ЕГЭ. Позволяет глубже изучить предметы и лучше подготовиться к экзаменам.
        </p>

        <div className="overflow-x-auto">
          <Table className="w-full border rounded-lg shadow-soft">
            <TableHeader>
              <TableRow className="bg-primary text-primary-foreground">
                <TableHead className="text-primary-foreground font-semibold">Программа</TableHead>
                <TableHead className="text-primary-foreground font-semibold">Длительность</TableHead>
                <TableHead className="text-primary-foreground font-semibold">Учебная нагрузка</TableHead>
                <TableHead className="text-primary-foreground font-semibold">Стоимость</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">11 класс за 1 год</TableCell>
                <TableCell>8-10 месяцев</TableCell>
                <TableCell>6-8 часов в день</TableCell>
                <TableCell>80-120 тыс. руб.</TableCell>
              </TableRow>
              <TableRow className="bg-muted/50">
                <TableCell className="font-medium">10-11 за 1 год</TableCell>
                <TableCell>10 месяцев</TableCell>
                <TableCell>8-10 часов в день</TableCell>
                <TableCell>100-150 тыс. руб.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Стандартная программа</TableCell>
                <TableCell>2 года</TableCell>
                <TableCell>4-5 часов в день</TableCell>
                <TableCell>50-80 тыс. руб./год</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-muted/30 p-8 rounded-xl">
        <h2 className="text-3xl font-bold text-primary mb-8">FAQ — Часто задаваемые вопросы</h2>
        
        <div className="space-y-6">
          <div className="bg-card p-6 rounded-lg border-l-4 border-primary">
            <div className="font-semibold text-primary mb-3">Можно ли перейти на экстернат в середине учебного года?</div>
            <div className="text-muted-foreground">
              Да, большинство онлайн-школ принимают учеников в течение всего учебного года. Лучшие моменты для перехода — начало полугодия (сентябрь, январь).
            </div>
          </div>

          <div className="bg-card p-6 rounded-lg border-l-4 border-primary">
            <div className="font-semibold text-primary mb-3">Признают ли вузы аттестат, полученный через экстернат?</div>
            <div className="text-muted-foreground">
              Да, аттестат экстерната имеет точно такую же юридическую силу, как обычный школьный аттестат. При поступлении в вуз значение имеют только результаты ЕГЭ.
            </div>
          </div>

          <div className="bg-card p-6 rounded-lg border-l-4 border-primary">
            <div className="font-semibold text-primary mb-3">Сколько времени в день нужно заниматься?</div>
            <div className="text-muted-foreground">
              Для освоения программы 11 класса за год необходимо 6-8 часов ежедневных занятий. При стандартном темпе (2 года) — 4-5 часов в день.
            </div>
          </div>

          <div className="bg-card p-6 rounded-lg border-l-4 border-primary">
            <div className="font-semibold text-primary mb-3">Можно ли сдать ЕГЭ досрочно?</div>
            <div className="text-muted-foreground">
              Да, экстерны имеют право сдавать ЕГЭ в досрочный период (март-апрель), если завершили программу и получили допуск от школы.
            </div>
          </div>

          <div className="bg-card p-6 rounded-lg border-l-4 border-primary">
            <div className="font-semibold text-primary mb-3">Что делать, если не справляюсь с нагрузкой?</div>
            <div className="text-muted-foreground">
              Обратитесь к куратору для пересмотра учебного плана. Возможно, стоит перейти на более медленный темп или взять академический отпуск.
            </div>
          </div>

          <div className="bg-card p-6 rounded-lg border-l-4 border-primary">
            <div className="font-semibold text-primary mb-3">Есть ли возрастные ограничения для экстерната?</div>
            <div className="text-muted-foreground">
              Нет, экстернатом могут воспользоваться люди любого возраста. Есть случаи получения аттестата в 15 лет и в 40+ лет.
            </div>
          </div>
        </div>
      </section>
    </article>
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Navigation */}
          <Button 
            variant="ghost" 
            className="mb-8 p-0 h-auto text-muted-foreground hover:text-foreground"
            onClick={() => window.history.back()}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Назад к списку статей
          </Button>

          {/* Article Header */}
          <header className="mb-8 pb-8 border-b">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
              Как закончить 11 класс в онлайн экстернате – пошаговая инструкция
            </h1>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <time dateTime="2025-08-21">21 августа 2025</time>
              <span>•</span>
              <span>20 мин чтения</span>
            </div>
          </header>

          {content}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ExternatOnline;