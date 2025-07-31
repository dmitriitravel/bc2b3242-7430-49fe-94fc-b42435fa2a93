import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { SchoolCard } from "@/components/SchoolCard";
import { HeroSection } from "@/components/HeroSection";
import { Header } from "@/components/Header";
import { SupportingSection } from "@/components/SupportingSection";

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
      const { data, error } = await supabase
        .from('schools')
        .select('*')
        .order('ranking_position', { ascending: true })
        .limit(10);

      if (error) throw error;
      setSchools(data || []);
    } catch (error) {
      console.error('Error fetching schools:', error);
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
