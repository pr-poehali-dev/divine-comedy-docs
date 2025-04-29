
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Menu, X, BookOpen } from "lucide-react";

const navItems = [
  { 
    name: "Главная", 
    path: "/" 
  },
  { 
    name: "История создания", 
    path: "/history",
    subItems: [
      { name: "Жизнь Данте", path: "/history/dante-life" },
      { name: "Исторический контекст", path: "/history/historical-context" },
      { name: "Процесс написания", path: "/history/writing-process" }
    ]
  },
  { 
    name: "Структура поэмы", 
    path: "/structure",
    subItems: [
      { name: "Ад", path: "/structure/inferno" },
      { name: "Чистилище", path: "/structure/purgatorio" },
      { name: "Рай", path: "/structure/paradiso" }
    ]
  },
  { 
    name: "Персонажи", 
    path: "/characters" 
  },
  { 
    name: "Символика", 
    path: "/symbolism" 
  },
  { 
    name: "Влияние", 
    path: "/influence" 
  }
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="bg-white dark:bg-dante-dark shadow-md z-50 relative">
      <div className="container mx-auto px-4 md:px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-dante-primary">
            <BookOpen className="h-6 w-6" />
            <span className="font-serif font-bold text-xl md:text-2xl">Божественная комедия</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <NavigationMenu>
              <NavigationMenuList>
                {navItems.map((item) => (
                  item.subItems ? (
                    <NavigationMenuItem key={item.path}>
                      <NavigationMenuTrigger className={cn(
                        "font-medium",
                        location.pathname.includes(item.path) ? "text-dante-primary" : ""
                      )}>
                        {item.name}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[300px] gap-3 p-4">
                          {item.subItems.map((subItem) => (
                            <li key={subItem.path}>
                              <NavigationMenuLink asChild>
                                <Link
                                  to={subItem.path}
                                  className={cn(
                                    "block p-2 hover:bg-dante-light/30 rounded-md transition-colors",
                                    location.pathname === subItem.path ? "bg-dante-light/50 text-dante-primary" : ""
                                  )}
                                >
                                  {subItem.name}
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  ) : (
                    <NavigationMenuItem key={item.path}>
                      <Link
                        to={item.path}
                        className={cn(
                          "px-3 py-2 font-medium hover:text-dante-primary transition-colors",
                          location.pathname === item.path ? "text-dante-primary" : ""
                        )}
                      >
                        {item.name}
                      </Link>
                    </NavigationMenuItem>
                  )
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-dante-primary" 
            onClick={toggleMobileMenu}
            aria-label="Меню навигации"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden pt-4 pb-2 animate-fade-in">
            <nav>
              <ul className="space-y-1">
                {navItems.map((item) => (
                  <li key={item.path}>
                    {item.subItems ? (
                      <div className="py-1">
                        <div className="font-medium py-2">{item.name}</div>
                        <ul className="pl-4 border-l-2 border-dante-light space-y-1">
                          {item.subItems.map((subItem) => (
                            <li key={subItem.path}>
                              <Link
                                to={subItem.path}
                                className={cn(
                                  "block py-1.5 hover:text-dante-primary transition-colors",
                                  location.pathname === subItem.path ? "text-dante-primary" : ""
                                )}
                                onClick={toggleMobileMenu}
                              >
                                {subItem.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : (
                      <Link
                        to={item.path}
                        className={cn(
                          "block py-2 font-medium hover:text-dante-primary transition-colors",
                          location.pathname === item.path ? "text-dante-primary" : ""
                        )}
                        onClick={toggleMobileMenu}
                      >
                        {item.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
