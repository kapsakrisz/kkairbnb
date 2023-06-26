


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
  const [noOfGuests,setNoOfGuests]=useState(1);
  const selectionRange ={
    startDate:startDate,
    endDate:endDate,
    key:'selection'
  };

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
   
  };

  const resetInput = () => {
    setSearchInput("");
  };

  

  
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
        <div className='flex flex-col col-span-3 mx-auto mt-10'>
          <DateRangePicker 
          ranges={[selectionRange]}
          minDate={new Date()}
          rangeColors={["#fd5b61"]}
          onChange={handleSelect}
          
          />
          <div className='flex items-center border-b mb-4'>
            <h2 className='text-2xl flex-grow'>Number of Guests</h2>
            <UsersIcon className='h-5'/>
            <input 
            value={noOfGuests}
            min={1}
            onChange={e=> setNoOfGuests(e.target.value)}
            type="number" className='w-12 pl-2 text-lg outline-none text-red-300'/>
          </div>
          <div className='flex'>
            <button onClick={resetInput} className='flex-grow text-gray-400'>Cancel</button>
            <button className='flex-grow text-red-300'>Search</button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
