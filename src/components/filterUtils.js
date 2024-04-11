// filterUtils.js

import { addDays, startOfMonth, addMonths } from 'date-fns';

export function applyFiltersByButton(button, startDate, endDate, data, setFilteredData) {
  switch (button) {
    case 'Today':
      handleTodayButtonClick(startDate, endDate, data, setFilteredData);
      break;
    case 'Last 7 days':
      handleLast7DaysButtonClick(startDate, endDate, data, setFilteredData);
      break;
    case 'This month':
      handleThisMonthButtonClick(startDate, endDate, data, setFilteredData);
      break;
    case 'Last 3 months':
      handleLast3MonthsButtonClick(startDate, endDate, data, setFilteredData);
      break;
    case 'This year':
      handleThisYearButtonClick(startDate, endDate, data, setFilteredData);
      break;
    case 'Last year':
      handleLastYearButtonClick(startDate, endDate, data, setFilteredData);
      break;
    case 'All time':
      handleAllTimeButtonClick(data, setFilteredData);
      break;
    default:
      break;
  }
}

function handleTodayButtonClick(startDate, endDate, data, setFilteredData) {
  const today = new Date();
  applyFilters(startDate, endDate, data, setFilteredData);
}

function handleLast7DaysButtonClick(startDate, endDate, data, setFilteredData) {
  const last7Days = addDays(new Date(), -7);
  applyFilters(last7Days, endDate, data, setFilteredData);
}

function handleThisMonthButtonClick(startDate, endDate, data, setFilteredData) {
  const startOfMonthDate = startOfMonth(new Date());
  applyFilters(startOfMonthDate, endDate, data, setFilteredData);
}

function handleLast3MonthsButtonClick(startDate, endDate, data, setFilteredData) {
  const last3Months = addMonths(new Date(), -3);
  applyFilters(last3Months, endDate, data, setFilteredData);
}

function handleThisYearButtonClick(startDate, endDate, data, setFilteredData) {
  const thisYear = addMonths(new Date(), -12);
  applyFilters(thisYear, endDate, data, setFilteredData);
}

function handleLastYearButtonClick(startDate, endDate, data, setFilteredData) {
  const lastYear = addMonths(new Date(), -12);
  applyFilters(lastYear, endDate, data, setFilteredData);
}

function handleAllTimeButtonClick(data, setFilteredData) {
  // Implement logic to handle filtering for all time
}

function applyFilters(startDate, endDate, data, setFilteredData) {
  const filteredData = data.filter(item => {
    const itemDate = new Date(item.date);
    return itemDate >= startDate && itemDate <= endDate;
  });
  setFilteredData(filteredData);
}
