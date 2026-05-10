import type { SimulatorProps, SimulatorResults } from "../types/types";

const API_URL = import.meta.env.VITE_API_URL;

export function createSimulator() {
  let results = $state<SimulatorResults | null>(null);
  let isLoading = $state(false);
  let error = $state<string | null>(null);

  const simulate = async (data: SimulatorProps) => {
    isLoading = true;
    error = null;

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

      results = await response.json();
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (e) {
      error = "Error al consutar la API";
    } finally {
      isLoading = false;
    }
  };

  return {
    get results() {
      return results;
    },
    get isLoading() {
      return isLoading;
    },
    get error() {
      return error;
    },
    simulate,
  };
}
