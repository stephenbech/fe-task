import React, { useState, useEffect, useRef } from 'react';
import { BiChevronDown, BiChevronRight, BiCog } from 'react-icons/bi';
import { IoMenuOutline } from "react-icons/io5";
import { PiSignOutLight, PiScroll } from "react-icons/pi";
import { MdOutlineBugReport, MdOutlineCardGiftcard, MdOutlineSwitchAccount  } from "react-icons/md";
export function  AppDropdown({activeMenuItem, handleMenuItemClick}) {
   const [toggle, setToggle] = useState(false);
   const dropdownRef = useRef(null);
   const showToggle= () => {
      setToggle(!toggle);
      
    };

    useEffect(() => {
      const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
          setToggle(false);
          handleMenuItemClick(activeMenuItem); // Revert to original active state
        }
      };
  
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [activeMenuItem, handleMenuItemClick]);
  return (
   <div>
   
      <div className="" onClick={() => {showToggle();}}>
      
         {
            !toggle ? (
               
               <li className= 'flex items-center gap-1 py-2 px-4 hover:rounded-full hover:bg-[#EFF1F6] cursor-pointer' 
               >
                  <img src="assets/widgets.png" alt="" />
                  <span className="font-semibold text-base leading-6 tracking-[-0.4px] text-[#56616B]" >Apps</span>            
               </li> 
            ) : (
               <div ref={dropdownRef} className="flex items-center gap-1 bg-black text-white px-4 rounded-full gap-x-4 cursor-pointer ">
                  
                  <div className='flex items-center  py-2 space-x-1'>
                  <img src="assets/widgets.png" alt="" className=' brightness-200' />
                     <span className="font-semibold text-base leading-6 tracking-[-0.4px] ">Apps</span>
                    
                  </div>
                  <div className='w-[1px] h-10 bg-[#56616B] '/>
                  <div className='flex items-center  py-2 space-x-2'>
                  
                     <span className="font-semibold text-base leading-6 tracking-[-0.4px]">Links</span>
                    <BiChevronDown className='w-5 h-5 '/>
                  </div>
               </div>
            )
         }
     
         
      </div>
      {
         toggle && (
            <div  className='absolute w-[270p w-[370px] -ml-[110px] sm:-ml[160px] z-50 bg-white rounded-[20px] shadow-md sm:mt-6 space-y-3 block p-3'>
               <div className='flex hover:shadow-md w-full transition-all duration-700  transfor  ease-in-out group rounded-lg'>
                  <div className='px-3 py-1 sm:py-2 flex w-full justify-between'>
                     <div className='flex space-x-4'>
                     <div className='border items-center justify-center flex w-12 h-12 rounded-[10px]'>
                        <img src="assets/link.png" alt="" />
                     </div>
                     <div className='flex-1 flex flex-col justify-start items-start'>
                        <p className='font-semibold text-base leading-6 tracking-[-0.4px] text-[#131316]'>Link in Bio</p>
                        <p className='text-[#56616B] text-xs leading-4 tracking-[-0.4px]'>Manage your link in Bio</p>
                     </div>
                     </div>
                     <div className='items-center justify-center borde hidden group-hover:flex w- h-10 '>
                     <BiChevronRight className='w-3 h-3 '/>
                     </div>
                  </div>
               </div>
               <div className='flex hover:shadow-md  w-full transition-all duration-1000 ease-in-out group rounded-lg'>
                  <div className='px-3 py-1 sm:py-2 flex w-full justify-between'>
                     <div className='flex space-x-4'>
                     <div className='border items-center justify-center flex w-12 h-12 rounded-[10px]'>
                        <img src="assets/store.png" alt="" />
                     </div>
                     <div className='flex-1 flex flex-col justify-start items-start'>
                        <p className='font-semibold text-base leading-6 tracking-[-0.4px] text-[#131316]'>Store</p>
                        <p className='text-[#56616B] text-xs leading-4 tracking-[-0.4px]'>Manage your Store activities</p>
                     </div>
                     </div>
                     <div className='items-center justify-center borde hidden group-hover:flex w- h-10 '>
                     <BiChevronRight className='w-3 h-3 '/>
                     </div>
                  </div>
               </div>
               <div className='flex hover:shadow-md  w-full transition-all duration-1000 fade-in-100 fade-out-100 ease-in-out group rounded-lg'>
                  <div className='px-3 py-1 sm:py-2 flex w-full justify-between transition-all-colors'>
                      <div className='flex space-x-4 borde transition-all-colors'>
                          <div className='border items-center justify-center flex w-12 h-12 rounded-[10px] transition-all-colors'>
                              <img src="assets/media.png" alt="" />
                          </div>
                          <div className='flex-1 flex flex-col justify-start items-start'>
                              <p className='font-semibold text-base leading-6 tracking-[-0.4px] text-[#131316]'>Media Kit</p>
                              <p className='text-[#56616B] text-xs leading-4 tracking-[-0.4px]'>Manage your Media kit</p>
                          </div>
                      </div>
                      <div className='items-center justify-center borde hidden group-hover:flex w-10 h-10 transition-all-opacity'>
                          <BiChevronRight className='w-3 h-3' />
                      </div>
                  </div>
              </div>

               <div className='flex hover:shadow-md  w-full transition-all duration-1000 ease-in-out group rounded-lg'>
                    <div className='px-3 py-2 sm:py-3 flex w-full justify-between'>
                        <div className='flex space-x-4'>
                            <div className='border items-center justify-center flex w-12 h-12 rounded-[10px] transition-all duration-300 ease-in-out transform hover:scale-110'>
                                <img src="assets/invoice.png" alt="" />
                            </div>
                            <div className='flex-1 flex flex-col justify-start items-start'>
                                <p className='font-semibold text-lg leading-6 tracking-wide text-[#131316] '>Invoicing</p>
                                <p className='text-[#56616B] text-sm leading-4 tracking-wide '>Manage your Invoices</p>
                            </div>
                        </div>
                        <div className='items-center justify-center hidden group-hover:flex w-auto h-10 transition-all duration-300 ease-in-out transform hover:scale-110'>
                            <BiChevronRight className='w-5 h-5' />
                        </div>
                    </div>
                </div>

               <div className='flex hover:shadow-md  w-full transition-all duration-1000 ease-in-out group rounded-lg '>
                  <div className='px-3 py-1 sm:py-2 flex  w-full justify-between'>
                    <div className='flex space-x-4'>
                    <div className='border items-center justify-center flex w-12 h-12 rounded-[10px]'>
                        <img src="assets/media.png" alt="" />
                     </div>
                    <div className='flex-1 flex flex-col justify-start items-start'>
                        <p className='font-semibold text-base leading-6 tracking-[-0.4px] text-[#131316]'>Bookings</p>
                        <p className='text-[#56616B] text-xs leading-4 tracking-[-0.4px]'>Manage your Bookings</p>
                    </div>
                    </div>
                    <div className=' items-center justify-center borde hidden group-hover:flex w- h-10 '>
                      <BiChevronRight className='w-3 h-3 '/>
                    </div>
                  </div>
               </div>
            </div>
         )
      }
 </div>
 
  )
}


