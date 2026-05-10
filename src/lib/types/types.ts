export interface SimulatorProps {
  capital_invertido: number;
  plazo_en_dias: number;
  tna: number;
}

export interface SimulatorResults {
  capital_invertido: number;
  plazo_en_dias: number;
  tna: number;
  interes_ganado: number;
  tasa_efectiva_periodo: number;
}
