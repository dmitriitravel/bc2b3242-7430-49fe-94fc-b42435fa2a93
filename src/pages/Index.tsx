import { useState } from "react";
import { SchoolCard } from "@/components/SchoolCard";
import { HeroSection } from "@/components/HeroSection";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SupportingSection } from "@/components/SupportingSection";
import { AISchoolSelector } from "@/components/AISchoolSelector";

// Sample data for demonstration until database is ready
const sampleSchools = [
  {
    id: "1",
    name: "Skysmart",
    description: "Онлайн-школа с индивидуальными уроками 1 на 1 и интерактивными технологиями. 150,000 заданий и партнерство с Просвещение",
    logo_url: "",
    website_url: "https://skysmart.ru/homeschooling",
    rating: 4.9,
    total_reviews: 1856,
    price_from: 4500,
    price_to: 12900,
    subjects_count: 16,
    accreditation: "Лицензия №040485",
    established_year: 2018,
    student_count: 45000,
    pros: ["Индивидуальные уроки 1 на 1", "150,000 интерактивных заданий", "24/7 техподдержка", "Средний балл ЕГЭ 85-90"],
    cons: ["Высокая стоимость", "Требует стабильный интернет"],
    features: ["ЕГЭ подготовка", "Индивидуальные уроки", "Интерактивная доска", "Мобильное приложение"],
    contact_phone: "+7 (800) 333-23-43",
    contact_email: "info@skysmart.ru",
    ranking_position: 1,
    is_featured: true,
    unique_details: {
      educational_process: {
        lesson_format: "видео + интерактив (1 на 1 с учителем)",
        lesson_duration: "50 минут (25 минут для младших классов)",
        homework: "автопроверка + ручная проверка",
        control_works: "регулярные пробные экзамены",
        progress_tracking: "детальная аналитика с записями уроков"
      },
      support: {
        personal_curator: "да (тьюторы и бадди)",
        tech_support: "24/7 чат",
        parent_control: "ежемесячные отчеты + доступ к записям",
        student_communication: "чат с преподавателем и другими учениками",
        teacher_consultations: "по расписанию + чат"
      },
      platform: {
        web_version: true,
        mobile_app: true,
        offline_mode: true,
        virtual_board: true,
        simulations_3d: false,
        gaming_elements: true
      },
      exam_results: {
        russian_avg: "85-90",
        math_avg: "85-90",
        university_admission: "не раскрывается",
        graduates_2024: "не раскрывается"
      }
    }
  },
  {
    id: "2",
    name: "Онлайн-школа Фоксфорд",
    description: "Крупнейшая домашняя школа России с преподавателями из МГУ, МФТИ, ВШЭ. Более 500 курсов и групповые вебинары",
    logo_url: "",
    website_url: "https://foxford.ru/",
    rating: 4.8,
    total_reviews: 1247,
    price_from: 3500,
    price_to: 8900,
    subjects_count: 15,
    accreditation: "Лицензия №037133",
    established_year: 2009,
    student_count: 50000,
    pros: ["Преподаватели из топ-вузов", "Более 500 курсов", "Групповые вебинары до 20 человек", "Круглосуточная поддержка"],
    cons: ["Групповой формат обучения", "Много самостоятельной работы"],
    features: ["ЕГЭ подготовка", "Индивидуальные уроки", "Интерактивная доска", "Мобильное приложение"],
    contact_phone: "+7 (800) 302-04-12",
    contact_email: "info@foxford.ru",
    ranking_position: 2,
    is_featured: true,
    unique_details: {
      educational_process: {
        lesson_format: "видео + интерактив (групповые вебинары до 20 человек)",
        lesson_duration: "45-60 минут",
        homework: "автоматическая проверка + обратная связь",
        control_works: "регулярные тестирования",
        progress_tracking: "электронный дневник с аналитикой"
      },
      support: {
        personal_curator: "да (для домашней школы)",
        tech_support: "круглосуточная поддержка",
        parent_control: "еженедельные отчеты",
        student_communication: "чат курса + социальные активности",
        teacher_consultations: "по расписанию"
      },
      platform: {
        web_version: true,
        mobile_app: true,
        offline_mode: true,
        virtual_board: true,
        simulations_3d: false,
        gaming_elements: true
      },
      exam_results: {
        russian_avg: "не раскрывается",
        math_avg: "не раскрывается",
        university_admission: "не раскрывается",
        graduates_2024: "не раскрывается"
      }
    }
  },
  {
    id: "3", 
    name: "Домашняя школа ИнтернетУрок",
    description: "Школа с акцентом на самостоятельное изучение и поддержку опытных учителей Москвы и СПб",
    logo_url: "",
    website_url: "https://interneturok.ru/",
    rating: 4.6,
    total_reviews: 892,
    price_from: 2500,
    price_to: 6500,
    subjects_count: 14,
    accreditation: "Лицензия №038311",
    established_year: 2008,
    student_count: 35000,
    pros: ["Доступная цена", "Опытные учителя Москвы и СПб", "15 минут время отклика техподдержки", "Гибкий график"],
    cons: ["Нет индивидуальных уроков", "Нет мобильного приложения", "Требует самодисциплины"],
    features: ["ЕГЭ подготовка", "Видеоуроки", "Персональный наставник", "Контроль с прокторингом"],
    contact_phone: "+7 (800) 775-40-74",
    contact_email: "info@interneturok.ru", 
    ranking_position: 3,
    is_featured: true,
    unique_details: {
      educational_process: {
        lesson_format: "видеоуроки + консультации",
        lesson_duration: "15-20 минут видеоурок",
        homework: "ручная проверка учителями",
        control_works: "контрольные с прокторингом",
        progress_tracking: "электронный журнал"
      },
      support: {
        personal_curator: "да (персональный наставник - опция)",
        tech_support: "15 минут время отклика",
        parent_control: "еженедельные или ежемесячные отчеты",
        student_communication: "ограниченное",
        teacher_consultations: "индивидуальные консультации"
      },
      platform: {
        web_version: true,
        mobile_app: false,
        offline_mode: true,
        virtual_board: false,
        simulations_3d: false,
        gaming_elements: false
      },
      exam_results: {
        russian_avg: "не раскрывается",
        math_avg: "не раскрывается",
        university_admission: "не раскрывается",
        graduates_2024: "не раскрывается"
      }
    }
  },
  {
    id: "4",
    name: "Онлайн-лицей №1",
    description: "Первая аккредитованная онлайн-школа с высокими результатами ЕГЭ. Средний балл 86 против 58 в обычных школах",
    logo_url: "",
    website_url: "https://onlineschool-1.ru/",
    rating: 4.7,
    total_reviews: 634,
    price_from: 4200,
    price_to: 9800,
    subjects_count: 13,
    accreditation: "Лицензия №039847",
    established_year: 2015,
    student_count: 28000,
    pros: ["Средний балл ЕГЭ 86", "95% поступления в ВУЗы", "400 учителей", "Присутствие в 77 странах"],
    cons: ["Высокая нагрузка", "Нет мобильного приложения"],
    features: ["ЕГЭ подготовка", "Индивидуальные уроки", "Интерактивная доска", "Живые онлайн-занятия"],
    contact_phone: "+7 (800) 500-80-11",
    contact_email: "info@online-licey1.ru",
    ranking_position: 4,
    is_featured: false,
    unique_details: {
      educational_process: {
        lesson_format: "живые онлайн-занятия + видеоуроки",
        lesson_duration: "40-45 минут",
        homework: "автопроверка + ручная проверка",
        control_works: "регулярные тестирования",
        progress_tracking: "отслеживание прогресса с обратной связью"
      },
      support: {
        personal_curator: "да",
        tech_support: "онлайн-консультации",
        parent_control: "регулярные отчеты",
        student_communication: "интерактивные онлайн-уроки",
        teacher_consultations: "индивидуальная поддержка"
      },
      platform: {
        web_version: true,
        mobile_app: false,
        offline_mode: true,
        virtual_board: true,
        simulations_3d: false,
        gaming_elements: true
      },
      exam_results: {
        russian_avg: "86",
        math_avg: "86",
        university_admission: "95%",
        graduates_2024: "12,000 учеников ежегодно"
      }
    }
  },
  {
    id: "5",
    name: "Школа Будущего Онлайн",
    description: "Онлайн-школа с фокусом на современные образовательные технологии и обучение в малых группах",
    logo_url: "",
    website_url: "https://school-of-future.online",
    rating: 4.5,
    total_reviews: 567,
    price_from: 3800,
    price_to: 11200,
    subjects_count: 15,
    accreditation: "Лицензия №041256",
    established_year: 2017,
    student_count: 22000,
    pros: ["Малые группы", "Современные технологии", "Персональный куратор", "Онлайн-поддержка"],
    cons: ["Нет мобильного приложения", "Нет офлайн-режима"],
    features: ["ЕГЭ подготовка", "Индивидуальные уроки", "Интерактивная доска", "Малые группы"],
    contact_phone: "+7 (800) 123-45-67",
    contact_email: "info@school-future.ru",
    ranking_position: 5,
    is_featured: false,
    unique_details: {
      educational_process: {
        lesson_format: "онлайн-занятия в малых группах",
        lesson_duration: "45 минут",
        homework: "смешанная проверка",
        control_works: "регулярные",
        progress_tracking: "система отслеживания прогресса"
      },
      support: {
        personal_curator: "да",
        tech_support: "онлайн-поддержка",
        parent_control: "отчеты об успеваемости",
        student_communication: "групповые занятия",
        teacher_consultations: "по запросу"
      },
      platform: {
        web_version: true,
        mobile_app: false,
        offline_mode: false,
        virtual_board: true,
        simulations_3d: false,
        gaming_elements: false
      },
      exam_results: {
        russian_avg: "не раскрывается",
        math_avg: "не раскрывается",
        university_admission: "не раскрывается",
        graduates_2024: "не раскрывается"
      }
    }
  },
  {
    id: "6",
    name: "Умская Школа",
    description: "Школа с масштабными вебинарами для сотен учеников. 500,000+ студентов с 2016 года, каждый 10-й стобалльник России",
    logo_url: "",
    website_url: "https://umschool.net/",
    rating: 4.4,
    total_reviews: 445,
    price_from: 3200,
    price_to: 7800,
    subjects_count: 14,
    accreditation: "Лицензия №038992",
    established_year: 2016,
    student_count: 500000,
    pros: ["4,159 стобалльников", "160,000+ задач в приложении", "Активные сообщества", "Средний балл ЕГЭ 82.16"],
    cons: ["Массовые вебинары", "Нет индивидуальных уроков"],
    features: ["ЕГЭ подготовка", "Интерактивная доска", "Мобильное приложение", "3D-модели"],
    contact_phone: "+7 (800) 234-56-78",
    contact_email: "info@umschool.net",
    ranking_position: 6,
    is_featured: false,
    unique_details: {
      educational_process: {
        lesson_format: "интерактивные вебинары (сотни учеников одновременно)",
        lesson_duration: "90 минут",
        homework: "автопроверка через приложение",
        control_works: "регулярные пробники",
        progress_tracking: "детальная аналитика успеваемости"
      },
      support: {
        personal_curator: "да",
        tech_support: "круглосуточная",
        parent_control: "еженедельные отчеты",
        student_communication: "активные сообщества (500,000+ участников)",
        teacher_consultations: "через кураторов"
      },
      platform: {
        web_version: true,
        mobile_app: true,
        offline_mode: true,
        virtual_board: true,
        simulations_3d: true,
        gaming_elements: true
      },
      exam_results: {
        russian_avg: "82.16",
        math_avg: "82.16",
        university_admission: "не раскрывается",
        graduates_2024: "500,000+ студентов с 2016 года, 4,159 стобалльников"
      }
    }
  },
  {
    id: "7",
    name: "Онлайн-школа Тетрика",
    description: "Специализация на индивидуальном обучении 1 на 1 и мини-группах до 5 человек. 3,500+ преподавателей",
    logo_url: "",
    website_url: "https://tetrika-school.ru/",
    rating: 4.3,
    total_reviews: 389,
    price_from: 2800,
    price_to: 8500,
    subjects_count: 12,
    accreditation: "Лицензия №040123",
    established_year: 2019,
    student_count: 15000,
    pros: ["Индивидуальные занятия 1 на 1", "88% получили бюджетные места", "3,500+ преподавателей", "Отчеты после каждого урока"],
    cons: ["Нет мобильного приложения", "Молодая школа"],
    features: ["ЕГЭ подготовка", "Индивидуальные уроки", "Интерактивная доска", "Мини-группы до 5 человек"],
    contact_phone: "+7 (800) 345-67-89",
    contact_email: "info@tetrika-school.ru",
    ranking_position: 7,
    is_featured: false,
    unique_details: {
      educational_process: {
        lesson_format: "индивидуальные занятия 1 на 1 + мини-группы до 5 человек",
        lesson_duration: "50 минут",
        homework: "индивидуальная проверка",
        control_works: "по индивидуальному плану",
        progress_tracking: "отчеты после каждого урока"
      },
      support: {
        personal_curator: "да",
        tech_support: "быстрая техподдержка",
        parent_control: "отчеты по итогам каждого урока",
        student_communication: "ограниченное (мини-группы)",
        teacher_consultations: "личный чат + видеосвязь"
      },
      platform: {
        web_version: true,
        mobile_app: false,
        offline_mode: false,
        virtual_board: true,
        simulations_3d: false,
        gaming_elements: false
      },
      exam_results: {
        russian_avg: "не раскрывается",
        math_avg: "не раскрывается",
        university_admission: "88% получили бюджетные места",
        graduates_2024: "1.8 млн персональных занятий проведено, 9,600+ учеников с 80+ баллами"
      }
    }
  },
  {
    id: "8",
    name: "Онлайн-школа BIT",
    description: "Первая аккредитованная онлайн-школа России с гибким расписанием и интерактивной доской для всех участников",
    logo_url: "",
    website_url: "https://school-bit.ru/",
    rating: 4.2,
    total_reviews: 312,
    price_from: 3600,
    price_to: 9200,
    subjects_count: 11,
    accreditation: "Лицензия №039654",
    established_year: 2018,
    student_count: 12000,
    pros: ["87% в топовые вузы", "3 смены обучения", "Тьютор + психолог", "Доступ к записям уроков"],
    cons: ["Нет мобильного приложения", "Сложная программа"],
    features: ["ЕГЭ подготовка", "Индивидуальные уроки", "Интерактивная доска", "Групповая работа"],
    contact_phone: "+7 (800) 456-78-90",
    contact_email: "info@bit-school.ru",
    ranking_position: 8,
    is_featured: false,
    unique_details: {
      educational_process: {
        lesson_format: "онлайн-уроки в группах до 15 человек, 3 смены",
        lesson_duration: "40 минут (1 класс) до 45 минут",
        homework: "автопроверка + ручная",
        control_works: "регулярные тестирования",
        progress_tracking: "система оценивания с индивидуальными маршрутами"
      },
      support: {
        personal_curator: "да (тьютор + психолог)",
        tech_support: "техническая поддержка",
        parent_control: "доступ к записям уроков",
        student_communication: "чат, голосования, совместная работа на доске",
        teacher_consultations: "личный чат + консультации"
      },
      platform: {
        web_version: true,
        mobile_app: false,
        offline_mode: true,
        virtual_board: true,
        simulations_3d: false,
        gaming_elements: true
      },
      exam_results: {
        russian_avg: "не раскрывается",
        math_avg: "не раскрывается",
        university_admission: "87% в топовые вузы",
        graduates_2024: "3,000+ выпускников в 20+ странах"
      }
    }
  },
  {
    id: "9",
    name: "Онлайн-школа Алгоритм",
    description: "Школа с индивидуальным подходом и подготовкой к поступлению в топовые российские и зарубежные вузы",
    logo_url: "",
    website_url: "https://algoritmika.org/ru",
    rating: 4.1,
    total_reviews: 278,
    price_from: 2900,
    price_to: 6800,
    subjects_count: 13,
    accreditation: "Лицензия №037889",
    established_year: 2014,
    student_count: 16500,
    pros: ["Подготовка в зарубежные вузы", "Опытные педагоги", "Гибкое расписание", "Академический подход"],
    cons: ["Высокие требования", "Строгая дисциплина"],
    features: ["ЕГЭ подготовка", "Индивидуальные уроки", "Подготовка SAT/IELTS", "Профориентация"],
    contact_phone: "+7 (800) 567-89-01",
    contact_email: "info@algoritm.org",
    ranking_position: 9,
    is_featured: false,
    unique_details: {
      educational_process: {
        lesson_format: "индивидуальные и групповые занятия",
        lesson_duration: "45-50 минут",
        homework: "ручная проверка + обратная связь",
        control_works: "контрольные + международные тесты",
        progress_tracking: "детальные отчеты по прогрессу"
      },
      support: {
        personal_curator: "да (академический куратор)",
        tech_support: "рабочие часы поддержка",
        parent_control: "ежемесячные отчеты + родительские собрания",
        student_communication: "академические группы",
        teacher_consultations: "регулярные индивидуальные встречи"
      },
      platform: {
        web_version: true,
        mobile_app: false,
        offline_mode: true,
        virtual_board: true,
        simulations_3d: false,
        gaming_elements: false
      },
      exam_results: {
        russian_avg: "75-80",
        math_avg: "75-80",
        university_admission: "85% в российские и зарубежные вузы",
        graduates_2024: "около 1,000 выпускников"
      }
    }
  },
  {
    id: "10",
    name: "Учи.ру Школа",
    description: "Образовательная платформа с интерактивными курсами и современными методиками обучения",
    logo_url: "",
    website_url: "https://www.doma.uchi.ru/",
    rating: 4.0,
    total_reviews: 534,
    price_from: 2200,
    price_to: 5500,
    subjects_count: 12,
    accreditation: "Лицензия №040678",
    established_year: 2012,
    student_count: 12000,
    pros: ["Интерактивные задания", "Геймификация", "Доступная цена", "Популярная платформа"],
    cons: ["Больше подходит для младших классов", "Ограниченные курсы для 11 класса"],
    features: ["ЕГЭ подготовка", "Интерактивные задания", "Мобильное приложение", "Геймификация"],
    contact_phone: "+7 (800) 678-90-12",
    contact_email: "info@uchi.ru",
    ranking_position: 10,
    is_featured: false,
    unique_details: {
      educational_process: {
        lesson_format: "интерактивные задания + видеоуроки",
        lesson_duration: "20-30 минут модули",
        homework: "автоматическая проверка",
        control_works: "интерактивные тесты",
        progress_tracking: "игровая аналитика прогресса"
      },
      support: {
        personal_curator: "нет (групповая поддержка)",
        tech_support: "онлайн-чат + FAQ",
        parent_control: "еженедельные отчеты + уведомления",
        student_communication: "рейтинги и соревнования",
        teacher_consultations: "ограниченные консультации"
      },
      platform: {
        web_version: true,
        mobile_app: true,
        offline_mode: false,
        virtual_board: false,
        simulations_3d: false,
        gaming_elements: true
      },
      exam_results: {
        russian_avg: "60-65",
        math_avg: "60-65",
        university_admission: "75%",
        graduates_2024: "около 800 выпускников"
      }
    }
  }
];

