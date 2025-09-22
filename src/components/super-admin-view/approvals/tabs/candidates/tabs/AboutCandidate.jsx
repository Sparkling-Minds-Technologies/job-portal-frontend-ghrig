import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, MailIcon, PhoneCallIcon } from "lucide-react";

const AboutCandidate = ({ candidate }) => {
  // Helper function to format date
  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    return new Date(dateString).toLocaleDateString("en-GB");
  };

  // Helper function to format phone number
  const formatPhone = (phone) => {
    if (!phone) return "N/A";
    return `${phone.countryCode || ""} ${phone.number || ""}`.trim();
  };

  // Helper function to calculate experience duration
  const calculateExperienceDuration = (startDate, endDate) => {
    if (!startDate) return "N/A";
    const start = new Date(startDate);
    const end = endDate ? new Date(endDate) : new Date();
    const diffTime = Math.abs(end - start);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    const years = Math.floor(diffDays / 365);
    const months = Math.floor((diffDays % 365) / 30);

    if (years > 0) {
      return `${years}Yr${years > 1 ? "s" : ""} ${
        months > 0 ? `${months}Mo` : ""
      }`.trim();
    } else if (months > 0) {
      return `${months}Mo`;
    } else {
      return "Less than 1 month";
    }
  };

  // Use real data from API or fallback to empty arrays
  const professionalExperiences = candidate?.experience || [];
  const educations = candidate?.education || [];
  const certificates = candidate?.certifications || [];
  const skills = candidate?.skills || [];

  // Professional details from candidate data
  const professionalDetails = [
    {
      field: "Current working status",
      value: candidate?.currentEmploymentStatus || "N/A",
    },
    { field: "Role Looking for", value: candidate?.desiredRole || "N/A" },
    { field: "Current Industry", value: candidate?.currentIndustry || "N/A" },
    { field: "Area of Expertise", value: skills.join(", ") || "N/A" },
    {
      field: "Functional Industry",
      value: candidate?.functionalIndustry || "N/A",
    },
    { field: "Notice Period", value: candidate?.noticePeriod || "N/A" },
    {
      field: "Preferred work location",
      value: candidate?.preferredLocation || "N/A",
    },
    {
      field: "Annual Current Salary / CTC",
      value: candidate?.currentSalary || "N/A",
    },
    {
      field: "Expected Salary / CTC",
      value: candidate?.expectedSalary || "N/A",
    },
  ];

  // Additional information from candidate data
  const additionalInformation = [
    { field: "DOB", value: formatDate(candidate?.dateOfBirth) },
    { field: "Gender", value: candidate?.gender || "N/A" },
    { field: "Marital Status", value: candidate?.maritalStatus || "N/A" },
    {
      field: "Have you handled a team?",
      value: candidate?.hasHandledTeam ? "YES" : "NO",
    },
    {
      field: "Are you willing to work 6 days a week?",
      value: candidate?.willingToWork6Days ? "YES" : "NO",
    },
    {
      field: "Are you willing to relocate from your current location?",
      value: candidate?.willingToRelocate ? "YES" : "NO",
    },
    {
      field: "Are you open to joining an early-stage startup?",
      value: candidate?.openToStartup ? "YES" : "NO",
    },
    {
      field: "Are you Differently Abled?",
      value: candidate?.differentlyAbled ? "YES" : "NO",
    },
    {
      field: "Are you suffering from any medical problem?",
      value: candidate?.hasMedicalProblem ? "YES" : "NO",
    },
    { field: "Languages", value: candidate?.languages?.join(", ") || "N/A" },
  ];
  return (
    <div className="mt-6">
      <div className="grid grid-cols-9 gap-4">
        <div className="p-4 border-1 col-span-2 border-gray2 rounded text-sm flex flex-col justify-center">
          <span className="text-gray1/50">Location</span>
          <p className="">
            {candidate?.location || candidate?.preferredLocation || "N/A"}
          </p>
        </div>

        <div className="p-4 border-1 col-span-2 border-gray2 rounded text-sm flex flex-col justify-center">
          <span className="text-gray1/50">Current Employment</span>
          <p className="mt-2">{candidate?.currentRole || "N/A"}</p>
          {candidate?.currentCompany && (
            <div className="flex items-center gap-2 mt-2">
              <div className="w-6 h-6 bg-gray-200 rounded flex items-center justify-center">
                <span className="text-xs font-semibold">
                  {candidate.currentCompany.charAt(0).toUpperCase()}
                </span>
              </div>
              <p>{candidate.currentCompany}</p>
            </div>
          )}
        </div>

        <div className="p-4 border-1 col-span-2 border-gray2 rounded text-sm flex flex-col justify-center space-y-2">
          <span className="text-gray1/50">Resume</span>
          <p className="bg-gray2 rounded px-3 py-2 text-center">
            {candidate?.resume ? "resume.pdf" : "No resume uploaded"}
          </p>
        </div>

        <div className="p-4 border-1 col-span-3 border-gray2 rounded text-sm flex flex-col justify-center space-y-3">
          <span className="text-gray1/50">Contact Information</span>
          <p className="flex items-center gap-2 mt-2">
            <PhoneCallIcon className="w-4 h-4" />{" "}
            {formatPhone(candidate?.phone)}
          </p>
          <p className="flex items-center gap-2 mt-2">
            <MailIcon className="w-4 h-4 text-black" />{" "}
            {candidate?.email || "N/A"}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-5 gap-4 mt-6">
        <div className="col-span-3 border-1 border-gray2 rounded-lg p-6">
          <h3 className="text-lg font-semibold">Professional Experience</h3>
          <div className="mt-4 space-y-4">
            {professionalExperiences.length > 0 ? (
              professionalExperiences.map((exp, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 border border-gray-200 rounded p-4"
                >
                  <div className="w-12 h-12 bg-gray-200 rounded flex items-center justify-center">
                    <span className="text-sm font-semibold">
                      {exp.companyName?.charAt(0).toUpperCase() || "C"}
                    </span>
                  </div>
                  <div className="flex justify-between items-center w-full">
                    <div>
                      <h4 className="font-semibold">
                        {exp.jobTitle || exp.role || "N/A"}
                      </h4>
                      <div className="flex items-center gap-2 mt-1">
                        <p className="text-gray1">{exp.companyName || "N/A"}</p>
                        <Badge
                          className={`${
                            exp.employmentType === "Intern" ||
                            exp.jobType === "Intern"
                              ? "bg-light-pink"
                              : "bg-light-blue"
                          } text-gray1 text-sm rounded-xl`}
                        >
                          {exp.employmentType || exp.jobType || "Full-time"}
                        </Badge>
                      </div>
                    </div>
                    <p className="text-sm text-gray1">
                      {exp.startDate && exp.endDate
                        ? `${formatDate(exp.startDate)} - ${formatDate(
                            exp.endDate
                          )}`
                        : exp.duration || "N/A"}{" "}
                      ·{" "}
                      {calculateExperienceDuration(exp.startDate, exp.endDate)}
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-8 text-gray-500">
                No professional experience available
              </div>
            )}
          </div>

          <div className="mt-6">
            {professionalDetails.map((detail, index) => (
              <div
                key={index}
                className="flex justify-between items-center border-b border-gray-200 py-2"
              >
                <span className="text-gray1">{detail.field}</span>
                <span>{detail.value}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="col-span-2 border-1 border-gray2 rounded-lg p-6 flex flex-col gap-6">
          {/* Skills */}
          <div>
            <h3 className="text-lg font-semibold">Skills</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <Badge
                  key={index}
                  className="bg-gray2 text-gray1 px-3 py-1 rounded-full"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-lg font-semibold">Education</h3>
            <div className="mt-4 space-y-4">
              {educations.length > 0 ? (
                educations.map((edu, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 border border-gray-200 rounded p-4"
                  >
                    <div className="w-12 h-12 bg-gray-200 rounded flex items-center justify-center">
                      <span className="text-sm font-semibold">
                        {edu.institution?.charAt(0).toUpperCase() || "U"}
                      </span>
                    </div>
                    <div className="flex justify-between items-center w-full">
                      <div>
                        <p className="">
                          {edu.institution || edu.name || "N/A"}
                        </p>
                        <p className="text-sm text-gray1/50">
                          {edu.startDate && edu.endDate
                            ? `${formatDate(edu.startDate)} - ${formatDate(
                                edu.endDate
                              )}`
                            : edu.duration || "N/A"}
                        </p>
                      </div>
                      <p>{edu.degree || edu.qualification || "N/A"}</p>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-4 text-gray-500">
                  No education information available
                </div>
              )}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-lg font-semibold">Certifications</h3>
            <div className="mt-4 space-y-2">
              {certificates.length > 0 ? (
                certificates.map((cert, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center border-b border-gray-200 py-2"
                  >
                    <div>
                      <p>{cert.name || cert.title || "N/A"}</p>
                      <p>
                        {cert.issueDate && cert.expiryDate
                          ? `${formatDate(cert.issueDate)} - ${formatDate(
                              cert.expiryDate
                            )}`
                          : cert.duration || "N/A"}
                      </p>
                    </div>
                    {cert.link && (
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                ))
              ) : (
                <div className="text-center py-4 text-gray-500">
                  No certifications available
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Additional Information */}
      <div className="mt-6 border-1 border-gray2 rounded-lg p-6">
        <h3 className="text-lg font-semibold">Additional Information</h3>
        <div className="mt-4 space-y-2">
          {additionalInformation.map((info, index) => (
            <div
              key={index}
              className="grid grid-cols-2 gap-4 border-b border-gray-200 py-2"
            >
              <p>{info.field}</p>
              <p className="">{info.value}</p>
            </div>
          ))}
        </div>
      </div>

      <Button variant={"purple"} className={"w-fit m-6"}>
        Edit Profile
      </Button>
    </div>
  );
};

export default AboutCandidate;
