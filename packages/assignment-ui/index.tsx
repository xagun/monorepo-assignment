

"use client";

import React from "react";
import { ReactNode } from "react";

interface UserData {
    name: string;
    dob: string;
    description: string;
   }
   

interface ModalProps {
  userData:UserData[]
}

export const Modal = ({  userData }: ModalProps) => {
  return (
 
    <>

<div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">

  <div className="fixed inset-0 bg-gray-500 bg-blue-800 transition-opacity"></div>

  <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
  
      <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
        <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
          <div className="">
          {/* <div>
      <Skeleton className="w-[300px] h-[25px] rounded-full m-2"/>
      <Skeleton className="w-[300px] h-[25px] rounded-full m-2"/>
      <Skeleton className="w-[300px] h-[25px] rounded-full m-2"/>
      <Skeleton className="w-[300px] h-[25px] rounded-full m-2"/>
      <Skeleton className="w-[300px] h-[25px] rounded-full m-2"/>
    </div> */}
    {userData.map((ud)=>(
        <p className="p-4">
{ud.name}
        </p>
    ))}
    
    <div className="flex justify-center">
    <button className='p-2 bg-yellow-400'>View All</button>
</div>
          </div>
        </div>
    
      </div>
    </div>
  </div>
</div>




  

    </>
  );
};