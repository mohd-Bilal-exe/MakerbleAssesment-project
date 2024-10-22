export const updatedAgo = (from: Date | number): string => {
  // Convert from timestamp to Date if necessary
  const fromDate = typeof from === "number" ? new Date(from) : from;
  const to = Date.now(); // Get the current time in milliseconds
  const secondsAgo = Math.floor((to - fromDate.getTime()) / 1000); // Difference in seconds

  const units: { unit: string; seconds: number }[] = [
    { unit: "year", seconds: 60 * 60 * 24 * 365 }, // years
    { unit: "month", seconds: 60 * 60 * 24 * 30 }, // months
    { unit: "week", seconds: 60 * 60 * 24 * 7 }, // weeks
    { unit: "day", seconds: 60 * 60 * 24 }, // days
    { unit: "hour", seconds: 60 * 60 }, // hours
    { unit: "minute", seconds: 60 }, // minutes
    { unit: "second", seconds: 1 }, // seconds
  ];

  for (const { unit, seconds } of units) {
    const value = Math.floor(secondsAgo / seconds);
    if (value >= 1) {
      return `${value} ${unit}${value > 1 ? "s" : ""} ago`; // Pluralization
    }
  }

  return "just now"; // If it's less than a second ago
};
