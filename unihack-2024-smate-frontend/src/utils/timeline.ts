import { Stop } from "@/views/_id/DetailPage.vue";

export function getDaysDifference(fromDate: string, toDate: string) {
  const startDate = new Date(fromDate);
  const endDate = new Date(toDate);
  const timeDifference = +endDate - +startDate;

  let daysDifference = Math.round(timeDifference / (1000 * 60 * 60 * 24));
  return daysDifference;
}

export function getTextBeforeDash(text: string) {
  const dashIndex = text.indexOf(" - ");
  if (dashIndex !== -1) {
      return text.substring(0, dashIndex).trim();
  }
  return text;
}

export function getHalfBudget(budget: string, people: number) {
  const numericValue = budget.replace(/[^0-9]/g, '');
  const value = parseInt(numericValue, 10);
  const halfValue = value / people;
  return halfValue.toLocaleString('vi-VN');
}

export function splitArrayByTimeRange(items: Stop[] | undefined) {
  let result = [];
  let tempArray = [];
  let foundPM = false;

  if (!items) {
      return undefined;
  }
  for (let i = 0; i < items.length; i++) {
      tempArray.push(items[i]);

      if (items[i].time_range.includes('PM')) {
          foundPM = true;
      }

      if (foundPM && i < items.length - 1 && items[i + 1].time_range.includes('AM')) {
          result.push([...tempArray]);
          tempArray = [];
          foundPM = false;
      }
  }
  if (tempArray.length > 0) {
      result.push([...tempArray]);
  }

  return result;
}
