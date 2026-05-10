<script>
  import Header from "$lib/components/Header.svelte";
  import HistoryDrawer from "$lib/components/HistoryDrawer.svelte";
  import SimulatorForm from "$lib/components/SimulatorForm.svelte";
  import SimulatorResults from "$lib/components/SimulatorResults.svelte";
  import { createSimulator } from "$lib/hooks/useSimulator.svelte";

  let isDrawerOpen = $state(false);
  const { results, isLoading, simulate } = createSimulator();
</script>

<Header />
<main class="px-2.5 xl:px-20 py-10">
  <div class="space-y-1.5">
    <h5 class="text-primary uppercase text-xs">Herramienta de Analisis</h5>
    <h1 class="text-4xl font-bold">Simulador de Plazo Fijo</h1>
    <p class="text-secondary-foreground max-w-125">
      Calculá el rendimiento estimado de tu inversión a tasa nominal anual en
      pesos argentinos.
    </p>
  </div>

  <div class="grid grid-cols-1 gap-8 xl:grid-cols-2 py-12">
    <SimulatorForm
      onOpenHistory={() => (isDrawerOpen = true)}
      onSubmit={simulate}
      {isLoading}
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
  <HistoryDrawer isOpen={isDrawerOpen} onClose={() => (isDrawerOpen = false)} />
</main>
