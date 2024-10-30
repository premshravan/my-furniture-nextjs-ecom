import React from "react";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import {  SearchIcon } from "lucide-react";

const SearchBox = () => {
  return (
    <Dialog>
      <DialogTrigger>
        <SearchIcon size={25} />
      </DialogTrigger>
      <DialogContent>
        <form action="">
          <input
            type="text"
            placeholder="search"
            className="block w-full bg-gray-400 rounded px-6 py-2 outline-none mt-4"
          />
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default SearchBox;
