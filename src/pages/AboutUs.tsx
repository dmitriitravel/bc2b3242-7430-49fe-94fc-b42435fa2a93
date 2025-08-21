import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              О нас
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Мы помогаем родителям найти лучшие онлайн-школы для их детей
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 mb-16">
            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-6">
                Наша миссия
              </h2>
              <p className="text-muted-foreground mb-4">
                Мы верим, что каждый ребенок заслуживает качественного образования, 
                адаптированного под его индивидуальные потребности. Наша платформа 
                помогает родителям найти и сравнить лучшие онлайн-школы России.
              </p>
              <p className="text-muted-foreground">
                Мы тщательно анализируем каждую школу по множеству критериев: 
                лицензии, качество преподавания, результаты учеников и отзывы родителей.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-6">
                Почему нам доверяют
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                  <p className="text-muted-foreground">
                    Объективные рейтинги на основе реальных данных
                  </p>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                  <p className="text-muted-foreground">
                    Проверенные отзывы от настоящих родителей
                  </p>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                  <p className="text-muted-foreground">
                    Бесплатные консультации от экспертов
                  </p>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                  <p className="text-muted-foreground">
                    Актуальная информация о лицензиях и аккредитации
                  </p>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center bg-muted rounded-3xl p-12">
            <h2 className="text-3xl font-semibold text-foreground mb-6">
              Готовы найти идеальную школу?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Наши эксперты проанализируют потребности вашего ребенка и подберут 
              несколько подходящих вариантов онлайн-школ
            </p>
            <div className="flex justify-center">
              <a 
                href="/" 
                className="px-8 py-3 bg-orange-500 text-white rounded-xl font-medium hover:bg-orange-600 transition-colors"
              >
                Посмотреть рейтинг
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;