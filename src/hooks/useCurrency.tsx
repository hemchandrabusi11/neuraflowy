import { useState, useEffect } from "react";

export type Currency = "INR" | "USD";

interface UseCurrencyReturn {
  currency: Currency;
  setCurrency: (currency: Currency) => void;
  formatPrice: (priceInINR: number) => string;
  exchangeRate: number;
}

const FALLBACK_EXCHANGE_RATE = 83; // 1 USD = 83 INR (fallback)
const CACHE_DURATION = 60 * 60 * 1000; // 1 hour

export const useCurrency = (): UseCurrencyReturn => {
  const [currency, setCurrencyState] = useState<Currency>(() => {
    // Check localStorage first
    const saved = localStorage.getItem("neuraflow_currency");
    if (saved === "INR" || saved === "USD") return saved;
    
    // Default based on location will be set in useEffect
    return "INR";
  });

  const [exchangeRate, setExchangeRate] = useState<number>(FALLBACK_EXCHANGE_RATE);

  useEffect(() => {
    // Detect country on mount if no saved preference
    const saved = localStorage.getItem("neuraflow_currency");
    if (!saved) {
      detectCountry();
    }

    // Fetch exchange rate
    fetchExchangeRate();
  }, []);

  const detectCountry = async () => {
    try {
      const response = await fetch("https://ipapi.co/json/");
      const data = await response.json();
      
      if (data.country_code === "IN") {
        setCurrencyState("INR");
      } else {
        setCurrencyState("USD");
      }
    } catch (error) {
      console.error("Failed to detect country:", error);
      // Default to INR if detection fails
      setCurrencyState("INR");
    }
  };

  const fetchExchangeRate = async () => {
    try {
      // Check cache first
      const cached = localStorage.getItem("neuraflow_exchange_rate");
      const cacheTime = localStorage.getItem("neuraflow_exchange_rate_time");
      
      if (cached && cacheTime) {
        const age = Date.now() - parseInt(cacheTime);
        if (age < CACHE_DURATION) {
          setExchangeRate(parseFloat(cached));
          return;
        }
      }

      // Fetch fresh rate
      const response = await fetch("https://api.exchangerate-api.com/v4/latest/USD");
      const data = await response.json();
      
      if (data.rates && data.rates.INR) {
        const rate = data.rates.INR;
        setExchangeRate(rate);
        
        // Cache the rate
        localStorage.setItem("neuraflow_exchange_rate", rate.toString());
        localStorage.setItem("neuraflow_exchange_rate_time", Date.now().toString());
      }
    } catch (error) {
      console.error("Failed to fetch exchange rate:", error);
      // Use fallback rate
      setExchangeRate(FALLBACK_EXCHANGE_RATE);
    }
  };

  const setCurrency = (newCurrency: Currency) => {
    setCurrencyState(newCurrency);
    localStorage.setItem("neuraflow_currency", newCurrency);
  };

  const formatPrice = (priceInINR: number): string => {
    if (currency === "INR") {
      return new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
        maximumFractionDigits: 0,
      }).format(priceInINR);
    } else {
      const priceInUSD = priceInINR / exchangeRate;
      return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        maximumFractionDigits: 0,
      }).format(priceInUSD);
    }
  };

  return {
    currency,
    setCurrency,
    formatPrice,
    exchangeRate,
  };
};
