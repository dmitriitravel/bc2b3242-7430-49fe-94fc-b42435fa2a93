import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Политика конфиденциальности
          </h1>
          
          <Card className="shadow-elegant">
            <CardContent className="p-8 space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">1. Общая информация</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Настоящая Политика конфиденциальности описывает порядок обработки персональных данных 
                  пользователей сайта shkola-11-klass.ru. Мы серьезно относимся к защите ваших персональных 
                  данных и соблюдаем требования действующего законодательства РФ.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">2. Какие данные мы собираем</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Мы можем собирать следующие типы персональных данных:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>Имя и фамилия</li>
                  <li>Адрес электронной почты</li>
                  <li>Номер телефона</li>
                  <li>Информация о предпочтениях в образовании</li>
                  <li>Технические данные (IP-адрес, тип браузера, время посещения)</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">3. Цели обработки данных</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Мы используем ваши персональные данные для:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>Предоставления консультаций по выбору онлайн-школы</li>
                  <li>Ответов на ваши вопросы и обращения</li>
                  <li>Улучшения качества наших услуг</li>
                  <li>Отправки информационных материалов (с вашего согласия)</li>
                  <li>Анализа статистики использования сайта</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">4. Правовые основания обработки</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Обработка персональных данных осуществляется на основании вашего согласия, 
                  а также для исполнения договорных обязательств и соблюдения требований 
                  законодательства Российской Федерации.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">5. Передача данных третьим лицам</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Мы не передаем ваши персональные данные третьим лицам без вашего явного согласия, 
                  за исключением случаев, предусмотренных действующим законодательством РФ.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">6. Защита персональных данных</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Мы применяем следующие меры защиты:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>Шифрование данных при передаче</li>
                  <li>Ограничение доступа к персональным данным</li>
                  <li>Регулярное обновление систем безопасности</li>
                  <li>Контроль действий сотрудников с персональными данными</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">7. Сроки хранения данных</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Персональные данные хранятся в течение срока, необходимого для достижения целей 
                  обработки, но не более 3 лет с момента последнего обращения, если иное не 
                  предусмотрено законодательством.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">8. Ваши права</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Вы имеете право:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>Получать информацию об обработке ваших персональных данных</li>
                  <li>Требовать уточнения, изменения или удаления данных</li>
                  <li>Отзывать согласие на обработку данных</li>
                  <li>Обращаться в надзорные органы</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">9. Использование cookie</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Наш сайт использует файлы cookie для улучшения пользовательского опыта и 
                  анализа статистики посещений. Вы можете отключить cookie в настройках браузера.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">10. Контактная информация</h2>
                <p className="text-muted-foreground leading-relaxed">
                  По вопросам обработки персональных данных обращайтесь по адресу: 
                  <span className="text-primary font-medium"> info@shkola-11-klass.ru</span>
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">11. Изменения в политике</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Мы оставляем за собой право вносить изменения в настоящую Политику конфиденциальности. 
                  Изменения вступают в силу с момента их публикации на сайте.
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

export default PrivacyPolicy;