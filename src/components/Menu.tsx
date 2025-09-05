import React from "react";
import IconButton from "./IconButton";
import { Bell, LayoutDashboard } from "lucide-react";
import SearchBar from "./searchBar";

export default function Menu(){
    return(<>
    <div className="flex justify-between w-screen p-15">
        <SearchBar/>
        <h1 className="font-extrabold text-2xl">
            @geooosama
        </h1>
        <div className="flex gap-3">
            <IconButton className="bg-(--secundaria)">
                <Bell width={20} height={20}/>
            </IconButton>
            <div className="bg-(--secundaria) rounded-full flex justify-center items-center px-4 font-medium">
                Olá, Geovana
            </div>
            <IconButton className="bg-(--terciaria) ">
                <div className="flex gap-2 px-2 justify-center items-center font-medium">
                <LayoutDashboard width={20} height={20}/>
                Upgrade
                </div>
                
            </IconButton>
        </div>
        
    </div>
       
    </>)
}