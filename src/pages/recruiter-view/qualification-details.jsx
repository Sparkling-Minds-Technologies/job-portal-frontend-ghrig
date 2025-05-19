import React, { useState } from "react";
import { Button } from "../../components/ui/button";
import { Loader2 } from "lucide-react";
import CommonForm from "../../components/common/form";
import { referenceFields, sectoralFieldsForm2 } from "../../config";
import { useSectoralDetails } from "../../hooks/recruiter/useProfile";
import { z } from "zod";
import { validateFormData } from "../../utils/objectUtils";

const referenceSchema = z.object({
  name: z.string().min(1, "Reference name is required"),
  contactNo: z
    .string()
    .min(10, "Contact number must be 10 digits")
    .max(10, "Contact number must be 10 digits")
    .regex(/^\d+$/, "Contact number must contain only digits"),
  organization: z.string().min(1, "Organization is required"),
  designation: z.string().min(1, "Designation is required"),
});

const formDataSchema = z
  .object({
    latestQualification: z.string().url("Must be a valid URL"),
    joinReason: z.string().min(1, "Join reason is required"),
    monthlyClosures: z
      .number()
      .int()
      .nonnegative("Monthly closures must be zero or more"),
    jobSource: z.string().min(1, "Job source is required"),
    fatherName: z.string().min(1, "Father's name is required"),
    motherName: z.string().min(1, "Mother's name is required"),
    references: z
      .array(referenceSchema)
      .length(2, "Exactly 2 references required"),
    hasMedicalProblem: z.boolean(),
    medicalProblemDetails: z.string().optional(),
  })
  .refine(
    (data) => {
      // If hasMedicalProblem is true, medicalDetails must be non-empty
      if (data.hasMedicalProblem) {
        return data.medicalProblemDetails.trim().length > 0;
      }
      return true;
    },
    {
      message: "Medical details are required if there is a medical problem",
      path: ["medicalDetails"],
    }
  );

const QualificationDetails = () => {
  const [formData, setFormData] = useState({
    latestQualification: "https://example.com/qualification.pdf",
    joinReason: "",
    monthlyClosures: 0,
    jobSource: "",
    fatherName: "",
    motherName: "",
    references: [
      {
        name: "",
        contactNo: "",
        organization: "",
        designation: "",
      },
      {
        name: "",
        contactNo: "",
        organization: "",
        designation: "",
      },
    ],
    hasMedicalProblem: false,
    medicalProblemDetails: "",
  });
  const { mutate, isPending } = useSectoralDetails();
  const onSubmit = (e) => {
    e.preventDefault();
    const payLoad = {
      ...formData,
      hasMedicalProblem: formData.hasMedicalProblem === "yes" ? true : false,
    };
    const isValid = validateFormData(formDataSchema, payLoad);
    if (!isValid) return;
    mutate(payLoad);
  };
  return (
    <div className="w-full self-stretch lg:px-36 lg:py-14 p-[20px] inline-flex flex-col justify-start items-start lg:gap-2 gap-[10px]">
      <div className="w-full inline-flex justify-start items-start gap-3">
        <div className="justify-start text-gray-900 lg:text-3xl text-lg font-bold leading-loose">
          Recruiter Profile Setup
        </div>
      </div>
      <div className="w-full h-14 flex flex-col justify-start items-start lg:gap-4 gap-[15px]">
        <div className="justify-start text-gray-900 lg:text-xl text-md font-bold leading-tight">
          Almost there – 75% completed!
        </div>
        <div className="self-stretch inline-flex justify-start items-start gap-2">
          <div className="flex-1 h-2 bg-lime-600 rounded-xl" />
          <div className="flex-1 h-2 bg-lime-600 rounded-xl" />
          <div className="flex-1 h-2 bg-lime-600 rounded-xl" />
          <div className="flex-1 h-2 bg-zinc-300 rounded-xl" />
        </div>
      </div>
      <form
        onSubmit={onSubmit}
        className="self-stretch flex flex-col justify-start items-start gap-10"
      >
        <div className="w-full flex flex-col gap-[18px]">
          <CommonForm
            formControls={sectoralFieldsForm2}
            formData={formData}
            setFormData={setFormData}
          />
          {formData.references.map((item, index) => (
            <CommonForm
              key={index}
              i={index}
              formControls={referenceFields}
              formData={formData}
              setFormData={setFormData}
            />
          ))}
        </div>
        <div className="self-stretch flex flex-col justify-end items-end gap-2.5">
          <Button className="cursor-pointer w-64 px-5 py-2.5 bg-[#6945ED] rounded-3xl inline-flex justify-center items-center gap-2.5">
            <div className="justify-start text-white text-sm font-medium capitalize">
              {isPending ? (
                <span className="flex items-center justify-center gap-2">
                  <Loader2 className="animate-spin h-2 w-2" /> Please wait
                </span>
              ) : (
                "Save & Update Profile"
              )}
            </div>
          </Button>
        </div>
      </form>
    </div>
  );
};

export default QualificationDetails;
