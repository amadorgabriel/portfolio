const MONTHS_PT = [
  "JAN",
  "FEV",
  "MAR",
  "ABR",
  "MAI",
  "JUN",
  "JUL",
  "AGO",
  "SET",
  "OUT",
  "NOV",
  "DEZ",
] as const;

const MONTHS_EN = [
  "JAN",
  "FEB",
  "MAR",
  "APR",
  "MAY",
  "JUN",
  "JUL",
  "AUG",
  "SEP",
  "OCT",
  "NOV",
  "DEC",
] as const;

/** Interpreta ISO date / DateTime como data de calendário local (evita deslocar o mês por UTC). */
export function parseExperienceDate(iso: string): Date {
  const datePart = iso.split("T")[0] ?? iso;
  const parts = datePart.split("-").map(Number);
  if (parts.length === 3 && parts.every((n) => !Number.isNaN(n))) {
    const [y, m, d] = parts;
    return new Date(y, m - 1, d);
  }
  return new Date(iso);
}

export function formatExperienceMonthYear(date: Date, locale: string): string {
  const monthIndex = date.getMonth();
  const year = date.getFullYear();
  const labels = locale === "pt-BR" ? MONTHS_PT : MONTHS_EN;
  return `${labels[monthIndex]} ${year}`;
}

/**
 * Duração em anos e meses por meses de calendário inclusivos
 * (ex.: set–out 2021 → 2 meses), alinhado a períodos tipo “JUN 2023 – MAI 2023”.
 */
export function diffExperienceYearsMonths(start: Date, end: Date): {
  years: number;
  months: number;
} {
  const totalMonths =
    (end.getFullYear() - start.getFullYear()) * 12 +
    (end.getMonth() - start.getMonth()) +
    1;

  const clamped = Math.max(1, totalMonths);
  const years = Math.floor(clamped / 12);
  const months = clamped % 12;

  return { years, months };
}
