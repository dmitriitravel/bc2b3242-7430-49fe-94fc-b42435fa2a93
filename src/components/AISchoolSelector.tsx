import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Loader2, Sparkles, Trophy, Medal, Award, ExternalLink, Zap, ChevronDown, ChevronUp } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Skeleton } from "@/components/ui/skeleton";

export const AISchoolSelector = () => {
  const [requirements, setRequirements] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [recommendations, setRecommendations] = useState<{name: string, description?: string}[] | null>(null);
  const [showAllQuestions, setShowAllQuestions] = useState(false);
  const { toast } = useToast();

  const quickQuestions = [
    "Ребёнок подвергается буллингу в школе, нужна безопасная среда для обучения",
    "Нужен гибкий график из-за занятий спортом/творчеством",
    "Семья часто переезжает, нужна стабильность в образовании",
    "Ребёнок опережает программу, нужны углублённые курсы",
    "Проблемы с социализацией в обычной школе",
    "Подготовка к ЕГЭ/ОГЭ с индивидуальным подходом"
  ];

  const handleQuickSelect = (question: string) => {
    setRequirements(question);
  };

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
      
      // Handle both old format (data.schools array) and new format (object with school names as keys)
      let schoolsList = [];
      
      if (data.schools && Array.isArray(data.schools)) {
        // Old format - array of school names
        schoolsList = data.schools.map((name: string) => ({ name }));
      } else if (typeof data === 'object' && data !== null) {
        // New format - object with school names as keys and descriptions as values
        schoolsList = Object.entries(data).map(([name, description], index) => ({
          name,
          description: index === 0 ? description as string : undefined
        }));
      }
      
      if (schoolsList.length > 0) {
        setRecommendations(schoolsList);
        toast({
          title: "Готово!",
          description: "Персональные рекомендации сформированы",
        });
      } else {
        throw new Error("Не удалось получить список школ");
      }
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
    <section id="ai-school-selector" className="py-20 bg-gradient-to-br from-background to-secondary/5">
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
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-primary" />
                  Частые ситуации при выборе онлайн-школы:
                </h4>
                <div className="space-y-3">
                  {quickQuestions.slice(0, showAllQuestions ? quickQuestions.length : 3).map((question, index) => (
                    <Button
                      key={index}
                      className="text-left h-auto p-3 text-sm justify-start bg-orange-500 text-white hover:bg-orange-600 border-0 whitespace-normal break-words transition-all duration-200"
                      onClick={() => handleQuickSelect(question)}
                      disabled={isLoading}
                    >
                      <span className="text-left leading-relaxed">
                        {question}
                      </span>
                    </Button>
                  ))}
                  
                  {quickQuestions.length > 3 && (
                    <Button
                      className="w-full bg-orange-500 text-white hover:bg-orange-600 border-0 font-medium"
                      onClick={() => setShowAllQuestions(!showAllQuestions)}
                      disabled={isLoading}
                    >
                      {showAllQuestions ? (
                        <>
                          <ChevronUp className="w-4 h-4 mr-2" />
                          Скрыть дополнительные варианты
                        </>
                      ) : (
                        <>
                          <ChevronDown className="w-4 h-4 mr-2" />
                          Показать еще ({quickQuestions.length - 3})
                        </>
                      )}
                    </Button>
                  )}
                </div>
              </div>
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
                  className="w-full text-lg py-6 h-auto shadow-lg bg-orange-500 text-white hover:bg-orange-600 border-0"
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

              {isLoading && (
                <div className="mt-8 p-6 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl border border-primary/20">
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center gap-3 mb-4">
                      <Brain className="w-8 h-8 text-primary animate-pulse" />
                      <span className="text-xl font-semibold text-primary">ИИ анализирует ваши требования...</span>
                    </div>
                    <div className="flex justify-center items-center gap-2 mb-6">
                      <div className="w-3 h-3 bg-primary rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                      <div className="w-3 h-3 bg-primary rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                      <div className="w-3 h-3 bg-primary rounded-full animate-bounce"></div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    {[...Array(5)].map((_, index) => (
                      <div key={index} className="flex items-center gap-4 p-4 rounded-xl bg-white/50 border border-gray-100">
                        <Skeleton className="w-12 h-12 rounded-full" />
                        <div className="flex-1 space-y-2">
                          <Skeleton className="h-5 w-3/4" />
                          {index === 0 && <Skeleton className="h-3 w-full" />}
                          {index === 0 && <Skeleton className="h-3 w-2/3" />}
                        </div>
                        {index === 0 && (
                          <div className="flex gap-1">
                            {[...Array(5)].map((_, i) => (
                              <Skeleton key={i} className="w-5 h-5 rounded" />
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {recommendations && recommendations.length > 0 && !isLoading && (
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
                            {school.name}
                          </h4>
                          {index === 0 && school.name === "Skysmart" && school.description && (
                            <p className="text-sm text-amber-700 mt-2 leading-relaxed">
                              {school.description}
                            </p>
                          )}
                          {index === 0 && school.name === "Skysmart" && (
                            <p className="text-sm text-amber-700 mt-1 font-medium">
                              🏆 Лучший выбор для ваших требований
                            </p>
                          )}
                        </div>
                        {index === 0 && school.name === "Skysmart" && (
                          <div className="flex flex-col items-end gap-2">
                            <div className="flex items-center gap-1">
                              {[...Array(5)].map((_, i) => (
                                <span key={i} className="text-yellow-400 text-lg">
                                  ⭐
                                </span>
                              ))}
                            </div>
                            <Button 
                              asChild
                              size="sm"
                              className="bg-gradient-to-r from-amber-600 to-yellow-600 text-white shadow-md hover:shadow-lg transition-all duration-300"
                            >
                              <a 
                                href="https://skysmart.ru/homeschooling" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="flex items-center gap-1"
                              >
                                <ExternalLink className="w-4 h-4" />
                                Перейти на сайт
                              </a>
                            </Button>
                          </div>
                        )}
                        {index === 0 && school.name !== "Skysmart" && (
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
                  <div className="mt-6 flex justify-center">
                    <Button 
                      asChild
                      size="lg"
                      className="bg-gradient-to-r from-primary to-secondary text-white shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <a 
                        href="https://skysmart.ru/homeschooling" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <ExternalLink className="w-5 h-5" />
                        Перейти на Skysmart
                      </a>
                    </Button>
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