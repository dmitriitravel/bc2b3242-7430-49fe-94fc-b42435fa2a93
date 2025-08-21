import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from "lucide-react";

const Contacts = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Свяжитесь с нами
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Мы поможем вам выбрать лучшую онлайн-школу для вашего ребенка. 
            Получите бесплатную консультацию от наших экспертов.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="shadow-elegant">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 gradient-primary rounded-xl flex items-center justify-center">
                  <Send className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold">Напишите нам</h2>
              </div>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Ваше имя</Label>
                    <Input id="name" placeholder="Введите ваше имя" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Телефон</Label>
                    <Input id="phone" placeholder="+7 (___) ___-__-__" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="ваш@email.ru" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject">Тема обращения</Label>
                  <Input id="subject" placeholder="Выбор онлайн-школы для 11 класса" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Сообщение</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Расскажите о ваших потребностях и пожеланиях..."
                    className="min-h-[120px]"
                  />
                </div>
                
                <Button className="w-full bg-gradient-to-r from-primary to-secondary text-white hover:opacity-90 transition-opacity">
                  <Send className="w-4 h-4 mr-2" />
                  Отправить сообщение
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <Card className="shadow-elegant">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 gradient-primary rounded-xl flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold">Контактная информация</h2>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mt-1">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Email</h3>
                      <p className="text-muted-foreground mb-2">Ответим в течение 24 часов</p>
                      <p className="text-lg text-primary">info@shkola-11-klass.ru</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mt-1">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Часы работы</h3>
                      <p className="text-muted-foreground">Понедельник - Пятница: 9:00 - 18:00</p>
                      <p className="text-muted-foreground">Суббота - Воскресенье: 10:00 - 16:00</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mt-1">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Адрес</h3>
                      <p className="text-muted-foreground">г. Москва, ул. Тверская, д. 1</p>
                      <p className="text-muted-foreground">БЦ "Центральный", офис 405</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* FAQ Section */}
            <Card className="shadow-elegant">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-6">Часто задаваемые вопросы</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-semibold mb-2">Консультация бесплатная?</h4>
                    <p className="text-muted-foreground text-sm">
                      Да, все консультации по выбору онлайн-школы абсолютно бесплатны.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-semibold mb-2">Как быстро вы отвечаете?</h4>
                    <p className="text-muted-foreground text-sm">
                      Мы отвечаем на все обращения в течение 24 часов в рабочие дни.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-semibold mb-2">Можно ли получить персональную рекомендацию?</h4>
                    <p className="text-muted-foreground text-sm">
                      Конечно! Мы подберем школы исходя из ваших конкретных потребностей и бюджета.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

      </main>
      <Footer />
    </div>
  );
};

export default Contacts;