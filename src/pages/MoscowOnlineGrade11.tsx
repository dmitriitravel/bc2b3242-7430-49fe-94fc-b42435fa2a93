import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const MoscowOnlineGrade11 = () => {
  useEffect(() => {
    document.title = "11 класс в онлайн-школе Москвы – дистанционное обучение";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Пройдите программу 11 класса в онлайн-школе в Москве. Удобный график, опытные учителя, подготовка к ЕГЭ и ОГЭ, интерактивные уроки и персональная поддержка.");
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = "Пройдите программу 11 класса в онлайн-школе в Москве. Удобный график, опытные учителя, подготовка к ЕГЭ и ОГЭ, интерактивные уроки и персональная поддержка.";
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
              "name": "11 класс онлайн",
              "item": "https://shkola-11-klass.ru/blog/online-grade-11-moscow"
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
        <h3 className="text-xl font-semibold mb-4">Для кого эта статья</h3>
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-yellow-300 font-bold">▶</span>
            <span>Родители учеников 11 классов, рассматривающие онлайн-образование</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-yellow-300 font-bold">▶</span>
            <span>Ученики 11 класса, интересующиеся дистанционной подготовкой к ЕГЭ</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-yellow-300 font-bold">▶</span>
            <span>Семьи с особыми условиями (переезд, спорт, здоровье), нуждающиеся в гибком расписании</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-yellow-300 font-bold">▶</span>
            <span>Родители и школьники, сравнивающие онлайн-школы и традиционные формы обучения</span>
          </li>
        </ul>
      </div>

      {/* Key Insights Block */}
      <div className="bg-gradient-to-br from-primary via-primary-dark to-secondary p-6 rounded-xl text-primary-foreground">
        <h3 className="text-xl font-semibold mb-4">Ключевые выводы из статьи</h3>
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-yellow-300 font-bold">▶</span>
            <span>Онлайн-школы в Москве обеспечивают качественную подготовку к ЕГЭ со средними баллами 75-85</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-yellow-300 font-bold">▶</span>
            <span>Стоимость обучения варьируется от 15 000 до 45 000 рублей в месяц в зависимости от тарифа</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-yellow-300 font-bold">▶</span>
            <span>Выпускники получают аттестат государственного образца московской школы</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-yellow-300 font-bold">▶</span>
            <span>Для комфортного обучения необходим компьютер и стабильный интернет от 10 Мбит/с</span>
          </li>
        </ul>
      </div>

      <section className="bg-muted/30 p-8 rounded-lg border-l-4 border-primary">
        <h2 className="text-3xl font-bold text-primary border-b-2 border-primary pb-3 mb-6">
          Как устроен учебный процесс в 11 классе онлайн-школы
        </h2>
        
        <p className="text-lg leading-relaxed mb-6">
          Современные онлайн-школы Москвы предлагают сбалансированный подход к организации учебного процесса для выпускного класса. 
          Расписание строится с учетом специфики подготовки к ЕГЭ и включает как обязательные предметы, так и углубленное изучение дисциплин по выбору.
        </p>

        <h3 className="text-2xl font-semibold text-secondary mt-8 mb-4">Расписание и формат занятий</h3>
        <div className="overflow-x-auto mb-8">
          <Table className="w-full border rounded-lg shadow-soft">
            <TableHeader>
              <TableRow className="bg-primary text-primary-foreground">
                <TableHead className="text-primary-foreground font-semibold">Тип урока</TableHead>
                <TableHead className="text-primary-foreground font-semibold">Продолжительность</TableHead>
                <TableHead className="text-primary-foreground font-semibold">Частота</TableHead>
                <TableHead className="text-primary-foreground font-semibold">Особенности</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Живые онлайн-уроки</TableCell>
                <TableCell>40-45 минут</TableCell>
                <TableCell>4-6 раз в день</TableCell>
                <TableCell>Интерактивное общение с учителем</TableCell>
              </TableRow>
              <TableRow className="bg-muted/50">
                <TableCell className="font-medium">Записанные видеоуроки</TableCell>
                <TableCell>15-30 минут</TableCell>
                <TableCell>По необходимости</TableCell>
                <TableCell>Возможность просмотра в удобное время</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Консультации по ЕГЭ</TableCell>
                <TableCell>60 минут</TableCell>
                <TableCell>2-3 раза в неделю</TableCell>
                <TableCell>Разбор сложных заданий</TableCell>
              </TableRow>
              <TableRow className="bg-muted/50">
                <TableCell className="font-medium">Пробные экзамены</TableCell>
                <TableCell>3-4 часа</TableCell>
                <TableCell>1-2 раза в месяц</TableCell>
                <TableCell>Условия, максимально приближенные к реальному ЕГЭ</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <p className="text-lg leading-relaxed mb-6">
          Качественное{" "}
          <a href="https://shkola-11-klass.ru/" 
             className="bg-gradient-to-r from-primary to-secondary text-primary-foreground px-3 py-1 rounded-md font-semibold hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5">
            дистанционное обучение в 11 классе
          </a>{" "}
          организовано таким образом, чтобы ученики получили всестороннюю подготовку и уверенно сдали выпускные экзамены. 
          Переходя по ссылке, вы можете изучить детальную программу подготовки, расписание занятий и методики, которые помогают достичь высоких результатов на ЕГЭ.
        </p>

        <h3 className="text-2xl font-semibold text-secondary mt-8 mb-4">Личный кабинет и платформа обучения</h3>
        <p className="text-lg leading-relaxed mb-4">
          Каждый ученик получает доступ к персональному кабинету, где содержится:
        </p>
        <ul className="space-y-2 ml-6">
          <li>• Расписание уроков и консультаций</li>
          <li>• Домашние задания и их проверка</li>
          <li>• Результаты пробных ЕГЭ и текущая успеваемость</li>
          <li>• Библиотека учебных материалов и видеоуроков</li>
          <li>• Чат для общения с учителями и одноклассниками</li>
        </ul>
      </section>

      <blockquote className="bg-gradient-to-r from-primary/10 to-secondary/10 border-l-4 border-primary p-6 rounded-r-lg italic text-lg relative">
        <span className="absolute text-6xl text-primary/20 -top-2 -left-2">"</span>
        "Онлайн-формат обучения в 11 классе позволяет сосредоточиться на подготовке к ЕГЭ, исключая потери времени на дорогу и создавая максимально комфортные условия для усвоения материала" — методист московской онлайн-школы.
      </blockquote>

      <section className="bg-muted/30 p-8 rounded-lg border-l-4 border-primary">
        <h2 className="text-3xl font-bold text-primary border-b-2 border-primary pb-3 mb-6">
          Подготовка к ЕГЭ в онлайн-школе: методика и результаты
        </h2>
        
        <h3 className="text-2xl font-semibold text-secondary mt-6 mb-4">Специализированная программа подготовки</h3>
        <p className="text-lg leading-relaxed mb-6">
          Московские онлайн-школы разрабатывают индивидуальные траектории подготовки к ЕГЭ, учитывающие:
        </p>
        
        <div className="bg-card p-6 rounded-lg space-y-4">
          <div className="flex items-start gap-4">
            <div className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">1</div>
            <div>
              <strong>Входное тестирование</strong> — определение текущего уровня знаний по каждому предмету
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">2</div>
            <div>
              <strong>Целевые баллы</strong> — планирование результатов с учетом требований выбранных вузов
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">3</div>
            <div>
              <strong>Слабые места</strong> — усиленная работа над проблемными темами
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">4</div>
            <div>
              <strong>Временные рамки</strong> — распределение нагрузки до даты экзаменов
            </div>
          </div>
        </div>

        <h3 className="text-2xl font-semibold text-secondary mt-8 mb-4">Статистика результатов выпускников</h3>
        <div className="overflow-x-auto">
          <Table className="w-full border rounded-lg shadow-soft">
            <TableHeader>
              <TableRow className="bg-primary text-primary-foreground">
                <TableHead className="text-primary-foreground font-semibold">Предмет ЕГЭ</TableHead>
                <TableHead className="text-primary-foreground font-semibold">Средний балл онлайн-школы</TableHead>
                <TableHead className="text-primary-foreground font-semibold">Средний балл по Москве</TableHead>
                <TableHead className="text-primary-foreground font-semibold">Процент учеников с баллом 80+</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Русский язык</TableCell>
                <TableCell>78</TableCell>
                <TableCell>73</TableCell>
                <TableCell>65%</TableCell>
              </TableRow>
              <TableRow className="bg-muted/50">
                <TableCell className="font-medium">Математика (профиль)</TableCell>
                <TableCell>72</TableCell>
                <TableCell>68</TableCell>
                <TableCell>45%</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Физика</TableCell>
                <TableCell>69</TableCell>
                <TableCell>64</TableCell>
                <TableCell>38%</TableCell>
              </TableRow>
              <TableRow className="bg-muted/50">
                <TableCell className="font-medium">Обществознание</TableCell>
                <TableCell>75</TableCell>
                <TableCell>71</TableCell>
                <TableCell>52%</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">История</TableCell>
                <TableCell>71</TableCell>
                <TableCell>67</TableCell>
                <TableCell>41%</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </section>

      <section className="bg-muted/30 p-8 rounded-lg border-l-4 border-primary">
        <h2 className="text-3xl font-bold text-primary border-b-2 border-primary pb-3 mb-6">
          Стоимость обучения в 11 классе онлайн-школы в Москве
        </h2>
        
        <h3 className="text-2xl font-semibold text-secondary mt-6 mb-4">Тарифные планы ведущих онлайн-школ</h3>
        <div className="overflow-x-auto mb-8">
          <Table className="w-full border rounded-lg shadow-soft">
            <TableHeader>
              <TableRow className="bg-primary text-primary-foreground">
                <TableHead className="text-primary-foreground font-semibold">Тариф</TableHead>
                <TableHead className="text-primary-foreground font-semibold">Стоимость в месяц</TableHead>
                <TableHead className="text-primary-foreground font-semibold">Количество предметов</TableHead>
                <TableHead className="text-primary-foreground font-semibold">Дополнительные услуги</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Стандарт</TableCell>
                <TableCell>15 000 - 20 000 ₽</TableCell>
                <TableCell>Базовый набор (5-7)</TableCell>
                <TableCell>Доступ к записям уроков</TableCell>
              </TableRow>
              <TableRow className="bg-muted/50">
                <TableCell className="font-medium">Оптимум</TableCell>
                <TableCell>25 000 - 30 000 ₽</TableCell>
                <TableCell>Расширенный набор (8-10)</TableCell>
                <TableCell>Персональный куратор, пробные ЕГЭ</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Премиум</TableCell>
                <TableCell>35 000 - 45 000 ₽</TableCell>
                <TableCell>Полный набор + элективы</TableCell>
                <TableCell>Индивидуальные консультации, психологическая поддержка</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <h3 className="text-2xl font-semibold text-secondary mt-8 mb-4">Сравнение с традиционными формами обучения</h3>
        <ul className="space-y-3 ml-6">
          <li><strong>Репетиторы</strong>: 2 000 - 4 000 ₽ за урок × 3-4 предмета = 48 000 - 96 000 ₽/месяц</li>
          <li><strong>Частная школа</strong>: 40 000 - 80 000 ₽/месяц</li>
          <li><strong>Онлайн-школа</strong>: 15 000 - 45 000 ₽/месяц — экономия составляет 30-50%</li>
        </ul>
      </section>

      <blockquote className="bg-gradient-to-r from-primary/10 to-secondary/10 border-l-4 border-primary p-6 rounded-r-lg italic text-lg relative">
        <span className="absolute text-6xl text-primary/20 -top-2 -left-2">"</span>
        "Выбор онлайн-образования для 11 класса позволил нашей семье сэкономить более 300 000 рублей в год по сравнению с частной школой, при этом результаты ЕГЭ оказались выше ожидаемых" — отзыв родителя выпускника.
      </blockquote>

      <section className="bg-muted/30 p-8 rounded-lg border-l-4 border-primary">
        <h2 className="text-3xl font-bold text-primary border-b-2 border-primary pb-3 mb-6">
          Рейтинг онлайн-школ для 11 класса в Москве
        </h2>
        
        <div className="overflow-x-auto mb-8">
          <Table className="w-full border rounded-lg shadow-soft">
            <TableHeader>
              <TableRow className="bg-gradient-to-r from-slate-700 to-slate-600 text-white">
                <TableHead className="text-white font-semibold">Онлайн-школа</TableHead>
                <TableHead className="text-white font-semibold">Средний балл ЕГЭ</TableHead>
                <TableHead className="text-white font-semibold">Стоимость (мес.)</TableHead>
                <TableHead className="text-white font-semibold">Формат обучения</TableHead>
                <TableHead className="text-white font-semibold">Рейтинг</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Фоксфорд</TableCell>
                <TableCell>78.2</TableCell>
                <TableCell>от 19 990 ₽</TableCell>
                <TableCell>Живые уроки + записи</TableCell>
                <TableCell>4.8/5</TableCell>
              </TableRow>
              <TableRow className="bg-muted/50">
                <TableCell className="font-medium">Домашняя школа ИнтернетУрок</TableCell>
                <TableCell>76.8</TableCell>
                <TableCell>от 15 000 ₽</TableCell>
                <TableCell>Записанные уроки + консультации</TableCell>
                <TableCell>4.6/5</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Онлайн Гимназия № 1</TableCell>
                <TableCell>79.5</TableCell>
                <TableCell>от 25 000 ₽</TableCell>
                <TableCell>Полный день онлайн</TableCell>
                <TableCell>4.9/5</TableCell>
              </TableRow>
              <TableRow className="bg-muted/50">
                <TableCell className="font-medium">БИТ</TableCell>
                <TableCell>75.3</TableCell>
                <TableCell>от 12 000 ₽</TableCell>
                <TableCell>Смешанный формат</TableCell>
                <TableCell>4.4/5</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <h3 className="text-2xl font-semibold text-secondary mt-8 mb-4">Критерии выбора оптимального варианта</h3>
        <ul className="space-y-2 ml-6">
          <li>• Результаты выпускников на ЕГЭ</li>
          <li>• Наличие лицензии и аккредитации</li>
          <li>• Квалификация преподавательского состава</li>
          <li>• Техническое оснащение платформы</li>
          <li>• Отзывы родителей и учеников</li>
          <li>• Стоимость и условия оплаты</li>
        </ul>
      </section>

      <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
        <h4 className="text-xl font-semibold text-blue-800 mb-4">Международный опыт онлайн-образования</h4>
        <p className="text-blue-700 leading-relaxed mb-4">
          Московские онлайн-школы активно изучают международный опыт цифрового образования. Согласно информации на портале{" "}
          <a href="https://www.itu.int/net4/wsis/stocktaking/projects/Project/Details?projectId=1514632317" 
             target="_blank" 
             rel="noopener noreferrer"
             className="text-blue-800 hover:underline font-medium">
            ITU
          </a>
          , проект "Moscow Online School" получил международное признание как успешная модель дистанционного обучения. 
          Дополнительную информацию о международных стандартах образования в Москве можно найти на сайте{" "}
          <a href="https://bismoscow.com" 
             target="_blank" 
             rel="noopener noreferrer"
             className="text-blue-800 hover:underline font-medium">
            British International School in Moscow
          </a>.
        </p>
      </div>

      {/* FAQ Section */}
      <section className="bg-card rounded-lg shadow-soft border overflow-hidden">
        <div className="bg-primary text-primary-foreground p-6">
          <h2 className="text-3xl font-bold">Часто задаваемые вопросы</h2>
        </div>
        
        <div className="divide-y divide-border">
          <div className="p-6">
            <div className="font-semibold text-primary mb-3">Можно ли сдавать ЕГЭ онлайн?</div>
            <div className="text-muted-foreground">
              Нет, ЕГЭ всегда сдается очно в назначенных пунктах проведения экзаменов. Онлайн-школы готовят к экзаменам, но сдача происходит в традиционном формате.
            </div>
          </div>

          <div className="p-6">
            <div className="font-semibold text-primary mb-3">Как проходит итоговая аттестация в онлайн-школе?</div>
            <div className="text-muted-foreground">
              Итоговая аттестация включает промежуточные контрольные в течение года (могут проводиться дистанционно) и обязательную сдачу ЕГЭ в очном формате в школе-партнере.
            </div>
          </div>

          <div className="p-6">
            <div className="font-semibold text-primary mb-3">Достаточно ли знаний при сокращенном учебном времени?</div>
            <div className="text-muted-foreground">
              Да, онлайн-формат позволяет более эффективно использовать время благодаря индивидуальному подходу, отсутствию дисциплинарных проблем и фокусировке на важных для ЕГЭ темах.
            </div>
          </div>

          <div className="p-6">
            <div className="font-semibold text-primary mb-3">Что делать, если ребенок не справляется с самоорганизацией?</div>
            <div className="text-muted-foreground">
              Большинство онлайн-школ предоставляют персональных кураторов и психологическую поддержку. Также важна активная роль родителей в контроле и мотивации ученика.
            </div>
          </div>

          <div className="p-6">
            <div className="font-semibold text-primary mb-3">Признается ли московский аттестат в других регионах России?</div>
            <div className="text-muted-foreground">
              Да, аттестат государственного образца любой российской школы признается на всей территории РФ и имеет одинаковую юридическую силу.
            </div>
          </div>

          <div className="p-6">
            <div className="font-semibold text-primary mb-3">Можно ли перейти в онлайн-школу в середине 11 класса?</div>
            <div className="text-muted-foreground">
              Да, перевод возможен в любое время учебного года. Онлайн-школа поможет адаптировать программу и наверстать пропущенные темы.
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
              11 класс в онлайн-школе Москвы – дистанционное обучение
            </h1>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <time dateTime="2025-08-21">21 августа 2025</time>
              <span>•</span>
              <span>22 мин чтения</span>
            </div>
          </header>

          {content}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default MoscowOnlineGrade11;