import { Button } from "../components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../components/ui/tooltip"
import { IoMdArrowDropleft } from "react-icons/io";

export function TooltipDemo() {
  return (
    <div className="space-y- flex-col  h-[192px] w-[48px] p-1 bg-white rounded-[100px] shadow-md fixed mt-64 gap-1 justify-center items-center ml-4 flex ">
      <TooltipProvider>
         <Tooltip>
            <TooltipTrigger asChild>
               <Button className=" h-10 mt-1 w-10 group h- rounded-[100px] p-2 gap-4 bg-blend-luminosity bg-white hover:bg-[#EFF1F6]"  >
                 
                     <img className="grayscale  group-hover:grayscale-0  " src="assets/link.png" alt="" />
                 
               </Button>
               
            </TooltipTrigger>

            <div className="flex">
               <TooltipContent className="ml- border-none shadow-none bg-transparent" side="right">
                  <IoMdArrowDropleft  className="ml- w text-black "/>
               </TooltipContent>
            <TooltipContent className="ml-[22px] bg-black border-none shadow-none text-white" side="right">
               
               <p>Link in Bio</p>
            </TooltipContent>
            </div>
         </Tooltip>
      </TooltipProvider>
      <TooltipProvider>
         <Tooltip>
            <TooltipTrigger asChild>
               <Button className=" h-10 w-10 group rounded-[100px] p-2 gap-4 bg-blend-luminosity bg-white hover:bg-[#EFF1F6]"  >
                 
                     <img className="grayscale  group-hover:grayscale-0  " src="assets/store.png" alt="" />
                 
               </Button>
               
            </TooltipTrigger>

            <div className="flex">
               <TooltipContent className="ml- border-none shadow-none bg-transparent" side="right">
                  <IoMdArrowDropleft  className="ml- w text-black "/>
               </TooltipContent>
            <TooltipContent className="ml-[22px] bg-black border-none shadow-none text-white" side="right">
               
               <p>Store</p>
            </TooltipContent>
            </div>
         </Tooltip>
      </TooltipProvider>
      <TooltipProvider>
         <Tooltip>
            <TooltipTrigger asChild>
               <Button className=" h-10  w-10 group rounded-[100px] p-2 gap-4 bg-blend-luminosity bg-white hover:bg-[#EFF1F6]"  >
                 
                     <img className="grayscale  group-hover:grayscale-0  " src="assets/media.png" alt="" />
                 
               </Button>
               
            </TooltipTrigger>

            <div className="flex">
               <TooltipContent className="ml- border-none shadow-none bg-transparent" side="right">
                  <IoMdArrowDropleft  className="ml- w text-black "/>
               </TooltipContent>
            <TooltipContent className="ml-[22px] bg-black border-none shadow-none text-white" side="right">
               
               <p>Media kit</p>
            </TooltipContent>
            </div>
         </Tooltip>
      </TooltipProvider>
      <TooltipProvider>
         <Tooltip>
            <TooltipTrigger asChild>
               <Button className=" h-10  w-10 group rounded-[100px] p-2 gap-4 bg-blend-luminosity bg-white hover:bg-[#EFF1F6]"  >
                 
                     <img className="grayscale  group-hover:grayscale-0  " src="assets/invoice.png" alt="" />
                 
               </Button>
               
            </TooltipTrigger>

            <div className="flex">
               <TooltipContent className="ml- border-none shadow-none bg-transparent" side="right">
                  <IoMdArrowDropleft  className="ml- w text-black "/>
               </TooltipContent>
            <TooltipContent className="ml-[22px] bg-black border-none shadow-none text-white" side="right">
               
               <p>Invoicing</p>
            </TooltipContent>
            </div>
         </Tooltip>
      </TooltipProvider>
    </div>
  )
}
