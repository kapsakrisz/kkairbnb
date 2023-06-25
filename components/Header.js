


import Image from 'next/image';


import { GlobeAltIcon, MenuIcon, UserCircleIcon, SearchIcon, UsersIcon } from "@heroicons/react/solid";
import React ,{ useState } from "react";

import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';

function Header() {
  const [searchInput, setSearchInput] = useState("");
  const [startDate,setStartDate] = useState(new Date());
  const [endDate,setEndDate] = useState(new Date());
  const selectionRange ={
    startDate:startDate,
    endDate:endDate,
    key:'Selection'
  }

  

  
  return (
    <header className='sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md py-5 px-5 md:px-10'>
      <div className='relative flex items-center h-10 cursor-pointer my-auto'>
        <Image
          className='rounded-full'
          src="/kkbnbv2.jpg"
          layout='fill'
          objectFit='contain'
          objectPosition='left'
        />
      </div>

      <div className='flex items-center md:border-2 rounded-full py-2'>
        <input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className='flex-grow pl-5 text-gray-500 bg-transparent placeholder-gray-400 outline-none' type="text" placeholder="type your search" />
        <SearchIcon className='hidden md:inline-flex h-8 bg-red-400 rounded-full text-white p-2 cursor-pointer' />
      </div>

      <div className='flex items-center space-x-4 justify-end text-gray-400'>
        <p className='hidden md:inline'>Want to be a host?</p>
        <GlobeAltIcon className="h-6 cursor-pointer" />

        <div className='flex items-center space-x-2 border-2 p-2 rounded-full'>
          <MenuIcon className='h-6' />
          <UserCircleIcon className='h-6' />
        </div>
      </div>
      {searchInput && (
        <div>
          <DateRangePicker ranges={[selectionRange]}/>
        </div>
      )}
    </header>
  );
}

export default Header;
