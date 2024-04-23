"use client"
import { useState } from 'react';
import { useRouter } from 'next/router';
import { IoSearchOutline } from "react-icons/io5";

const locations = ['Pune', 'Mumbai', 'Bangalore']; // Your preset locations
const categories = [
  'AIF', 'Bonds', 'Corporate FD', 'Global Equity', 'IFA', 'Mutual Funds',
  'PMS', 'Real Estate', 'Tax Consultancy',
];

export default function Search() {
  const [location, setLocation] = useState(locations[0]); // Default to first location
  const [category, setCategory] = useState(categories[0]); // Default to first category
//   const router = useRouter();

  const handleSearch = () => {
    router.push({
      pathname: 'pages/search-result',
      query: { location, category },
    });
  };

  return (
    <div className='flex ml-10 justify-left mt-10'>
      
        <div className="flex flex-row items-center justify-center gap-2 border border-gray-600  rounded-2xl ">
      <div className='p-2' >
        <label>Location:</label>
        <select
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        >
          {locations.map((loc, index) => (
            <option key={index} value={loc}>
              {loc}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label>Category:</label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {categories.map((cat, index) => (
            <option key={index} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>
      
    <div className="flex flex-row items-center justify-center">
   
      <button className='p-2 text-white bg-blue-500 h-[50px] rounded-2xl   flex flex-row items-center justify-center ml-2' onClick={handleSearch}><IoSearchOutline className='text-xl' /> <p className='ml-3 mr-3'>Find Expert </p></button>
     
      </div>
     
      </div>

    </div>
  );
}
