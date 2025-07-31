import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Loader2, Sparkles, Trophy, Medal, Award } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const AISchoolSelector = () => {
  const [requirements, setRequirements] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [recommendations, setRecommendations] = useState<string[] | null>(null);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!requirements.trim()) {
      toast({
        title: "Ошибка",
        description: "Пожалуйста, опишите ваши требования к школе",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    try {
      const response = await fetch("https://hook.eu2.make.com/ychhbq3h0fjvatecatlpbke7qyk9hnb8", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          requirements: requirements,
          timestamp: new Date().toISOString(),
        }),
      });

      if (!response.ok) {
        throw new Error("Ошибка при обработке запроса");
      }

      const data = await response.json();
      setRecommendations(data.schools || []);
      
      toast({
        title: "Готово!",
        description: "Персональные рекомендации сформированы",
      });
    } catch (error) {
      console.error("Error:", error);
      toast({
        title: "Ошибка",
        description: "Не удалось получить рекомендации. Попробуйте позже.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-background to-secondary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full px-6 py-3 mb-6">
            <Brain className="w-6 h-6 text-primary" />
            <span className="font-semibold text-primary">ИИ Подбор школы</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Персональный подбор школы
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Опишите ваши требования, и наш ИИ подберёт идеальные онлайн-школы, 
            соответствующие вашим потребностям и бюджету
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <Sparkles className="w-6 h-6 text-primary" />
                Расскажите о ваших требованиях
              </CardTitle>
              <CardDescription className="text-lg">
                Укажите бюджет, предметы, особенности обучения, цели подготовки и любые другие важные для вас критерии
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <Textarea
                  value={requirements}
                  onChange={(e) => setRequirements(e.target.value)}
                  placeholder="Например: Нужна школа для подготовки к ЕГЭ по математике и физике, бюджет до 8000 рублей в месяц, важна возможность индивидуальных занятий и гибкий график..."
                  className="min-h-32 text-lg resize-none border-2 focus:border-primary/50"
                  disabled={isLoading}
                />
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full text-lg py-6 h-auto shadow-lg"
                  disabled={isLoading || !requirements.trim()}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin mr-2" />
                      Подбираем школы для вас...
                    </>
                  ) : (
                    <>
                      <Brain className="w-5 h-5 mr-2" />
                      Получить персональные рекомендации
                    </>
                  )}
                </Button>
              </form>

              {recommendations && recommendations.length > 0 && (
                <div className="mt-8 p-6 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl border border-primary/20">
                  <h3 className="text-xl font-semibold mb-6 text-primary flex items-center gap-2">
                    <Trophy className="w-6 h-6" />
                    Персональный рейтинг школ для вас:
                  </h3>
                  <div className="space-y-3">
                    {recommendations.map((school, index) => (
                      <div
                        key={index}
                        className={`flex items-center gap-4 p-4 rounded-xl transition-all duration-300 ${
                          index === 0
                            ? "bg-gradient-to-r from-yellow-50 to-amber-50 border-2 border-yellow-200 shadow-lg scale-105"
                            : index === 1
                            ? "bg-gradient-to-r from-gray-50 to-slate-50 border border-gray-200"
                            : index === 2
                            ? "bg-gradient-to-r from-orange-50 to-amber-50 border border-orange-200"
                            : "bg-white/50 border border-gray-100"
                        }`}
                      >
                        <div
                          className={`flex items-center justify-center w-12 h-12 rounded-full font-bold text-lg ${
                            index === 0
                              ? "bg-gradient-to-br from-yellow-400 to-amber-500 text-white shadow-lg"
                              : index === 1
                              ? "bg-gradient-to-br from-gray-400 to-slate-500 text-white"
                              : index === 2
                              ? "bg-gradient-to-br from-orange-400 to-amber-500 text-white"
                              : "bg-gradient-to-br from-primary/20 to-secondary/20 text-primary"
                          }`}
                        >
                          {index === 0 ? (
                            <Trophy className="w-6 h-6" />
                          ) : index === 1 ? (
                            <Medal className="w-6 h-6" />
                          ) : index === 2 ? (
                            <Award className="w-6 h-6" />
                          ) : (
                            index + 1
                          )}
                        </div>
                        <div className="flex-1">
                          <h4
                            className={`font-semibold ${
                              index === 0 ? "text-xl text-amber-800" : "text-lg text-foreground"
                            }`}
                          >
                            {school}
                          </h4>
                          {index === 0 && (
                            <p className="text-sm text-amber-700 mt-1">
                              🏆 Лучший выбор для ваших требований
                            </p>
                          )}
                        </div>
                        {index === 0 && (
                          <div className="flex items-center gap-1">
                            {[...Array(5)].map((_, i) => (
                              <span key={i} className="text-yellow-400 text-lg">
                                ⭐
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};