import { useState, useEffect } from "react";
import { Country } from "../types/country.types";

interface UseCountriesResult {
  loading: boolean;
  error: string;
  country: Country[];
}

const useCountries = (name: string): UseCountriesResult => {
  const [country, setCountry] = useState<Country[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCountryInfo = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://restcountries.com/v3.1/name/${name}`
        );
        const data: Country[] = await response.json();
        setCountry(data);
      } catch (error) {
        console.error(error);
        setError("No country found!");
      } finally {
        setLoading(false);
      }
    };

    fetchCountryInfo();
  }, [name]);

  return {
    loading,
    error,
    country,
  };
};

export default useCountries;
