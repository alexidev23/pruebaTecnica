import { ChartColumn } from "lucide-react";

export default function Header() {
  return (
    <header className="text-white py-4 px-20 flex justify-between items-center border-b-2 border-muted-foreground/10">
      <div className="flex items-center gap-2.5">
        <div className="bg-primary p-2 rounded-md flex items-center justify-center gap-2">
          <ChartColumn size={15} />
        </div>
        <h1 className="font-semibold text-lg">FinSim</h1>
      </div>

      <h2 className="text-xs text-muted-foreground/40 uppercase">
        Simulador Financiero V1.0
      </h2>
    </header>
  );
}
