import React, { useState } from "react";
import CommonForm from "../../common/form";
import { recruiterSignUp } from "../../../config";
import { Button } from "../../ui/button";

const Index = () => {
  const [formData, setFormData] = useState([]);
  const handleUpdateStatus = () => {};
  return (
    <div className="flex max-sm:flex-col max-sm:gap-[40px] justify-between p-[20px] pt-[100px] max-sm:p-[24px] max-sm:pt-[100px] w-full pb-[90px]">
      <div className="w-1/2 max-sm:w-full flex items-center justify-center">
        <div className="flex flex-col items-center gap-[50px] max-sm:gap-[26px] w-full sm:max-w-[560px]">
          <div className="text-[#171923] text-md max-sm:text-s font-bold w-full">
            <span className="text-left">Create Your Recruiter Profile</span>
          </div>
          <div className="flex flex-col gap-[40px] w-full">
            <div className="flex flex-col gap-[18px] p-[24px] rounded-[8px] border border-[#dadada]">
              <span className="text-[#171923] text-s font-semibold">
                Sign Up
              </span>
              <div className="border-[#dfdfdf] border-t-1"></div>
              <CommonForm
                formControls={recruiterSignUp}
                formData={formData}
                setFormData={setFormData}
                onSubmit={handleUpdateStatus}
              />
            </div>
          </div>
          <Button className="cursor-pointer hover:bg-[#4E2FC0] w-full max-w-[249px] flex items-center justify-center px-[20px] py-[10px] rounded-[28px] bg-[#6945ED]">
            <span className="text-xxs text-white font-medium">Register</span>
          </Button>
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

export default Index;
