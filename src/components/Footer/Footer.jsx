import React from "react";
import { BiMessageRoundedDetail } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import { RiFacebookCircleLine } from "react-icons/ri";
import { AiFillTwitterCircle } from "react-icons/ai";
import { TiSocialYoutubeCircular } from "react-icons/ti";
export default function Footer() {
  return (
    <>
      {/* Footer for mobile */}
      <div className="md:hidden">
        <div
          className="text-xl text-pink-600 font-semibold flex items-center
         justify-center p-3 bg-pink-100 mx-3 rounded-md
         border border-gray-400
         "
        >
          <BiMessageRoundedDetail className="mr-1" />
          <h6>Góp ý cho VnExpress</h6>
        </div>
        <p className=" border-b border-gray-400 py-3 mx-3 text-14 dark:text-gray-400">
          Phản hồi của bạn có thể giúp VnExpress hoàn thiện hơn
        </p>
        <div>
          <h6 className="mt-4 ml-3 text-gray-400">Chuyên mục</h6>
          <div className="flex justify-between p-4 text-xl font-semibold border-b border-gray-400 mx-4 dark:text-gray-300">
            <h6>Trang chủ</h6>
            <h6>Thời sự</h6>
          </div>
          <div className="flex justify-between p-4 text-xl font-semibold border-b border-gray-400 mx-4 dark:text-gray-300">
            <h6>Góc nhìn</h6>
            <h6>Thế giới</h6>
          </div>
          <div className="flex justify-between p-4 text-xl font-semibold border-b border-gray-400 mx-4 dark:text-gray-300">
            <h6>Video</h6>
            <h6>Podcats</h6>
          </div>
          <div className="flex justify-between p-4 text-xl font-semibold border-b border-gray-400 mx-4 dark:text-gray-300">
            <h6>Kinh doanh</h6>
            <h6>Khoa học</h6>
          </div>
        </div>
        <div>
          <h6 className="mt-4 ml-3 text-gray-400">Khác</h6>
          <div className="flex justify-between p-4 text-xl font-semibold border-b border-gray-400 mx-4 dark:text-gray-300">
            <h6>Ảnh </h6>
            <h6>Infographic</h6>
          </div>
          <div className="flex justify-between p-4 text-xl font-semibold border-b border-gray-400 mx-4 dark:text-gray-300">
            <h6>Mới nhất</h6>
            <h6>Xem nhiều</h6>
          </div>
          <div className="flex justify-between p-4 text-xl font-semibold border-b border-gray-400 mx-4 dark:text-gray-300">
            <h6>Tin nóng</h6>
            <h6></h6>
          </div>
        </div>
        <div>
          <h6 className="mt-4 ml-3 dark:text-gray-400">Tải ứng dụng</h6>
          <div className="flex p-4 text-lg  dark:bg-slate-500 rounded-md my-2 mx-4 dark:text-gray-300">
            <img
              className="mr-3"
              src="https://s1.vnecdn.net/vnexpress/restruct/i/v632/mobile_redesign/icons/app_vne.svg"
            />
            <h6>VnExpress</h6>
          </div>
          <div className="flex p-4 text-lg  dark:bg-slate-500 rounded-md my-2 mx-4 dark:text-gray-300">
            <img
              className="mr-3"
              src="https://s1.vnecdn.net/vnexpress/restruct/i/v632/mobile_redesign/icons/app_evne.svg"
            />
            <h6>VnExpress International</h6>
          </div>
          <div className="flex p-4 text-lg  dark:bg-slate-500 rounded-md my-2 mx-4 dark:text-gray-300">
            <img
              className="mr-3"
              src="https://s1.vnecdn.net/vnexpress/restruct/i/v632/mobile_redesign/icons/app_vm.png"
            />
            <h6>VnExpress Marathon</h6>
          </div>
        </div>
        <div>
          <h6 className="mt-4 ml-3 dark:text-gray-400">
            Đường dây nóng (bấm để gọi)
          </h6>
          <div className="flex justify-between p-4 text-xl font-semibold border-b border-gray-400 mx-4 dark:text-gray-300">
            <div>
              <h6>Hà Nội</h6>
              <h6 className="dark:text-pink-400 font-thin underline">
                083 888 0123
              </h6>
            </div>
            <div>
              <h6>TP HCM</h6>
              <h6 className="dark:text-pink-400 font-thin underline">
                0822 333 555
              </h6>
            </div>
          </div>
        </div>
        <div>
          <div className="p-4  border-b border-gray-400 mx-4 dark:text-gray-300">
            <h6 className="text-xl font-semibold">Báo điện tử VnExpress</h6>
            <p className="text-lg">Báo tiếng Việt nhiều người xem nhất</p>
          </div>
        </div>
        <div>
          <div className="p-4 text-base  mx-4 dark:text-gray-300">
            <p>Thuộc Bộ Khoa học Công nghệ</p>
            <p>Số giấy phép: 548/GP-BTTTT ngày 24/08/2021</p>
            <p className="mt-5">Tổng biên tập: Phạm Hiếu</p>
            <p>
              Địa chỉ: Tầng 5, Tòa nhà FPT, 17 phố Duy Tân, Cầu Giấy, Hà Nội
            </p>
            <p> Điện thoại: 024 7300 8899 - máy lẻ 4500</p>
            <p className="mt-5 mb-9">
              © 1997-2022. Toàn bộ bản quyền thuộc VnExpress
            </p>
          </div>
        </div>
      </div>

      {/* Footer for tablet and Desktop */}

      <div className="container mx-auto">
        <div className=" hidden justify-evenly md:flex text-base dark:text-gray-300 mx-4 mb-4 py-4 border-y">
          <ul className=" w-[33.3%] font-semibold mr-6">
            <li>Trang chủ</li>
            <li>Video</li>
            <li>Podcats</li>
            <li>Ảnh</li>
            <li className="border-b border-gray-400">Infographic</li>
            <li>Mới nhất</li>
            <li>Xem nhiều</li>
            <li>Tin nóng</li>
          </ul>
          <ul className=" w-[33.3%] mr-6">
            <li>Thời sự</li>
            <li>Góc nhìn</li>
            <li>Thế giới</li>
            <li>Kinh doanh</li>
            <li>Giải trí</li>
          </ul>
          <ul className=" w-[33.3%] mr-6">
            <li>Thể thao</li>
            <li>Pháp luật</li>
            <li>Giáo dục</li>
            <li>Sức khỏe</li>
            <li>Đời sống</li>
          </ul>
          <ul className="w-[33.3%] mr-6">
            <li>Khoa học</li>
            <li>Xe</li>
            <li>Số hóa</li>
            <li>Ý kiến</li>
            <li>Hài</li>
          </ul>
          <ul className="w-[33.3%] mr-6">
            <li>Khoa học</li>
            <li>Xe</li>
            <li>Số hóa</li>
            <li>Ý kiến</li>
            <li>Hài</li>
          </ul>
          <div className="w-[33.3%]">
            <h6>Tải ứng dụng</h6>
            <div className="flex">
              <div className=" flex rounded-sm mr-4 text-sm items-center p-2 border-[1px]">
                <img
                  className="mr-1 h-4"
                  src="https://s1.vnecdn.net/vnexpress/restruct/i/v632/mobile_redesign/icons/app_vne.svg"
                  alt=""
                />
                <h6>VnExpress</h6>
              </div>
              <div className="flex rounded-sm text-sm items-center p-2 border-[1px]">
                <img
                  className="mr-1 h-4"
                  src="https://s1.vnecdn.net/vnexpress/restruct/i/v632/mobile_redesign/icons/app_vne.svg"
                  alt=""
                />
                <h6>International</h6>
              </div>
            </div>
            <h6>Liên hệ</h6>
            <div className="flex">
              <div className="flex items-center mr-8">
                <AiOutlineMail className="mr-1" />
                Tòa soạn
              </div>
              <h6>Quảng cáo</h6>
            </div>
            <h6 className="flex items-center border-b pb-2">
              {" "}
              <AiOutlineMail className="mr-1" />
              Hợp tác bản quyền
            </h6>
            <h6 className="my-2">Đường dây nóng</h6>
            <div className="flex justify-between font-semibold">
              <h6>083.888.0123</h6>
              <h6>082.233.3555</h6>
            </div>
            <div className="flex justify-between text-sm">
              <h6>(Hà Nội)</h6>
              <h6>(TP. Hồ Chí Minh)</h6>
            </div>
          </div>
        </div>
        <div className=" md:block lg:flex lg:justify-between text-base dark:text-gray-300 mx-4 mb-4 pb-4 border-b">
          <div className="flex justify-center mx-auto ">
            <h6 className="mr-4">Báo điện tử</h6>
            <img
              src="https://s1.vnecdn.net/vnexpress/restruct/i/v631/mobile_redesign/graphics/logo-vnexpress.svg"
              alt=""
            />
          </div>
          <div className=" flex  mx-auto items-center justify-center lg:justify-between">
            <h6 className="border-r px-2">RSS</h6>
            <h6 className="px-2">Theo dõi VnExpress trên</h6>
            <RiFacebookCircleLine />
            <AiFillTwitterCircle className="mx-2" />
            <TiSocialYoutubeCircular />
          </div>
        </div>
        <div className="hidden md:flex text-base dark:text-gray-300 mx-4 mb-10">
          <ul className="w-[33.3%] mr-1">
            <li className="font-semibold">
              Báo tiếng Việt nhiều người xem nhất
            </li>
            <li>Thuộc Bộ Khoa học Công nghệ</li>
            <li>Số giấy phép: 548/GP-BTTTT ngày 24/08/2021</li>
          </ul>
          <ul className="w-[33.3%] mr-1">
            <li>Tổng biên tập: Phạm hiếu</li>
            <li>
              Địa chỉ: Tầng 5, tòa nhà FPT, 17 phố Duy Tân, Cầu Giấy, Hà Nội
            </li>
            <li>Điện thoại: 024 7300 8899 - máy lẻ 4500</li>
          </ul>
          <ul className="w-[33.3%] mr-1">
            <li>© 1997-2022. Toàn bộ bản quyền thuộc VnExpress</li>
          </ul>
        </div>
      </div>
    </>
  );
}
