import { TrendingUp } from "lucide-react";
import type { SimulatorResults } from "../types/types";

interface SimulatorResultsProps extends SimulatorResults {
  showResults: boolean;
}

export default function SimulatorResults({
  capital_invertido,
  plazo_en_dias,
  tna,
  interes_ganado,
  showResults,
}: SimulatorResultsProps) {
  return (
    <div className="bg-muted-foreground/20 max-w-xl h-fit px-8 py-6 rounded-md border border-muted-foreground/30">
      <h3 className="border-l-4 border-primary pl-2.5 font-semibold mb-4">
        Resultado de la simulsacion
      </h3>
      {showResults ? (
        <div className="py-5">
          <p className="text-sm text-muted-foreground border-b border-muted-foreground/30 pb-3.5 flex items-center justify-between gap-2">
            Capital invertido{" "}
            <span className="text-white">
              ${capital_invertido.toLocaleString()}
            </span>
          </p>
          <p className="text-sm text-muted-foreground border-b border-muted-foreground/30 py-3.5 flex items-center justify-between gap-2">
            Plazo en dias{" "}
            <span className="text-white">{plazo_en_dias} dias</span>
          </p>
          <p className="text-sm text-muted-foreground border-b border-muted-foreground/30 py-3.5 flex items-center justify-between gap-2">
            TNA Aplicada <span className="text-white">{tna}%</span>
          </p>
          <p className="text-sm text-muted-foreground border-b border-muted-foreground/30 py-3.5 flex items-center justify-between gap-2">
            Intereses Ganados{" "}
            <span className="text-chart-2">
              ${interes_ganado.toLocaleString()}
            </span>
          </p>
          <p className="text-sm text-muted-foreground border-b border-muted-foreground/30 py-3.5 flex items-center justify-between gap-2">
            Monto Final{" "}
            <span className="text-white text-xl">
              ${capital_invertido + interes_ganado}
            </span>
          </p>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-20 gap-4">
          <div className="bg-muted-foreground/30 w-15 h-15 rounded-lg flex items-center justify-center">
            <TrendingUp size={30} className="text-muted-foreground" />
          </div>
          <p
            className="text-muted-foreground xl:w-80 text-center
            "
          >
            Completa los campos y presina{" "}
            <span className="text-primary">Calcular</span> para ver el resultado
          </p>
        </div>
      )}
    </div>
  );
}
