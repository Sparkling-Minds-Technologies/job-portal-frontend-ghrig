import React, { useState } from "react";
import { Button } from "../../ui/button";
import { Upload } from "../../../utils/icon";
import CommonForm from "../../common/form";
import {
  clientBasic2,
  clientSignUp,
  clientSpocInformation,
} from "./profiledata";
import { Input } from "../../ui/input";

const ClientProfile = () => {
  const [formData, setFormData] = useState([]);
  const handleUpdateStatus = () => {};
  return (
    <div className="w-full flex items-center justify-center">
      <div className="flex flex-col sm:max-w-[1160px] sm:w-full pt-[170px] pb-[90px] gap-[27px] max-sm:gap-[26px] max-sm:pt-[74px] max-sm:pb-[24px] max-sm:px-[24px]">
        <div className="text-[#171923] text-2xl font-bold max-sm:text-s">
          Corporate Profile Setup
        </div>
        <div className="flex"></div>
        <div className="flex w-full flex-wrap">
          <div className="flex flex-wrap max-sm:flex-col w-full gap-[30px] max-sm:gap-[26px] justify-between">
            <div className="flex flex-col gap-[18px] p-[24px] w-full max-w-[560px] border border-[#DADADA] rounded-[8px]">
              <div className="text-[#171923] text-xl font-bold">
                Basic Information
              </div>
              <div className="border-[1px] border-[#DFDFDF]"></div>
              <div class="relative">
                <label class="flex  items-center mb-2 text-gray-600 text-xs font-medium">
                  Company Name
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    id="default-search"
                    class="block w-full  px-4 py-2 text-sm font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none leading-relaxed"
                    placeholder="e.g. Google"
                    required=""
                  />
                  <div className="flex">
                    <Button className="cursor-pointer flex items-center gap-[20px] max-sm:gap-[10px] rounded-[8px] bg-white p-[24px] max-sm:px-[12px] max-sm:py-[14px] border-solid border-[1px] border-[#DADADA]">
                      <span className="text-[#171923] text-xxs font-xs max-sm:text-[12px]">
                        Company Logo{" "}
                      </span>
                      <Upload className="h-[16px] w-[16px] max-sm:h-[12px] max-sm:w-[12px]" />
                    </Button>
                  </div>
                </div>
              </div>

              <CommonForm
                formControls={clientSignUp}
                formData={formData}
                setFormData={setFormData}
                onSubmit={handleUpdateStatus}
              />
            </div>
            <div className="flex flex-col justify-between w-full max-w-[560px] max-sm:gap-[26px]">
              <div className="flex flex-col gap-[18px] p-[24px]  border border-[#DADADA] rounded-[8px]">
                <div className="text-[#171923] text-s font-semibold">
                  SPOC Information
                </div>
                <div className="border-[1px] border-[#DFDFDF]"></div>
                <CommonForm
                  formControls={clientSpocInformation}
                  formData={formData}
                  setFormData={setFormData}
                  onSubmit={handleUpdateStatus}
                />
              </div>
            </div>{" "}
            <div className="flex flex-col justify-between w-full max-w-[560px] max-sm:gap-[26px]">
              <div className="flex flex-col gap-[18px] p-[24px]  border border-[#DADADA] rounded-[8px]">
                <div className="text-[#171923] text-s font-semibold">
                  Basic Information
                </div>
                <div className="border-[1px] border-[#DFDFDF]"></div>
                <CommonForm
                  formControls={clientBasic2}
                  formData={formData}
                  setFormData={setFormData}
                  onSubmit={handleUpdateStatus}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-end items-end">
          <Button className="rounded-[20px] bg-[#6945ED] py-[10px] px-[20px] cursor-pointer hover:bg-[#4E2FC0]">
            <span className="font-medium text-xxs text-white">
              Save & Update Profile
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ClientProfile;
