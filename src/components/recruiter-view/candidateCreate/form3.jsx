import React, { Fragment, useState } from "react";
import CommonForm from "../../common/form";
import { Button } from "../../ui/button";
import {
  academicsAchievementFields,
  educationFields,
  preferencesFields,
  professionFields,
} from "../../../config";
import { Plus, PLusWhite } from "../../../utils/icon";

const Form3 = ({ setFormState }) => {
  const [formData, setFormData] = useState([
    {
      institution: "",
      location: "",
      fieldOfStudy: "",
      startYear: "",
      endYear: "",
    },
  ]);
  const handleUpdateStatus = () => {};
  const handleIncrease = (setState) => {
    setState((prev) => {
      return [...prev, prev[0]];
    });
  };
  return (
    <Fragment>
      <div className="hidden w-full self-stretch px-36 py-20 pt-0 lg:inline-flex flex-col justify-start items-end gap-10">
        <div className="w-full flex flex-col justify-start items-start gap-8">
          <div className="self-stretch flex flex-col justify-start items-start gap-7">
            <div className="self-stretch justify-start text-gray-900 text-3xl font-bold leading-loose">
              Candidate's relevant work experience
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col justify-start items-start gap-10">
          <div className="self-stretch flex flex-col justify-start items-start gap-10">
            <div className="self-stretch p-6 bg-white rounded-lg shadow-[0px_1px_2px_0px_rgba(0,0,0,0.03)] outline outline-offset-[-1px] outline-zinc-300 flex flex-col justify-start items-start gap-4">
              <div className="self-stretch inline-flex justify-start items-start gap-60">
                <div className="justify-start text-gray-900 text-xl font-semibold leading-tight">
                  Professional Details
                </div>
              </div>
              <div className="self-stretch h-0 outline outline-offset-[-0.50px] outline-neutral-200"></div>
              <div className="w-full flex flex-col gap-[18px]">
                {formData.map((item, index) => (
                  <CommonForm
                    formControls={professionFields}
                    formData={item}
                    setFormData={setFormData}
                    onSubmit={handleUpdateStatus}
                  />
                ))}
              </div>
              <Button
                onClick={() => handleIncrease(setFormData)}
                className="cursor-pointer px-5 py-2.5 bg-violet-600 rounded-3xl inline-flex justify-center items-center gap-1.5"
              >
                <div className="justify-start text-white text-sm font-medium capitalize">
                  Add Work Experience
                </div>
                <div className="w-3.5 h-3.5 relative overflow-hidden flex justify-center items-center">
                  <PLusWhite className="h-full w-full text-white" />
                </div>
              </Button>
            </div>
          </div>
          <div className="self-stretch flex flex-col justify-start items-start gap-10">
            <div className="self-stretch p-6 bg-white rounded-lg shadow-[0px_1px_2px_0px_rgba(0,0,0,0.03)] outline outline-offset-[-1px] outline-zinc-300 flex flex-col justify-start items-start gap-4">
              <div className="self-stretch inline-flex justify-start items-start gap-60">
                <div className="justify-start text-gray-900 text-xl font-semibold leading-tight">
                  Preferences
                </div>
              </div>
              <div className="self-stretch h-0 outline outline-offset-[-0.50px] outline-neutral-200"></div>
              <div className="w-full flex flex-col gap-[18px]">
                <CommonForm
                  formControls={preferencesFields}
                  formData={formData}
                  setFormData={setFormData}
                  onSubmit={handleUpdateStatus}
                />
              </div>
            </div>
            <div className="self-stretch h-28 flex flex-col justify-end items-end gap-2.5">
              <Button
                onClick={() => setFormState((prev) => prev + 1)}
                className="cursor-pointer w-64 px-5 py-2.5 bg-violet-600 rounded-3xl inline-flex justify-center items-center gap-2.5"
              >
                <div className=" justify-start text-white text-sm font-medium capitalize">
                  Save & Update Profile
                </div>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:hidden w-full p-6 inline-flex flex-col justify-start items-start gap-6">
        <div className="self-stretch flex flex-col justify-start items-start gap-10">
          <div className="self-stretch flex flex-col justify-start items-start gap-10">
            <div className="self-stretch p-6 bg-white rounded-lg shadow-[0px_1px_2px_0px_rgba(0,0,0,0.03)] outline outline-1 outline-offset-[-1px] outline-zinc-300 flex flex-col justify-start items-start gap-4">
              <div className="self-stretch inline-flex justify-start items-start gap-60">
                <div className="justify-start text-gray-900 text-xl font-semibold leading-tight">
                  Professional Details
                </div>
              </div>
              <div className="self-stretch h-0 outline-1 outline-offset-[-0.50px] outline-neutral-200"></div>
              <div className="w-full flex flex-col gap-[18px]">
                {formData.map((item, index) => (
                  <CommonForm
                    formControls={professionFields}
                    formData={item}
                    setFormData={setFormData}
                    onSubmit={handleUpdateStatus}
                  />
                ))}
              </div>
              <Button
                onClick={() => handleIncrease(setFormData)}
                className="px-5 py-2.5 bg-violet-600 rounded-3xl inline-flex justify-center items-center gap-1.5"
              >
                <div className="justify-start text-white text-sm font-medium  capitalize">
                  Add Work Experience
                </div>
                <div className="w-3.5 h-3.5 relative overflow-hidden">
                  <PLusWhite className="h-full w-full text-white" />
                </div>
              </Button>
            </div>
          </div>
          <div className="self-stretch flex flex-col justify-start items-start gap-10">
            <div className="self-stretch p-6 bg-white rounded-lg shadow-[0px_1px_2px_0px_rgba(0,0,0,0.03)] outline outline-1 outline-offset-[-1px] outline-zinc-300 flex flex-col justify-start items-start gap-4">
              <div className="self-stretch inline-flex justify-start items-start gap-60">
                <div className="justify-start text-gray-900 text-xl font-semibold leading-tight">
                  Preferences
                </div>
              </div>
              <div className="self-stretch h-0 outline-1 outline-offset-[-0.50px] outline-neutral-200"></div>
              <div className="w-full flex flex-col gap-[18px]">
                <CommonForm
                  formControls={preferencesFields}
                  formData={formData}
                  setFormData={setFormData}
                  onSubmit={handleUpdateStatus}
                />
              </div>
            </div>
            <div className="self-stretch flex flex-col justify-end items-end gap-2.5">
              <Button
                onClick={() => setFormState((prev) => prev + 1)}
                className="w-64 px-5 py-2.5 bg-violet-600 rounded-3xl inline-flex justify-center items-center gap-2.5"
              >
                <div className="justify-start text-white text-sm font-medium  capitalize">
                  Save & Update Profile
                </div>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Form3;
