type DurationT = (
  key: "durations.months" | "durations.years" | "durations.yearsAndMonths",
  values: Record<string, number>,
) => string;

export function formatExperienceDuration(
  t: DurationT,
  years: number,
  months: number,
): string {
  if (years === 0) {
    return t("durations.months", { months });
  }
  if (months === 0) {
    return t("durations.years", { years });
  }
  return t("durations.yearsAndMonths", { years, months });
}
