import React from "react";
import { AiFillHome } from "react-icons/ai";

const Menu = () => {
  return (
    <>
    {/* Mobile menu */}
      <div className=" flex sticky top-0 border-y-[1px] dark:bg-slate-800 bg-white
      md:hidden lg:flex lg:justify-center lg:pl-[5%]

      ">
      <div className=" m-2 items-center p-1 rounded-full bg-pink-100">
            <AiFillHome
              size={"22px"}
              color="#b42652"
              className="cursor-pointer"
            />
          </div>
        <ul className="no-scrollbar ml-2 border-l w-full overflow-auto  whitespace-nowrap flex items-center text-[16px] font-bold dark:text-gray-200 my-2
       
        ">
         
          <li className="px-6 ">
            <a href="">Mới nhất</a>
          </li>
          <li className="px-6 ">
            <a href="">Thời sự</a>
          </li>
          <li className="px-6 ">
            <a href="">Góc nhìn</a>
          </li>
          <li className="px-6 ">
            <a href="">Thế giới</a>
          </li>
          <li className="px-6 ">
            <a href="">Video</a>
          </li>
          <li className="px-6 ">
            <a href="">Podcats</a>
          </li>
          <li className="px-6 ">
            <a href="">Kinh doanh</a>
          </li>
          <li className="px-6 ">
            <a href="">Khoa học</a>
          </li>
          <li className="px-6 ">
            <a href="">Thể thao</a>
          </li>
          <li className="px-6 ">
            <a href="">Pháp luật</a>
          </li>
          <li className="px-6 ">
            <a href="">Sức khỏe</a>
          </li>
          <li className="px-6 ">
            <a href="">Đời sống</a>
          </li>
          <li className="px-6 ">
            <a href="">Du lịch</a>
          </li>
          <li className="px-6 ">
            <a href="">Số hóa</a>
          </li>
          <li className="px-6 ">
            <a href="">Xe</a>
          </li>
        </ul>
      </div>
      
    </>
  );
};
export default Menu;
