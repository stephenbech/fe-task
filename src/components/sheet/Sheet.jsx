import React, { useState, useRef, useEffect } from 'react';
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { DatePickerDemo } from '../Daterange';
import { Checkbox } from '../ui/checkbox';

import { Label } from "../ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { BiChevronDown, BiChevronUp } from 'react-icons/bi';

const options = [
   { label: 'Store Transactions', value: 'Store Transactions' },
   { label: 'Get Tipped', value: 'Get Tipped' },
   { label: 'Withdrawal', value: 'withdrawal' },
   { label: 'Deposit', value: 'deposit' },
   { label: 'Cashbacks', value: 'Cashbacks' },
   { label: 'Refer & Earn', value: 'Refer & Earn' },
 ];
const options2 = [
   { label: 'Successful', value: 'successful' },
   { label: 'Pending', value: 'Pending' },
   { label: 'Failed', value: 'Failed' },
 ];

function Filter({onFilterChange, filterData, setFilteredData, data, selectedButton, setSelectedButton, clearFilter}){
  
   const [selectedValues, setSelectedValues] = useState([]);
   const [selectedValues2, setSelectedValues2] = useState([]);
   const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const handleCheckboxChange = (optionValue, ) => {
    const isChecked = selectedValues.includes(optionValue);
    if (isChecked) {
      setSelectedValues(selectedValues.filter(value => value !== optionValue));
    } else {
      setSelectedValues([...selectedValues, optionValue]);
    }
  };
  const handleCheckboxChange2 = ( optionValue2) => {
    const isChecked2 = selectedValues2.includes(optionValue2);
    if (isChecked2) {
      setSelectedValues2(selectedValues2.filter(value => value !== optionValue2));
    } else {
      setSelectedValues2([...selectedValues2, optionValue2]);
    }
  };

  const clearInputs = () => {
   setSelectedValues([]);
   setSelectedValues2([]);
   setStartDate(null);
   setEndDate(null);
};

  const [toggle, setToggle] = useState(false);
  const showToggle= () => {
     setToggle(!toggle);
   };
  const [toggle2, setToggle2] = useState(false);
  const showToggle2= () => {
     setToggle2(!toggle2);
   };


  return (
    <div>
      <Sheet className="">
         <SheetTrigger asChild>
            <Button className=" w-[131px] h-[48px] rounded-[100px] py-[12px] pr-[10px] pl-[20px] bg-[#EFF1F6] hover:bg-[#EFF1F6] flex gap-[12px]" >
               <span className="font-semibold text-base -tracking-[0.4px] text-[#131316] ">Filter</span>
               <div className=" w-5 h-5 bg-[#131316] flex justify-center items-center rounded-full ">
                  <span className="font-medium text-xs leading-3-tracking-[0.4px] text-[#ffffff] text-center ">{filterData.length}</span>
               </div>
               <BiChevronDown className=' w-5 h-5 text-[#131316]'/>
            </Button>
         </SheetTrigger>
         <SheetContent className="rounded-[20px] mt-1 mr-2 mb-1 w-[600px] h-[876]  max-w-[100vw]  overflow-hidde"  style={{ width: '456px', maxWidth: '100vw',  } } >
            <SheetHeader>
               <SheetTitle className=" w-[107px] h-[48px] rounded-[100px]  ">Filter</SheetTitle>  
            </SheetHeader>
            <div className="absolut borde h-ful top-16 left- right- bottom-0">
            <div className="grid gap-4 py-4">
              <div className='flex flex-col overflow-x-auto  '>
                <DatePickerDemo
                        startDate={startDate} 
                        setStartDate={setStartDate} 
                        endDate={endDate} 
                        setEndDate={setEndDate} 
                        setFilteredData={setFilteredData}
                        data={data}
                        clear={clearInputs}
                      selectedButton={selectedButton}
                      setSelectedButton={setSelectedButton}
                />
              </div>
                 
              
            
               <div className=" items-center gap-4">
                  <Label htmlFor="transactionType" data-testid="transactionType" className="text-right font-semibold text-base -tracking-[0.4px] ">
                  Transaction Type
                  </Label>
                  <div className="relative">
                   
                        <div className=" w-400px">
                           <Input
                              type="text"
                              name="transactionType"
                              data-testid="transactionType"
                              className="mt-2 w-full h-[48px] rounded-[12px] border gap-[10px] bg-[#EFF1F6]  px-4 py-[14px]"
                              readOnly
                              value={selectedValues.join(', ')}
                              onClick={showToggle}
                           />
                           <div className="cursor-pointer absolute inset-y-0 right-0 flex items-center text-[#31373D] pr-3">
                           {toggle ? <BiChevronUp className="mr-2 h-4 w-4" /> : <BiChevronDown className="mr-2 h-4 w-4" />}
                           </div>
                        </div>
                     
                    {
                      toggle && (
                        <div  className="absolute z-20 p-2  mt-1 w-full bg-white rounded-[12px] shadow-lg">
                          <ul className="py-1 gap-[2px]">
                            {options.map(option => (
                              <div key={option.value} className="  mb-2">
                              <label className="inline-flex p-[14px] rounded-[10px] hover:bg-[#EFF1F6] gap-[10px] items-center w-full">
                                <Checkbox
                                  type="checkbox"
                                  className="appearance-none w-4 h-4 checked:bg-[#1C1B1F] checked:border-transparent relative"
                                  value={option.value}
                                  onCheckedChange={() => handleCheckboxChange(option.value)}
                                  checked={selectedValues.includes(option.value)}
                                />
                                <span className="ml-2 font-semibold text-base -tracking-[0.4px]  text-[#131316] ">{option.label}</span>
                              </label>
                            </div>
                            ))}
                          </ul>
                        </div>
                      )
                    }
                     
                  </div>
               </div>
               <div className=" items-center gap-4">
                  <Label htmlFor="name" className="text-right font-semibold text-base -tracking-[0.4px] ">
                     Transaction Status
                  </Label>
                  <div className="relative">
                    <div className="w-400px">
                        
                    <input
                           type="text"
                           className="mt-2 w-full h-[48px] rounded-[12px] border gap-[10px] bg-[#EFF1F6]  px-4 py-[14px]"
                           readOnly
                           name='name'
                           value={selectedValues2.join(', ')}
                           onClick={showToggle2}
                        />
                        <div className="cursor-pointer absolute inset-y-0 right-0 text-[#31373D] flex items-center  pr-3">
                           {toggle2 ? <BiChevronUp className="mr-2 " /> : <BiChevronDown className="mr-2 h-4 w-4" />}
                           </div>
                    </div>
                     
                    {
                      toggle2 && (
                        <div  className="absolute z-10 mt-1 p-2 w-full bg-white rounded-md shadow-lg">
                          <ul className="py-1 gap-[2px]">
                            {options2.map(option => (
                              <div key={option.value} className=" mb-2">
                              <label className="inline-flex p-[14px] rounded-[10px] hover:bg-[#EFF1F6] gap-[10px] items-center w-full">
                                <Checkbox
                                  type="checkbox"
                                  className="appearance-none w-4 h-4 checked:bg-[#1C1B1F] checked:border-transparent "
                                  value={option.value}
                                  onCheckedChange={() => handleCheckboxChange2(option.value)}
                                  checked={selectedValues2.includes(option.value)}
                                />
                                <span className="ml-2 font-semibold text-base -tracking-[0.4px]  text-[#131316] ">{option.label}</span>
                              </label>
                            </div>
                            ))}
                          </ul>
                        </div>
                      )
                    }
                     
                  </div>
               </div>
            </div>
            <SheetFooter className="  borde w-full h-ful align-bottom containe top- pr-10 absolute bottom-0 mb-4  content-en ">
               <SheetClose className='borde w-full   h-full pt-  self-en space-x-3 '>
                  <Button onClick={() => {clearInputs(); clearFilter();}} className="bg-white w-[150px]  sm:w-[188px] group h-[48px] gap- border-[#EFF1F6] rounded-[100px] border py-3 px-6 hover:bg-[#131316]" type="cancel">
                     <span className="text-center font-semibold text-base group-hover:text-white  text-[#131316] -tracking-[0.4px] ">Clear</span>
                  </Button>
                  <Button
                       disabled={!selectedValues.length && !selectedValues2.length && (!startDate || !endDate)} 
                       onClick={() => {onFilterChange({ transactionTypes: selectedValues, transactionStatuses: selectedValues2, startDate: startDate, endDate: endDate, clearInputs  }); clearInputs() }}
                       className="bg-[#131316] w-[150px] sm:w-[188px] group h-[48px] gap- border-[#EFF1F6] rounded-[100px] disabled:bg-[#DBDEE5] border py-3 px-6 hover:bg-[#131316]" 
                       type="submit"
                  >
                     <span className="text-center font-semibold text-base  text-white -tracking-[0.4px] ">Apply</span>

                  </Button>
               </SheetClose>
            </SheetFooter>
            </div>
         </SheetContent>
         
      </Sheet>
      

    </div>
  );
}

export default Filter;

