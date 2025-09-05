import React from "react";
import IconButton from "./IconButton";
import { House, CalendarDays,Command,Copy } from "lucide-react";
export default function MenuLateral(){
    return(
        <>
        <div className="fixed left-5 top-1/2 -translate-y-1/2 flex flex-col gap-3 ml-10 z-10">
            <IconButton className="animate-slide-up border-2 border-(--secundaria) bg-white text-(--secundaria) hover:bg-(--secundaria) hover:text-(--primaria)">
                <House className="  group-hover:stroke-(--primaria)" width={20} height={20}/>
            </IconButton>

            <IconButton className="animate-slide-up-1  border-2 border-(--secundaria)  bg-white text-(--secundaria) hover:bg-(--secundaria) hover:text-(--primaria)">
                <CalendarDays className="group-hover:stroke-(--primaria)" 
                width={20} height={20}/>
            </IconButton>

            <IconButton className="animate-slide-up-2 border-2 border-(--secundaria) bg-white text-(--secundaria) hover:bg-(--secundaria) hover:text-(--primaria)">
                <Command className="group-hover:stroke-(--primaria)" 
                width={20} height={20}/>
            </IconButton>

            <IconButton className="animate-slide-up-3 border-2 border-(--secundaria)  bg-white text-(--secundaria) hover:bg-(--secundaria) hover:text-(--primaria)">
                <Copy className="group-hover:stroke-(--primaria)" 
                width={20} height={20}/>
            </IconButton>
        </div>

        
        </>
    )
}