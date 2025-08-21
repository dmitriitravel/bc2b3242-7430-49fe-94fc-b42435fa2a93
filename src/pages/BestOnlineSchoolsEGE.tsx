import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const BestOnlineSchoolsEGE = () => {
  useEffect(() => {
    document.title = "Лучшие онлайн-школы для подготовки к ЕГЭ 11 класса";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Подберите лучшую онлайн-школу для подготовки к ЕГЭ в 11 классе. Сравнение программ, цены, отзывы и советы по выбору эффективных курсов.");
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = "Подберите лучшую онлайн-школу для подготовки к ЕГЭ в 11 классе. Сравнение программ, цены, отзывы и советы по выбору эффективных курсов.";
      document.head.appendChild(meta);
    }
  }, []);

  const content = (
    <article className="max-w-4xl mx-auto px-4 py-8 space-y-8">
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
                  "name": "Лучшие онлайн-школы ЕГЭ",
                  "item": "https://shkola-11-klass.ru/best-online-schools-ege-11th-grade"
                }
              ]
            },
            {
              "@type": "Article",
              "headline": "Лучшие онлайн-школы для подготовки к ЕГЭ 11 класса",
              "description": "Подберите лучшую онлайн-школу для подготовки к ЕГЭ в 11 классе. Сравнение программ, цены, отзывы и советы по выбору эффективных курсов.",
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

      {/* Target Audience Block */}
      <div className="bg-gradient-to-br from-purple-600 to-blue-600 text-white p-8 rounded-xl shadow-lg">
        <h3 className="text-xl font-semibold mb-4">Для кого эта статья:</h3>
        <ul className="space-y-2">
          <li className="flex items-start gap-3">
            <span className="text-accent font-bold">✓</span>
            Ученики 11-х классов, готовящиеся к ЕГЭ
          </li>
          <li className="flex items-start gap-3">
            <span className="text-accent font-bold">✓</span>
            Родители школьников, выбирающие онлайн-курсы для подготовки к ЕГЭ
          </li>
          <li className="flex items-start gap-3">
            <span className="text-accent font-bold">✓</span>
            Репетиторы и школьные учителя, рекомендующие образовательные платформы
          </li>
          <li className="flex items-start gap-3">
            <span className="text-accent font-bold">✓</span>
            Методисты и кураторы образовательных программ
          </li>
        </ul>
      </div>

      {/* Key Conclusions Block */}
      <div className="bg-gradient-to-br from-emerald-600 to-teal-600 text-white p-8 rounded-xl shadow-lg">
        <h3 className="text-xl font-semibold mb-4">Ключевые выводы из статьи:</h3>
        <ul className="space-y-2">
          <li className="flex items-start gap-3">
            <span className="text-accent font-bold">✓</span>
            Выбор онлайн-школы должен основываться на средних баллах выпускников и формате занятий, а не на рекламных обещаниях
          </li>
          <li className="flex items-start gap-3">
            <span className="text-accent font-bold">✓</span>
            Стоимость качественной подготовки к ЕГЭ онлайн варьируется от 20 000 до 80 000 рублей в год в зависимости от количества предметов
          </li>
          <li className="flex items-start gap-3">
            <span className="text-accent font-bold">✓</span>
            Универсальные платформы подходят для базовой подготовки, специализированные школы — для достижения высоких баллов по конкретным предметам
          </li>
          <li className="flex items-start gap-3">
            <span className="text-accent font-bold">✓</span>
            Обязательно используйте пробные уроки и изучайте условия возврата денег перед покупкой курса
          </li>
        </ul>
      </div>

      <h2 className="text-3xl font-bold text-primary border-l-4 border-primary pl-4 mt-8">
        Как правильно выбрать онлайн-школу для подготовки к ЕГЭ: 7 ключевых критериев
      </h2>

      <p className="text-lg leading-relaxed">
        При выборе онлайн-платформы для подготовки к ЕГЭ в 11 классе важно опираться на конкретные показатели эффективности, а не только на яркую рекламу. Рассмотрим семь основных критериев, которые помогут принять правильное решение.
      </p>

      <h3 className="text-2xl font-semibold text-secondary mt-6">1. Средний балл выпускников по предметам</h3>

      <p className="leading-relaxed">
        Это главный показатель качества обучения. Серьезные онлайн-школы публикуют статистику своих выпускников:
      </p>

      <div className="overflow-x-auto">
        <Table className="w-full border rounded-lg shadow-soft">
          <TableHeader>
            <TableRow className="bg-primary text-primary-foreground">
              <TableHead className="text-primary-foreground font-semibold">Показатель</TableHead>
              <TableHead className="text-primary-foreground font-semibold">Хорошая школа</TableHead>
              <TableHead className="text-primary-foreground font-semibold">Средняя школа</TableHead>
              <TableHead className="text-primary-foreground font-semibold">Слабая школа</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">Математика профиль</TableCell>
              <TableCell>75+ баллов</TableCell>
              <TableCell>65-74 балла</TableCell>
              <TableCell>Менее 65 баллов</TableCell>
            </TableRow>
            <TableRow className="bg-muted/50">
              <TableCell className="font-medium">Русский язык</TableCell>
              <TableCell>80+ баллов</TableCell>
              <TableCell>70-79 баллов</TableCell>
              <TableCell>Менее 70 баллов</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Обществознание</TableCell>
              <TableCell>70+ баллов</TableCell>
              <TableCell>60-69 баллов</TableCell>
              <TableCell>Менее 60 баллов</TableCell>
            </TableRow>
            <TableRow className="bg-muted/50">
              <TableCell className="font-medium">Физика</TableCell>
              <TableCell>65+ баллов</TableCell>
              <TableCell>55-64 балла</TableCell>
              <TableCell>Менее 55 баллов</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      {/* Highlight Link Block */}
      <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 border-2 border-yellow-400 p-6 rounded-lg text-center">
        <p className="text-yellow-800">
          При выборе образовательной платформы стоит также рассмотреть полноценные{" "}
          <a 
            href="https://shkola-11-klass.ru/" 
            className="font-bold text-yellow-700 hover:text-yellow-900 hover:underline transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            дистанционные школы с 11 классом
          </a>
          , которые предлагают не только подготовку к ЕГЭ, но и полное среднее образование. На этой странице вы найдете подробный обзор лицензированных онлайн-школ, их аккредитацию и возможности получения официального аттестата, что может стать оптимальным решением для комплексной подготовки к экзаменам.
        </p>
      </div>

      <h3 className="text-2xl font-semibold text-secondary mt-6">2. Формат занятий: живые вебинары vs записи</h3>
      <p className="leading-relaxed">
        Живые вебинары обеспечивают лучшее взаимодействие с преподавателем и мотивацию к регулярным занятиям. Записи удобны для повторения материала, но требуют высокой самодисциплины.
      </p>

      <h3 className="text-2xl font-semibold text-secondary mt-6">3. Система проверки домашних заданий</h3>
      <p className="leading-relaxed mb-3">Качественная школа предлагает:</p>
      <ul className="space-y-2 ml-6">
        <li>• Проверку домашних заданий в течение 24-48 часов</li>
        <li>• Развернутые комментарии к ошибкам</li>
        <li>• Возможность пересдачи заданий</li>
        <li>• Регулярные контрольные работы в формате ЕГЭ</li>
      </ul>

      {/* Quote Block */}
      <blockquote className="bg-muted/50 border-l-4 border-blue-500 p-6 rounded-r-lg italic text-lg">
        <strong>Важно:</strong> "Не покупайте курс сразу на весь год. Начните с минимального пакета или месячной подписки, чтобы оценить качество обучения" — советует методист образовательной платформы "Фоксфорд"
      </blockquote>

      <h2 className="text-3xl font-bold text-primary border-l-4 border-primary pl-4 mt-8">
        ТОП-15 онлайн-школ для подготовки к ЕГЭ: детальный рейтинг
      </h2>

      <h3 className="text-2xl font-semibold text-secondary mt-6">Универсальные платформы (все предметы)</h3>

      <div className="bg-card border border-border rounded-xl p-6 my-6 border-l-4 border-l-primary">
        <h4 className="text-xl font-semibold text-primary mb-3">Фоксфорд</h4>
        <p className="mb-2"><strong>Специализация:</strong> Все предметы ЕГЭ, особенно сильны в математике и физике</p>
        <p className="mb-2"><strong>Средний балл выпускников 2024:</strong> Математика профиль - 78 баллов, Русский язык - 82 балла</p>
        <p className="mb-4"><strong>Стоимость:</strong> от 2 990 ₽/месяц за один предмет, годовые курсы от 25 000 ₽</p>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-success/10 border border-success/30 p-4 rounded-lg">
            <h5 className="font-semibold text-success mb-3">Плюсы:</h5>
            <ul className="space-y-1 text-sm">
              <li>• Высокие результаты выпускников</li>
              <li>• Сильный преподавательский состав</li>
              <li>• Удобная платформа и мобильное приложение</li>
              <li>• Большой архив записей</li>
            </ul>
          </div>
          
          <div className="bg-destructive/10 border border-destructive/30 p-4 rounded-lg">
            <h5 className="font-semibold text-destructive mb-3">Минусы:</h5>
            <ul className="space-y-1 text-sm">
              <li>• Высокая стоимость</li>
              <li>• Большие группы (до 1000 человек)</li>
              <li>• Мало индивидуального внимания</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-card border border-border rounded-xl p-6 my-6 border-l-4 border-l-secondary">
        <h4 className="text-xl font-semibold text-secondary mb-3">Умскул</h4>
        <p className="mb-2"><strong>Специализация:</strong> Массовая подготовка по всем предметам ЕГЭ</p>
        <p className="mb-2"><strong>Средний балл выпускников 2024:</strong> Математика профиль - 75 баллов, Русский язык - 79 баллов</p>
        <p className="mb-4"><strong>Стоимость:</strong> от 1 990 ₽/месяц, пакеты от 15 000 ₽ за год</p>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-success/10 border border-success/30 p-4 rounded-lg">
            <h5 className="font-semibold text-success mb-3">Плюсы:</h5>
            <ul className="space-y-1 text-sm">
              <li>• Доступные цены</li>
              <li>• Молодые энергичные преподаватели</li>
              <li>• Активное комьюнити учеников</li>
              <li>• Современная подача материала</li>
            </ul>
          </div>
          
          <div className="bg-destructive/10 border border-destructive/30 p-4 rounded-lg">
            <h5 className="font-semibold text-destructive mb-3">Минусы:</h5>
            <ul className="space-y-1 text-sm">
              <li>• Поверхностная подача сложных тем</li>
              <li>• Акцент на мотивацию, а не на знания</li>
              <li>• Много маркетинговых обещаний</li>
            </ul>
          </div>
        </div>
      </div>

      <h3 className="text-2xl font-semibold text-secondary mt-8">Специализированные школы по предметам</h3>

      <div className="bg-card border border-border rounded-xl p-6 my-6 border-l-4 border-l-accent">
        <h4 className="text-xl font-semibold text-accent mb-3">Школково (математика, физика)</h4>
        <p className="mb-2"><strong>Средний балл выпускников 2024:</strong> Математика профиль - 84 балла, Физика - 78 баллов</p>
        <p className="mb-4"><strong>Стоимость:</strong> от 4 990 ₽/месяц, годовой курс математики - 45 000 ₽</p>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-success/10 border border-success/30 p-4 rounded-lg">
            <h5 className="font-semibold text-success mb-3">Плюсы:</h5>
            <ul className="space-y-1 text-sm">
              <li>• Лучшие результаты по математике в РФ</li>
              <li>• Авторские методики решения</li>
              <li>• Подробный разбор каждой задачи</li>
              <li>• Тренажер с тысячами задач</li>
            </ul>
          </div>
          
          <div className="bg-destructive/10 border border-destructive/30 p-4 rounded-lg">
            <h5 className="font-semibold text-destructive mb-3">Минусы:</h5>
            <ul className="space-y-1 text-sm">
              <li>• Очень высокая стоимость</li>
              <li>• Подходит только сильным ученикам</li>
              <li>• Сложно без базовых знаний</li>
            </ul>
          </div>
        </div>
      </div>

      <blockquote className="bg-muted/50 border-l-4 border-blue-500 p-6 rounded-r-lg italic text-lg">
        "Онлайн-образование показывает высокую эффективность при правильном выборе платформы. Главное — это система контроля знаний и обратная связь с преподавателем" — отмечает исследование методистов образовательных технологий.
      </blockquote>

      <h2 className="text-3xl font-bold text-primary border-l-4 border-primary pl-4 mt-8">
        Сравнительная таблица онлайн-школ
      </h2>

      <div className="overflow-x-auto">
        <Table className="w-full border rounded-lg shadow-soft">
          <TableHeader>
            <TableRow className="bg-primary text-primary-foreground">
              <TableHead className="text-primary-foreground font-semibold">Школа</TableHead>
              <TableHead className="text-primary-foreground font-semibold">Стоимость/год</TableHead>
              <TableHead className="text-primary-foreground font-semibold">Ср. балл ЕГЭ</TableHead>
              <TableHead className="text-primary-foreground font-semibold">Формат</TableHead>
              <TableHead className="text-primary-foreground font-semibold">Куратор</TableHead>
              <TableHead className="text-primary-foreground font-semibold">Гарантия</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">Фоксфорд</TableCell>
              <TableCell>25 000 - 60 000 ₽</TableCell>
              <TableCell>78-82</TableCell>
              <TableCell>Вебинары + записи</TableCell>
              <TableCell>Да</TableCell>
              <TableCell>14 дней</TableCell>
            </TableRow>
            <TableRow className="bg-muted/50">
              <TableCell className="font-medium">Умскул</TableCell>
              <TableCell>15 000 - 35 000 ₽</TableCell>
              <TableCell>75-79</TableCell>
              <TableCell>Вебинары + записи</TableCell>
              <TableCell>Да</TableCell>
              <TableCell>7 дней</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Школково</TableCell>
              <TableCell>35 000 - 80 000 ₽</TableCell>
              <TableCell>84-88</TableCell>
              <TableCell>Вебинары + тренажер</TableCell>
              <TableCell>Нет</TableCell>
              <TableCell>30 дней</TableCell>
            </TableRow>
            <TableRow className="bg-muted/50">
              <TableCell className="font-medium">Сотка</TableCell>
              <TableCell>28 000 - 55 000 ₽</TableCell>
              <TableCell>76-80</TableCell>
              <TableCell>Интенсивы</TableCell>
              <TableCell>Да</TableCell>
              <TableCell>14 дней</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">99 Баллов</TableCell>
              <TableCell>22 000 - 45 000 ₽</TableCell>
              <TableCell>74-78</TableCell>
              <TableCell>Вебинары + записи</TableCell>
              <TableCell>Да</TableCell>
              <TableCell>Возврат при провале</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      {/* External links info block */}
      <div className="bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-300 p-6 rounded-lg">
        <h4 className="text-xl font-semibold text-blue-800 mb-4">📚 Дополнительная информация о российском образовании</h4>
        <p className="text-blue-700 mb-3">
          Для более глубокого понимания системы образования в России рекомендуем изучить международные исследования:
        </p>
        <ul className="space-y-2 text-blue-700">
          <li>
            • <a href="https://lidenz.com/ege-final-school-exams-russia/" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="text-blue-800 hover:underline font-medium">
              Подробная информация о системе ЕГЭ в России
            </a> — комплексный анализ экзаменационной системы
          </li>
          <li>
            • <a href="https://educate-online.org" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="text-blue-800 hover:underline font-medium">
              Международный каталог дистанционного образования
            </a> — сравнение мировых практик онлайн-обучения
          </li>
          <li>
            • <a href="https://qualityhub.techinfus.com/en/rating-of/7154-luchshie-onlajn-shkoly-po-russkomu-jazyku-rejting.html" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="text-blue-800 hover:underline font-medium">
              Рейтинг онлайн-школ по русскому языку
            </a> — международная оценка качества обучения
          </li>
        </ul>
      </div>

      <h2 className="text-3xl font-bold text-primary border-l-4 border-primary pl-4 mt-8">
        Стоимость подготовки: от бесплатных курсов до премиум-пакетов
      </h2>

      <h3 className="text-2xl font-semibold text-secondary mt-6">Бюджетные варианты (до 20 000 рублей в год)</h3>
      <ul className="space-y-2 ml-6">
        <li>• <strong>YouTube-каналы школ</strong> — бесплатно, но требует самодисциплины</li>
        <li>• <strong>Умскул</strong> — 15 000 ₽ за базовый пакет</li>
        <li>• <strong>Решу ЕГЭ</strong> — бесплатный тренажер с объяснениями</li>
      </ul>

      <h3 className="text-2xl font-semibold text-secondary mt-6">Средний сегмент (20 000 - 50 000 рублей)</h3>
      <p className="leading-relaxed mb-3">Оптимальный выбор для большинства учеников:</p>
      <ul className="space-y-2 ml-6">
        <li>• <strong>Фоксфорд</strong> — 25 000 - 35 000 ₽</li>
        <li>• <strong>99 Баллов</strong> — 22 000 - 30 000 ₽</li>
        <li>• <strong>Сотка</strong> — 28 000 - 40 000 ₽</li>
      </ul>

      <h3 className="text-2xl font-semibold text-secondary mt-6">Премиум-школы (от 50 000 рублей)</h3>
      <ul className="space-y-2 ml-6">
        <li>• <strong>Школково</strong> — 45 000 - 80 000 ₽</li>
        <li>• <strong>Коалиция</strong> — 60 000 - 120 000 ₽</li>
        <li>• <strong>Годограф</strong> — 70 000 - 150 000 ₽</li>
      </ul>

      <blockquote className="bg-muted/50 border-l-4 border-blue-500 p-6 rounded-r-lg italic text-lg">
        <strong>Совет экспертов:</strong> "Не гонитесь за самым дорогим курсом. Эффективность подготовки на 70% зависит от мотивации и регулярности занятий ученика, и только на 30% — от качества курса."
      </blockquote>

      <h2 className="text-3xl font-bold text-primary border-l-4 border-primary pl-4 mt-8">
        Чек-лист: 10 вопросов перед покупкой курса
      </h2>

      <div className="bg-gradient-to-br from-green-50 to-green-100 border border-green-300 p-6 rounded-lg">
        <ol className="space-y-3 ml-6 list-decimal">
          <li>Какой средний балл ЕГЭ у выпускников прошлого года по интересующему предмету?</li>
          <li>Можно ли получить полную статистику результатов (не только лучших учеников)?</li>
          <li>Есть ли возможность бесплатного пробного урока или недели?</li>
          <li>Какие условия возврата денег при неудовлетворенности курсом?</li>
          <li>Проверяются ли домашние задания преподавателями или автоматически?</li>
          <li>Как часто проводятся пробные ЕГЭ в реальном формате?</li>
          <li>Предоставляется ли индивидуальная консультация по ошибкам?</li>
          <li>Можно ли изменить расписание или перенести занятия?</li>
          <li>Какая техническая поддержка предоставляется в случае проблем?</li>
          <li>Включены ли в стоимость все материалы или есть дополнительные платежи?</li>
        </ol>
      </div>

      <h2 className="text-3xl font-bold text-primary border-l-4 border-primary pl-4 mt-8">
        FAQ: ответы на популярные вопросы
      </h2>

      <div className="space-y-6">
        <div className="bg-card border border-border p-6 rounded-lg">
          <h4 className="font-semibold text-primary mb-3">Когда лучше начинать подготовку к ЕГЭ в 11 классе?</h4>
          <p className="text-muted-foreground">Оптимально начать в сентябре, но если базовые знания слабые — лучше еще летом. За 8-9 месяцев можно качественно подготовиться по 3-4 предметам.</p>
        </div>

        <div className="bg-card border border-border p-6 rounded-lg">
          <h4 className="font-semibold text-primary mb-3">Можно ли совмещать несколько онлайн-школ?</h4>
          <p className="text-muted-foreground">Да, многие ученики изучают разные предметы на разных платформах. Главное — не перегружать расписание и выбирать школы с совместимыми форматами обучения.</p>
        </div>

        <div className="bg-card border border-border p-6 rounded-lg">
          <h4 className="font-semibold text-primary mb-3">Сколько времени нужно заниматься ежедневно?</h4>
          <p className="text-muted-foreground">Для качественной подготовки достаточно 2-3 часов в день на все предметы ЕГЭ. Лучше заниматься регулярно понемногу, чем устраивать длительные марафоны.</p>
        </div>

        <div className="bg-card border border-border p-6 rounded-lg">
          <h4 className="font-semibold text-primary mb-3">Эффективнее ли онлайн-подготовка очных курсов?</h4>
          <p className="text-muted-foreground">При правильном выборе платформы онлайн-подготовка не уступает очной. Главные преимущества — экономия времени на дорогу и доступ к лучшим преподавателям страны.</p>
        </div>
      </div>
    </article>
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="bg-background">
        <div className="container mx-auto max-w-4xl px-4 py-6">
          <Button
            variant="ghost"
            onClick={() => window.history.back()}
            className="mb-4 hover:bg-accent/50"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Назад
          </Button>

          <h1 className="text-4xl font-bold text-primary mb-6">
            Лучшие онлайн-школы для подготовки к ЕГЭ 11 класса
          </h1>

          {content}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BestOnlineSchoolsEGE;