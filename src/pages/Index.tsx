import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { SchoolCard } from "@/components/SchoolCard";
import { HeroSection } from "@/components/HeroSection";
import { Header } from "@/components/Header";
import { SupportingSection } from "@/components/SupportingSection";

// Sample data for demonstration until database is ready
const sampleSchools = [
  {
    id: "1",
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
    features: ["ЕГЭ подготовка", "Индивидуальные уроки", "Олимпиады"],
    contact_phone: "+7 (800) 302-04-12",
    contact_email: "info@foxford.ru",
    ranking_position: 1,
    is_featured: true
  },
  {
    id: "2", 
    name: "Домашняя школа ИнтернетУрок",
    description: "Полноценное среднее образование в домашних условиях",
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
    features: ["Видеоуроки", "Домашние задания", "Тестирование"],
    contact_phone: "+7 (800) 775-40-74",
    contact_email: "info@interneturok.ru", 
    ranking_position: 2,
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
  const [schools, setSchools] = useState<School[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchSchools();
  }, []);

  const fetchSchools = async () => {
    try {
      // Type assertion needed until database migration is approved
      const { data, error } = await (supabase as any)
        .from('schools')
        .select('*')
        .order('ranking_position', { ascending: true })
        .limit(10);

      if (error) throw error;
      setSchools(data || []);
    } catch (error) {
      console.error('Error fetching schools:', error);
      // Show sample data when database isn't ready
      setSchools(sampleSchools);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      
      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Топ-10 онлайн-школ для 11 класса</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Независимый рейтинг лучших онлайн-школ России для завершения 11 класса. 
            Все школы проверены и имеют государственную аккредитацию.
          </p>
        </div>

        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
            <p className="mt-4 text-muted-foreground">Загружаем школы...</p>
          </div>
        ) : (
          <div className="space-y-6">
            {schools.map((school, index) => (
              <SchoolCard key={school.id} school={school} rank={index + 1} />
            ))}
          </div>
        )}
      </main>

      <SupportingSection />
    </div>
  );
};

export default Index;
