import { Search, Phone, Mail, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Header = () => {
  return (
    <header className="bg-white/95 backdrop-blur-sm border-b shadow-soft sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 gradient-primary rounded-2xl flex items-center justify-center shadow-primary">
              <span className="text-white font-bold text-lg">ОШ</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Онлайн Школы
              </span>
              <span className="text-xs text-muted-foreground">Рейтинг лучших школ России</span>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">Рейтинг</a>
            <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">Все школы</a>
            <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">Как выбрать</a>
            <a href="/about" className="text-foreground hover:text-primary transition-colors font-medium">О нас</a>
            <a href="/contacts" className="text-foreground hover:text-primary transition-colors font-medium">Контакты</a>
          </nav>

          {/* Contact Info & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-4 text-sm mr-4">
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Phone className="w-4 h-4" />
                <span className="font-medium">8 (800) 123-45-67</span>
              </div>
            </div>
            <Button 
              variant="secondary" 
              size="sm"
              onClick={() => document.getElementById('ai-school-selector')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Бесплатная консультация
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};