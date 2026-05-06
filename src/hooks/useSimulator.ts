import { useState } from "react";
import type { SimulatorProps, SimulatorResults } from "../types/types";

const API_URL = import.meta.env.VITE_API_URL;

export const useSimulator = () => {
  const [results, setResults] = useState<SimulatorResults | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const simulate = async (data: SimulatorProps) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          capital_invertido: data.capital_invertido,
          plazo_en_dias: data.plazo_en_dias,
          tna: data.tna,
        }),
      });

      if (!response.ok) {
        throw new Error("Error en la respuesta de la API");
      }

      const results = await response.json();
      setResults(results);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (e) {
      setError("Error al consutar la API");
    } finally {
      setIsLoading(false);
    }
  };

  return { results, isLoading, error, simulate };
};
