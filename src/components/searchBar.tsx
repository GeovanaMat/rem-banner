import React from "react";
import { Search } from "lucide-react";
import IconButton from "./IconButton";
import Menu from "./Menu";
const SearchBar = () =>{
     return(
        <>
        <div className="flex">
            <IconButton className="bg-[var(--primaria)] text-white hover:bg-[var(--primaria-hover)]">
                <Search width={18} height={18} />
            </IconButton>
            
            <div className="bg-(--secundaria) rounded-full text-gray-600 p-2 px-5 text-[12px] flex justify-center items-center ">
                <input type="text" placeholder="Search for something?..." 
                 className="outline-none"/>
            </div>

            
        </div>
        </>
     )
}

export default SearchBar;