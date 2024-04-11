import './App.css';
import Chart from './components/Chart';
import Header from "./components/Header"
import { TooltipDemo } from './components/Tooltip';
import { Button } from './components/ui/button';
import { IoIosInformationCircleOutline } from "react-icons/io";
import React, { useEffect, useState } from 'react'
import TableWrapper from './components/TableWrapper';
import Datatable from './components/table/Table';

function App() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  useEffect(() => {
    try {
      const fetchData = async () => {
        const response  = await fetch('https://fe-task-api.mainstack.io/wallet')
        const data  = await response.json()
        // console.log(data)
        setData(data)
      }
      fetchData()
    } catch (error) {
      console.error('Failed to fetch data', error);
    }
 }, [])

 const formatAmount = (amount) => {
   // Check if the amount is a number
   if (typeof amount !== 'number') return amount;
   // Format the number with commas
   return amount.toLocaleString();
 }

 const [data2, setData2] = useState([]);
 useEffect(() => {
   fetchData();
 }, []);
 
 const fetchData = async () => {
   try {
     const response = await fetch('https://fe-task-api.mainstack.io/transactions');
     const data = await response.json();
     setData2(data);
   } catch (error) {
     console.log(error);
   }
 };


  return (
    <div className="">
      <Header/>

      <div className=''>
        <div>
          <TooltipDemo/>
        </div>
        <div className=' md:block lg:flex w-full sm:space-x-10 pt-12  borde ustify-between sm:pr-12 px-4 sm:px-6 lg:px-36'>
          <div className=' flex-1 '>
            <div className=' flex h-[72px] left-[144px] gap-[64px]'>
              <div className=' '>
                <p className='font-medium text-sm !leading-4 text-cente text-[#56616B] -tracking-[0.2px]'>
                  Available Balance
                </p>
                <p className='sm:text-[36px] sm:font-bold font-medium text-cente text-[#131316] -tracking-[1.5px] leading-[48px]'>USD {formatAmount(data.balance)}</p>
              </div>
              <div className='items-center flex'>
                  <Button className='flex items-center sm:w-[167px]  bg-black text-white py-2 px-4 sm:h-[52px] gap-10 rounded-full  '>
                    <span className="sm:font-semibold  sm:text-base leading-6 tracking-[-0.4px]">Withdraw</span>
                  </Button>
              </div>
            </div>
            <div data-testid="Chart" className='w-full'>
              {/* graph */}
              <Chart chartData={filteredData <= 0 ? data2 : filteredData} />
            </div>
          </div>
            
          <div className=' mt-4 sm:mt-0 md:mt-4  -sm:ml-28'>
                <ul className='space-y-[48px]'>
                  <li className='w-[311px] space-y-[8px] '>
                    <div className='flex justify-between w-full '>
                      <span className="font-medium text-sm leading-4 -tracking-[-0.2px]  text-[rgba(86,97,107,1)]">Ledger Balance</span>
                      < IoIosInformationCircleOutline className='text-[rgba(136,143,149,1)] w-[15.83px] h-[15.83px] ' />
                    </div>
                    <p>
                      <span className="sm:font-bold sm:text-[28px] font-semibold text-base leading-[38px] -tracking-[-0.6px]">USD {formatAmount(data.ledger_balance)}</span>
                    </p>
                  </li>
                  <li className='w-[311px] space-y-[8px] '>
                    <div className='flex justify-between w-full'>
                      <span className="font-medium text-sm leading-4 -tracking-[-0.2px]  text-[rgba(86,97,107,1)]">Total Payout</span>
                      < IoIosInformationCircleOutline className='text-[rgba(136,143,149,1)] w-[15.83px] h-[15.83px] ' />
                    </div>
                    <p>
                      <span className="sm:font-bold sm:text-[28px] font-semibold text-base leading-[38px] -tracking-[-0.6px]">USD {formatAmount(data.total_payout)}</span>
                    </p>
                  </li>
                  <li className='w-[311px] space-y-[8px] '>
                    <div className='flex justify-between w-full' >
                      <span className="font-medium text-sm leading-4 -tracking-[-0.2px]  text-[rgba(86,97,107,1)]">Total Revenue</span>
                      < IoIosInformationCircleOutline className='text-[rgba(136,143,149,1)] w-[15.83px] h-[15.83px] ' />
                    </div>
                    <p>
                      <span className="sm:font-bold sm:text-[28px] font-semibold text-base leading-[38px] -tracking-[-0.6px]">USD {formatAmount(data.total_revenue)}</span>
                    </p>
                  </li>
                  <li className='w-[311px] space-y-[8px] '>
                    <div className='flex justify-between w-full'>
                      <span className="font-medium text-sm leading-4 -tracking-[-0.2px]  text-[rgba(86,97,107,1)]">Pending  Payout</span>
                      < IoIosInformationCircleOutline className='text-[rgba(136,143,149,1)] w-[15.83px] h-[15.83px] ' />
                    </div>
                    <p>
                      <span className="sm:font-bold sm:text-[28px] font-semibold text-base leading-[38px] -tracking-[-0.6px]">USD {formatAmount(data.pending_payout)}</span>
                    </p>
                  </li>
                </ul>
          </div>
        </div>
      </div>
      <div className='mt-24'>
        {/* <TableWrapper/> */}
        <Datatable setFilteredData={setFilteredData}  />
      </div>
    </div>
  );
}

export default App;
