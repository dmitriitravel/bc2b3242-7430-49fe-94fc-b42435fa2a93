import { useState } from "react";
import { SchoolCard } from "@/components/SchoolCard";
import { HeroSection } from "@/components/HeroSection";
import { Header } from "@/components/Header";
import { SupportingSection } from "@/components/SupportingSection";
import { AISchoolSelector } from "@/components/AISchoolSelector";

// Sample data for demonstration until database is ready
const sampleSchools = [
  {
    id: "1",
    name: "Skysmart",
    description: "Современная онлайн-школа с персональным подходом и инновационными методиками обучения",
    logo_url: "",
    website_url: "https://skysmart.ru",
    rating: 4.9,
    total_reviews: 1856,
    price_from: 4500,
    price_to: 12900,
    subjects_count: 16,
    accreditation: "Лицензия №040485",
    established_year: 2018,
    student_count: 45000,
    pros: ["Индивидуальные уроки", "Игровые элементы", "Современная платформа"],
    cons: ["Высокая стоимость", "Молодая школа"],
    features: ["ЕГЭ подготовка", "Индивидуальные уроки", "Интерактивная доска", "Мобильное приложение"],
    contact_phone: "+7 (800) 333-23-43",
    contact_email: "info@skysmart.ru",
    ranking_position: 1,
    is_featured: true
  },
  {
    id: "2",
    name: "Онлайн-школа Фоксфорд",
    description: "Ведущая онлайн-школа России с индивидуальным подходом к каждому ученику",
    logo_url: "",
    website_url: "https://foxford.ru",
    rating: 4.8,
    total_reviews: 1247,
    price_from: 3500,
    price_to: 8900,
    subjects_count: 15,
    accreditation: "Лицензия №037133",
    established_year: 2009,
    student_count: 50000,
    pros: ["Сильные преподаватели", "Индивидуальный план", "Подготовка к ЕГЭ"],
    cons: ["Высокая стоимость", "Много самостоятельной работы"],
    features: ["ЕГЭ подготовка", "Индивидуальные уроки", "Олимпиады", "Профориентация"],
    contact_phone: "+7 (800) 302-04-12",
    contact_email: "info@foxford.ru",
    ranking_position: 2,
    is_featured: true
  },
  {
    id: "3", 
    name: "Домашняя школа ИнтернетУрок",
    description: "Полноценное среднее образование в домашних условиях с государственной аккредитацией",
    logo_url: "",
    website_url: "https://interneturok.ru",
    rating: 4.6,
    total_reviews: 892,
    price_from: 2500,
    price_to: 6500,
    subjects_count: 14,
    accreditation: "Лицензия №038311",
    established_year: 2008,
    student_count: 35000,
    pros: ["Доступная цена", "Качественные видеоуроки", "Гибкий график"],
    cons: ["Меньше интерактива", "Нужна самодисциплина"],
    features: ["Видеоуроки", "Домашние задания", "Тестирование", "Консультации"],
    contact_phone: "+7 (800) 775-40-74",
    contact_email: "info@interneturok.ru", 
    ranking_position: 3,
    is_featured: true
  },
  {
    id: "4",
    name: "Онлайн-лицей №1",
    description: "Аккредитованная онлайн-школа с возможностью ускоренного обучения экстерном",
    logo_url: "",
    website_url: "https://online-licey1.ru",
    rating: 4.7,
    total_reviews: 634,
    price_from: 4200,
    price_to: 9800,
    subjects_count: 13,
    accreditation: "Лицензия №039847",
    established_year: 2015,
    student_count: 28000,
    pros: ["Экстернат", "Хорошие результаты ЕГЭ", "Поддержка кураторов"],
    cons: ["Высокая нагрузка", "Строгие требования"],
    features: ["Экстернат", "ЕГЭ подготовка", "Кураторы", "Семейное образование"],
    contact_phone: "+7 (800) 500-80-11",
    contact_email: "info@online-licey1.ru",
    ranking_position: 4,
    is_featured: false
  },
  {
    id: "5",
    name: "Школа Будущего Онлайн",
    description: "Инновационная образовательная платформа с акцентом на IT и современные технологии",
    logo_url: "",
    website_url: "https://school-future.ru",
    rating: 4.5,
    total_reviews: 567,
    price_from: 3800,
    price_to: 11200,
    subjects_count: 15,
    accreditation: "Лицензия №041256",
    established_year: 2017,
    student_count: 22000,
    pros: ["IT-направление", "Современные методики", "Проектная деятельность"],
    cons: ["Упор на технические предметы", "Требует хорошего интернета"],
    features: ["Программирование", "ЕГЭ подготовка", "IT-проекты", "Менторство"],
    contact_phone: "+7 (800) 123-45-67",
    contact_email: "info@school-future.ru",
    ranking_position: 5,
    is_featured: false
  },
  {
    id: "6",
    name: "Цифровая Школа",
    description: "Комплексное онлайн-образование с интерактивными уроками и персональным сопровождением",
    logo_url: "",
    website_url: "https://digital-school.ru",
    rating: 4.4,
    total_reviews: 445,
    price_from: 3200,
    price_to: 7800,
    subjects_count: 14,
    accreditation: "Лицензия №038992",
    established_year: 2016,
    student_count: 18500,
    pros: ["Интерактивные уроки", "Доступная цена", "Хорошая техподдержка"],
    cons: ["Ограниченный выбор профилей", "Новая школа"],
    features: ["Интерактив", "Мобильное приложение", "Вебинары", "Тестирование"],
    contact_phone: "+7 (800) 234-56-78",
    contact_email: "info@digital-school.ru",
    ranking_position: 6,
    is_featured: false
  },
  {
    id: "7",
    name: "Онлайн-школа Тетрика",
    description: "Персонализированное обучение с использованием искусственного интеллекта и адаптивных программ",
    logo_url: "",
    website_url: "https://tetrika-school.ru",
    rating: 4.3,
    total_reviews: 389,
    price_from: 2800,
    price_to: 8500,
    subjects_count: 12,
    accreditation: "Лицензия №040123",
    established_year: 2019,
    student_count: 15000,
    pros: ["ИИ-адаптация", "Персональный подход", "Удобная платформа"],
    cons: ["Молодая школа", "Не все предметы"],
    features: ["ИИ-алгоритмы", "Адаптивное обучение", "Аналитика", "Репетиторы"],
    contact_phone: "+7 (800) 345-67-89",
    contact_email: "info@tetrika-school.ru",
    ranking_position: 7,
    is_featured: false
  },
  {
    id: "8",
    name: "Онлайн-школа BIT",
    description: "Техническая онлайн-школа с углубленным изучением математики, физики и информатики",
    logo_url: "",
    website_url: "https://bit-school.ru",
    rating: 4.2,
    total_reviews: 312,
    price_from: 3600,
    price_to: 9200,
    subjects_count: 11,
    accreditation: "Лицензия №039654",
    established_year: 2018,
    student_count: 12000,
    pros: ["Техническая направленность", "Сильная математика", "Подготовка в технические ВУЗы"],
    cons: ["Узкая специализация", "Сложная программа"],
    features: ["Техническое направление", "Углубленная математика", "Физика", "Информатика"],
    contact_phone: "+7 (800) 456-78-90",
    contact_email: "info@bit-school.ru",
    ranking_position: 8,
    is_featured: false
  },
  {
    id: "9",
    name: "Академия онлайн-образования",
    description: "Классическое академическое образование в цифровом формате с опытными педагогами",
    logo_url: "",
    website_url: "https://academy-online.ru",
    rating: 4.1,
    total_reviews: 278,
    price_from: 2900,
    price_to: 6800,
    subjects_count: 13,
    accreditation: "Лицензия №037889",
    established_year: 2014,
    student_count: 16500,
    pros: ["Опытные педагоги", "Академический подход", "Стабильность"],
    cons: ["Консервативные методы", "Медленная адаптация"],
    features: ["Классическое образование", "Опытные педагоги", "Академизм", "Традиции"],
    contact_phone: "+7 (800) 567-89-01",
    contact_email: "info@academy-online.ru",
    ranking_position: 9,
    is_featured: false
  },
  {
    id: "10",
    name: "Умная Школа",
    description: "Доступное качественное онлайн-образование с современными технологиями и поддержкой",
    logo_url: "",
    website_url: "https://smart-school.ru",
    rating: 4.0,
    total_reviews: 234,
    price_from: 2200,
    price_to: 5500,
    subjects_count: 12,
    accreditation: "Лицензия №040678",
    established_year: 2020,
    student_count: 8500,
    pros: ["Низкая стоимость", "Современные технологии", "Молодая команда"],
    cons: ["Мало опыта", "Ограниченные ресурсы"],
    features: ["Доступная цена", "Современные технологии", "Поддержка", "Гибкость"],
    contact_phone: "+7 (800) 678-90-12",
    contact_email: "info@smart-school.ru",
    ranking_position: 10,
    is_featured: false
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
    </div>
  );
};

export default Index;
