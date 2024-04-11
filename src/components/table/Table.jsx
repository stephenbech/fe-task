import React, { useEffect, useState } from 'react';
import { BsArrowUpRight, BsArrowDownLeft } from "react-icons/bs";
import Filter from '../sheet/Sheet';
import { Button } from '../ui/button';
import { GoDownload } from 'react-icons/go';
import { PiScroll } from 'react-icons/pi';
export default function Datatable({setFilteredData}) {
  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  
  const [selectedButton, setSelectedButton] = useState(null);
  console.log(selectedButton)
  const [filterCriteria, setFilterCriteria] = useState({
    startDate: null,
    endDate: null,
    transactionTypes: [],
    transactionStatuses: []
  });
  const [isFiltered, setIsFiltered] = useState(false); // State to track filter status

  useEffect(() => {
    fetchData();
  }, [filterCriteria]);

  const fetchData = async () => {
    try {
      const response = await fetch('https://fe-task-api.mainstack.io/transactions');
      const data = await response.json();
      setData(data);
      applyFilters(data);
    } catch (error) {
      console.log(error);
    }
  };

  const applyFilters = (data) => {
    const filtered = data.filter(item => {
      //  date range filter
      const startDate = filterCriteria.startDate ? new Date(filterCriteria.startDate) : null;
      const endDate = filterCriteria.endDate ? new Date(filterCriteria.endDate) : null;
      const itemDate = new Date(item.date);

      if ((startDate && itemDate < startDate) || (endDate && itemDate > endDate)) {
        return false;
      }

      //  transaction type filter
      if (filterCriteria.transactionTypes.length > 0 && !filterCriteria.transactionTypes.includes(item.type)) {
        return false;
      }

      //  transaction status filter
      if (filterCriteria.transactionStatuses.length > 0 && !filterCriteria.transactionStatuses.includes(item.status)) {
        return false;
      }

      return true;
    });

    setFilteredData(filtered);
    setFilterData(filtered);
    setIsFiltered(filtered.length > 0);
  };

  const clearFilter = () => {
    setFilterCriteria({
      startDate: null,
      endDate: null,
      transactionTypes: [],
      transactionStatuses: [],
    });
    setSelectedButton(null)
    setIsFiltered(false); // Reset filter status
  };

  // Function to format date
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  const handleFilterChange = (criteria) => {
    setFilterCriteria(criteria);
  };

  
  const exportFilteredData = () => {
    // Export filtered data to CSV format
    const csvContent = "data:text/csv;charset=utf-8," +
      filterData.map(row => Object.values(row).join(",")).join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "filtered_data.csv");
    document.body.appendChild(link); // Required for FF
    link.click(); // Trigger the download
  };

  return (
    <div className="px-4 sm:px-6 lg:px-36 mt-12">
      
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-2xl -tracking-[0.6px] font-bold text-[#131316]">{filterData.length} Transactions</h1>
          <p className="text-sm font-medium !leading-4 -tracking-[0.2px] text-[#56616B]">
          {/* {filterData.length > 0 ? (
    <>
        Your transactions for{' '}
        {selectedButton ? selectedButton : "All time"}{' '}
        {filterData.length > 1 && filterCriteria.startDate && filterCriteria.endDate && ' - '}
        {filterData.length > 1 && filterCriteria.startDate && filterCriteria.endDate && formatDate(filterData[filterData.length - 1].date)}
    </>
) : (
    <>
        Your transactions for{' '}
        {filterCriteria.startDate || filterCriteria.endDate ? formatDate(filterCriteria.startDate) : 'All time'}
        {filterCriteria.endDate && filterCriteria.startDate ? ` - ${formatDate(filterCriteria.endDate)}` : ''}
    </>
)} */}
            <>
              Your transactions for{' '}
              {!filterCriteria.startDate && !filterCriteria.endDate ? (
                <>
                 
                 {selectedButton ? selectedButton : "All time"}
                </>
              ) : (
                
                <>
                  {formatDate(filterCriteria.startDate)} to {formatDate(filterCriteria.endDate)}
                </>
              )}
            </>

              

          </p>
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 gap-[12px] flex">
          <Filter clearFilter={clearFilter} onFilterChange={handleFilterChange} filterData={filterData} setFilteredData={ setFilteredData} data={data} selectedButton={selectedButton} setSelectedButton={setSelectedButton}/>
          <Button className=" w-[139px] h-[48px] rounded-[100px] py-[12px] pr-[10px] pl-[20px] bg-[#EFF1F6] hover:bg-[#EFF1F6] flex gap-[8px]" onClick={exportFilteredData}>
            <span className="font-semibold text-base -tracking-[0.4px] text-[#131316] ">Export</span>
            <GoDownload className="h-5 w-5 text-[#131316]" />
          </Button>
        </div>
      </div>
      <div className="mt-6 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                  <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0 sr-only">
                    Name
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sr-only">
                    Title
                  </th>
                </tr>
              </thead>
              {filterData.length > 0 ? (
                  <tbody className=" bg-white pt-16">
                  {filterData.map((details, index) => (
                    <tr key={index} className="">
                      <td className="whitespace-nowrap py-5 pl-4 pr-3 text-sm sm:pl-0">
                        <div className="flex items-center">
                          <div className="">
                            {details.metadata ? (
                              <div className="h-12 w-12 bg-[#E3FCF2] items-center flex justify-center rounded-full">
                                <BsArrowDownLeft className="h-[11.5px] w-[11.5px] text-[#075132] " />
                              </div>
                            ) : (
                                <div className=" bg-[#F9E3E0] items-center flex justify-center rounded-full h-12 w-12">
                                   <BsArrowUpRight className="h-[11.5px] w-[11.5px] text-[#961100] " />
                                </div>
                            )}
                          </div>
                          <div className="ml-4">
                          {details.metadata && Object.keys(details.metadata).length > 0 ? (
                             <div className=''>
                                <div className="font-medium text-base -tracking-[0.2px] text-[#131316]">
                                      {
                                         !details.metadata.product_name ? (
                                            <div data-testid="type" >{details.metadata.type}</div>
                                          ):(
                                            <>
                                               <div data-testid="product-name" >{details.metadata.product_name}</div>
                                            </>
                                         )
                                      }
                                      
                                </div>
                                <div data-testid="name"  className="text-[#56616B] font-medium text-sm !leading-4 -tracking-[0.2px]">{details.metadata.name}</div>
                             </div>
                          ) : (
                             <>
                                <div data-testid="transaction-type" className="font-medium text-base -tracking-[0.2px] text-[#131316]">Cash {details.type}</div>
                                <div data-testid="status" className=" text-[#0EA163] font-medium text-sm !leading-4 -tracking-[0.2px]">{details.status}</div>
                             </>
                          )}
                          </div>
                        </div>
                      </td>
                      <td className=" px-3 py-5 ">            
                            <div data-testid="amount" className="font-bold text-base text-right -tracking-[0.4px] text-[#131316]">USD {details.amount}</div>
                            <div data-testid="date" className="mt-1 text-[#56616B] text-right font-medium text-sm !leading-4 -tracking-[0.2px]">{formatDate(details.date)}</div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              )
              : (
               <div className="flex sitems-center p-4 borde w-full justify-center mt-8">
                     <div className="sm:flex-auto mt-8 flex-col flex items-center  borde w-full justify-center ">
                        <div className="space-y-6">
                              <div>
                              <div className="h-12 w-12 bg-gradient-to-tr from-gray-300 to-gray-100 items-center flex justify-center rounded-[16px]">
                                 <PiScroll className="h-[17.63px] w-[16px] text-gradient-to-br from-gray-600 to-black " />
                              </div>
                              </div>
                           <p className="text-[28px]  font-bold leading-10 -tracking-[0.6px] text-[#131316]">
                              No matching transaction found <br/> for the selected filter
                           </p>
                           <p className="text-base  font-medium  -tracking-[0.2px] text-[#56616B]">
                              Change your filters to see more results, or add a new <br/> product.
                           </p>
                           <Button className="bg-[#EFF1F6] rounded-[100px] py-3 px-6 w-[117px] h-[48px] gap-2 text-[#131316] font-semibold text-base -tracking-[0.4px] " onClick={clearFilter}>Clear filter</Button>
                        </div>
                     </div>
             </div>
              )}
              
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
