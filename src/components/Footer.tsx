
import { Link } from "react-router-dom";
import { BookOpen, Mail, Users, Globe, GitHub } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-dante-dark text-white pt-12 pb-6">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <BookOpen className="h-6 w-6 text-dante-primary" />
              <h3 className="font-serif font-bold text-xl">Божественная комедия</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Образовательный проект, посвященный изучению великого произведения Данте Алигьери.
            </p>
          </div>
          
          {/* Navigation */}
          <div>
            <h3 className="font-bold text-lg mb-4">Разделы</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-dante-primary transition-colors">Главная</Link>
              </li>
              <li>
                <Link to="/history" className="text-gray-300 hover:text-dante-primary transition-colors">История создания</Link>
              </li>
              <li>
                <Link to="/structure" className="text-gray-300 hover:text-dante-primary transition-colors">Структура поэмы</Link>
              </li>
              <li>
                <Link to="/characters" className="text-gray-300 hover:text-dante-primary transition-colors">Персонажи</Link>
              </li>
              <li>
                <Link to="/symbolism" className="text-gray-300 hover:text-dante-primary transition-colors">Символика</Link>
              </li>
            </ul>
          </div>
          
          {/* Additional Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Дополнительно</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/influence" className="text-gray-300 hover:text-dante-primary transition-colors">Влияние</Link>
              </li>
              <li>
                <Link to="/bibliography" className="text-gray-300 hover:text-dante-primary transition-colors">Библиография</Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-300 hover:text-dante-primary transition-colors">Галерея</Link>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-dante-primary transition-colors">Полный текст поэмы</a>
              </li>
            </ul>
          </div>
          
          {/* Connect */}
          <div>
            <h3 className="font-bold text-lg mb-4">Связаться с нами</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-dante-primary" />
                <a href="mailto:info@dante-project.ru" className="text-gray-300 hover:text-dante-primary transition-colors">
                  info@dante-project.ru
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Users className="h-5 w-5 text-dante-primary" />
                <a href="#" className="text-gray-300 hover:text-dante-primary transition-colors">
                  Сообщество
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Globe className="h-5 w-5 text-dante-primary" />
                <a href="#" className="text-gray-300 hover:text-dante-primary transition-colors">
                  Другие проекты
                </a>
              </li>
              <li className="flex items-center gap-2">
                <GitHub className="h-5 w-5 text-dante-primary" />
                <a href="#" className="text-gray-300 hover:text-dante-primary transition-colors">
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <Separator className="my-6 bg-gray-700" />
        
        <div className="text-center text-gray-400 text-sm">
          <p>© {currentYear} Божественная комедия. Образовательный проект.</p>
          <p className="mt-1">Все права на оригинальное произведение принадлежат человечеству.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
