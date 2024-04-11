 // DatePickerDemo.js
import React from 'react';
import { useState } from 'react';
import { BiChevronDown, BiChevronUp } from 'react-icons/bi';
import { Calendar } from '../components/ui/calendar';
import { Label } from '../components/ui/label';
import { Popover, PopoverContent, PopoverTrigger } from '../components/ui/popover';
import { Button } from '../components/ui/button';
import { cn } from '../lib/utils';
import { format, addDays, startOfMonth, addMonths } from 'date-fns';

export function DatePickerDemo({ startDate, setStartDate, endDate, setEndDate, data, setFilteredData, setSelectedButton, clear }) {
  const [date, setDate] = useState();
  const [date2, setDate2] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  const [filterCriteria, setFilterCriteria] = useState({
   startDate: null,
   endDate: null,
   transactionTypes: [],
   transactionStatuses: []
 });
  // Toggle function to change the state
  const togglePopover = () => {
    setIsOpen(!isOpen);
  };
  const togglePopover2 = () => {
    setIsOpen2(!isOpen2);
  };

  const handleDateChange = (newDate) => {
    setDate(newDate);
    setStartDate(newDate); // Update the start date
  };

  const handleDate2Change = (newDate) => {
    setDate2(newDate);
    setEndDate(newDate); // Update the end date
  };

  const handleTodayButtonClick = () => {
   const today = new Date();
   setDate(today);
   setStartDate(today);
   setEndDate(today); // Set end date to today as well
    
   applyFilters(); // Apply filters to update the displayed transactions
   setSelectedButton("Today")
 };
 
 const handleLast7DaysButtonClick = () => {
   const last7Days = addDays(new Date(), -7);
   setDate(last7Days);
   setStartDate(last7Days);
   setEndDate(new Date()); // End date is today
   applyFilters();
   setSelectedButton("Last 7 days")
 };
 
 const handleThisMonthButtonClick = () => {
   const startOfMonthDate = startOfMonth(new Date());
   setDate(startOfMonthDate);
   setStartDate(startOfMonthDate);
   setEndDate(new Date()); // End date is today
   applyFilters();
   setSelectedButton("This month")
 };
 
 const handleLast3MonthsButtonClick = () => {
   const last3Months = addMonths(new Date(), -3);
   setDate(last3Months);
   setStartDate(last3Months);
   setEndDate(new Date()); // End date is today
   applyFilters();
   setSelectedButton("Last 3 months")

 };
 
 const handleThisYearButtonClick = () => {
   const thisYear = addMonths(new Date(), -12);
   setDate(thisYear);
   setStartDate(thisYear);
   setEndDate(new Date()); // End date is today
   applyFilters();
   setSelectedButton("This year")
 };
 const handleLastYearButtonClick = () => {
   const lastYear = addMonths(new Date(), -12);
   setDate(lastYear);
   setStartDate(lastYear);
   setEndDate(new Date()); // End date is today
   applyFilters();
   setSelectedButton("Last year")
 };
 
 const handleAllTimeButtonClick = () => {
   // Find the oldest date in the data
   const oldestDate = data.reduce((minDate, currentItem) => {
     const itemDate = new Date(currentItem.date);
     return itemDate < minDate ? itemDate : minDate;
   }, new Date());
   
   // Set the start date to the oldest date
   setStartDate(oldestDate);
   
   // Set the end date to today's date
   const today = new Date();
   setEndDate(today);
   
   // Apply filters
   applyFilters();
   setSelectedButton("All time")
 };
 
 
 
 const applyFilters = () => {
   const filteredData = data.filter(item => {
     // Apply date range filter
     const startDate = filterCriteria.startDate ? new Date(filterCriteria.startDate) : null;
     const endDate = filterCriteria.endDate ? new Date(filterCriteria.endDate) : null;
     const itemDate = new Date(item.date);
 
     if ((startDate && itemDate < startDate) || (endDate && itemDate > endDate)) {
       return false;
     }
 
     return true;
   });
   
   setFilteredData(filteredData);
 };
 
   
  return (
    <div className="">
      <div className="flex  borde w-full space-x-2 overflow-x-auto">
         <Button className="bg-white w-[70px]  group h-[36px] gap-1 border-[#EFF1F6] rounded-[100px] border py-[10px] px-[18px] hover:bg-[#131316] scroll-ml-6 snap-start" type="cancel" onClick={handleTodayButtonClick}>
            <span className="text-center font-medium text-sm group-hover:text-white  text-[#131316] -tracking-[0.4px] ">Today</span>
         </Button>
         <Button className="bg-white  group h-[36px] gap-1 border-[#EFF1F6] rounded-[100px] border py-[10px] px-[18px] hover:bg-[#131316] scroll-ml-6 snap-start" type="cancel" onClick={handleLast7DaysButtonClick}>
            <span className="text-center font-medium text-sm group-hover:text-white  text-[#131316] -tracking-[0.4px] ">  last 7 days</span>
         </Button>
         <Button className="bg-white  group h-[36px] gap-1 border-[#EFF1F6] rounded-[100px] border py-[10px] px-[18px] hover:bg-[#131316] scroll-ml-6 snap-start" type="cancel" onClick={handleThisMonthButtonClick}>
            <span className="text-center font-medium text-sm group-hover:text-white  text-[#131316] -tracking-[0.4px] ">this month </span>
         </Button>
         <Button className="bg-white w-[110px]   group h-[36px] gap-1 border-[#EFF1F6] rounded-[100px] border py-[10px] px-[18px] hover:bg-[#131316] scroll-ml-6 snap-start" type="cancel" onClick={handleLast3MonthsButtonClick}>
            <span className="text-center font-medium text-sm group-hover:text-white  text-[#131316] -tracking-[0.4px] ">last 3 months </span>
         </Button>
         <Button className="bg-white w-[110px]   group h-[36px] gap-1 border-[#EFF1F6] rounded-[100px] border py-[10px] px-[18px] hover:bg-[#131316] scroll-ml-6 snap-start" type="cancel" onClick={handleThisYearButtonClick}>
            <span className="text-center font-medium text-sm group-hover:text-white  text-[#131316] -tracking-[0.4px] ">This year </span>
         </Button>
         <Button className="bg-white w-[110px]   group h-[36px] gap-1 border-[#EFF1F6] rounded-[100px] border py-[10px] px-[18px] hover:bg-[#131316] scroll-ml-6 snap-start" type="cancel" onClick={handleLastYearButtonClick}>
            <span className="text-center font-medium text-sm group-hover:text-white  text-[#131316] -tracking-[0.4px] ">Last year </span>
         </Button>
         <Button className="bg-white w-[110px]   group h-[36px] gap-1 border-[#EFF1F6] rounded-[100px] border py-[10px] px-[18px] hover:bg-[#131316] scroll-ml-6 snap-start" type="cancel" onClick={handleAllTimeButtonClick}>
            <span className="text-center font-medium text-sm group-hover:text-white  text-[#131316] -tracking-[0.4px] ">All time</span>
         </Button>
      </div>
      <div className="flex-col mt-4 flex">
        <Label htmlFor="name" className="text-left font-semibold text-base -tracking-[0.4px] ">
          Date Range
        </Label>
        <div className="flex gap-[6px]">
          <Popover >
            <PopoverTrigger asChild>
              <Button
               onClick={togglePopover}
                variant={"outline"}
                className={cn(
                  "w-[203px] h-12 rounded-[12px] border py-14px px-4 gap-[10px] text-left bg-[#EFF1F6] border-[#EFF1F6]  font-medium text-sm leading-4 -tracking-[0.2px] justify-between ",
                  !date && "text-muted-foreground"
                )}
              >
                {date ? format(date, "PPP") : <span>Pick a date</span>}
                {isOpen ? <BiChevronUp className="mr-2 h-4 w-4" /> : <BiChevronDown className="mr-2 h-4 w-4" />}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="sm:w-[412px]  w-[370px] sm:ml-[209px] ml-[16px] p-2 flex justify-center items-center">
              <Calendar
                mode="single"
                selected={date}
                onSelect={handleDateChange}
                initialFocus

                className="w-full  p-"
              />
            </PopoverContent>
          </Popover>
          <Popover>
            <PopoverTrigger asChild>
              <Button
               onClick={togglePopover2}
                variant={"outline"}
                className={cn(
                  "w-[203px]  h-12 rounded-[12px] border py-14px px-4 gap-[10px] text-left bg-[#EFF1F6] border-[#EFF1F6]  font-medium text-sm leading-4 -tracking-[0.2px] justify-between",
                  !date2 && "text-muted-foreground"
                )}
              >
                {date2 ? format(date2, "PPP") : <span>Pick a date</span>}
                {isOpen2 ? <BiChevronUp className="mr-2 h-4 w-4" /> : <BiChevronDown className="mr-2 h-4 w-4" />}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="sm:w-[412px] w-[370px] mr-8 sm:mr-[28px] p-2 flex justify-center items-center">
              <Calendar
                mode="single"
                selected={date2}
                onSelect={handleDate2Change}
                initialFocus
                className="w-full  borde"
              />
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </div>
  );
}
