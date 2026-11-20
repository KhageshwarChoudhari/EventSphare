export { cn } from "cn";
import { format, formatDistanceToNow, parseISO } from "date-fns";

export function formatPrice(amount, currency = "INR") {
  const value = Number(amount);
  if (!value) return "Free";

  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(value);
}

export function formatDate(dateInput) {
  if (!dateInput) return;
  const date = parseISO(dateInput);
  return format(date, "E, LLL dd, yyyy");
}

export function formatTime(startDate, endDate) {
  if (!startDate || !endDate) return;
  const start = parseISO(startDate);
  const startTime = format(start, "hh:mm aa");

  const end = parseISO(endDate);
  const endTime = format(end, "hh:mm aa");
  return `${startTime} - ${endTime}`;
}

export function caluRemDay(startDate) {
  if (!startDate) return;

  const eventStDate = parseISO(startDate);
  const currDate = new Date();
  if (currDate > eventStDate) return "Ended !";

  return formatDistanceToNow(eventStDate, { addSuffix: true });
}


