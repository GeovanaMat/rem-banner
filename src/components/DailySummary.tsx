import React from "react";
import IconButton from "./IconButton";
import { ArrowUpRight, Play } from "lucide-react";
import { motion } from "framer-motion";
export default function DailySummary() {
  return (
    <>
      <div className="absolute z-2 bottom-0 pb-30 flex flex-col pl-20 ">
        <div className="absolute bottom-0 mb-120 border-(--primaria) font-semibold text-4xl animate-slide-up">
          Resumo de{" "}
          <span className="border-(--primaria) border-2 rounded-full p-1 px-3">
            vida
          </span>
        </div>
        <IconButton className="absolute bg-(--terciaria) ml-55 mt-15 animate-slide-up-1">
          <ArrowUpRight />
        </IconButton>

        <IconButton className="absolute bg-(--primaria) ml-140 mt-15 text-white animate-slide-up-2">
          <ArrowUpRight />
        </IconButton>
        <div className="flex flex-row gap-10 place-items-end relative">
          <div className="inverted bg-(--secundaria)/45  backdrop-blur-sm animate-slide-up-1">
            <p className="absolute mt-10 ml-10 text-3xl font-medium text-gray-500">
              Reviveu
            </p>

            <p className="absolute mt-40 ml-10 text-6xl font-bold">
              150
              <span className="text-lg text-gray-500">vezes</span>
            </p>
          </div>

          <div className="inverted bg-(--secundaria)/45  backdrop-blur-sm animate-slide-up-2">
            <p className="absolute mt-10 ml-10 text-3xl font-medium text-gray-500">
              Carteira
            </p>

            <p className="absolute mt-40 ml-10 text-5xl font-bold">
              R$ -130,00
            </p>
          </div>
          <div className="relative animate-slide-up-3 h-65 w-200 bg-(--secundaria)/30 backdrop-blur-sm rounded-4xl p-4 grid grid-cols-2 gap-5">
            <div className="h-full rounded-3xl ">
              <img
                className="w-full h-56 rounded-3xl p-2 object-cover"
                src="rem3.jpg"
              />
            </div>
            <div className="rounded-3xl relative  ">
              <div className="h-full">
                <img
                  className="rounded-3xl p-2"
                  src="rem2.webp"
                />
              </div>
              <IconButton className="bg-(--secundaria)/50 backdrop-blur-md absolute bottom-20 left-[40%]">
                <Play />
              </IconButton>
            </div>
          </div>

          <div className="h-full w-100 bg-(--secundaria)/45 backdrop-blur-sm animate-slide-up-3 rounded-4xl p-4 grid grid-cols-2">
            <div className="grid ">
              <img src="img1.jpg" className="h-40 rounded-xl object-cover" />
              <img src="img3.jpg" className="h-40 rounded-xl object-cover" />
            </div>
            <img src="img2.jpg" className="h-80 rounded-xl object-cover" />
          </div>
        </div>
      </div>
    </>
  );
}
