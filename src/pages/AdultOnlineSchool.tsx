import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const AdultOnlineSchool = () => {
  useEffect(() => {
    document.title = "11 класс для взрослых в онлайн школе – образование без границ";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Пройдите 11 класс в онлайн школе: гибкий график, опытные преподаватели и поддержка 24/7. Получите аттестат без отрыва от работы и семьи.");
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = "Пройдите 11 класс в онлайн школе: гибкий график, опытные преподаватели и поддержка 24/7. Получите аттестат без отрыва от работы и семьи.";
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
              "name": "11 класс для взрослых",
              "item": "https://shkola-11-klass.ru/11_class_for_adults_online_school"
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
      <div className="bg-gradient-to-br from-blue-50 to-blue-100 border-l-4 border-accent p-6 rounded-lg">
        <h3 className="text-xl font-semibold text-accent mb-4">Для кого эта статья:</h3>
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-accent font-bold">✓</span>
            <span>Взрослые, желающие получить школьный аттестат онлайн</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-accent font-bold">✓</span>
            <span>Работающие люди, нуждающиеся в гибком графике обучения</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-accent font-bold">✓</span>
            <span>Родители с маленькими детьми, совмещающие учебу и уход за ребёнком</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-accent font-bold">✓</span>
            <span>Жители удалённых регионов или зарубежья без доступа к традиционной школе</span>
          </li>
        </ul>
      </div>

      {/* Key Conclusions Block */}
      <div className="bg-gradient-to-br from-blue-50 to-blue-100 border-l-4 border-accent p-6 rounded-lg">
        <h3 className="text-xl font-semibold text-accent mb-4">Ключевые выводы из статьи:</h3>
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-accent font-bold">✓</span>
            <span>Онлайн-обучение в 11 классе возможно в любом возрасте при наличии лицензированной школы</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-accent font-bold">✓</span>
            <span>Гибкий график позволяет совмещать учёбу с работой и семейными обязанностями</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-accent font-bold">✓</span>
            <span>Официальный аттестат онлайн-школы имеет такую же юридическую силу, как и обычной школы</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-accent font-bold">✓</span>
            <span>Стоимость обучения варьируется от 5 000 до 25 000 рублей в месяц в зависимости от тарифа</span>
          </li>
        </ul>
      </div>

      <section className="bg-card p-8 rounded-lg shadow-soft border">
        <h2 className="text-3xl font-bold text-primary border-l-4 border-accent pl-4 mb-6">
          Кому подходит онлайн-обучение в 11 классе для взрослых
        </h2>
        
        <p className="text-lg leading-relaxed mb-6">
          Получение среднего образования в онлайн-формате становится всё более популярным среди взрослых россиян. 
          Дистанционное обучение в 11 классе открывает новые возможности для тех, кто по разным причинам не смог завершить школьное образование в традиционном формате.
        </p>

        <p className="text-lg leading-relaxed mb-6">
          Онлайн-образование особенно актуально для следующих категорий взрослых:
        </p>

        <div className="overflow-x-auto mb-8">
          <Table className="w-full border rounded-lg shadow-soft">
            <TableHeader>
              <TableRow className="bg-primary text-primary-foreground">
                <TableHead className="text-primary-foreground font-semibold">Категория учащихся</TableHead>
                <TableHead className="text-primary-foreground font-semibold">Особенности ситуации</TableHead>
                <TableHead className="text-primary-foreground font-semibold">Преимущества онлайн-обучения</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Работающие взрослые</TableCell>
                <TableCell>Полная занятость, командировки, сменный график</TableCell>
                <TableCell>Возможность учиться в удобное время, сохранение дохода</TableCell>
              </TableRow>
              <TableRow className="bg-muted/50">
                <TableCell className="font-medium">Родители с детьми</TableCell>
                <TableCell>Уход за маленькими детьми, декретный отпуск</TableCell>
                <TableCell>Обучение дома без отрыва от семьи</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Люди с ОВЗ</TableCell>
                <TableCell>Ограничения в передвижении, особые потребности</TableCell>
                <TableCell>Комфортная среда, индивидуальный подход</TableCell>
              </TableRow>
              <TableRow className="bg-muted/50">
                <TableCell className="font-medium">Жители удалённых регионов</TableCell>
                <TableCell>Отсутствие качественных школ поблизости</TableCell>
                <TableCell>Доступ к лучшим педагогам и программам</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <p className="text-lg leading-relaxed mb-6">
          Качественные{" "}
          <a href="https://shkola-11-klass.ru/" 
             className="bg-gradient-to-r from-primary to-secondary text-primary-foreground px-3 py-1 rounded-md font-semibold hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5">
            онлайн школы 11 класса
          </a>{" "}
          предлагают полноценные образовательные программы с государственной аккредитацией. 
          Перейдя по ссылке, вы сможете ознакомиться с актуальными условиями поступления, стоимостью обучения и получить персональную консультацию по выбору оптимального тарифа для вашей ситуации.
        </p>

        <blockquote className="bg-gradient-to-r from-orange-50 to-orange-100 border-l-4 border-orange-500 p-6 rounded-r-lg italic text-lg relative">
          <span className="absolute text-6xl text-orange-400 -top-2 -left-2">"</span>
          Онлайн-образование — это не компромисс с качеством, а современный способ получения знаний, адаптированный под потребности взрослых учащихся.
        </blockquote>
      </section>

      <section className="bg-card p-8 rounded-lg shadow-soft border">
        <h2 className="text-3xl font-bold text-primary border-l-4 border-accent pl-4 mb-6">
          Как поступить в онлайн-школу взрослому: пошаговый алгоритм
        </h2>

        <p className="text-lg leading-relaxed mb-6">
          Процедура зачисления в онлайн-школу для взрослых имеет свои особенности. Рассмотрим детальный алгоритм действий:
        </p>

        <h3 className="text-2xl font-semibold text-secondary mt-8 mb-4">Шаг 1. Выбор школы с государственной лицензией</h3>
        <p className="text-lg leading-relaxed mb-4">
          Первый и самый важный этап — выбор образовательного учреждения. Школа обязательно должна иметь:
        </p>
        <ul className="space-y-2 ml-6 mb-6">
          <li>• Лицензию на ведение образовательной деятельности</li>
          <li>• Государственную аккредитацию программ среднего общего образования</li>
          <li>• Положительные отзывы выпускников</li>
          <li>• Опыт работы со взрослыми учащимися</li>
        </ul>

        <h3 className="text-2xl font-semibold text-secondary mt-8 mb-4">Шаг 2. Подготовка необходимых документов</h3>
        
        <div className="overflow-x-auto mb-8">
          <Table className="w-full border rounded-lg shadow-soft">
            <TableHeader>
              <TableRow className="bg-primary text-primary-foreground">
                <TableHead className="text-primary-foreground font-semibold">Документ</TableHead>
                <TableHead className="text-primary-foreground font-semibold">Для граждан РФ</TableHead>
                <TableHead className="text-primary-foreground font-semibold">Для иностранных граждан</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Удостоверение личности</TableCell>
                <TableCell>Паспорт гражданина РФ</TableCell>
                <TableCell>Паспорт с нотариальным переводом</TableCell>
              </TableRow>
              <TableRow className="bg-muted/50">
                <TableCell className="font-medium">Справка об образовании</TableCell>
                <TableCell>Справка о переводе или аттестат об основном образовании</TableCell>
                <TableCell>Документ об образовании с апостилем</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Медицинская справка</TableCell>
                <TableCell>Справка формы 086-У</TableCell>
                <TableCell>Медицинская справка установленного образца</TableCell>
              </TableRow>
              <TableRow className="bg-muted/50">
                <TableCell className="font-medium">Фотографии</TableCell>
                <TableCell>3x4 см, 2 штуки</TableCell>
                <TableCell>3x4 см, 4 штуки</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <h3 className="text-2xl font-semibold text-secondary mt-8 mb-4">Шаг 3. Подача заявления и документов</h3>
        <p className="text-lg leading-relaxed mb-4">
          Большинство онлайн-школ принимают документы в электронном виде:
        </p>
        <ul className="space-y-2 ml-6">
          <li>• Заполнение онлайн-формы на сайте школы</li>
          <li>• Загрузка сканов документов</li>
          <li>• Получение уведомления о принятии документов</li>
          <li>• Ожидание решения приёмной комиссии (3-7 рабочих дней)</li>
        </ul>
      </section>

      <section className="bg-card p-8 rounded-lg shadow-soft border">
        <h2 className="text-3xl font-bold text-primary border-l-4 border-accent pl-4 mb-6">
          Стоимость обучения и способы оплаты
        </h2>

        <p className="text-lg leading-relaxed mb-6">
          Стоимость онлайн-обучения в 11 классе варьируется в зависимости от выбранного тарифа и набора услуг:
        </p>

        <h3 className="text-2xl font-semibold text-secondary mt-8 mb-4">Тарифные планы</h3>
        
        <div className="overflow-x-auto mb-8">
          <Table className="w-full border rounded-lg shadow-soft">
            <TableHeader>
              <TableRow className="bg-gradient-to-r from-primary to-secondary text-primary-foreground">
                <TableHead className="text-primary-foreground font-semibold">Услуга</TableHead>
                <TableHead className="text-primary-foreground font-semibold">Базовый тариф</TableHead>
                <TableHead className="text-primary-foreground font-semibold">Стандартный тариф</TableHead>
                <TableHead className="text-primary-foreground font-semibold">Премиум тариф</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow className="bg-green-50">
                <TableCell className="font-medium">Стоимость в месяц</TableCell>
                <TableCell className="font-bold text-green-700">5 000 руб.</TableCell>
                <TableCell className="font-bold text-green-700">12 000 руб.</TableCell>
                <TableCell className="font-bold text-green-700">25 000 руб.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Доступ к записям уроков</TableCell>
                <TableCell className="text-center">✓</TableCell>
                <TableCell className="text-center">✓</TableCell>
                <TableCell className="text-center">✓</TableCell>
              </TableRow>
              <TableRow className="bg-muted/50">
                <TableCell className="font-medium">Онлайн-уроки с учителем</TableCell>
                <TableCell className="text-center">—</TableCell>
                <TableCell className="text-center">✓</TableCell>
                <TableCell className="text-center">✓</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Персональный куратор</TableCell>
                <TableCell className="text-center">—</TableCell>
                <TableCell className="text-center">✓</TableCell>
                <TableCell className="text-center">✓</TableCell>
              </TableRow>
              <TableRow className="bg-muted/50">
                <TableCell className="font-medium">Индивидуальные консультации</TableCell>
                <TableCell className="text-center">—</TableCell>
                <TableCell className="text-center">2 часа/месяц</TableCell>
                <TableCell className="text-center">8 часов/месяц</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Подготовка к ЕГЭ</TableCell>
                <TableCell className="text-center">Базовая</TableCell>
                <TableCell className="text-center">Расширенная</TableCell>
                <TableCell className="text-center">Интенсивная</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <h3 className="text-2xl font-semibold text-secondary mt-8 mb-4">Способы оплаты и льготы</h3>
        <ul className="space-y-3 ml-6">
          <li><strong>Единовременная оплата</strong> — скидка 10% при оплате за весь год</li>
          <li><strong>Ежемесячная оплата</strong> — удобно для планирования бюджета</li>
          <li><strong>Рассрочка</strong> — без процентов на 6-12 месяцев</li>
          <li><strong>Льготы</strong> — скидки для многодетных семей, инвалидов, военных</li>
        </ul>

        <blockquote className="bg-gradient-to-r from-primary/10 to-secondary/10 border-l-4 border-primary p-6 rounded-r-lg italic text-lg mt-8 relative">
          <span className="absolute text-6xl text-primary/20 -top-2 -left-2">"</span>
          Инвестиции в образование всегда окупаются. Получение аттестата открывает новые карьерные возможности и увеличивает доходы в среднем на 30-40%.
        </blockquote>
      </section>

      <section className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-lg">
        <h4 className="text-xl font-semibold text-orange-800 mb-4">Международный опыт онлайн-образования для взрослых</h4>
        <p className="text-orange-700 leading-relaxed mb-4">
          Зарубежные образовательные платформы активно развивают направление дистанционного среднего образования для взрослых. Например:
        </p>
        <ul className="space-y-2 text-orange-700">
          <li>• <a href="https://www.pennfoster.edu/high-school/for-adults" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline font-medium">Penn Foster High School</a> — одна из крупнейших онлайн-школ США для взрослых учащихся</li>
          <li>• <a href="https://www.k12.com/adult-learning/" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline font-medium">K12 Adult Learning Programs</a> — предлагает гибкие программы для различных категорий взрослых</li>
          <li>• <a href="https://www.keystoneschoolonline.com/adult-diploma" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline font-medium">Keystone Adult Diploma Program</a> — специализированные программы для работающих взрослых</li>
        </ul>
      </section>

      <section className="bg-card p-8 rounded-lg shadow-soft border">
        <h2 className="text-3xl font-bold text-primary border-l-4 border-accent pl-4 mb-6">
          Реальные истории выпускников
        </h2>

        <p className="text-lg leading-relaxed mb-6">
          Опыт реальных выпускников — лучший показатель эффективности онлайн-обучения:
        </p>

        <div className="bg-green-50 border border-green-300 p-6 rounded-lg mb-6">
          <h4 className="text-xl font-semibold text-green-800 mb-3">История Марины, 28 лет, мама двоих детей</h4>
          <p className="text-green-700 italic leading-relaxed">
            "После декрета поняла, что без аттестата сложно найти хорошую работу. Онлайн-школа стала спасением — училась, когда дети спали. 
            За год получила аттестат и сдала ЕГЭ на 78 баллов по русскому языку. Сейчас работаю в HR-отделе крупной компании."
          </p>
        </div>

        <div className="bg-green-50 border border-green-300 p-6 rounded-lg mb-6">
          <h4 className="text-xl font-semibold text-green-800 mb-3">История Алексея, 35 лет, водитель дальнего следования</h4>
          <p className="text-green-700 italic leading-relaxed">
            "Работа в дороге не позволяла учиться очно. В онлайн-школе мог заниматься на стоянках и дома между рейсами. 
            Получил аттестат, поступил в техникум на логиста. Теперь планирую открыть свою транспортную компанию."
          </p>
        </div>

        <h3 className="text-2xl font-semibold text-secondary mt-8 mb-4">Советы от выпускников новым ученикам</h3>
        <ul className="space-y-2 ml-6">
          <li>• Составьте чёткий график обучения и придерживайтесь его</li>
          <li>• Не стесняйтесь задавать вопросы преподавателям и кураторам</li>
          <li>• Используйте все доступные ресурсы — записи уроков, дополнительные материалы</li>
          <li>• Создайте дома специальное место для учёбы</li>
          <li>• Найдите поддержку среди других взрослых учеников</li>
        </ul>
      </section>

      {/* FAQ Section */}
      <section className="bg-muted/30 p-8 rounded-xl">
        <h2 className="text-3xl font-bold text-primary mb-8">FAQ — Часто задаваемые вопросы</h2>
        
        <div className="space-y-6">
          <div className="bg-card p-6 rounded-lg border-l-4 border-primary">
            <div className="font-semibold text-primary mb-3">Признается ли аттестат онлайн-школы работодателями и вузами?</div>
            <div className="text-muted-foreground">
              Да, аттестат онлайн-школы с государственной аккредитацией имеет такую же юридическую силу, как и аттестат обычной школы. 
              Он признается всеми работодателями и высшими учебными заведениями России.
            </div>
          </div>

          <div className="bg-card p-6 rounded-lg border-l-4 border-primary">
            <div className="font-semibold text-primary mb-3">Можно ли совмещать работу и онлайн-обучение?</div>
            <div className="text-muted-foreground">
              Да, это одно из главных преимуществ онлайн-формата. Большинство занятий проводится в вечернее время, 
              а записи уроков доступны круглосуточно. Многие ученики успешно совмещают полный рабочий день с обучением.
            </div>
          </div>

          <div className="bg-card p-6 rounded-lg border-l-4 border-primary">
            <div className="font-semibold text-primary mb-3">Сколько времени нужно уделять учебе ежедневно?</div>
            <div className="text-muted-foreground">
              В среднем требуется 2-3 часа ежедневно: 1-2 часа на изучение нового материала и 1 час на выполнение домашних заданий. 
              В периоды подготовки к контрольным и ЕГЭ время может увеличиваться до 4-5 часов в день.
            </div>
          </div>

          <div className="bg-card p-6 rounded-lg border-l-4 border-primary">
            <div className="font-semibold text-primary mb-3">Что делать при технических сбоях во время уроков?</div>
            <div className="text-muted-foreground">
              Все уроки записываются и сохраняются в личном кабинете. При технических проблемах можно посмотреть запись или обратиться в службу поддержки. 
              Большинство школ также проводят повторные трансляции важных уроков.
            </div>
          </div>

          <div className="bg-card p-6 rounded-lg border-l-4 border-primary">
            <div className="font-semibold text-primary mb-3">Как происходит сдача ЕГЭ для учеников онлайн-школ?</div>
            <div className="text-muted-foreground">
              Сдача ЕГЭ происходит в обычных пунктах проведения экзаменов по месту регистрации. 
              Онлайн-школа помогает с оформлением документов и определением ближайшего пункта сдачи. 
              Процедура полностью идентична сдаче ЕГЭ выпускниками обычных школ.
            </div>
          </div>

          <div className="bg-card p-6 rounded-lg border-l-4 border-primary">
            <div className="font-semibold text-primary mb-3">Есть ли возрастные ограничения для поступления?</div>
            <div className="text-muted-foreground">
              Нет, верхних возрастных ограничений для получения среднего образования не существует. 
              В онлайн-школах учатся люди от 18 до 60+ лет. Главное требование — наличие основного общего образования (9 классов).
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
              11 класс для взрослых в онлайн школе – образование без границ
            </h1>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <time dateTime="2025-08-21">21 августа 2025</time>
              <span>•</span>
              <span>18 мин чтения</span>
            </div>
          </header>

          {content}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AdultOnlineSchool;