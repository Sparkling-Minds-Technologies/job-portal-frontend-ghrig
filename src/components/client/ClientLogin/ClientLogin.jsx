import React from "react";
import CommonForm from "../../common/form";
import { Button } from "../../ui/button";

const ClientLogin = () => {
  return (
    <div className="flex max-sm:flex-col max-sm:gap-[40px] justify-between p-[20px] pt-[100px] max-sm:p-[24px] max-sm:pt-[100px] w-full pb-[90px]">
      <div className="w-1/2 max-sm:w-full flex items-center justify-center">
        <div className="flex flex-col items-center gap-[20px] max-sm:gap-[26px] w-full sm:max-w-[560px] bg-[#FAFAFA] p-5 rounded-2xl">
          <div className="flex flex-col gap-[40px] w-full">
            <div className="flex flex-col gap-[18px] py-[24px] ">
              <span className="text-[#171923] text-s font-thin">
                WELCOME BACK
              </span>{" "}
              <span className="text-[#171923] text-s font-semibold">
                Log In to your Account
              </span>
              <div className="border-[#dfdfdf] border-t-1"></div>
              <div class="relative">
                <label class="flex  items-center mb-2 text-gray-600 text-xs font-medium">
                  Email{" "}
                  <svg
                    width="7"
                    height="7"
                    class="ml-1"
                    viewBox="0 0 7 7"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.11222 6.04545L3.20668 3.94744L1.43679 5.08594L0.894886 4.14134L2.77415 3.18182L0.894886 2.2223L1.43679 1.2777L3.20668 2.41619L3.11222 0.318182H4.19105L4.09659 2.41619L5.86648 1.2777L6.40838 2.2223L4.52912 3.18182L6.40838 4.14134L5.86648 5.08594L4.09659 3.94744L4.19105 6.04545H3.11222Z"
                      fill="#EF4444"
                    ></path>
                  </svg>
                </label>
                <input
                  type="text"
                  id="default-search"
                  class="block w-full  px-4 py-2 text-sm font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none leading-relaxed"
                  placeholder="name@pagedone.com"
                  required=""
                />
              </div>
              <div class="relative">
                <label class="flex  items-center mb-2 text-gray-600 text-xs font-medium">
                  Password
                  <svg
                    width="7"
                    height="7"
                    class="ml-1"
                    viewBox="0 0 7 7"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.11222 6.04545L3.20668 3.94744L1.43679 5.08594L0.894886 4.14134L2.77415 3.18182L0.894886 2.2223L1.43679 1.2777L3.20668 2.41619L3.11222 0.318182H4.19105L4.09659 2.41619L5.86648 1.2777L6.40838 2.2223L4.52912 3.18182L6.40838 4.14134L5.86648 5.08594L4.09659 3.94744L4.19105 6.04545H3.11222Z"
                      fill="#EF4444"
                    ></path>
                  </svg>
                </label>
                <input
                  type="password"
                  id="default-search"
                  class="block w-full  px-4 py-2 text-sm font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none leading-relaxed"
                  placeholder="****"
                  required=""
                />
              </div>
            </div>
          </div>
          <Button className="cursor-pointer hover:bg-[#4E2FC0] w-full  flex items-center justify-center  py-[20px] rounded-[10px] bg-[#6945ED]">
            <span className="text-xxs text-white font-medium">CONTINUE</span>
          </Button>
          <p>
            {" "}
            <span className="inline font-thin"> New User? </span>{" "}
            <span className="inline cursor-pointer font-medium">
              SIGN UP HERE
            </span>
          </p>
        </div>
      </div>
      <div className="w-1/2 max-sm:w-full">
        <div className="bg-[#ccc] rounded-[24px] sm:max-w-[622px] w-full flex items-center justify-center py-[12px] px-[15px]">
          <div className="grid grid-cols-2 grid-rows-4 gap-[10px] w-full h-full">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
              <div
                key={index}
                className="relative max-w-[289.646px] max-sm:max-w-[187.151px] w-full h-[214.61px] max-sm:h-[138.667px] rounded-[15px] overflow-hidden bg-black"
              >
                <img
                  src={item.imageUrl}
                  alt="Card"
                  className="w-full h-full object-cover"
                />
                {item.text && (
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-white text-center text-xs p-2">
                    {item.text}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientLogin;
