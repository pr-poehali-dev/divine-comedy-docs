
import { cn } from "@/lib/utils";

interface TimelineEventProps {
  year: string;
  title: string;
  description: string;
  align?: "left" | "right";
}

const TimelineEvent = ({ 
  year, 
  title, 
  description, 
  align = "left" 
}: TimelineEventProps) => {
  return (
    <div className={cn(
      "mb-12 relative",
      align === "left" ? "md:pr-10 md:text-right" : "md:pl-10"
    )}>
      <div className={cn(
        "bg-white dark:bg-dante-dark p-5 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 relative z-10",
        "transform transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg",
        align === "left" ? "md:mr-10" : "md:ml-10"
      )}>
        <div className="absolute top-5 w-6 h-6 rounded-full bg-dante-primary z-10 shadow-md border-2 border-white dark:border-dante-dark"
          style={{ 
            [align === "left" ? "right" : "left"]: "-13px" 
          }}
        ></div>
        <span className="inline-block mb-1 text-dante-primary font-bold">{year}</span>
        <h3 className="text-xl font-serif font-bold mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300">{description}</p>
      </div>
    </div>
  );
};

export default TimelineEvent;
