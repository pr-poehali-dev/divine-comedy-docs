
import { Bookmark, BookOpen, Clock, Globe, ScrollText } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TimelineEvent from "@/components/TimelineEvent";
import QuoteBlock from "@/components/QuoteBlock";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen bg-dante-bgLight dark:bg-dante-bgDark">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-r from-dante-dark to-dante-tertiary text-white overflow-hidden">
        <div className="absolute inset-0 opacity-30 bg-[url('https://images.unsplash.com/photo-1555116505-38ab61800975?q=80&w=2069')] bg-cover bg-center"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              Божественная комедия
            </h1>
            <p className="text-xl md:text-2xl mb-8 font-serif animate-fade-in" style={{animationDelay: "0.2s"}}>
              История создания и общая характеристика величайшего произведения мировой литературы
            </p>
            <div className="flex flex-wrap gap-4 justify-center animate-fade-in" style={{animationDelay: "0.4s"}}>
              <Link to="/history" className="bg-dante-primary text-white py-3 px-6 rounded-md hover:bg-dante-secondary transition-colors">
                Исследовать историю
              </Link>
              <Link to="/structure" className="bg-white/10 text-white border border-white/30 py-3 px-6 rounded-md hover:bg-white/20 transition-colors">
                Структура поэмы
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title">Шедевр Данте Алигьери</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg mb-4">
                «Божественная комедия» — эпическая поэма, созданная Данте Алигьери в период с 1308 по 1321 год. Это одно из самых значимых произведений мировой литературы, которое оказало огромное влияние на культуру, искусство и философскую мысль последующих веков.
              </p>
              <p className="text-lg mb-4">
                Изначально произведение называлось просто «Комедия». Эпитет «Божественная» был добавлен спустя время Джованни Боккаччо, подчеркивая величие и духовную глубину произведения.
              </p>
              <div className="flex items-center gap-2 text-dante-primary font-medium">
                <BookOpen size={18} />
                <span>Написана на тосканском диалекте итальянского языка</span>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1621863573871-0928e2ab3211?q=80&w=1887" 
                alt="Данте Алигьери" 
                className="rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-black/60 text-white p-3 rounded text-sm">
                Портрет Данте Алигьери, автора «Божественной комедии» (художественная интерпретация)
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-12 bg-gray-50 dark:bg-dante-dark">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="section-title text-center mx-auto">Хронология создания</h2>
          <div className="max-w-3xl mx-auto relative mt-12">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-dante-primary"></div>
            
            <TimelineEvent 
              year="1265" 
              title="Рождение Данте"
              description="Данте Алигьери родился во Флоренции в семье небогатого дворянина Алигьеро ди Беллинчоне." 
            />
            
            <TimelineEvent 
              year="1274" 
              title="Первая встреча с Беатриче"
              description="В возрасте 9 лет Данте впервые встречает Беатриче Портинари, которая станет его музой и вдохновением." 
              align="right"
            />
            
            <TimelineEvent 
              year="1290" 
              title="Смерть Беатриче"
              description="Беатриче умирает в возрасте 24 лет. Это событие глубоко потрясло Данте и позже отразилось в его творчестве." 
            />
            
            <TimelineEvent 
              year="1302" 
              title="Изгнание из Флоренции"
              description="Данте был изгнан из родной Флоренции по политическим причинам. Он больше никогда не вернулся в родной город." 
              align="right"
            />
            
            <TimelineEvent 
              year="1308" 
              title="Начало работы над «Комедией»"
              description="В изгнании Данте начинает работу над своим главным произведением, которое позже назовут «Божественной комедией»." 
            />
            
            <TimelineEvent 
              year="1320" 
              title="Завершение поэмы"
              description="Данте завершает последнюю часть произведения — «Рай», незадолго до своей смерти." 
              align="right"
            />
            
            <TimelineEvent 
              year="1321" 
              title="Смерть Данте"
              description="14 сентября 1321 года Данте умирает в Равенне в возрасте 56 лет, вскоре после завершения «Божественной комедии»." 
            />
          </div>
        </div>
      </section>

      {/* Structure of the Divine Comedy */}
      <section className="py-16 container mx-auto px-4 md:px-6">
        <h2 className="section-title text-center mx-auto">Структура поэмы</h2>
        <div className="max-w-4xl mx-auto mt-8">
          <p className="text-lg text-center mb-12">
            «Божественная комедия» имеет строгую математическую структуру и состоит из трех частей (кантик), каждая из которых содержит 33 песни, а вместе с вводной песней общее число песен составляет 100.
          </p>
          
          <Tabs defaultValue="inferno" className="mb-12">
            <TabsList className="grid grid-cols-3 mb-8">
              <TabsTrigger value="inferno" className="data-[state=active]:bg-red-100 data-[state=active]:text-red-800 dark:data-[state=active]:bg-red-950 dark:data-[state=active]:text-red-200">Ад</TabsTrigger>
              <TabsTrigger value="purgatory" className="data-[state=active]:bg-amber-100 data-[state=active]:text-amber-800 dark:data-[state=active]:bg-amber-950 dark:data-[state=active]:text-amber-200">Чистилище</TabsTrigger>
              <TabsTrigger value="paradise" className="data-[state=active]:bg-blue-100 data-[state=active]:text-blue-800 dark:data-[state=active]:bg-blue-950 dark:data-[state=active]:text-blue-200">Рай</TabsTrigger>
            </TabsList>
            
            <TabsContent value="inferno">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-serif font-bold mb-4 text-red-700 dark:text-red-400">Inferno (Ад)</h3>
                  <p className="mb-4">
                    Первая часть поэмы описывает путешествие Данте через девять кругов Ада в сопровождении римского поэта Вергилия. Каждый круг предназначен для наказания определенного греха, а тяжесть наказания соответствует тяжести греха.
                  </p>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 mt-1">●</span>
                      <span>9 кругов, от наименее тяжких грехов к наиболее тяжким</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 mt-1">●</span>
                      <span>Проводник: Вергилий, олицетворяющий человеческий разум</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 mt-1">●</span>
                      <span>Начинается с «В середине пути нашей жизни»</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <img 
                    src="https://images.unsplash.com/photo-1614177684266-8769896228a3?q=80&w=2070" 
                    alt="Иллюстрация Ада" 
                    className="rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="purgatory">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-serif font-bold mb-4 text-amber-700 dark:text-amber-400">Purgatorio (Чистилище)</h3>
                  <p className="mb-4">
                    Вторая часть посвящена восхождению Данте и Вергилия на гору Чистилища. Здесь души умерших очищаются от грехов перед тем, как войти в Рай.
                  </p>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-start gap-2">
                      <span className="text-amber-600 mt-1">●</span>
                      <span>7 уровней, соответствующих семи смертным грехам</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-600 mt-1">●</span>
                      <span>Символизирует духовное очищение и возрождение</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-600 mt-1">●</span>
                      <span>В конце Данте встречает Беатриче</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <img 
                    src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=2074" 
                    alt="Иллюстрация Чистилища" 
                    className="rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="paradise">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-serif font-bold mb-4 text-blue-700 dark:text-blue-400">Paradiso (Рай)</h3>
                  <p className="mb-4">
                    В финальной части Беатриче становится проводником Данте через девять небесных сфер Рая до Эмпирея, где он созерцает Бога.
                  </p>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">●</span>
                      <span>9 небесных сфер, каждая с особым блаженством</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">●</span>
                      <span>Проводник: Беатриче, олицетворяющая божественную мудрость</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">●</span>
                      <span>Кульминация: созерцание Божественного света</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <img 
                    src="https://images.unsplash.com/photo-1513151233558-d860c5398176?q=80&w=2070" 
                    alt="Иллюстрация Рая" 
                    className="rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Literary and Historical Context */}
      <section className="py-16 bg-dante-bgDark text-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="section-title text-white border-dante-light inline-block mx-auto text-center">Исторический контекст</h2>
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <Card className="bg-dante-dark border-dante-tertiary hover:border-dante-primary p-6">
              <div className="flex items-center gap-3 mb-4">
                <Globe className="text-dante-primary h-8 w-8" />
                <h3 className="text-xl font-serif font-bold">Политическая ситуация</h3>
              </div>
              <p className="mb-4">
                Италия в эпоху Данте была разделена на множество городов-государств, которые постоянно конфликтовали между собой. Основное противостояние происходило между гвельфами (сторонниками папы) и гибеллинами (сторонниками императора).
              </p>
              <p>
                Данте сам был активным политическим деятелем, принадлежавшим к партии белых гвельфов, что в итоге привело к его изгнанию.
              </p>
            </Card>
            
            <Card className="bg-dante-dark border-dante-tertiary hover:border-dante-primary p-6">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="text-dante-primary h-8 w-8" />
                <h3 className="text-xl font-serif font-bold">Культурная эпоха</h3>
              </div>
              <p className="mb-4">
                «Божественная комедия» создавалась на стыке Средневековья и раннего Возрождения. Она отражает средневековое мировоззрение с его религиозностью и символизмом, но одновременно предвосхищает гуманистические идеалы Ренессанса.
              </p>
              <p>
                Данте был одним из первых, кто начал отходить от латыни в серьезных литературных произведениях, используя народный язык.
              </p>
            </Card>
            
            <Card className="bg-dante-dark border-dante-tertiary hover:border-dante-primary p-6">
              <div className="flex items-center gap-3 mb-4">
                <ScrollText className="text-dante-primary h-8 w-8" />
                <h3 className="text-xl font-serif font-bold">Литературные влияния</h3>
              </div>
              <p className="mb-4">
                На Данте оказали влияние классические авторы, особенно Вергилий, чью «Энеиду» он глубоко почитал. Именно поэтому Вергилий становится его проводником в первых двух частях поэмы.
              </p>
              <p>
                Также заметно влияние средневековой философии, особенно трудов Фомы Аквинского и других схоластов, смешанное с мистическими традициями.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Themes */}
      <section className="py-16 container mx-auto px-4 md:px-6">
        <h2 className="section-title text-center mx-auto">Основные темы произведения</h2>
        
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-8 mt-12 max-w-4xl mx-auto">
          <div className="dante-card">
            <h3 className="text-xl font-bold mb-3 text-dante-primary">Духовное путешествие человека</h3>
            <p>
              Главная тема «Божественной комедии» — путь человеческой души к спасению. Данте изображает это как буквальное путешествие через загробный мир, которое символизирует духовное развитие от греха к искуплению и просветлению.
            </p>
          </div>
          
          <div className="dante-card">
            <h3 className="text-xl font-bold mb-3 text-dante-primary">Справедливость и возмездие</h3>
            <p>
              Данте скрупулезно описывает наказания грешников в Аду, следуя принципу «контрапассо» — наказание соответствует характеру греха. Это отражает средневековые представления о божественной справедливости.
            </p>
          </div>
          
          <div className="dante-card">
            <h3 className="text-xl font-bold mb-3 text-dante-primary">Политика и мораль</h3>
            <p>
              Данте размещает многих своих политических противников и современников в различных частях загробного мира, выражая таким образом моральную оценку их деяний и критикуя коррупцию церкви и государства.
            </p>
          </div>
          
          <div className="dante-card">
            <h3 className="text-xl font-bold mb-3 text-dante-primary">Любовь как движущая сила</h3>
            <p>
              Любовь в произведении имеет разные проявления: от земной и чувственной до возвышенной и божественной. Беатриче для Данте — символ этой возвышенной любви, которая ведет к духовному преображению.
            </p>
          </div>
        </div>
      </section>

      {/* Famous Quotes */}
      <section className="py-16 bg-gray-50 dark:bg-dante-dark">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="section-title text-center mx-auto">Знаменитые строки</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mt-12 max-w-5xl mx-auto">
            <QuoteBlock 
              quote="В середине пути нашей жизни я очутился в сумрачном лесу, утратив правый путь во тьме долины." 
              source="Ад, Песнь I"
            />
            
            <QuoteBlock 
              quote="Оставь надежду, всяк сюда входящий." 
              source="Ад, Песнь III (надпись на вратах Ада)"
            />
            
            <QuoteBlock 
              quote="Любовь, что движет солнце и светила." 
              source="Рай, Песнь XXXIII (последняя строка поэмы)"
            />
            
            <QuoteBlock 
              quote="Нет большей муки, чем вспоминать о счастливом времени в несчастье." 
              source="Ад, Песнь V (слова Франчески да Римини)"
            />
          </div>
        </div>
      </section>

      {/* Influence */}
      <section className="py-16 container mx-auto px-4 md:px-6">
        <h2 className="section-title text-center mx-auto">Влияние на культуру</h2>
        
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-center mb-12">
            «Божественная комедия» оказала огромное влияние на литературу, искусство, музыку и даже популярную культуру, продолжая вдохновлять художников на протяжении более семи веков.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-serif font-bold mb-4">Литература</h3>
              <p className="mb-3">
                Произведение Данте повлияло на множество писателей, от Джеффри Чосера и Джона Мильтона до Т.С. Элиота и Хорхе Луиса Борхеса. Оно создало образец для литературных путешествий в потусторонние миры.
              </p>
              <p>
                Структура и образы «Божественной комедии» часто используются в современной литературе, включая научную фантастику и фэнтези.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-serif font-bold mb-4">Изобразительное искусство</h3>
              <p className="mb-3">
                Произведение вдохновило множество художников, от современников Данте до нашего времени. Особенно известны иллюстрации Сандро Боттичелли, Уильяма Блейка и Гюстава Доре.
              </p>
              <p>
                Образы Ада, созданные Данте, сформировали визуальное представление о загробном мире в европейской культуре.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-serif font-bold mb-4">Музыка</h3>
              <p className="mb-3">
                Поэма вдохновила многих композиторов, включая Ференца Листа («Данте-симфония»), Петра Чайковского, Сергея Рахманинова, а в современной культуре — многочисленные рок-группы и исполнителей.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-serif font-bold mb-4">Современная культура</h3>
              <p className="mb-3">
                Образы из «Божественной комедии» широко представлены в кинематографе, видеоиграх, комиксах и других формах современного искусства, доказывая непреходящую актуальность произведения.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 bg-dante-primary text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Исследуйте «Божественную комедию» глубже</h2>
            <p className="text-xl mb-8">
              Погрузитесь в удивительный мир, созданный великим Данте. Изучите структуру поэмы, познакомьтесь с персонажами и откройте для себя символическое значение произведения.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/structure" className="bg-white text-dante-primary py-3 px-6 rounded-md hover:bg-gray-100 transition-colors font-medium">
                Структура поэмы
              </Link>
              <Link to="/characters" className="bg-dante-secondary text-white py-3 px-6 rounded-md hover:bg-dante-tertiary transition-colors font-medium">
                Персонажи
              </Link>
              <Link to="/symbolism" className="bg-dante-secondary text-white py-3 px-6 rounded-md hover:bg-dante-tertiary transition-colors font-medium">
                Символика
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
