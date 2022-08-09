import React, { useState } from "react";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { BiUser } from "react-icons/bi";
import { MdOutlineClose } from "react-icons/md";
import { NavbarData } from "./NavbarData";
import SubNavbar from "./SubNavbar";
import { FiClock } from "react-icons/fi";
import { BsMoonStars, BsSun } from "react-icons/bs";

import useDarkmode from "../../useDarkmode";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [openDropdown, setOpenDropDown] = useState(false);
  const [isDarkmode, toggleDarkmode] = useDarkmode();

  //   handle when user click button menu on mobile
  const handleMenu = () => {
    setOpenMenu(!openMenu);
  };

  // handle when user click drop menu
  const handleDropdown = () => {
    setOpenDropDown(!openDropdown);
  };
  return (
    <>
      {/* mobile & tablet */}
      <nav
        className=" flex items-center justify-evenly
        md:justify-between md:mt-4 md:border-b md:pb-3 md:sticky md:top-0 bg-white dark:bg-slate-800 lg:hidden"
      >
        <div className="flex items-center my-2 md:ml-4 ">
          {openMenu ? (
            <MdOutlineClose
              size={"26px"}
              
              className="cursor-pointer dark:text-white lg:hidden"
              onClick={handleMenu}
            />
          ) : (
            <AiOutlineMenuUnfold
              size={"26px"}
             
              className="cursor-pointer dark:text-white lg:hidden"
              onClick={handleMenu}
            />
          )}

          <img
            className="mx-24 sm:mx-20 md:mx-2"
            src="https://s1.vnecdn.net/vnexpress/restruct/i/v631/mobile_redesign/graphics/logo-vnexpress.svg"
            alt=""
          />
          {isDarkmode ? (
            <BsMoonStars className="text-white items-center text-xl mx-4" onClick={() => toggleDarkmode(!isDarkmode)} />
          ) : (
            <BsSun className="text-yellow-300 items-center text-xl mx-4" onClick={() => toggleDarkmode(!isDarkmode)} />
          )}

          <BiUser
            size={"26px"}
            
            className="cursor-pointer dark:text-white md:hidden lg:hidden"
          />
        </div>
        <div
          className={
            openMenu
              ? "overflow-auto  whitespace-nowrap z-10 fixed left-0 top-11 md:top-16 w-[100%] h-full dark:text-white text-3xl bg-white dark:bg-slate-800 ease-in duration-500  lg:hidden"
              : "fixed left-[-100%] top-11 md:top-16  w-[100%] h-full dark:text-white text-3xl bg-white dark:bg-slate-800 ease-in-out duration-500  lg:hidden "
          }
        >
          <form className="flex items-center p-4">
            <div className="relative w-full">
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5  dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <input
                type="text"
                id="simple-search"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Tìm kiếm"
                required
              />
            </div>
          </form>
          <div className="p-4 ">
            <label className="text-sm dark:text-gray-300">Chuyên mục</label>
            <div className=" ml-4 text-[16px] leading-[54px]  font-semibold ">
              {NavbarData.map((item, index) => {
                return (
                  <>
                    <SubNavbar item={item} key={index} />
                  </>
                );
              })}
            </div>
          </div>
        </div>
        {/* tablet and Desktop navbar */}
        <div className="md:flex md:items-center dark:text-gray-400 font-semibold hidden">
          <div className="flex mr-4 rounded-sm items-center p-2 border-[1px]">
            <FiClock className="mr-1 text-lg " />
            <h6>Mới nhất</h6>
          </div>
          <div className="flex mr-4 rounded-sm items-center p-2 border-[1px]">
            <img
              className="mr-1 h-4"
              src="https://s1.vnecdn.net/vnexpress/restruct/i/v632/mobile_redesign/icons/app_vne.svg"
              alt=""
            />
            <h6>International</h6>
          </div>
         
          <div className="flex mr-4 rounded-sm items-center p-2 ">
            <BiUser className="mr-1 text-lg" />
            <h6>Đăng nhập</h6>
          </div>
        </div>
      </nav>
      {/* Desktop */}
      <nav className="lg:container lg:flex justify-between mx-auto p-3 hidden">
        <div className="flex items-center">
          <img
            src="https://s1.vnecdn.net/vnexpress/restruct/i/v631/mobile_redesign/graphics/logo-vnexpress.svg"
            alt=""
          />
          <h6 className="px-4 mx-4 dark:text-gray-300 font-semibold border-l">
            Thứ ba, 9/8/2022
          </h6>
          {isDarkmode ? (
            <BsMoonStars className="text-white items-center text-xl mx-4" onClick={() => toggleDarkmode(!isDarkmode)} />
          ) : (
            <BsSun className="text-black items-center text-xl mx-4" onClick={() => toggleDarkmode(!isDarkmode)} />
          )}
        </div>
        <div>
          <div className="md:flex md:items-center dark:text-gray-400 font-semibold hidden">
            <div className="flex mr-4 rounded-sm items-center p-2 border-[1px]">
              <FiClock className="mr-1 text-lg " />
              <h6>Mới nhất</h6>
            </div>
            <div className="flex mr-4 rounded-sm items-center p-2 border-[1px]">
              <img
                className="mr-1 h-4"
                src="https://s1.vnecdn.net/vnexpress/restruct/i/v632/mobile_redesign/icons/app_vne.svg"
                alt=""
              />
              <h6>International</h6>
            </div>
            <form className="flex items-center p-4">
              <div className="relative w-full">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5  dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <input
                  type="text"
                  id="simple-search"
                  className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Tìm kiếm"
                  required
                />
              </div>
            </form>
            <div className="flex mr-4 rounded-sm items-center p-2 ">
              <BiUser className="mr-1 text-lg" />
              <h6>Đăng nhập</h6>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
