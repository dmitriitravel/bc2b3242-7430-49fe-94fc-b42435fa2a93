import { Search, Award, Users, CheckCircle, Star, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const HeroSection = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 gradient-hero opacity-90"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute top-40 right-20 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-pulse delay-700"></div>
      <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-white/10 rounded-full blur-lg animate-pulse delay-1000"></div>

      <div className="relative container mx-auto px-4 py-20 text-center text-white">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <Star className="w-4 h-4 text-yellow-300" />
            <span className="text-sm font-medium">Рейтинг №1 в России</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Лучшие онлайн-школы
            <br />
            <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              для 11 класса
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
            Независимый рейтинг аккредитованных онлайн-школ. 
            Завершите 11 класс дистанционно с официальным аттестатом 
            государственного образца.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10 max-w-3xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
              <div className="text-2xl font-bold">50,000+</div>
              <div className="text-sm text-white/80">Выпускников</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
              <div className="text-2xl font-bold">2,500+</div>
              <div className="text-sm text-white/80">Отзывов</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
              <div className="text-2xl font-bold">100%</div>
              <div className="text-sm text-white/80">Аккредитация</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
              <div className="text-2xl font-bold">98%</div>
              <div className="text-sm text-white/80">Поступают в ВУЗы</div>
            </div>
          </div>


          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button 
              size="lg" 
              variant="accent"
              className="text-lg px-10 py-4 h-auto shadow-lg"
              onClick={() => document.getElementById('rating-section')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Посмотреть рейтинг школ
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="text-lg px-8 py-4 h-auto border-2 border-white bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-primary transition-all shadow-lg"
              onClick={() => document.getElementById('ai-school-selector')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Бесплатная консультация
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="text-sm text-white/80">
            Основано на анализе более 2,500 отзывов • Обновлено в августе 2025
          </div>
        </div>
      </div>
    </section>
  );
};