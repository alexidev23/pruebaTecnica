import { DollarSign, Percent, TrendingUp } from "lucide-react";

export default function SimulatorForm({
  onOpenHistory,
}: {
  onOpenHistory: () => void;
}) {
  const results = 0;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 py-12">
      <div className="bg-muted-foreground/20 max-w-xl px-8 py-6 rounded-md border border-muted-foreground/30">
        <h3 className="border-l-4 border-primary pl-2.5 font-semibold mb-6">
          Datos de la inversion
        </h3>
        <form action="" className="w-full space-y-4">
          <div className="w-full flex flex-col gap-1.5">
            <label htmlFor="amount" className="text-sm">
              Monto a invertir
            </label>
            <div className="relative">
              <input
                type="number"
                name="amount"
                id="amount"
                min={1000}
                placeholder="1000000"
                className="w-full bg-card border border-muted-foreground placeholder:text-muted-foreground/40 rounded-md px-8 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              />
              <DollarSign
                size={15}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-white"
              />
            </div>
            <small className="text-muted-foreground">Mínimo $1,000</small>
          </div>
          <div className="w-full flex flex-col gap-1.5">
            <label htmlFor="tenure">Plazo en dias</label>
            <input
              type="number"
              name="tenure"
              id="tenure"
              min={30}
              placeholder="60"
              className="w-full bg-card border border-muted-foreground placeholder:text-muted-foreground/40 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            />
            <small className="text-muted-foreground">Mínimo 30 dias</small>
          </div>
          <div className="w-full flex flex-col gap-1.5">
            <label htmlFor="rate">TNA</label>
            <div className="relative">
              <input
                type="number"
                name="rate"
                id="rate"
                max={50}
                min={0}
                placeholder="40"
                className="w-full bg-card border border-muted-foreground placeholder:text-muted-foreground/40 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              />
              <Percent
                size={15}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-white"
              />
            </div>
            <small className="text-muted-foreground">Maximo 50%</small>
          </div>

          <button
            type="submit"
            className="bg-primary w-full mt-2.5 py-3 rounded-lg hover:bg-blue-600 cursor-pointer transition-all duration-300"
          >
            Calcular
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
      <div className="bg-muted-foreground/20 max-w-xl h-fit px-8 py-6 rounded-md border border-muted-foreground/30">
        <h3 className="border-l-4 border-primary pl-2.5 font-semibold mb-4">
          Resultado de la simulsacion
        </h3>
        {results > 0 ? (
          <div>
            <p>
              Capital invertido <span>0</span>
            </p>
            <p>
              Plazo en dias <span>0</span>
            </p>
            <p>
              TNA Aplicada <span>0</span>
            </p>
            <p>
              Intereses Ganados <span>0</span>
            </p>
            <p>
              Monto Final <span>0</span>
            </p>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 gap-4">
            <div className="bg-muted-foreground/30 w-15 h-15 rounded-lg flex items-center justify-center">
              <TrendingUp size={30} className="text-muted-foreground" />
            </div>
            <p
              className="text-muted-foreground w-80 text-center
            "
            >
              Completa los campos y presina{" "}
              <span className="text-primary">Calcular</span> para ver el
              resultado
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
