import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs) {
  return twMerge(clsx(inputs))
}


export function getMinDate(upcoming_dates) {
  if (!upcoming_dates || upcoming_dates.length === 0) {
    return "No upcoming dates";
  }

  const minDate = upcoming_dates.reduce((min, date) => {
    return date < min ? date : min;
  });

  return minDate;
}

