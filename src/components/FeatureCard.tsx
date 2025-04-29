
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
}

const FeatureCard = ({ 
  icon: Icon, 
  title, 
  description, 
  className 
}: FeatureCardProps) => {
  return (
    <div className={cn(
      "dante-card flex flex-col items-center text-center",
      "transform transition-all duration-300 hover:-translate-y-1",
      className
    )}>
      <div className="bg-dante-primary/10 dark:bg-dante-primary/20 p-3 rounded-full mb-4">
        <Icon className="h-8 w-8 text-dante-primary" />
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  );
};

export default FeatureCard;
