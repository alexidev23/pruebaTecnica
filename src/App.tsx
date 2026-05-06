import { useState } from "react";
import Header from "./components/Header";
import HistoryDrawer from "./components/HistoryDrawer";
import SimulatorForm from "./components/SimulatorForm";
import SimulatorResults from "./components/SimulatorResults";
import { useSimulator } from "./hooks/useSimulator";

function App() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { results, isLoading, simulate } = useSimulator();

  return (
    <>
      <Header />

      <main className="px-2.5 xl:px-20 py-10">
        <div className="space-y-1.5">
          <h5 className="text-primary uppercase text-xs">
            Herramienta de Analisis
          </h5>
          <h1 className="text-4xl font-bold">Simulador de Plazo Fijo</h1>
          <p className="text-secondary-foreground max-w-125">
            Calculá el rendimiento estimado de tu inversión a tasa nominal anual
            en pesos argentinos.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 xl:grid-cols-2 py-12">
          <SimulatorForm
            onOpenHistory={() => setIsDrawerOpen(true)}
            onSubmit={simulate}
            isLoading={isLoading}
          />
          <SimulatorResults
            capital_invertido={results?.capital_invertido || 0}
            plazo_en_dias={results?.plazo_en_dias || 0}
            tna={results?.tna || 0}
            interes_ganado={results?.interes_ganado || 0}
            tasa_efectiva_periodo={results?.tasa_efectiva_periodo || 0}
            showResults={!!results}
          />
        </div>
        <HistoryDrawer
          isOpen={isDrawerOpen}
          onClose={() => setIsDrawerOpen(false)}
        />
      </main>
    </>
  );
}

export default App;