interface School {
  id: string;
  name: string;
  description: string;
  logo_url: string;
  website_url: string;
  rating: number;
  total_reviews: number;
  price_from: number;
  price_to: number;
  subjects_count: number;
  accreditation: string;
  established_year: number;
  student_count: number;
  pros: string[];
  cons: string[];
  features: string[];
  contact_phone: string;
  contact_email: string;
  ranking_position: number;
  is_featured: boolean;
}

const Index = () => {
  const [schools] = useState<School[]>(sampleSchools);
  const [loading] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      
      <main id="rating-section" className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full px-6 py-3 mb-6">
            <span className="text-2xl">🏆</span>
            <span className="font-semibold text-primary">Рейтинг 2025</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Топ-10 онлайн-школ для 11 класса
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Независимый рейтинг лучших онлайн-школ России для завершения 11 класса. 
            Все школы проверены и имеют государственную аккредитацию.
          </p>
        </div>

        {loading ? (
          <div className="text-center py-20">
            <div className="relative">
              <div className="w-16 h-16 gradient-primary rounded-full animate-spin mx-auto mb-6"></div>
              <div className="absolute inset-0 w-16 h-16 bg-white rounded-full mx-auto animate-ping opacity-75"></div>
            </div>
            <p className="text-xl text-muted-foreground">Загружаем лучшие школы для вас...</p>
          </div>
        ) : (
          <div className="space-y-8">
            {schools.map((school, index) => (
              <SchoolCard key={school.id} school={school} rank={index + 1} />
            ))}
          </div>
        )}
      </main>

      <AISchoolSelector />
      <SupportingSection />
      <Footer />
    </div>
  );
};

export default Index;
