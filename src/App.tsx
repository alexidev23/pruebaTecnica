import { useState } from "react";
import Header from "./components/Header";
import HistoryDrawer from "./components/HistoryDrawer";
import SimulatorForm from "./components/SimulatorForm";

function App() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      <Header />

      <main className="px-20 py-10">
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

        <SimulatorForm onOpenHistory={() => setIsDrawerOpen(true)} />
        <HistoryDrawer
          isOpen={isDrawerOpen}
          onClose={() => setIsDrawerOpen(false)}
        />
      </main>
    </>
  );
}

export default App;
