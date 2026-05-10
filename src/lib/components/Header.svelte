<script>
  import { ChartColumn } from "@lucide/svelte";
</script>

<header
  class="text-white py-4 px-2.5 xl:px-20 flex justify-between items-center border-b-2 border-muted-foreground/10"
>
  <div class="flex items-center gap-2.5">
    <div
      class="bg-primary p-2 rounded-md flex items-center justify-center gap-2"
    >
      <ChartColumn size={15} />
    </div>
    <h1 class="font-semibold text-lg">FinSim</h1>
  </div>

  <h2 class="text-xs text-muted-foreground/40 uppercase">
    Simulador Financiero V1.0
  </h2>
</header>
