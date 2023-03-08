import React, { useState } from "react";
import Router from "next/router";
import { Box } from "@mui/material";
import { IoSearchCircleOutline } from "react-icons/io5";

const navItems = [
  { to: "/", label: "HOME" },
  { to: "/", label: "Fahrschuler" },
  { to: "/", label: "Fahrlehrer" },
  { to: "/", label: "FAQ" },
];

export default function Header() {
  const [ isMenu, setIsMenu ] = useState(false)
  
  return (
    <div className="fixed w-full z-50 py-4 md:px-16 relative">
      <nav class="bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
        <div class="flex flex-wrap items-center justify-between mx-auto px-2 sm:px-12">
          <Box component='img'
            src="/images/logo.png"
            className="w-44 sm:w-60"
            onClick={() => {
              Router.push("/");
            }}
          />
          <div class="flex md:order-2">
            <div className="flex justify-end items-center">
              <IoSearchCircleOutline className="text-3xl text-green-700 mr-1 sm:mr-3 cursor-pointer"/>
              <button
                className="rounded-3xl text-white font-bold text-sm bg-gradient-to-r from-[#71D575] to-[#AAFFA3] hover:bg-gradient-to-l transition-all py-2 px-4"
                onClick={() => {
                  Router.push("/");
                }}
              >
                LOG IN
              </button>
            </div>
            <button 
              data-collapse-toggle="navbar-sticky" 
              type="button" 
              class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              onClick={()=>setIsMenu(!isMenu)}
            >
              <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
            </button>
          </div>
          <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
            <div className="flex flex-row items-center justify-end space-x-8">
              { navItems.map((item, itemIndex) => (
                <div key={itemIndex}
                  className="cursor-pointer text-base text-green-700 hover:text-green-900 font-bold py-4"
                  onClick={() => {
                    Router.push(item.to)
                  }}
                >
                  {item.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </nav>

      { isMenu &&
        <div className="md:hidden flex flex-row items-center justify-end space-x-3 sm:space-x-8 mobile-nav">
          { navItems.map((item, itemIndex) => (
            <div key={itemIndex}
              className="cursor-pointer text-base text-green-700 hover:text-green-900 font-bold py-4"
              onClick={() => {
                Router.push(item.to)
              }}
            >
              {item.label}
            </div>
          ))}
        </div>
      }

    </div>
  );
}
