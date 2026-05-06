import { X } from "lucide-react";
import { useEffect, useState } from "react";

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

export default function HistoryDrawer({ isOpen, onClose }: HistoryDrawerProps) {
  const [data, setData] = useState<SimulatedData[]>([]);

  useEffect(() => {
    if (!isOpen) {
      const fetchData = async () => {
        try {
          const response = await fetch(import.meta.env.VITE_API_URL_DATA);
          const jsonData = await response.json();
          setData(jsonData.data || []);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
      fetchData();
    }
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-muted/70 backdrop-blur-sm z-40 "
          onClick={onClose}
        ></div>
      )}

      {/* Drawer content */}

      <div
        className={`fixed top-0 right-0 h-full bg-card z-50 py-5 overflow-y-scroll transform ${isOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300`}
      >
        <div className="flex items-center px-2">
          <h3 className="border-l-4 border-primary pl-2.5 font-semibold mb-4 mx-4">
            Historial de Simulaciones
            <span className="text-primary ml-6 text-xs bg-primary/20 px-2 py-0.5 rounded-full">
              20
            </span>
          </h3>

          <button onClick={onClose} className="block xl:hidden">
            <X size={25} className="text-muted-foreground" />
          </button>
        </div>

        <div className="py-4">
          <table>
            <thead className="border-y border-muted-foreground/80 py-4">
              <tr>
                <th className="text-left text-sm text-muted-foreground/90 py-2 px-4 w-55">
                  Capital
                </th>
                <th className="text-left text-sm text-muted-foreground/90 py-2 w-24">
                  Plazo
                </th>
                <th className="text-left text-sm text-muted-foreground/90 py-2 w-24">
                  TNA
                </th>
                <th className="text-left text-sm text-muted-foreground/90 py-2 w-35">
                  Intereses
                </th>
                <th className="text-left text-sm text-muted-foreground/90 py-2 w-42">
                  Monto Total
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr
                  className="border-b border-muted-foreground/80 bg-background/20"
                  key={index}
                >
                  <td className="text-sm text-white py-3.5 pl-4">
                    $
                    {item.Capital?.toLocaleString("es-AR", {
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 0,
                    }) || "0"}
                  </td>
                  <td className="text-sm text-muted-foreground/80 py-2">
                    {item["Plazo en días"] || 30}d
                  </td>
                  <td className="text-sm text-muted-foreground/80 py-2">
                    {item["TNA aplicada"]
                      ? item["TNA aplicada"].toFixed(1)
                      : "22,5"}
                    %
                  </td>
                  <td className="text-sm py-2 text-chart-2">
                    $
                    {item["Intereses ganados"]?.toLocaleString("es-AR", {
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 0,
                    }) || "0"}
                  </td>
                  <td className="text-sm text-white py-2">
                    $
                    {item["Monto total"]?.toLocaleString("es-AR", {
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 0,
                    }) || "0"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
