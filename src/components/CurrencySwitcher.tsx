import { Currency } from "@/hooks/useCurrency";
import { Button } from "./ui/button";

interface CurrencySwitcherProps {
  currency: Currency;
  onCurrencyChange: (currency: Currency) => void;
}

export const CurrencySwitcher = ({ currency, onCurrencyChange }: CurrencySwitcherProps) => {
  return (
    <div className="inline-flex items-center gap-1 p-1 rounded-lg bg-muted border border-border">
      <Button
        variant={currency === "INR" ? "default" : "ghost"}
        size="sm"
        onClick={() => onCurrencyChange("INR")}
        className={`text-xs px-3 py-1 transition-all ${
          currency === "INR" 
            ? "bg-primary text-primary-foreground shadow-sm" 
            : "hover:bg-background"
        }`}
      >
        ₹ INR
      </Button>
      <Button
        variant={currency === "USD" ? "default" : "ghost"}
        size="sm"
        onClick={() => onCurrencyChange("USD")}
        className={`text-xs px-3 py-1 transition-all ${
          currency === "USD" 
            ? "bg-primary text-primary-foreground shadow-sm" 
            : "hover:bg-background"
        }`}
      >
        $ USD
      </Button>
    </div>
  );
};
