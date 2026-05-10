<script lang="ts">
  import type { SimulatorProps } from "$lib/types/types";
  import { DollarSign, Percent } from "@lucide/svelte";

  interface Props {
    onOpenHistory: () => void;
    onSubmit: (data: SimulatorProps) => void;
    isLoading: boolean;
  }

  let { onOpenHistory, onSubmit, isLoading }: Props = $props();

  let input = $state({
    monto: 0,
    dias: 0,
    tna: 0,
  });
  let error = $state({
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

    error = newErrors;
    return isValid;
  };

  const handleSubmit = async (e: SubmitEvent) => {
    console.log("submit disparado");
    e.preventDefault();
    if (!validate()) return;
    console.log("validación pasada");
    onSubmit({
      capital_invertido: input.monto,
      plazo_en_dias: input.dias,
      tna: input.tna,
    });
  };
</script>

<div
  class="bg-muted-foreground/20 max-w-xl px-8 py-6 rounded-md border border-muted-foreground/30"
>
  <h3 class="border-l-4 border-primary pl-2.5 font-semibold mb-6">
    Datos de la inversion
  </h3>
  <form class="w-full space-y-4" onsubmit={handleSubmit}>
    <div class="w-full flex flex-col gap-1.5">
      <label for="monto" class="text-sm"> Monto a invertir </label>
      <div class="relative">
        <input
          type="number"
          name="monto"
          id="monto"
          placeholder="1000000"
          class="w-full bg-card border border-muted-foreground placeholder:text-muted-foreground/40 rounded-md px-8 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
          value={input.monto === 0 ? "" : input.monto}
          onchange={(e) =>
            (input.monto = Number((e.target as HTMLInputElement).value))}
        />
        <DollarSign
          size={15}
          class="absolute left-3 top-1/2 -translate-y-1/2 text-white"
        />
      </div>
      {#if error.monto}
        <small class="text-red-500">{error.monto}</small>
      {:else}
        <small class="text-muted-foreground">Mínimo $1,000</small>
      {/if}
    </div>
    <div class="w-full flex flex-col gap-1.5">
      <label for="dias">Plazo en dias</label>
      <input
        type="number"
        name="dias"
        id="dias"
        placeholder="60"
        class="w-full bg-card border border-muted-foreground placeholder:text-muted-foreground/40 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
        value={input.dias === 0 ? "" : input.dias}
        onchange={(e) =>
          (input.dias = Number((e.target as HTMLInputElement).value))}
      />
      {#if error.dias}
        <small class="text-red-500">{error.dias}</small>
      {:else}
        <small class="text-muted-foreground">Mínimo 30 dias</small>
      {/if}
    </div>
    <div class="w-full flex flex-col gap-1.5">
      <label for="tna">TNA</label>
      <div class="relative">
        <input
          type="number"
          name="tna"
          id="tna"
          placeholder="40"
          class="w-full bg-card border border-muted-foreground placeholder:text-muted-foreground/40 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
          value={input.tna === 0 ? "" : input.tna}
          onchange={(e) =>
            (input.tna = Number((e.target as HTMLInputElement).value))}
        />
        <Percent
          size={15}
          class="absolute right-3 top-1/2 -translate-y-1/2 text-white"
        />
      </div>
      {#if error.tna}
        <small class="text-red-500">{error.tna}</small>
      {:else}
        <small class="text-muted-foreground">Maximo 50%</small>
      {/if}
    </div>

    <button
      type="submit"
      class="bg-primary w-full mt-2.5 py-3 rounded-lg hover:bg-blue-600 cursor-pointer transition-all duration-300"
    >
      {isLoading ? "Calculando..." : "Calcular"}
    </button>
  </form>
  <button
    type="button"
    class="w-full mt-3 bg-muted-foreground/20 hover:bg-muted-foreground/30 py-2 px-4 rounded-lg transition-all duration-300"
    onclick={onOpenHistory}
  >
    Ver Historial de simulaciones
  </button>
</div>
