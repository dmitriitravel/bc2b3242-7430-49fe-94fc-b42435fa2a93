import { Search, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Header = () => {
  return (
    <header className="bg-white border-b shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">ОШ</span>
            </div>
            <span className="font-bold text-xl">Онлайн Школы</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-foreground hover:text-primary transition-colors">Рейтинг</a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">Все школы</a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">Как выбрать</a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">О нас</a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">Контакты</a>
          </nav>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4 text-sm">
            <div className="flex items-center space-x-1 text-muted-foreground">
              <Phone className="w-4 h-4" />
              <span>8 (800) 123-45-67</span>
            </div>
            <div className="flex items-center space-x-1 text-muted-foreground">
              <Mail className="w-4 h-4" />
              <span>info@onlineschools.ru</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};