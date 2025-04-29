
import { cn } from "@/lib/utils";

interface QuoteBlockProps {
  quote: string;
  source: string;
  className?: string;
}

const QuoteBlock = ({ quote, source, className }: QuoteBlockProps) => {
  return (
    <div className={cn(
      "dante-quote relative p-6 bg-white dark:bg-dante-dark rounded-lg shadow-md",
      "before:content-['"'] before:absolute before:top-2 before:left-4 before:text-6xl before:text-dante-primary/20 before:font-serif",
      "hover:shadow-lg transition-shadow duration-300",
      className
    )}>
      <p className="relative z-10 mb-3">{quote}</p>
      <div className="text-sm font-medium text-dante-secondary dark:text-dante-light text-right">
        — {source}
      </div>
    </div>
  );
};

export default QuoteBlock;
