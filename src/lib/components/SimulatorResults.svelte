<script lang="ts">
  import { TrendingUp } from "@lucide/svelte";
  import type { SimulatorResults } from "$lib/types/types";

  interface SimulatorResultsProps extends SimulatorResults {
    showResults: boolean;
  }

  let {
    capital_invertido,
    plazo_en_dias,
    tna,
    interes_ganado,
    showResults,
  }: SimulatorResultsProps = $props();
</script>

<div
  class="bg-muted-foreground/20 max-w-xl h-fit px-8 py-6 rounded-md border border-muted-foreground/30"
>
  <h3 class="border-l-4 border-primary pl-2.5 font-semibold mb-4">
    Resultado de la simulacion
  </h3>
  {#if showResults}
    <div class="py-5">
      <p
        class="text-sm text-muted-foreground border-b border-muted-foreground/30 pb-3.5 flex items-center justify-between gap-2"
      >
        Capital invertido
        <span class="text-white">
          ${capital_invertido.toLocaleString()}
        </span>
      </p>
      <p
        class="text-sm text-muted-foreground border-b border-muted-foreground/30 py-3.5 flex items-center justify-between gap-2"
      >
        Plazo en dias
        <span class="text-white">{plazo_en_dias} dias</span>
      </p>
      <p
        class="text-sm text-muted-foreground border-b border-muted-foreground/30 py-3.5 flex items-center justify-between gap-2"
      >
        TNA Aplicada <span class="text-white">{tna}%</span>
      </p>
      <p
        class="text-sm text-muted-foreground border-b border-muted-foreground/30 py-3.5 flex items-center justify-between gap-2"
      >
        Intereses Ganados
        <span class="text-chart-2">
          ${interes_ganado.toLocaleString()}
        </span>
      </p>
      <p
        class="text-sm text-muted-foreground border-b border-muted-foreground/30 py-3.5 flex items-center justify-between gap-2"
      >
        Monto Final
        <span class="text-white text-xl">
          ${capital_invertido + interes_ganado}
        </span>
      </p>
    </div>
  {:else}
    <div class="flex flex-col items-center justify-center py-20 gap-4">
      <div
        class="bg-muted-foreground/30 w-15 h-15 rounded-lg flex items-center justify-center"
      >
        <TrendingUp size={30} class="text-muted-foreground" />
      </div>
      <p class="text-muted-foreground xl:w-80 text-center">
        Completa los campos y presiona
        <span class="text-primary">Calcular</span> para ver el resultado
      </p>
    </div>
  {/if}
</div>
