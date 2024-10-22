export const ValueAdjustment = (value: number): string => {
  if (value >= 1_000_000_000) {
    return `${(Math.round((value / 1_000_000_000) * 100) / 100).toFixed(2)}B`;
  } else if (value >= 1_000_000) {
    return `${(Math.round((value / 1_000_000) * 100) / 100).toFixed(2)}M`;
  } else if (value >= 1_000) {
    return `${(Math.round((value / 1_000) * 100) / 100).toFixed(2)}K`;
  } else {
    return value.toString();
  }
};
