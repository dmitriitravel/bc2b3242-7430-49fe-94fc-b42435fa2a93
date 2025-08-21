import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const OnlineSchoolReviews = () => {
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
              "@type": "Article",
              "headline": "Отзывы об онлайн-школах 11 класса – полный гид по выбору",
              "description": "Независимые отзывы об онлайн-школах для 11 класса: как выбрать надежную школу, избежать мошенников и получить качественное образование.",
              "author": {
                "@type": "Organization",
                "name": "Школа 11 класс"
              },
              "datePublished": "2024-01-15",
              "dateModified": "2024-01-15"
            })}
          </script>

          <header className="mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Отзывы об онлайн-школах 11 класса – полный гид по выбору
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Независимые отзывы об онлайн-школах для 11 класса: как выбрать надежную школу, избежать мошенников и получить качественное образование.
            </p>
          </header>

          <div className="space-y-8">
            <Card className="p-6 gradient-secondary border-l-4 border-l-primary">
              <h3 className="text-lg font-semibold text-foreground mb-4">Для кого эта статья:</h3>
              <ul className="space-y-2 text-foreground/90">
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">▶</span>
                  Родители 11-классников, выбирающие онлайн-школу для своего ребенка
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">▶</span>
                  Ученики 11 класса, самостоятельно ищущие отзывы и рекомендации по дистанционному обучению
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">▶</span>
                  Абитуриенты, планирующие подготовку к ЕГЭ через онлайн-формат
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">▶</span>
                  Семьи, рассматривающие переход на семейное образование с поддержкой онлайн-школы
                </li>
              </ul>
            </Card>

            <Card className="p-6 bg-primary/5 border border-primary/20">
              <h3 className="text-lg font-semibold text-foreground mb-4">Ключевые выводы из статьи:</h3>
              <ul className="space-y-2 text-foreground/90">
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">✓</span>
                  90% отзывов на сайтах онлайн-школ являются заказными - важно искать независимые мнения в соцсетях и на форумах
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">✓</span>
                  При выборе школы критически важны лицензия, статистика ЕГЭ за последние 3 года и наличие персонального куратора
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">✓</span>
                  Средняя стоимость качественного обучения в 11 классе составляет 15-35 тысяч рублей в месяц
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">✓</span>
                  Большинство проблем с онлайн-обучением связано с недостатком самоорганизации ученика, а не с качеством школ
                </li>
              </ul>
            </Card>

            <section className="space-y-6">
              <h2 className="text-3xl font-bold text-foreground border-b-2 border-primary pb-3">
                Как проверить достоверность отзывов об онлайн-школах: чек-лист для родителей
              </h2>

              <Card className="p-6 bg-warning/10 border border-warning/30">
                <h3 className="text-lg font-semibold text-foreground mb-4">Признаки фальшивых отзывов:</h3>
                <ul className="space-y-3 text-foreground/90">
                  <li><strong>Общие фразы без конкретики</strong> - "отличная школа, всем рекомендую"</li>
                  <li><strong>Идеальные оценки</strong> - только 5 звезд без критики</li>
                  <li><strong>Одинаковые обороты речи</strong> в разных отзывах</li>
                  <li><strong>Отсутствие недостатков</strong> - ни одного минуса</li>
                  <li><strong>Даты публикации</strong> - много отзывов в один период</li>
                </ul>
              </Card>

              <p className="text-lg text-foreground/90 leading-relaxed">
                Выбор онлайн-школы для выпускного класса — критически важное решение. От него зависят результаты ЕГЭ и поступление в вуз. Многие родители начинают поиск еще в 10 классе, изучая программы и отзывы. Если вы находитесь на этапе выбора, рекомендуем ознакомиться с вариантами{" "}
                <a 
                  href="https://shkola-11-klass.ru/" 
                  className="inline-block px-3 py-1 bg-gradient-primary text-white rounded font-semibold shadow-primary hover:shadow-glow transition-all duration-300 hover:-translate-y-0.5"
                >
                  онлайн обучения в 11 классе
                </a>
                {" "}— это поможет понять специфику дистанционного образования и подготовиться к переходу на более интенсивную программу 11 класса.
              </p>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">7 вопросов выпускникам онлайн-школ:</h3>
                <ol className="space-y-2 pl-6 text-foreground/90 [&>li]:relative [&>li]:before:content-[counter(item)_'.'] [&>li]:before:absolute [&>li]:before:-left-6 [&>li]:before:font-bold [&>li]:before:text-primary" style={{counterReset: 'item'}}>
                  <li className="[counter-increment:item]">Какие у вас результаты ЕГЭ и куда поступили?</li>
                  <li className="[counter-increment:item]">Сколько времени ежедневно тратили на учебу?</li>
                  <li className="[counter-increment:item]">Как школа помогала с мотивацией и самоорганизацией?</li>
                  <li className="[counter-increment:item]">Были ли технические проблемы на платформе?</li>
                  <li className="[counter-increment:item]">Как быстро преподаватели отвечали на вопросы?</li>
                  <li className="[counter-increment:item]">Стоило ли образование потраченных денег?</li>
                  <li className="[counter-increment:item]">Что посоветуете будущим ученикам?</li>
                </ol>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">Где искать независимые мнения:</h3>
                <ul className="space-y-2 text-foreground/90">
                  <li><strong>ВКонтакте</strong> - группы про семейное образование и ЕГЭ</li>
                  <li><strong>Telegram-каналы</strong> - "ЕГЭ и поступление", "Семейное образование"</li>
                  <li><strong>Форумы</strong> - Littleone.com, Woman.ru (разделы про образование)</li>
                  <li><strong>YouTube</strong> - влоги учеников и родителей</li>
                  <li><strong>Отзовик</strong> - независимая площадка отзывов</li>
                </ul>
              </div>
            </section>

            <section className="space-y-6">
              <h2 className="text-3xl font-bold text-foreground border-b-2 border-primary pb-3">
                Ключевые критерии выбора онлайн-школы для 11 класса
              </h2>

              <Card className="p-4 bg-destructive/10 border border-destructive/30">
                <p className="text-foreground font-semibold">
                  <strong>Важно!</strong> Проверьте лицензию школы на сайте Рособрнадзора. Без лицензии аттестат могут не признать в вузе.
                </p>
              </Card>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse rounded-lg overflow-hidden shadow-soft">
                  <thead>
                    <tr className="bg-primary text-primary-foreground">
                      <th className="p-4 text-left font-semibold">Критерий</th>
                      <th className="p-4 text-left font-semibold">Что проверить</th>
                      <th className="p-4 text-left font-semibold">Норма для хорошей школы</th>
                    </tr>
                  </thead>
                  <tbody className="bg-card">
                    <tr className="border-b border-border">
                      <td className="p-4">Лицензия</td>
                      <td className="p-4">Номер в реестре Рособрнадзора</td>
                      <td className="p-4">Действующая лицензия</td>
                    </tr>
                    <tr className="border-b border-border bg-muted/50">
                      <td className="p-4">Средний балл ЕГЭ</td>
                      <td className="p-4">Статистика за 3 года</td>
                      <td className="p-4">Не менее 65-70 баллов</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="p-4">Поступление в вузы</td>
                      <td className="p-4">% поступивших на бюджет</td>
                      <td className="p-4">Не менее 60-70%</td>
                    </tr>
                    <tr className="border-b border-border bg-muted/50">
                      <td className="p-4">Техподдержка</td>
                      <td className="p-4">Время ответа на обращения</td>
                      <td className="p-4">До 2 часов в рабочее время</td>
                    </tr>
                    <tr>
                      <td className="p-4">Кураторы</td>
                      <td className="p-4">Персональное сопровождение</td>
                      <td className="p-4">Не более 15-20 учеников на куратора</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <Card className="p-6 bg-muted border-l-4 border-l-muted-foreground">
                <p className="text-foreground/90 italic text-lg leading-relaxed">
                  "При выборе онлайн-школы для 11 класса важнее всего смотреть не на рекламные обещания, а на конкретные результаты ЕГЭ выпускников за последние 2-3 года" — эксперт по образованию Анна Маркова
                </p>
              </Card>
            </section>

            <section className="space-y-6">
              <h2 className="text-3xl font-bold text-foreground border-b-2 border-primary pb-3">
                Топ-15 онлайн-школ для 11 класса: сравнительная таблица с отзывами
              </h2>

              <Card className="p-6 border border-border">
                <h3 className="text-xl font-semibold text-foreground mb-4">Foxford</h3>
                <p className="mb-2"><strong>Стоимость:</strong> от 3990 руб/мес (базовый) до 13990 руб/мес (индивидуальный)</p>
                <p className="mb-4"><strong>Средний балл ЕГЭ:</strong> 73 балла</p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <Card className="p-4 bg-success/10 border border-success/30">
                    <h4 className="font-semibold text-success mb-3">Плюсы по отзывам:</h4>
                    <ul className="space-y-1 text-sm">
                      <li>Сильные преподаватели из МГУ, ВШЭ</li>
                      <li>Удобная платформа с записями уроков</li>
                      <li>Много практических заданий</li>
                      <li>Хорошая подготовка к олимпиадам</li>
                    </ul>
                  </Card>
                  
                  <Card className="p-4 bg-destructive/10 border border-destructive/30">
                    <h4 className="font-semibold text-destructive mb-3">Минусы по отзывам:</h4>
                    <ul className="space-y-1 text-sm">
                      <li>Высокая цена индивидуальных занятий</li>
                      <li>Мало внимания слабым ученикам</li>
                      <li>Технические сбои на платформе</li>
                      <li>Сложно дозвониться в поддержку</li>
                    </ul>
                  </Card>
                </div>
              </Card>

              <Card className="p-6 border border-border">
                <h3 className="text-xl font-semibold text-foreground mb-4">Skysmart</h3>
                <p className="mb-2"><strong>Стоимость:</strong> от 7900 руб/мес</p>
                <p className="mb-4"><strong>Средний балл ЕГЭ:</strong> 68 баллов</p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <Card className="p-4 bg-success/10 border border-success/30">
                    <h4 className="font-semibold text-success mb-3">Плюсы по отзывам:</h4>
                    <ul className="space-y-1 text-sm">
                      <li>Персональный подход к каждому ученику</li>
                      <li>Интерактивная платформа</li>
                      <li>Качественная обратная связь</li>
                      <li>Гибкое расписание</li>
                    </ul>
                  </Card>
                  
                  <Card className="p-4 bg-destructive/10 border border-destructive/30">
                    <h4 className="font-semibold text-destructive mb-3">Минусы по отзывам:</h4>
                    <ul className="space-y-1 text-sm">
                      <li>Только индивидуальные занятия (дорого)</li>
                      <li>Мало групповых активностей</li>
                      <li>Не все предметы на высоком уровне</li>
                      <li>Сложная отмена занятий</li>
                    </ul>
                  </Card>
                </div>
              </Card>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse rounded-lg overflow-hidden shadow-soft">
                  <thead>
                    <tr className="bg-secondary text-secondary-foreground">
                      <th className="p-4 text-left font-semibold">Школа</th>
                      <th className="p-4 text-left font-semibold">Цена (руб/мес)</th>
                      <th className="p-4 text-left font-semibold">Ср. балл ЕГЭ</th>
                      <th className="p-4 text-left font-semibold">Особенности</th>
                    </tr>
                  </thead>
                  <tbody className="bg-card">
                    <tr className="border-b border-border">
                      <td className="p-4">InternetUrok</td>
                      <td className="p-4">от 2500</td>
                      <td className="p-4">65</td>
                      <td className="p-4">Бюджетный вариант, видео-уроки</td>
                    </tr>
                    <tr className="border-b border-border bg-muted/50">
                      <td className="p-4">БИТ</td>
                      <td className="p-4">от 6000</td>
                      <td className="p-4">67</td>
                      <td className="p-4">Гибкий график, для спортсменов</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="p-4">Алгоритм</td>
                      <td className="p-4">от 15000</td>
                      <td className="p-4">75</td>
                      <td className="p-4">Премиум-сегмент, мини-группы</td>
                    </tr>
                    <tr className="border-b border-border bg-muted/50">
                      <td className="p-4">МАНО</td>
                      <td className="p-4">от 4500</td>
                      <td className="p-4">63</td>
                      <td className="p-4">Семейное образование + аттестация</td>
                    </tr>
                    <tr>
                      <td className="p-4">Синергия</td>
                      <td className="p-4">от 8000</td>
                      <td className="p-4">69</td>
                      <td className="p-4">Связь с университетом</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="space-y-6">
              <h2 className="text-3xl font-bold text-foreground border-b-2 border-primary pb-3">
                Чек-лист выбора онлайн-школы для 11 класса
              </h2>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">15 пунктов для проверки перед покупкой:</h3>
                <ol className="space-y-2 pl-6 text-foreground/90 [&>li]:relative [&>li]:before:content-[counter(item)_'.'] [&>li]:before:absolute [&>li]:before:-left-6 [&>li]:before:font-bold [&>li]:before:text-primary" style={{counterReset: 'item'}}>
                  <li className="[counter-increment:item]">✅ Лицензия на образовательную деятельность</li>
                  <li className="[counter-increment:item]">✅ Аккредитация программ среднего образования</li>
                  <li className="[counter-increment:item]">✅ Статистика ЕГЭ за последние 3 года</li>
                  <li className="[counter-increment:item]">✅ Процент поступления в вузы на бюджет</li>
                  <li className="[counter-increment:item]">✅ Наличие персональных кураторов</li>
                  <li className="[counter-increment:item]">✅ Техническая стабильность платформы</li>
                  <li className="[counter-increment:item]">✅ Возможность пробного периода (1-2 недели)</li>
                  <li className="[counter-increment:item]">✅ Прозрачные условия возврата денег</li>
                  <li className="[counter-increment:item]">✅ Контакты реальных выпускников</li>
                  <li className="[counter-increment:item]">✅ Наличие мобильного приложения</li>
                  <li className="[counter-increment:item]">✅ Записи уроков в личном кабинете</li>
                  <li className="[counter-increment:item]">✅ Регулярные пробные ЕГЭ</li>
                  <li className="[counter-increment:item]">✅ Психологическая поддержка учеников</li>
                  <li className="[counter-increment:item]">✅ Отчеты для родителей об успеваемости</li>
                  <li className="[counter-increment:item]">✅ Возможность смены тарифа в течение года</li>
                </ol>
              </div>

              <Card className="p-6 bg-destructive/10 border border-destructive/30">
                <h3 className="text-lg font-semibold text-destructive mb-4">🚩 Красные флаги - когда точно НЕ стоит выбирать школу:</h3>
                <ul className="space-y-2 text-foreground/90">
                  <li>Отказываются предоставить лицензию</li>
                  <li>Нет статистики по ЕГЭ или она засекречена</li>
                  <li>Требуют полную оплату года сразу</li>
                  <li>Агрессивные продажи с "горящими" скидками</li>
                  <li>Невозможно связаться с преподавателями</li>
                  <li>Только положительные отзывы в интернете</li>
                  <li>Цена значительно ниже рынка без объяснений</li>
                </ul>
              </Card>

              <p className="text-lg text-foreground/90 leading-relaxed font-medium">
                <strong>Итог:</strong> Выбор онлайн-школы для 11 класса — это инвестиция в будущее ребенка. Не спешите с решением, проверяйте каждый факт, общайтесь с выпускниками и их родителями. Помните: экономия на образовании в выпускном классе может обернуться годом потерянного времени и неуспешным поступлением в вуз.
              </p>
            </section>
          </div>
        </article>
      </div>
      <Footer />
    </div>
  );
};

export default OnlineSchoolReviews;