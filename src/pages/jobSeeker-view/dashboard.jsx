import { useState } from "react";
import FilterComponent from "../../components/common/filterComponent";
import Navbar from "../../components/recruiter-view/navbar";
import { CandidatesFilters, jobOpeningFilters } from "../../config";
import { Link } from "react-router-dom";
import HeroProfile from "../../components/recruiter-view/common/hero-profile";
import Pagination from "../../components/common/pagination";

const JobSeekerDashboard = () => {
  const [formData, setFormData] = useState({});
  return (
    <div className="w-full flex flex-col gap-[30px] ">
      <Navbar onlySupport={false} />
      <div className="flex w-full items-start justify-between">
        <div className="w-[18%] flex flex-col gap-[23px]">
          <div className="text-lg text-[#171923] font-semibold">Filters</div>
          <div
            // onClick={ClearAll}
            className="text-[#3F93FF] text-base font-medium cursor-pointer"
          >
            Clear All
          </div>
          <FilterComponent
            formControls={CandidatesFilters}
            formData={formData}
            setFormData={setFormData}
          />
        </div>
        <div className="w-[78%] flex flex-col gap-[31px]">
          <HeroProfile />
          <div className="self-stretch p-10 bg-white rounded-2xl shadow-[6px_6px_54px_0px_rgba(0,0,0,0.05)] outline outline-offset-[-1px] outline-neutral-300 flex flex-col justify-start items-start gap-2.5">
            <div className="self-stretch inline-flex justify-start items-start gap-12">
              <div className="inline-flex flex-col justify-center items-start gap-3.5">
                <div className="justify-start text-gray-900 text-6xl font-semibold leading-[64px]">
                  50%
                </div>
                <div className="w-28 opacity-70 justify-start text-gray-900 text-base font-semibold">
                  Of your profile is complete
                </div>
              </div>
              <div className="flex-1 inline-flex flex-col justify-start items-start gap-4">
                <div className="self-stretch justify-start text-gray-900 text-lg font-semibold leading-tight">
                  Complete your profile!
                </div>
                <div className="self-stretch inline-flex justify-start items-start gap-2">
                  <div className="flex-1 h-2 bg-lime-600 rounded-xl" />
                  <div className="flex-1 h-2 bg-lime-600 rounded-xl" />
                  <div className="flex-1 h-2 bg-zinc-300 rounded-xl" />
                  <div className="flex-1 h-2 bg-zinc-300 rounded-xl" />
                </div>
                <div className="self-stretch inline-flex justify-start items-center gap-12">
                  <div className="flex-1 opacity-70 justify-start text-gray-900 text-base font-normal">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut.
                  </div>
                  <Link
                    to="/recruiter/profile-setup/sectoral-details"
                    className="px-4 py-3.5 bg-neutral-800 rounded-md shadow-[0px_1px_4px_0px_rgba(25,33,61,0.08)] flex justify-center items-center gap-[3px]"
                  >
                    <div className="text-center justify-start text-white text-base font-semibold leading-tight">
                      Proceed to Complete
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch inline-flex justify-start items-start gap-3.5">
            <div className="flex-1 px-4 py-5 bg-color-gray-10 rounded-xl outline outline-1 outline-offset-[-1px] outline-stone-300/80 flex justify-center items-center gap-2.5">
              <div className="size-4 relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M7.66683 13.9999C11.1646 13.9999 14.0002 11.1644 14.0002 7.66659C14.0002 4.16878 11.1646 1.33325 7.66683 1.33325C4.16903 1.33325 1.3335 4.16878 1.3335 7.66659C1.3335 11.1644 4.16903 13.9999 7.66683 13.9999Z"
                    stroke="#9E9E9E"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M14.6668 14.6666L13.3335 13.3333"
                    stroke="#9E9E9E"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div className="flex-1 self-stretch justify-center text-color-gray-60 text-xs font-medium">
                Search your job here
              </div>
            </div>
            <div className="w-44 px-4 py-5 bg-color-gray-10 rounded-xl outline outline-1 outline-offset-[-1px] outline-stone-300/80 flex justify-center items-center gap-2.5">
              <div className="size-4 relative overflow-hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <g clip-path="url(#clip0_1168_13659)">
                    <path
                      d="M14 6.66675C14 11.3334 8 15.3334 8 15.3334C8 15.3334 2 11.3334 2 6.66675C2 5.07545 2.63214 3.54933 3.75736 2.42411C4.88258 1.29889 6.4087 0.666748 8 0.666748C9.5913 0.666748 11.1174 1.29889 12.2426 2.42411C13.3679 3.54933 14 5.07545 14 6.66675Z"
                      stroke="#9E9E9E"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M8 8.66675C9.10457 8.66675 10 7.77132 10 6.66675C10 5.56218 9.10457 4.66675 8 4.66675C6.89543 4.66675 6 5.56218 6 6.66675C6 7.77132 6.89543 8.66675 8 8.66675Z"
                      stroke="#9E9E9E"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1168_13659">
                      <rect width="16" height="16" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className="flex-1 self-stretch justify-center text-color-gray-60 text-xs font-medium">
                Location
              </div>
            </div>
          </div>
          <div className="size- inline-flex justify-start items-start gap-8">
            <div className="size- px-5 py-2.5 rounded-3xl outline outline-1 outline-offset-[-1px] outline-neutral-400 flex justify-center items-center gap-2.5">
              <div className="justify-start text-neutral-400 text-sm font-medium capitalize">
                Applied Jobs
              </div>
            </div>
            <div className="size- px-5 py-2.5 rounded-3xl outline outline-1 outline-offset-[-1px] outline-neutral-400 flex justify-center items-center gap-2.5">
              <div className="justify-start text-neutral-400 text-sm font-medium capitalize">
                Saved Jobs
              </div>
            </div>
          </div>
          <div className="justify-start text-neutral-900 text-lg font-semibold leading-tight">
            Recommended jobs
          </div>
          <div className="self-stretch p-6 bg-white rounded-lg shadow-[0px_1px_2px_0px_rgba(0,0,0,0.03)] outline outline-1 outline-offset-[-1px] outline-zinc-300 inline-flex justify-start items-start gap-6">
            <img
              className="size-16 relative rounded-sm"
              src="https://placehold.co/72x72"
            />
            <div className="flex-1 inline-flex flex-col justify-start items-start gap-3">
              <div className="self-stretch flex flex-col justify-start items-start gap-1.5">
                <div className="size- flex flex-col justify-start items-start gap-1">
                  <div className="size- inline-flex justify-start items-center gap-3">
                    <div className="justify-start text-neutral-900 text-lg font-normal leading-relaxed">
                      The Company
                    </div>
                  </div>
                  <div className="size- inline-flex justify-center items-center gap-3">
                    <div className="justify-start text-neutral-900 text-2xl font-medium leading-9">
                      Business Development Intern
                    </div>
                    <div className="size- px-1.5 py-0.5 bg-violet-500/10 rounded-[3px] flex justify-start items-center gap-1 overflow-hidden">
                      <div className="justify-start text-violet-500 text-xs font-medium leading-none">
                        2 applied
                      </div>
                    </div>
                  </div>
                </div>
                <div className="size- py-0.5 inline-flex justify-center items-center gap-6">
                  <div className="size- flex justify-start items-center gap-1.5">
                    <div className="size-4 relative">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M3 14.5C3 14.2239 3.22386 14 3.5 14H12.5C12.7761 14 13 14.2239 13 14.5C13 14.7761 12.7761 15 12.5 15H3.5C3.22386 15 3 14.7761 3 14.5Z"
                          fill="#141414"
                          fill-opacity="0.7"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M8 5C7.17157 5 6.5 5.67157 6.5 6.5C6.5 7.32843 7.17157 8 8 8C8.82843 8 9.5 7.32843 9.5 6.5C9.5 5.67157 8.82843 5 8 5ZM5.5 6.5C5.5 5.11929 6.61929 4 8 4C9.38071 4 10.5 5.11929 10.5 6.5C10.5 7.88071 9.38071 9 8 9C6.61929 9 5.5 7.88071 5.5 6.5Z"
                          fill="#141414"
                          fill-opacity="0.7"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M8 2C6.80653 2 5.66193 2.47411 4.81802 3.31802C3.97411 4.16193 3.5 5.30653 3.5 6.5C3.5 8.56997 4.65592 10.4548 5.8773 11.8594C6.48189 12.5547 7.08775 13.1152 7.54257 13.5018C7.72245 13.6547 7.87812 13.7799 8 13.875C8.12188 13.7799 8.27755 13.6547 8.45743 13.5018C8.91225 13.1152 9.51812 12.5547 10.1227 11.8594C11.3441 10.4548 12.5 8.56997 12.5 6.5C12.5 5.30653 12.0259 4.16193 11.182 3.31802C10.3381 2.47411 9.19347 2 8 2ZM8 14.5C7.71327 14.9096 7.71313 14.9095 7.71297 14.9094L7.71256 14.9091L7.71139 14.9083L7.70769 14.9057L7.69498 14.8966C7.68417 14.8889 7.66876 14.8778 7.64904 14.8634C7.60962 14.8347 7.55296 14.7927 7.48154 14.7381C7.33874 14.6289 7.13661 14.4692 6.89493 14.2638C6.41225 13.8535 5.76811 13.2578 5.1227 12.5156C3.84408 11.0452 2.5 8.93003 2.5 6.5C2.5 5.04131 3.07946 3.64236 4.11091 2.61091C5.14236 1.57946 6.54131 1 8 1C9.45869 1 10.8576 1.57946 11.8891 2.61091C12.9205 3.64236 13.5 5.04131 13.5 6.5C13.5 8.93003 12.1559 11.0452 10.8773 12.5156C10.2319 13.2578 9.58775 13.8535 9.10507 14.2638C8.86339 14.4692 8.66126 14.6289 8.51846 14.7381C8.44704 14.7927 8.39038 14.8347 8.35096 14.8634C8.33124 14.8778 8.31583 14.8889 8.30502 14.8966L8.29231 14.9057L8.28861 14.9083L8.28744 14.9091L8.28703 14.9094C8.28687 14.9095 8.28673 14.9096 8 14.5ZM8 14.5L8.28673 14.9096C8.11457 15.0301 7.88543 15.0301 7.71327 14.9096L8 14.5Z"
                          fill="#141414"
                          fill-opacity="0.7"
                        />
                      </svg>
                    </div>
                    <div className="justify-start text-neutral-900/70 text-base font-normal leading-normal">
                      Brussels
                    </div>
                  </div>
                  <div className="size-0.5 bg-neutral-900/70 rounded-full" />
                  <div className="size- flex justify-start items-center gap-1.5">
                    <div className="size-4 relative">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M8 2.5C4.96243 2.5 2.5 4.96243 2.5 8C2.5 11.0376 4.96243 13.5 8 13.5C11.0376 13.5 13.5 11.0376 13.5 8C13.5 4.96243 11.0376 2.5 8 2.5ZM1.5 8C1.5 4.41015 4.41015 1.5 8 1.5C11.5899 1.5 14.5 4.41015 14.5 8C14.5 11.5899 11.5899 14.5 8 14.5C4.41015 14.5 1.5 11.5899 1.5 8Z"
                          fill="#141414"
                          fill-opacity="0.7"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M8 4C8.27614 4 8.5 4.22386 8.5 4.5V7.5H11.5C11.7761 7.5 12 7.72386 12 8C12 8.27614 11.7761 8.5 11.5 8.5H8C7.72386 8.5 7.5 8.27614 7.5 8V4.5C7.5 4.22386 7.72386 4 8 4Z"
                          fill="#141414"
                          fill-opacity="0.7"
                        />
                      </svg>
                    </div>
                    <div className="justify-start text-neutral-900/70 text-base font-normal leading-normal">
                      Full time
                    </div>
                  </div>
                  <div className="size-0.5 bg-neutral-900/70 rounded-full" />
                  <div className="size- flex justify-start items-center gap-1.5">
                    <div className="size-4 relative">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M8 1C8.27614 1 8.5 1.22386 8.5 1.5V14.5C8.5 14.7761 8.27614 15 8 15C7.72386 15 7.5 14.7761 7.5 14.5V1.5C7.5 1.22386 7.72386 1 8 1Z"
                          fill="#141414"
                          fill-opacity="0.7"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M4.62868 3.37868C5.19129 2.81607 5.95435 2.5 6.75 2.5H9C9.39397 2.5 9.78407 2.5776 10.1481 2.72836C10.512 2.87913 10.8427 3.1001 11.1213 3.37868C11.3999 3.65726 11.6209 3.98797 11.7716 4.35195C11.9224 4.71593 12 5.10603 12 5.5C12 5.77614 11.7761 6 11.5 6C11.2239 6 11 5.77614 11 5.5C11 5.23736 10.9483 4.97728 10.8478 4.73463C10.7473 4.49198 10.5999 4.2715 10.4142 4.08579C10.2285 3.90007 10.008 3.75275 9.76537 3.65224C9.52272 3.55173 9.26264 3.5 9 3.5H6.75C6.21957 3.5 5.71086 3.71071 5.33579 4.08579C4.96071 4.46086 4.75 4.96957 4.75 5.5C4.75 6.03043 4.96071 6.53914 5.33579 6.91421C5.71086 7.28929 6.21957 7.5 6.75 7.5H9.5C10.2956 7.5 11.0587 7.81607 11.6213 8.37868C12.1839 8.94129 12.5 9.70435 12.5 10.5C12.5 11.2956 12.1839 12.0587 11.6213 12.6213C11.0587 13.1839 10.2956 13.5 9.5 13.5H6.5C5.70435 13.5 4.94129 13.1839 4.37868 12.6213C3.81607 12.0587 3.5 11.2956 3.5 10.5C3.5 10.2239 3.72386 10 4 10C4.27614 10 4.5 10.2239 4.5 10.5C4.5 11.0304 4.71071 11.5391 5.08579 11.9142C5.46086 12.2893 5.96957 12.5 6.5 12.5H9.5C10.0304 12.5 10.5391 12.2893 10.9142 11.9142C11.2893 11.5391 11.5 11.0304 11.5 10.5C11.5 9.96957 11.2893 9.46086 10.9142 9.08579C10.5391 8.71071 10.0304 8.5 9.5 8.5H6.75C5.95435 8.5 5.19129 8.18393 4.62868 7.62132C4.06607 7.05871 3.75 6.29565 3.75 5.5C3.75 4.70435 4.06607 3.94129 4.62868 3.37868Z"
                          fill="#141414"
                          fill-opacity="0.7"
                        />
                      </svg>
                    </div>
                    <div className="justify-start text-neutral-900/70 text-base font-normal leading-normal">
                      50-55k
                    </div>
                  </div>
                  <div className="size-0.5 bg-neutral-900/70 rounded-full" />
                  <div className="size- flex justify-start items-center gap-1.5">
                    <div className="size-4 relative">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M2 3C2 2.44772 2.44772 2 3 2H13C13.5523 2 14 2.44772 14 3V13C14 13.5523 13.5523 14 13 14H3C2.44772 14 2 13.5523 2 13V3ZM13 3H3V13H13V3Z"
                          fill="#141414"
                          fill-opacity="0.7"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M11 1C11.2761 1 11.5 1.22386 11.5 1.5V3.5C11.5 3.77614 11.2761 4 11 4C10.7239 4 10.5 3.77614 10.5 3.5V1.5C10.5 1.22386 10.7239 1 11 1Z"
                          fill="#141414"
                          fill-opacity="0.7"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M5 1C5.27614 1 5.5 1.22386 5.5 1.5V3.5C5.5 3.77614 5.27614 4 5 4C4.72386 4 4.5 3.77614 4.5 3.5V1.5C4.5 1.22386 4.72386 1 5 1Z"
                          fill="#141414"
                          fill-opacity="0.7"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M2 5.5C2 5.22386 2.22386 5 2.5 5H13.5C13.7761 5 14 5.22386 14 5.5C14 5.77614 13.7761 6 13.5 6H2.5C2.22386 6 2 5.77614 2 5.5Z"
                          fill="#141414"
                          fill-opacity="0.7"
                        />
                      </svg>
                    </div>
                    <div className="justify-start text-neutral-900/70 text-base font-normal leading-normal">
                      29 min ago
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch justify-start text-neutral-900/70 text-base font-normal leading-normal">
                Mollit in laborum tempor Lorem incididunt irure. Aute eu ex ad
                sunt. Pariatur sint culpa do incididunt eiusmod eiusmo...
              </div>
              <div className="size- px-5 py-2.5 bg-gray-900 rounded-3xl inline-flex justify-center items-center gap-2.5">
                <div className="justify-start text-white text-sm font-medium capitalize">
                  Apply Now
                </div>
              </div>
            </div>
            <div className="size- pl-3.5 pr-5 py-2.5 rounded-3xl outline outline-1 outline-offset-[-1px] outline-neutral-400 flex justify-center items-center gap-2.5">
              <div className="size-4 relative overflow-hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="17"
                  viewBox="0 0 16 17"
                  fill="none"
                >
                  <path
                    d="M12.6668 14.5L8.00016 11.1667L3.3335 14.5V3.83333C3.3335 3.47971 3.47397 3.14057 3.72402 2.89052C3.97407 2.64048 4.31321 2.5 4.66683 2.5H11.3335C11.6871 2.5 12.0263 2.64048 12.2763 2.89052C12.5264 3.14057 12.6668 3.47971 12.6668 3.83333V14.5Z"
                    stroke="#9E9E9E"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div className="justify-start text-neutral-400 text-sm font-medium capitalize">
                Save
              </div>
            </div>
          </div>
          <Pagination />
          <div className="justify-start text-neutral-900 text-lg font-semibold leading-tight">
            Top companies hiring
          </div>
          <div className="w-64 p-6 bg-white rounded-lg shadow-[0px_1px_2px_0px_rgba(0,0,0,0.03)] outline outline-1 outline-offset-[-1px] outline-zinc-300 inline-flex flex-col justify-start items-start gap-3.5">
            <div className="self-stretch inline-flex justify-start items-start gap-6">
              <div className="size-10 relative rounded-sm overflow-hidden">
                <img
                  className="size-10 left-0 top-0 absolute"
                  src="https://placehold.co/42x42"
                />
              </div>
              <div className="size- pl-3.5 pr-5 py-2.5 rounded-3xl outline outline-1 outline-offset-[-1px] outline-neutral-400 flex justify-center items-center gap-2.5">
                <div className="size-4 relative overflow-hidden">
                  <div className="w-2.5 h-3 left-[3.33px] top-[2px] absolute outline outline-[1.50px] outline-offset-[-0.75px] outline-neutral-400" />
                </div>
                <div className="justify-start text-neutral-400 text-sm font-medium capitalize">
                  Save
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col justify-start items-start gap-3">
              <div className="self-stretch flex flex-col justify-start items-start gap-1.5">
                <div className="self-stretch flex flex-col justify-start items-start gap-3">
                  <div className="self-stretch flex flex-col justify-start items-start">
                    <div className="self-stretch justify-start text-neutral-900 text-base font-normal leading-normal">
                      Google
                    </div>
                    <div className="self-stretch justify-start text-neutral-900 text-xl font-semibold leading-tight">
                      Data Engineer
                    </div>
                  </div>
                  <div className="size- px-1.5 py-0.5 bg-violet-500/10 rounded-[3px] inline-flex justify-start items-center gap-1 overflow-hidden">
                    <div className="justify-start text-violet-500 text-xs font-medium leading-none">
                      2 applied
                    </div>
                  </div>
                </div>
                <div className="self-stretch py-3 inline-flex justify-center items-center gap-3 flex-wrap content-center">
                  <div className="size- flex justify-start items-center gap-1.5">
                    <div className="size-4 relative">
                      <div className="w-2.5 h-px left-[3px] top-[14px] absolute bg-neutral-900/70" />
                      <div className="size-[5px] left-[5.50px] top-[4px] absolute bg-neutral-900/70" />
                      <div className="w-2.5 h-3.5 left-[2.50px] top-[1px] absolute bg-neutral-900/70" />
                    </div>
                    <div className="justify-start text-neutral-900/70 text-base font-normal leading-normal">
                      Brussels
                    </div>
                  </div>
                  <div className="size-0.5 bg-neutral-900/70 rounded-full" />
                  <div className="size- flex justify-start items-center gap-1.5">
                    <div className="size-4 relative">
                      <div className="size-3 left-[1.50px] top-[1.50px] absolute bg-neutral-900/70" />
                      <div className="size-1 left-[7.50px] top-[4px] absolute bg-neutral-900/70" />
                    </div>
                    <div className="justify-start text-neutral-900/70 text-base font-normal leading-normal">
                      Full time
                    </div>
                  </div>
                  <div className="size-0.5 bg-neutral-900/70 rounded-full" />
                  <div className="size- flex justify-start items-center gap-1.5">
                    <div className="size-4 relative">
                      <div className="w-px h-3.5 left-[7.50px] top-[1px] absolute bg-neutral-900/70" />
                      <div className="w-2 h-2.5 left-[3.50px] top-[2.50px] absolute bg-neutral-900/70" />
                    </div>
                    <div className="justify-start text-neutral-900/70 text-base font-normal leading-normal">
                      50-55k
                    </div>
                  </div>
                  <div className="size-0.5 bg-neutral-900/70 rounded-full" />
                  <div className="size- flex justify-start items-center gap-1.5">
                    <div className="size-4 relative">
                      <div className="size-3 left-[2px] top-[2px] absolute bg-neutral-900/70" />
                      <div className="w-px h-[3px] left-[10.50px] top-[1px] absolute bg-neutral-900/70" />
                      <div className="w-px h-[3px] left-[4.50px] top-[1px] absolute bg-neutral-900/70" />
                      <div className="w-3 h-px left-[2px] top-[5px] absolute bg-neutral-900/70" />
                    </div>
                    <div className="justify-start text-neutral-900/70 text-base font-normal leading-normal">
                      29 min ago
                    </div>
                  </div>
                </div>
              </div>
              <div className="size- px-5 py-2.5 bg-gray-900 rounded-3xl inline-flex justify-center items-center gap-2.5">
                <div className="justify-start text-white text-sm font-medium capitalize">
                  Apply Now
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobSeekerDashboard;
