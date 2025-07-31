import { Search, Award, Users, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const HeroSection = () => {
  return (
    <section className="bg-gradient-to-b from-primary/5 to-background py-16">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 max-w-4xl mx-auto">
          Лучшие онлайн-школы для 11 класса в России
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Независимый рейтинг аккредитованных онлайн-школ. Завершите 11 класс дистанционно 
          с официальным аттестатом государственного образца.
        </p>

        {/* Key Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 max-w-3xl mx-auto">
          <div className="flex items-center justify-center space-x-2 text-primary">
            <Award className="w-5 h-5" />
            <span className="font-medium">Государственная аккредитация</span>
          </div>
          <div className="flex items-center justify-center space-x-2 text-primary">
            <Users className="w-5 h-5" />
            <span className="font-medium">Более 50,000 выпускников</span>
          </div>
          <div className="flex items-center justify-center space-x-2 text-primary">
            <CheckCircle className="w-5 h-5" />
            <span className="font-medium">Проверенные отзывы</span>
          </div>
        </div>

        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
            <Input 
              type="text" 
              placeholder="Найти школу по названию..." 
              className="pl-10"
            />
          </div>
        </div>

        {/* CTA Button */}
        <Button 
          size="lg" 
          className="text-lg px-8 py-6 h-auto"
          onClick={() => document.getElementById('rating-section')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Посмотреть рейтинг школ
        </Button>

        {/* Trust Indicators */}
        <div className="mt-8 text-sm text-muted-foreground">
          Основано на анализе более 2,500 отзывов • Обновлено в январе 2025
        </div>
      </div>
    </section>
  );
};