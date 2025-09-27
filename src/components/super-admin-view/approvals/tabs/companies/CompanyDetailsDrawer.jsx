import { Button } from "@/components/ui/button";
import { Building2, Briefcase } from "lucide-react";
import { Fragment, useState } from "react";
import CompanyDetailsTab from "./tabs/CompanyDetailsTab";
import JobListingTab from "./tabs/JobListingTab";
import CompanyStats from "./CompanyStats";
import {
  useApprovals,
  useGetApprovalDetails,
} from "@/hooks/superAdmin/useApprovals";

const CompanyDetailsDrawer = ({ company, areApprovalBtnsVisible = false }) => {
  const [activeTab, setActiveTab] = useState("details");
  const { isLoading, approveApplication, rejectApplication, holdApplication } =
    useApprovals();

  // Fetch detailed company data using unified approval endpoint
  const {
    data: approvalDetails,
    isLoading: isLoadingDetails,
    error: detailsError,
  } = useGetApprovalDetails(company?._id || company?.id, {
    enabled: !!(company?._id || company?.id),
  });

  // Use detailed data if available, otherwise fall back to basic company data
  const displayCompany = approvalDetails?.data?.data || company;

  const handleApprove = async () => {
    try {
      await approveApplication(displayCompany.id || displayCompany._id);
      // Optionally refresh the company data or close the drawer
    } catch (error) {
      console.error("Failed to approve company:", error);
    }
  };

  const handleReject = async () => {
    try {
      await rejectApplication(displayCompany.id || displayCompany._id);
      // Optionally refresh the company data or close the drawer
    } catch (error) {
      console.error("Failed to reject company:", error);
    }
  };

  const handleHold = async () => {
    try {
      await holdApplication(displayCompany.id || displayCompany._id);
      // Optionally refresh the company data or close the drawer
    } catch (error) {
      console.error("Failed to hold company:", error);
    }
  };

  // Handle loading state
  if (isLoadingDetails) {
    return (
      <div className="w-full h-full p-10 bg-white rounded-l-2xl inline-flex flex-col justify-center items-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-purple mx-auto mb-4"></div>
          <p className="text-gray-600">Loading company details...</p>
        </div>
      </div>
    );
  }

  // Handle error state
  if (detailsError) {
    return (
      <div className="w-full h-full p-10 bg-white rounded-l-2xl inline-flex flex-col justify-center items-center">
        <div className="text-center">
          <div className="text-red-500 mb-4">
            <svg
              className="w-12 h-12 mx-auto"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.268 18.5c-.77.833.192 2.5 1.732 2.5z"
              />
            </svg>
          </div>
          <p className="text-red-600 mb-2">Failed to load company details</p>
          <p className="text-gray-500 text-sm">
            {detailsError.message || "Something went wrong"}
          </p>
        </div>
      </div>
    );
  }

  if (!displayCompany) {
    return (
      <div className="w-full h-full p-10 bg-white rounded-l-2xl inline-flex flex-col justify-center items-center">
        <div className="text-center">
          <Building2 className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-500">No company selected</p>
        </div>
      </div>
    );
  }

  const tabs = [
    {
      id: "details",
      label: "Company Details",
      icon: Building2,
    },
    {
      id: "jobs",
      label: "Job Listings",
      icon: Briefcase,
    },
  ];

  return (
    <div className="w-full h-full p-10 bg-white rounded-l-2xl inline-flex flex-col gap-8 overflow-y-auto">
      {/* Header */}
      <div className="w-full border-1 border-gray2 p-4 rounded-lg flex justify-center gap-4">
        {displayCompany.logo ? (
          <img
            src={displayCompany.logo}
            alt={`${displayCompany.name} logo`}
            className="object-contain h-fit"
            width={24}
          />
        ) : (
          <Building2 className="h-6 w-6 text-gray-400" />
        )}

        <div>
          <h3 className="text-xl font-medium">{displayCompany.name}</h3>
          <div className="border-1 border-gray2 p-4 rounded-lg mt-4">
            <h4 className=" font-medium">About the Company</h4>
            <p className="text-sm text-gray1/75 mt-2">
              {displayCompany.description}
            </p>
          </div>
        </div>

        <div className="space-y-3">
          {areApprovalBtnsVisible ? (
            <Fragment>
              <Button
                variant={"purple"}
                className={"w-full"}
                onClick={handleApprove}
                disabled={isLoading}
              >
                {isLoading ? "Processing..." : "Approve Company"}
              </Button>
              <Button
                variant={"destructive"}
                className={"w-full"}
                onClick={handleReject}
                disabled={isLoading}
              >
                {isLoading ? "Processing..." : "Reject Company"}
              </Button>
              <Button
                variant={"black"}
                className={"w-full"}
                onClick={handleHold}
                disabled={isLoading}
              >
                {isLoading ? "Processing..." : "Hold Company"}
              </Button>
            </Fragment>
          ) : (
            <Fragment>
              <Button variant={"purple"} className={"px-3 w-full"}>
                Post Job
              </Button>
              <Button variant={"black"}>Post Training</Button>
            </Fragment>
          )}
        </div>
      </div>

      {/* Details Grid */}
      <CompanyStats company={company} />

      {/* Tabs */}
      <div className="w-full">
        {/* Tab Navigation */}
        <div className="border-b border-gray-200 mb-6">
          <div className="flex space-x-8">
            {tabs.map((tab) => {
              const IconComponent = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-2 px-4 border-b-2 font-medium text-sm flex items-center gap-2 transition-colors ${
                    activeTab === tab.id
                      ? "border-purple-500 text-purple-600"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  }`}
                >
                  <IconComponent className="h-4 w-4" />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab Content */}
        <div className="w-full">
          {activeTab === "details" && <CompanyDetailsTab company={company} />}
          {activeTab === "jobs" && <JobListingTab company={company} />}
        </div>
      </div>
    </div>
  );
};

export default CompanyDetailsDrawer;
