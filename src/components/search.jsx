import { TextField } from '@mui/material';
import React from 'react';
import { BsBell ,BsSearch} from 'react-icons/bs';

const SearchBar = () => {
  const handleSearch = (event) => {
    const searchTerm = event.target.value;
    // Implement your search logic here with the searchTerm
  };

  return (
    <div className="shadow-2xl bg-white flex w-[373px] max-w-full items-start gap-5 mr-4 pl-4 pr-5 py-2.5 rounded-[30px] self-end max-md:justify-center max-md:mr-2.5 max-md:pr-5">
      <div className="flex-col overflow-hidden self-stretch relative flex  max-w-full items-start justify-between gap-3 ">
        <input 
        placeholder="Search"
        className="p-4 rounded outline-none"
        />
      </div>

      <BsBell className="aspect-square object-contain object-center w-[18px] overflow-hidden self-center max-w-full my-auto" />
      <BsSearch className="aspect-[0.83] object-contain object-center w-[19px] overflow-hidden self-center max-w-full my-auto" />
      <div className="img-wrapper w-12 h-12 mt-1.5">
      <img className="w-full h-full rounded-full" src="/assets/profile.jpg" alt="" />
      </div>
    </div>
  );
};

export default SearchBar;
