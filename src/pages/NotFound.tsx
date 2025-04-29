
import { Link } from "react-router-dom";
import { BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-dante-bgLight dark:bg-dante-bgDark p-4">
      <div className="text-center max-w-md">
        <div className="mb-6 inline-block p-4 bg-dante-primary/10 rounded-full">
          <BookOpen className="h-16 w-16 text-dante-primary" />
        </div>
        
        <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Страница не найдена</h1>
        
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
          Кажется, вы заблудились, подобно Данте в сумрачном лесу. Позвольте проводить вас обратно на главную страницу.
        </p>
        
        <div className="dante-quote mb-8">
          <p>В середине пути нашей жизни я очутился в сумрачном лесу, утратив правый путь во тьме долины.</p>
          <div className="text-right text-sm font-medium text-dante-secondary dark:text-dante-light mt-2">
            — Данте, Божественная комедия (Ад, Песнь I)
          </div>
        </div>
        
        <Button asChild size="lg" className="bg-dante-primary hover:bg-dante-secondary">
          <Link to="/">
            Вернуться на главную
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
