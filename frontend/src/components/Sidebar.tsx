import { Button, TextInput, HR, Avatar } from "flowbite-react";
import React from "react";
import { CiSearch } from "react-icons/ci";
import { IoMdLogOut } from "react-icons/io";

const Sidebar = () => {
  return (
    <div className="h-[95%] p-3">
      <div className="flex gap-4">
        <TextInput
          className="w-full"
          id="search"
          type="text"
          placeholder="search..."
        />
        <Button className="rounded-full">
          <CiSearch className="h-6 w-6" />
        </Button>
      </div>
      <HR className="my-4" />

      <div className="flex gap-6 items-center p-3 hover:bg-sky-500 rounded-md cursor-pointer">
        <Avatar rounded />
        <h1 className="font-extrabold text-white">Ritik Upadhyay</h1>
      </div>
      <HR className="my-1 bg-gray-700" />
      <div className="flex gap-6 items-center p-3 hover:bg-sky-500 rounded-md cursor-pointer">
        <Avatar rounded />
        <h1 className="font-extrabold text-white">Ritik Upadhyay</h1>
      </div>
      <HR className="my-1 bg-gray-700" />
      <div className="flex gap-6 items-center p-3 hover:bg-sky-500 rounded-md cursor-pointer">
        <Avatar rounded />
        <h1 className="font-extrabold text-white">Ritik Upadhyay</h1>
      </div>
      <HR className="my-1 bg-gray-700" />
      <IoMdLogOut size={33} className="absolute bottom-1 left-5 text-white hover:text-sky-500 cursor-pointer" />
    </div>
  );
};

export default Sidebar;
