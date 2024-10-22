export default function formatTime(timestamp: number | Date) {
  console.log(typeof timestamp, timestamp);
  const date = typeof timestamp === "number" ? new Date(timestamp) : timestamp;

  let hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12; // Convert to 12-hour format
  hours = hours ? hours : 12; // the hour '0' should be '12'
  const strMinutes = minutes < 10 ? "0" + minutes : minutes; // Pad single digits with a leading zero

  const day = date.getDate(); // Get day of the month
  const month = date.toLocaleString("default", { month: "short" }); // Get short month name
  const year = date.getFullYear().toString().slice(-2); // Get last two digits of the year

  return `${hours}:${strMinutes} ${ampm} on ${day} ${month},${year}`; // Format: "11:08 PM on 23 Dec 21"
}