export const MenuDropdown = ({activeMenuItem, handleMenuItemClick}) => {
   const [toggle, setToggle] = useState(false);
  const dropdownRef = useRef(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    try {
      const fetchData = async () => {
        const response  = await fetch('https://fe-task-api.mainstack.io/user')
        const data  = await response.json()
        // console.log(data)
        setData(data)
      }
      fetchData()
    } catch (error) {
      console.log(error)
    }
 }, [])

 useEffect(() => {
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setToggle(false);
    }
  };

  document.addEventListener('mousedown', handleClickOutside);
  return () => {
    document.removeEventListener('mousedown', handleClickOutside);
  };
}, []);

const handleToggle = () => {
  setToggle((prevToggle) => !prevToggle);
  handleMenuItemClick("bar");
  if (toggle){
    handleMenuItemClick("Revenue")
  }
};

const handleButtonClick = (event) => {
  event.stopPropagation(); 
  handleToggle();
};

 
   return (
     <div>
       {
         !toggle ? (
            <div className='flex items-center gap-1' onClick={handleToggle}>
               <div className=''>
               <button className='flex items-center gap-1 rounded-full bg-[#EFF1F6] w-[81px] h-[40px] pt-1 pr-3 pb-1 pl-[5px] cursor-pointer' onClick={handleButtonClick}>
                  <div className='p-1 bg-gradient-to-br from-gray-700 via-gray-800 to-black w-8 h-8 text-center rounded-full text-white'>
                     <span className='font-semibold text-sm leading-[16px] text-center -tracking-[0.4px]'>
                        {data.first_name && data.last_name ? `${data.first_name.charAt(0)}${data.last_name.charAt(0)}` : ''}
                     </span>
                  </div>
                  <IoMenuOutline className='w-5 h-5' />
               </button>
               </div>
            </div>
         ) : (
            <div ref={dropdownRef} className='flex items-center gap-1' onClick={handleToggle}>
               <div className=''>
               <button className='flex items-center gap-1 rounded-full bg-[#EFF1F6] w-[81px] h-[40px] pt-1 pr-3 pb-1 pl-[5px] cursor-pointer' onClick={handleButtonClick}>
                  <div className='p-1 bg-gradient-to-br from-gray-700 via-gray-800 to-black w-8 h-8 text-center rounded-full text-white'>
                     <span className='font-semibold text-sm leading-[16px] text-center -tracking-[0.4px]'>
                        {data.first_name && data.last_name ? `${data.first_name.charAt(0)}${data.last_name.charAt(0)}` : ''}
                     </span>
                  </div>
                  <IoMenuOutline className='w-5 h-5' />
               </button>
               </div>
            </div>
         )
       }
       {toggle && (
         <div  className='w-[324px] sm:w-[380px] sm:absolute z-50 bg-white -ml-14 sm:-ml-[312px] sm:space-y-3 rounded-[25px] shadow-md sm:mt-7 block sm:p-4 p-2'>
           {/* Dropdown content */}
           <div className='flex  w-full  '>
               <div className='p-3 flex  w-full justify-between'>
                  <div className='flex space-x-4'>
                  <div className='p-1.5 bg-[#15181a] w-9 h-9 text-center rounded-full text-white'>
                     <span className='font-semibold text-base leading- tracking-[-0.4px]'>
                      {data.first_name && data.last_name ? `${data.first_name.charAt(0)}${data.last_name.charAt(0)}` : ''}
                     </span>
                  </div>
                  <div className='flex-1 flex flex-col justify-start items-start'>
                     <p className='font-semibold text-base leading-6 tracking-[-0.4px]'>{data.first_name} {""} {data.last_name} </p>
                     <p className='text-[#56616B] text-xs leading-4 tracking-[-0.4px]'>{data.email}</p>
                  </div>
                  </div>
               </div>
            </div>
           <div className='flex w-full '>
             <div className='p- flex w-full justify-between'>
               <div className='flex space-x-1'>
                 <div className='borde items-center justify-center flex w-10 h-10 rounded-md'>
                   <BiCog src='assets/link.png' alt='' className='w-6 h-6'/>
                 </div>
                 <div className='flex-1 flex  justify-center items-center'>
                   <p className='font-medium text-[#131316] text-base leading-6 tracking-[-0.4px]'>Settings</p>
                 </div>
               </div>
             </div>
           </div>
           <div className='flex w-full '>
             <div className='p- flex w-full justify-between'>
               <div className='flex space-x-1'>
                 <div className='borde items-center justify-center flex w-10 h-10 rounded-md'>
                   <PiScroll src='assets/link.png' alt=''className='w-6 h-6' />
                 </div>
                 <div className='flex-1 flex  justify-center items-center'>
                   <p className='font-medium text-[#131316] text-base leading-6 tracking-[-0.4px]'>Purchase History</p>
                 </div>
               </div>
             </div>
           </div>
           <div className='flex w-full '>
             <div className='p- flex w-full justify-between'>
               <div className='flex space-x-1'>
                 <div className='borde items-center justify-center flex w-10 h-10 rounded-md'>
                   <MdOutlineCardGiftcard src='assets/link.png' alt='' className='w-6 h-6'/>
                 </div>
                 <div className='flex-1 flex  justify-center items-center'>
                   <p className='font-medium text-[#131316] text-base leading-6 tracking-[-0.4px]'>Refer and Earn</p>
                 </div>
               </div>
             </div>
           </div>
           <div className='flex w-full '>
             <div className='p- flex w-full justify-between'>
               <div className='flex space-x-1'>
                 <div className='borde items-center justify-center flex w-10 h-10 rounded-md'>
                   
                  <img src="assets/widgets.png" alt="" className='w-6 h-6'/>
                 </div>
                 <div className='flex-1 flex  justify-center items-center'>
                   <p className='font-medium text-[#131316] text-base leading-6 tracking-[-0.4px]'>Integrations</p>
                 </div>
               </div>
             </div>
           </div>
           <div className='flex w-full '>
             <div className='p- flex w-full justify-between'>
               <div className='flex space-x-1'>
                 <div className='borde items-center justify-center flex w-10 h-10 rounded-md'>
                   <MdOutlineBugReport src='assets/link.png' alt='' className='w-6 h-6'/>
                 </div>
                 <div className='flex-1 flex  justify-center items-center'>
                   <p className='font-medium text-[#131316] text-base leading-6 tracking-[-0.4px]'>Report Bug</p>
                 </div>
               </div>
             </div>
           </div>
           <div className='flex w-full '>
             <div className='p- flex w-full justify-between'>
               <div className='flex space-x-1'>
                 <div className='borde items-center justify-center flex w-10 h-10'>
                   <MdOutlineSwitchAccount src='assets/link.png' alt='' />
                 </div>
                 <div className='flex-1 flex  justify-center items-center'>
                   <p className='font-medium text-[#131316] text-base leading-6 tracking-[-0.4px]'>Switch Account</p>
                 </div>
               </div>
             </div>
           </div>
           <div className='flex w-full '>
             <div className='p- flex w-full justify-between'>
               <div className='flex space-x-1'>
                 <div className='borde items-center justify-center flex w-10 h-10'>
                   <PiSignOutLight src='assets/link.png' alt='' className='w-6 h-6' />
                 </div>
                 <div className='flex-1 flex  justify-center items-center'>
                   <p className='font-medium text-[#131316] text-base leading-6 tracking-[-0.4px]'>Sign Out</p>
                 </div>
               </div>
             </div>
           </div>
         </div>
       )}
     </div>
   );
 };
 