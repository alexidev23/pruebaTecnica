<script lang="ts">
  import { X } from "@lucide/svelte";

  interface HistoryDrawerProps {
    isOpen: boolean;
    onClose: () => void;
  }

  interface SimulatedData {
    Capital: number;
    "Plazo en días": number;
    "TNA aplicada": number;
    "Intereses ganados": number;
    "Monto total": number;
  }

  let { isOpen, onClose }: HistoryDrawerProps = $props();
  let data = $state<SimulatedData[]>([]);

  $effect(() => {
    if (isOpen) {
      const fetchData = async () => {
        try {
          const response = await fetch(import.meta.env.VITE_API_URL_DATA);
          const jsonData = await response.json();
          data = jsonData.data || [];
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
      fetchData();
    }
  });
</script>

{#if isOpen}
  <button
    class="fixed inset-0 bg-muted/70 backdrop-blur-sm z-40"
    onclick={onClose}
  />
{/if}
<!--Drawer content -->

<div
  class="fixed top-0 right-0 h-full bg-card z-50 py-5 overflow-y-scroll transform transition-transform duration-300 {isOpen
    ? 'translate-x-0'
    : 'translate-x-full'}"
>
  <div class="flex items-center px-2">
    <h3 class="border-l-4 border-primary pl-2.5 font-semibold mb-4 mx-4">
      Historial de Simulaciones
      <span
        class="text-primary ml-6 text-xs bg-primary/20 px-2 py-0.5 rounded-full"
      >
        {data.length}
      </span>
    </h3>

    <button onclick={onClose} class="block xl:hidden">
      <X size={25} class="text-muted-foreground" />
    </button>
  </div>

  <div class="py-4">
    <table>
      <thead class="border-y border-muted-foreground/80 py-4">
        <tr>
          <th class="text-left text-sm text-muted-foreground/90 py-2 px-4 w-55">
            Capital
          </th>
          <th class="text-left text-sm text-muted-foreground/90 py-2 w-24">
            Plazo
          </th>
          <th class="text-left text-sm text-muted-foreground/90 py-2 w-24">
            TNA
          </th>
          <th class="text-left text-sm text-muted-foreground/90 py-2 w-35">
            Intereses
          </th>
          <th class="text-left text-sm text-muted-foreground/90 py-2 w-42">
            Monto Total
          </th>
        </tr>
      </thead>
      <tbody>
        {#each data as item, index (index)}
          <tr class="border-b border-muted-foreground/80 bg-background/20">
            <td class="text-sm text-white py-3.5 pl-4">
              $
              {item.Capital?.toLocaleString("es-AR", {
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
              }) || "0"}
            </td>
            <td class="text-sm text-muted-foreground/80 py-2">
              {item["Plazo en días"] || 30}d
            </td>
            <td class="text-sm text-muted-foreground/80 py-2">
              {item["TNA aplicada"] ? item["TNA aplicada"].toFixed(1) : "22,5"}
              %
            </td>
            <td class="text-sm py-2 text-chart-2">
              $
              {item["Intereses ganados"]?.toLocaleString("es-AR", {
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
              }) || "0"}
            </td>
            <td class="text-sm text-white py-2">
              $
              {item["Monto total"]?.toLocaleString("es-AR", {
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
              }) || "0"}
            </td>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
</div>
