import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Условия использования
          </h1>
          
          <Card className="shadow-elegant">
            <CardContent className="p-8 space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">1. Общие положения</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Настоящие Условия использования регулируют отношения между пользователями и администрацией сайта shkola-11-klass.ru. 
                  Используя наш сайт, вы соглашаетесь с данными условиями в полном объеме.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">2. Описание сервиса</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Наш сайт предоставляет информацию о рейтинге онлайн-школ для 11 класса. Мы предлагаем:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>Рейтинг онлайн-школ с детальным описанием</li>
                  <li>Сравнение стоимости и условий обучения</li>
                  <li>Консультации по выбору образовательного учреждения</li>
                  <li>Актуальную информацию об аккредитации школ</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">3. Права и обязанности пользователей</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Пользователи имеют право:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mb-4">
                  <li>Получать информацию о рейтинге онлайн-школ</li>
                  <li>Обращаться за консультациями по выбору школы</li>
                  <li>Использовать сервис для личных целей</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Пользователи обязуются:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>Предоставлять достоверную информацию при обращении</li>
                  <li>Не использовать сервис в коммерческих целях без разрешения</li>
                  <li>Соблюдать этические нормы при общении</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">4. Ограничение ответственности</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-primary">4.1. Рейтинг и оценки</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Представленный на сайте рейтинг онлайн-школ составлен исключительно по нашему усмотрению и основан 
                      на нашем субъективном мнении, анализе общедоступной информации и собственных исследованиях. 
                      Рейтинг не претендует на исключительную достоверность, объективность или полноту и может содержать ошибки, 
                      неточности или устаревшую информацию.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-primary">4.2. Отказ от ответственности</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Мы не несем ответственности за:
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mt-2">
                      <li>Решения, принятые пользователями на основе предоставленной информации</li>
                      <li>Качество образовательных услуг, предоставляемых онлайн-школами</li>
                      <li>Любые финансовые потери или ущерб, связанные с выбором образовательного учреждения</li>
                      <li>Изменения в условиях работы, ценах или качестве услуг онлайн-школ</li>
                      <li>Достоверность информации, предоставляемой третьими лицами</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-primary">4.3. Рекомендации</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Настоятельно рекомендуем пользователям самостоятельно проверять актуальную информацию об онлайн-школах, 
                      изучать отзывы из различных источников, проводить собственные исследования и консультироваться 
                      с представителями образовательных учреждений перед принятием окончательного решения о выборе школы.
                    </p>
                  </div>
                  
                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                    <p className="text-amber-800 font-medium">
                      ⚠️ Важно: Рейтинг носит исключительно информационный и рекомендательный характер и не является 
                      официальной государственной оценкой образовательных учреждений.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">5. Интеллектуальная собственность</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Все материалы сайта, включая тексты, изображения, дизайн, являются интеллектуальной собственностью 
                  администрации. Использование материалов без письменного разрешения запрещено.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">6. Изменение условий</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Администрация оставляет за собой право изменять настоящие Условия использования. 
                  Изменения вступают в силу с момента их публикации на сайте.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">7. Контактная информация</h2>
                <p className="text-muted-foreground leading-relaxed">
                  По всем вопросам, связанным с использованием сайта, обращайтесь по адресу: 
                  <span className="text-primary font-medium"> info@shkola-11-klass.ru</span>
                </p>
              </div>

              <div className="border-t pt-6">
                <p className="text-sm text-muted-foreground">
                  Дата последнего обновления: {new Date().toLocaleDateString('ru-RU')}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfService;