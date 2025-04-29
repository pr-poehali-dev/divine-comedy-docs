
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
  primaryButtonText: string;
  primaryButtonLink: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  className?: string;
}

const HeroSection = ({
  title,
  subtitle,
  backgroundImage,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink,
  className
}: HeroSectionProps) => {
  return (
    <section className={cn(
      "relative py-16 md:py-24 text-white overflow-hidden",
      className
    )}>
      <div 
        className="absolute inset-0 opacity-30 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-r from-dante-dark to-dante-tertiary opacity-80"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            {title}
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-serif animate-fade-in" style={{animationDelay: "0.2s"}}>
            {subtitle}
          </p>
          <div className="flex flex-wrap gap-4 justify-center animate-fade-in" style={{animationDelay: "0.4s"}}>
            <Link to={primaryButtonLink} className="bg-dante-primary text-white py-3 px-6 rounded-md hover:bg-dante-secondary transition-colors">
              {primaryButtonText}
            </Link>
            {secondaryButtonText && secondaryButtonLink && (
              <Link to={secondaryButtonLink} className="bg-white/10 text-white border border-white/30 py-3 px-6 rounded-md hover:bg-white/20 transition-colors">
                {secondaryButtonText}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
