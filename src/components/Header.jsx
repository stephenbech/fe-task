import React, { useState } from 'react'
import { BsBell } from 'react-icons/bs'
import { FaMoneyBills } from 'react-icons/fa6'
import {  GoHome} from 'react-icons/go'
import { MdOutlineGroup, MdOutlineMessage } from 'react-icons/md'
import {AppDropdown, MenuDropdown} from './Dropdown'
import { TbAlignBoxLeftStretch } from "react-icons/tb";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet'
import { BiMenu } from 'react-icons/bi'


function Header() {
  const [activeMenuItem, setActiveMenuItem] = useState('Revenue'); // State to manage active menu item

  const handleMenuItemClick = (menuItem) => {
    setActiveMenuItem(menuItem);
  };
  return (
    <div className="">
      <div className='bg-white flex justify-between p-4 rounded-[100px] mx-4 mt-4 h-16 headershadow border-2 border-white'>
          <div className="flex justify-center items-center">
          <img src="assets/mainstack-logo.png" alt="logo" />
          </div>
          <nav className='hidden md:hidden lg:flex  justify-center text-[#56616B] items-center'>
              <ul className='flex gap-x-4'>
                  <li className={`flex items-center gap-1    py-2 px-4 hover:rounded-full  
                       ${activeMenuItem === 'Home' ? 'bg-[#131316] text-white rounded-full' : 'hover:bg-[#EFF1F6]'}
                  `}
                  onClick={() => handleMenuItemClick('Home')}
                  >
                    <GoHome className='w-5 h-5'/>
                    <span className=" font-semibold text-base leading-6 tracking-[-0.4px]">Home</span>
                  </li>
                  <li className={`flex items-center gap-1    py-2 px-4 hover:rounded-full  
                       ${activeMenuItem === 'Analytics' ? 'bg-[#131316] text-white rounded-full' : 'hover:bg-[#EFF1F6]'}
                  `}
                  
                  onClick={() => handleMenuItemClick('Analytics')}
                  >
                    <TbAlignBoxLeftStretch  className=' w-5 h-5 -rotate-90' />
                    <span className="font-semibold text-base leading-6  tracking-[-0.4px]">Analytics</span>
                  </li>
                  <li className={`flex items-center gap-1    py-2 px-4 hover:rounded-full  
                       ${activeMenuItem === 'Revenue' ? 'bg-[#131316] text-white rounded-full' : 'hover:bg-[#EFF1F6]'}
                  `}
                  
                  onClick={() => handleMenuItemClick('Revenue')}
                  >
                    <FaMoneyBills className='w-5 h-5 '/>
                    <span className="font-semibold text-base leading-6 tracking-[-0.4px]">Revenue</span>
                  </li>
                  <li className={`flex items-center gap-1    py-2 px-4 hover:rounded-full  
                       ${activeMenuItem === 'CRM' ? 'bg-[#131316] text-white rounded-full' : 'hover:bg-[#EFF1F6]'}
                      `}
                      
                      onClick={() => handleMenuItemClick('CRM')}
                  >
                    <MdOutlineGroup className='w-5 h-5 '/>
                    <span className="font-semibold text-base leading-6 tracking-[-0.4px]">CRM</span>
                  </li>
                
                  <AppDropdown activeMenuItem={activeMenuItem} handleMenuItemClick={handleMenuItemClick}/>
              </ul>
          </nav>
          <div className='hidden md:hidden lg:flex items-center gap-x-8'>
              <div className="">
                <BsBell className='w-5 h-5 '/>
              </div>
              <div className="">
                <MdOutlineMessage className='w-5 h-5 '/>
              </div>
              <div className="">
                <MenuDropdown activeMenuItem={activeMenuItem} handleMenuItemClick={handleMenuItemClick}/>
              </div>
          </div>

          <div className=' flex md:flex lg:hidden '>
            <Sheet className="flex flex-col md:flex-col md:flex lg:hidden">
                <SheetTrigger>
                  <button className='flex lg:hidden text-black bg-blac p-2 rounded-ful'>
                      <BiMenu className='w-6 h-6'/>
                  </button>
                </SheetTrigger>
                <SheetContent className="flex flex-col md:flex lg:hidden">
                  <SheetHeader>
                    <SheetTitle>
                      <div className="flex justify-cente items-cente">
                        <img src="assets/mainstack-logo.png" alt="logo" />
                      </div>
                    </SheetTitle>
                  </SheetHeader>
                  <nav className=' flex-col flex justify-cente text-[#56616B] items-cente'>
                      <ul className='flex flex-col gap-y-4'>
                        <li className={`flex items-center gap-1    py-2 px-4 hover:rounded-md  
                            ${activeMenuItem === 'Home' ? 'bg-[#131316] text-white rounded-md' : 'hover:bg-[#EFF1F6]'}
                        `}
                        onClick={() => handleMenuItemClick('Home')}
                        >
                          <GoHome className='w-5 h-5'/>
                          <span className=" font-semibold text-base leading-6 tracking-[-0.4px]">Home</span>
                        </li>
                        <li className={`flex items-center gap-1    py-2 px-4 hover:rounded-md  
                            ${activeMenuItem === 'Analytics' ? 'bg-[#131316] text-white rounded-md' : 'hover:bg-[#EFF1F6]'}
                        `}
                        
                        onClick={() => handleMenuItemClick('Analytics')}
                        >
                          <TbAlignBoxLeftStretch  className=' w-5 h-5 -rotate-90' />
                          <span className="font-semibold text-base leading-6  tracking-[-0.4px]">Analytics</span>
                        </li>
                        <li className={`flex items-center gap-1    py-2 px-4 hover:rounded-md  
                            ${activeMenuItem === 'Revenue' ? 'bg-[#131316] text-white rounded-md' : 'hover:bg-[#EFF1F6]'}
                        `}
                        
                        onClick={() => handleMenuItemClick('Revenue')}
                        >
                          <FaMoneyBills className='w-5 h-5 '/>
                          <span className="font-semibold text-base leading-6 tracking-[-0.4px]">Revenue</span>
                        </li>
                        <li className={`flex items-center gap-1    py-2 px-4 hover:rounded-md  
                            ${activeMenuItem === 'CRM' ? 'bg-[#131316] text-white rounded-md' : 'hover:bg-[#EFF1F6]'}
                            `}
                            
                            onClick={() => handleMenuItemClick('CRM')}
                        >
                          <MdOutlineGroup className='w-5 h-5 '/>
                          <span className="font-semibold text-base leading-6 tracking-[-0.4px]">CRM</span>
                        </li>
                      
                        <AppDropdown activeMenuItem={activeMenuItem} handleMenuItemClick={handleMenuItemClick}/>
                      </ul>
                  </nav>
                  <div className='flex items-cente mt-2 ml-3 flex-col gap-y-8'>
                      <div className="">
                        <BsBell className='w-5 h-5 '/>
                      </div>
                      <div className="">
                        <MdOutlineMessage className='w-5 h-5 '/>
                      </div>
                      <div className="">
                        <MenuDropdown activeMenuItem={activeMenuItem} handleMenuItemClick={handleMenuItemClick}/>
                      </div>
                  </div>
                        </SheetContent>
                    </Sheet>
                  </div>
            </div>

      
    </div>
  )
}

export default Header