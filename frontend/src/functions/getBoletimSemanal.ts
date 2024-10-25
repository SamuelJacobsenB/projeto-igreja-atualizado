import { Boletim } from "@/types/boletim.type";

export function getBoletimSemanal(boletins: Boletim[]): Boletim | null {
  const thisDate = new Date();
  const thisYear = thisDate.getFullYear();
  const thisMonth = thisDate.getMonth();
  const today: number = thisDate.getDate();
  const lastWeek: number = today - 7;

  const boletim = boletins.find((boletim) => {
    const boletimDate = new Date(boletim.created_at);
    const boletimYear = boletimDate.getFullYear();
    const boletimMonth = boletimDate.getMonth();
    const boletimDay = boletimDate.getDate();

    if (
      boletimYear === thisYear &&
      boletimMonth === thisMonth &&
      today - boletimDay >= 0 &&
      boletimDay - lastWeek > 0
    ) {
      return boletim;
    }
  });

  if (!boletim) {
    return null;
  }

  return boletim;
}
