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
    website_url: "https://skysmart.ru",
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
    is_featured: true
  },
  {
    id: "2",
    name: "Онлайн-школа Фоксфорд",
    description: "Крупнейшая домашняя школа России с преподавателями из МГУ, МФТИ, ВШЭ. Более 500 курсов и групповые вебинары",
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
    pros: ["Преподаватели из топ-вузов", "Более 500 курсов", "Групповые вебинары до 20 человек", "Круглосуточная поддержка"],
    cons: ["Групповой формат обучения", "Много самостоятельной работы"],
    features: ["ЕГЭ подготовка", "Индивидуальные уроки", "Интерактивная доска", "Мобильное приложение"],
    contact_phone: "+7 (800) 302-04-12",
    contact_email: "info@foxford.ru",
    ranking_position: 2,
    is_featured: true
  },
  {
    id: "3", 
    name: "Домашняя школа ИнтернетУрок",
    description: "Школа с акцентом на самостоятельное изучение и поддержку опытных учителей Москвы и СПб",
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
    pros: ["Доступная цена", "Опытные учителя Москвы и СПб", "15 минут время отклика техподдержки", "Гибкий график"],
    cons: ["Нет индивидуальных уроков", "Нет мобильного приложения", "Требует самодисциплины"],
    features: ["ЕГЭ подготовка", "Видеоуроки", "Персональный наставник", "Контроль с прокторингом"],
    contact_phone: "+7 (800) 775-40-74",
    contact_email: "info@interneturok.ru", 
    ranking_position: 3,
    is_featured: true
  },
  {
    id: "4",
    name: "Онлайн-лицей №1",
    description: "Первая аккредитованная онлайн-школа с высокими результатами ЕГЭ. Средний балл 86 против 58 в обычных школах",
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
    pros: ["Средний балл ЕГЭ 86", "95% поступления в ВУЗы", "400 учителей", "Присутствие в 77 странах"],
    cons: ["Высокая нагрузка", "Нет мобильного приложения"],
    features: ["ЕГЭ подготовка", "Индивидуальные уроки", "Интерактивная доска", "Живые онлайн-занятия"],
    contact_phone: "+7 (800) 500-80-11",
    contact_email: "info@online-licey1.ru",
    ranking_position: 4,
    is_featured: false
  },
  {
    id: "5",
    name: "Школа Будущего Онлайн",
    description: "Онлайн-школа с фокусом на современные образовательные технологии и обучение в малых группах",
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
    pros: ["Малые группы", "Современные технологии", "Персональный куратор", "Онлайн-поддержка"],
    cons: ["Нет мобильного приложения", "Нет офлайн-режима"],
    features: ["ЕГЭ подготовка", "Индивидуальные уроки", "Интерактивная доска", "Малые группы"],
    contact_phone: "+7 (800) 123-45-67",
    contact_email: "info@school-future.ru",
    ranking_position: 5,
    is_featured: false
  },
  {
    id: "6",
    name: "Умская Школа",
    description: "Школа с масштабными вебинарами для сотен учеников. 500,000+ студентов с 2016 года, каждый 10-й стобалльник России",
    logo_url: "",
    website_url: "https://umschool.net",
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
    is_featured: false
  },
  {
    id: "7",
    name: "Онлайн-школа Тетрика",
    description: "Специализация на индивидуальном обучении 1 на 1 и мини-группах до 5 человек. 3,500+ преподавателей",
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
    pros: ["Индивидуальные занятия 1 на 1", "88% получили бюджетные места", "3,500+ преподавателей", "Отчеты после каждого урока"],
    cons: ["Нет мобильного приложения", "Молодая школа"],
    features: ["ЕГЭ подготовка", "Индивидуальные уроки", "Интерактивная доска", "Мини-группы до 5 человек"],
    contact_phone: "+7 (800) 345-67-89",
    contact_email: "info@tetrika-school.ru",
    ranking_position: 7,
    is_featured: false
  },
  {
    id: "8",
    name: "Онлайн-школа BIT",
    description: "Первая аккредитованная онлайн-школа России с гибким расписанием и интерактивной доской для всех участников",
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
    pros: ["87% в топовые вузы", "3 смены обучения", "Тьютор + психолог", "Доступ к записям уроков"],
    cons: ["Нет мобильного приложения", "Сложная программа"],
    features: ["ЕГЭ подготовка", "Индивидуальные уроки", "Интерактивная доска", "Групповая работа"],
    contact_phone: "+7 (800) 456-78-90",
    contact_email: "info@bit-school.ru",
    ranking_position: 8,
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
      <Footer />
    </div>
  );
};

export default Index;
