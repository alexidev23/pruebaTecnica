import { DollarSign, Percent } from "lucide-react";
import { useState } from "react";
import type { SimulatorProps } from "../types/types";
export interface SimulatorFormProps {
  onOpenHistory: () => void;
  onSubmit: (data: SimulatorProps) => void;
  isLoading: boolean;
}

export default function SimulatorForm({
  onOpenHistory,
  onSubmit,
  isLoading,
}: SimulatorFormProps) {
  const [input, setInput] = useState({
    monto: 0,
    dias: 0,
    tna: 0,
  });
  const [error, setError] = useState({
    monto: "",
    dias: "",
    tna: "",
  });

  const validate = () => {
    const newErrors = { monto: "", dias: "", tna: "" };
    let isValid = true;

    if (!input.monto) {
      newErrors.monto = "El monto a invertir es requido";
      isValid = false;
    } else if (input.monto < 1000) {
      newErrors.monto =
        "Debe ingresar un monto a invertir mayor o igual a $1000";
      isValid = false;
    }

    if (!input.dias) {
      newErrors.dias = "Debe ingresar la cantidad de dias";
      isValid = false;
    } else if (input.dias < 30) {
      newErrors.dias = "Debe ingresar una cantidad de dias mayor a 30";
      isValid = false;
    }

    if (!input.tna) {
      newErrors.tna = "Debe ingresar un numero para el TNA";
      isValid = false;
    } else if (input.tna > 50) {
      newErrors.tna = "Debe ingresar un TNA menor o igual a 50";
      isValid = false;
    }

    setError(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    onSubmit({
      capital_invertido: input.monto,
      plazo_en_dias: input.dias,
      tna: input.tna,
    });
    //setShowResults(true);
  };

  return (
    <div className="bg-muted-foreground/20 max-w-xl px-8 py-6 rounded-md border border-muted-foreground/30">
      <h3 className="border-l-4 border-primary pl-2.5 font-semibold mb-6">
        Datos de la inversion
      </h3>
      <form action="" className="w-full space-y-4" onSubmit={handleSubmit}>
        <div className="w-full flex flex-col gap-1.5">
          <label htmlFor="monto" className="text-sm">
            Monto a invertir
          </label>
          <div className="relative">
            <input
              type="number"
              name="monto"
              id="monto"
              // min={1000}
              placeholder="1000000"
              className="w-full bg-card border border-muted-foreground placeholder:text-muted-foreground/40 rounded-md px-8 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              value={input.monto === 0 ? "" : input.monto}
              onChange={(e) =>
                setInput((prev) => ({
                  ...prev,
                  monto: Number(e.target.value),
                }))
              }
            />
            <DollarSign
              size={15}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-white"
            />
          </div>
          {error.monto ? (
            <small className="text-red-500">{error.monto}</small>
          ) : (
            <small className="text-muted-foreground">Mínimo $1,000</small>
          )}
        </div>
        <div className="w-full flex flex-col gap-1.5">
          <label htmlFor="dias">Plazo en dias</label>
          <input
            type="number"
            name="dias"
            id="dias"
            // min={30}
            placeholder="60"
            className="w-full bg-card border border-muted-foreground placeholder:text-muted-foreground/40 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            value={input.dias === 0 ? "" : input.dias}
            onChange={(e) =>
              setInput((prev) => ({ ...prev, dias: Number(e.target.value) }))
            }
          />
          {error.dias ? (
            <small className="text-red-500">{error.dias}</small>
          ) : (
            <small className="text-muted-foreground">Mínimo 30 dias</small>
          )}
        </div>
        <div className="w-full flex flex-col gap-1.5">
          <label htmlFor="tna">TNA</label>
          <div className="relative">
            <input
              type="number"
              name="tna"
              id="tna"
              // max={50}
              placeholder="40"
              className="w-full bg-card border border-muted-foreground placeholder:text-muted-foreground/40 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              value={input.tna === 0 ? "" : input.tna}
              onChange={(e) =>
                setInput((prev) => ({ ...prev, tna: Number(e.target.value) }))
              }
            />
            <Percent
              size={15}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-white"
            />
          </div>
          {error.tna ? (
            <small className="text-red-500">{error.tna}</small>
          ) : (
            <small className="text-muted-foreground">Maximo 50%</small>
          )}
        </div>

        <button
          type="submit"
          className="bg-primary w-full mt-2.5 py-3 rounded-lg hover:bg-blue-600 cursor-pointer transition-all duration-300"
        >
          {isLoading ? "Calculando..." : "Calcular"}
        </button>
      </form>
      <button
        type="button"
        className="w-full mt-3 bg-muted-foreground/20 hover:bg-muted-foreground/30 py-2 px-4 rounded-lg transition-all duration-300"
        onClick={onOpenHistory}
      >
        Ver Historial de simulaciones
      </button>
    </div>
  );
}
