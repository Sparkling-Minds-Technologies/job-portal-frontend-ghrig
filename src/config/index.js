export const KycVerification = [
  {
    name: "cancelChequeUpload",
    label: "",
    placeholder: "Cancel Cheque Upload",
    componentType: "file",
    type: "file",
  },
  {
    name: "panCardNumber",
    label: "PAN Card Details",
    placeholder: "PAN Card Number",
    componentType: "input",
    type: "number",
  },
  {
    name: "panCardUpload",
    label: "",
    placeholder: "PAN Card Upload",
    componentType: "file",
    type: "file",
  },
  {
    name: "aadharCardNumber",
    label: "Aadhar Card Details",
    placeholder: "Aadhar Card Number",
    componentType: "input",
    type: "number",
  },
  {
    name: "aadharCardUpload",
    label: "",
    placeholder: "Aadhar Card Upload",
    componentType: "file",
    type: "file",
  },
  {
    name: "accountNumber",
    label: "Account Number",
    placeholder: "Account Number",
    componentType: "input",
    type: "number",
  },
  {
    row: [
      {
        name: "branchName",
        label: "Branch Name",
        placeholder: "Branch Name",
        componentType: "input",
        type: "text",
      },
      {
        name: "ifscCode",
        label: "IFSC Code",
        placeholder: "IFSC Code",
        componentType: "input",
        type: "text",
      },
    ],
  },
];

export const basicInformation = [
  {
    name: "name",
    label: "Candidate Name",
    placeholder: "e.g. Jason Wild",
    componentType: "input",
    type: "text",
  },
  {
    name: "",
    label: "",
    placeholder: "Profile Picture",
    componentType: "file",
    type: "file",
  },
  {
    name: "",
    label: "Contact Information",
    placeholder: "Ex. XXXXX XXXXX",
    componentType: "input",
    type: "number",
  },
  {
    name: "",
    label: "Address",
    placeholder: "Enter Primary Address",
    componentType: "textarea",
    type: "text",
  },
  {
    row: [
      {
        name: "",
        label: "",
        placeholder: "Enter City",
        componentType: "input",
        type: "text",
      },
      {
        name: "",
        label: "",
        placeholder: "Enter State",
        componentType: "input",
        type: "text",
      },
      {
        name: "",
        label: "",
        placeholder: "Enter Pincode",
        componentType: "input",
        type: "number",
      },
    ],
  },
];
export const recruiterSignUp = [
  {
    name: "email",
    label: "E-mail",
    placeholder: "Enter your e-mail",
    componentType: "input",
    type: "email",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "********",
    componentType: "input",
    type: "password",
  },
  {
    name: "password",
    label: "Confirm Password",
    placeholder: "********",
    componentType: "input",
    type: "password",
  },
];

export const CandidateFormFields = [
  {
    row: [
      {
        name: "candidateName",
        label: "Candidate Name",
        placeholder: "e.g. Jason Wild",
        componentType: "input",
        type: "text",
      },
      {
        name: "profilePicture",
        label: "",
        placeholder: "Profile Picture",
        componentType: "file",
        type: "file",
      },
    ],
  },
  {
    name: "phoneNumber",
    label: "Contact Information",
    placeholder: "Ex. XXXXX XXXXX",
    componentType: "phone", // Custom component with country code
    type: "tel",
  },
  {
    name: "email",
    label: "",
    placeholder: "E-mail ID",
    componentType: "input",
    type: "email",
  },
  {
    name: "bio",
    label: "Bio",
    placeholder: "Tell us about you",
    componentType: "textarea",
  },
  {
    name: "primaryAddress",
    label: "Address",
    placeholder: "Enter Primary Address",
    componentType: "input",
    type: "text",
  },
  {
    row: [
      {
        name: "city",
        label: "",
        placeholder: "Enter City",
        componentType: "input",
        type: "text",
      },
      {
        name: "pincode",
        label: "",
        placeholder: "Enter Pincode",
        componentType: "input",
        type: "text",
      },
    ],
  },
  {
    name: "languages",
    label: "Languages",
    placeholder: "Select all the languages you speak",
    componentType: "select",
    options: [], // Fill this dynamically
  },
  {
    name: "sector",
    label: "Current Sector",
    placeholder: "IT or Non-IT",
    componentType: "select",
    options: [
      { id: "it", label: "IT" },
      { id: "non-it", label: "NON-IT" },
    ],
  },
];
export const candidateForm1 = [
  {
    name: "cancelChequeUpload",
    label: "",
    placeholder: "Cancel Cheque Upload",
    componentType: "file",
    type: "file",
    collapsible: true,
  },
  {
    name: "aadharCardNumber",
    label: "",
    placeholder: "Aadhar Card Number",
    componentType: "file",
    type: "file",
    collapsible: true,
  },
  {
    name: "panCardUpload",
    label: "",
    placeholder: "PAN Card Upload",
    componentType: "file",
    type: "file",
    collapsible: true,
  },
  {
    name: "accountNumber",
    label: "Account Number",
    placeholder: "Account Number",
    componentType: "input",
    type: "number",
  },
  {
    row: [
      {
        name: "branchName",
        label: "Branch Name",
        placeholder: "Branch Name",
        componentType: "input",
        type: "text",
      },
      {
        name: "ifscCode",
        label: "IFSC Code",
        placeholder: "IFSC Code",
        componentType: "input",
        type: "text",
      },
    ],
  },
];
export const educationFields = [
  {
    name: "institution",
    placeholder: "Enter the name",
    componentType: "input",
    type: "text",
    label: "Institution",
  },
  {
    name: "location",
    placeholder: "Location",
    componentType: "select",
    label: "Location",
    type: "text",
    options: [
      // Example options, add as needed
      { id: "delhi", label: "Delhi" },
      { id: "mumbai", label: "Mumbai" },
    ],
  },
  {
    name: "fieldOfStudy",
    placeholder: "Eg. Bachelor of Design",
    componentType: "input",
    type: "text",
    label: "Field of Study",
  },
  {
    row: [
      {
        label: "Starting Year",
        name: "startYear",
        placeholder: "Select Date",
        componentType: "calendar",
      },
      {
        label: "Ending Year",
        name: "endYear",
        placeholder: "Select Date",
        componentType: "calendar",
      },
    ],
  },
];
export const academicsAchievementFields = [
  {
    name: "title",
    placeholder: "Enter Title",
    componentType: "input",
    type: "text",
    label: "Title",
  },
  {
    name: "issuer",
    placeholder: "Enter Issuer",
    componentType: "input",
    label: "Issuer",
    type: "text",
  },
  {
    name: "startYear",
    placeholder: "Select Date",
    componentType: "calendar",
  },
];
export const professionFields = [
  {
    name: "location",
    placeholder: "Frontline, Mid-Level, Expert",
    componentType: "select",
    label: "Experience Level",
    type: "text",
    options: [
      // Example options, add as needed
      { id: "delhi", label: "Delhi" },
      { id: "mumbai", label: "Mumbai" },
    ],
  },
  {
    name: "currentSector",
    placeholder: "IT or Non-IT",
    componentType: "select",
    label: "IT or Non-IT",
    type: "text",
    options: [
      // Example options, add as needed
      { id: "delhi", label: "Delhi" },
      { id: "mumbai", label: "Mumbai" },
    ],
  },
  {
    name: "linkedInProfile",
    placeholder: "Enter URL",
    componentType: "input",
    label: "LinkedIn Profile",
    type: "text",
  },
  {
    name: "workExperience",
    placeholder: "Position in Last Organization",
    componentType: "input",
    label: "Work Experience",
    type: "text",
  },
  {
    name: "employmentType",
    placeholder: "Employment Type",
    componentType: "select",
    label: "Employment Type",
    type: "text",
    options: [
      // Example options, add as needed
      { id: "delhi", label: "Delhi" },
      { id: "mumbai", label: "Mumbai" },
    ],
  },
  {
    row: [
      {
        label: "Starting Year",
        name: "startYear",
        placeholder: "Select Date",
        componentType: "calendar",
      },
      {
        label: "Ending Year",
        name: "endYear",
        placeholder: "Select Date",
        componentType: "calendar",
      },
    ],
  },
  {
    name: "location",
    placeholder: "e.g., Chicago, USA",
    componentType: "input",
    label: "Location",
    type: "text",
  },
];
export const preferencesFields = [
  {
    name: "employmentType",
    placeholder: "Enter the role you’re looking for",
    componentType: "select",
    label: "Role Looking for",
    type: "text",
    options: [
      // Example options, add as needed
      { id: "delhi", label: "Delhi" },
      { id: "mumbai", label: "Mumbai" },
    ],
  },
  {
    name: "location",
    placeholder: "Top 3 Preferences",
    componentType: "input",
    label: "Preferred work location",
    type: "text",
  },
];
export const intershipsFields = [
  {
    name: "location",
    placeholder: "Position in Last Organization",
    componentType: "input",
    label: "Internship Title",
    type: "text",
  },
  {
    name: "employmentType",
    placeholder: "Employment Type",
    componentType: "select",
    label: "Employment Type",
    type: "text",
    options: [
      // Example options, add as needed
      { id: "delhi", label: "Delhi" },
      { id: "mumbai", label: "Mumbai" },
    ],
  },
  {
    row: [
      {
        label: "Starting Year",
        name: "startYear",
        placeholder: "Select Date",
        componentType: "calendar",
      },
      {
        label: "Ending Year",
        name: "endYear",
        placeholder: "Select Date",
        componentType: "calendar",
      },
    ],
  },
  {
    name: "location",
    placeholder: "e.g., Chicago, USA",
    componentType: "input",
    label: "Location",
    type: "text",
  },
];
export const projectsFields = [
  {
    name: "location",
    placeholder: "Enter Project Title",
    componentType: "input",
    label: "Project Title",
    type: "text",
  },
  {
    name: "",
    label: "Description",
    placeholder: "Enter Description",
    componentType: "textarea",
    type: "text",
  },
  {
    row: [
      {
        label: "Starting Year",
        name: "startYear",
        placeholder: "Select Date",
        componentType: "calendar",
      },
      {
        label: "Ending Year",
        name: "endYear",
        placeholder: "Select Date",
        componentType: "calendar",
      },
    ],
  },
];
export const certificatesFields = [
  {
    name: "location",
    placeholder: "Enter the name",
    componentType: "input",
    label: "Title",
    type: "text",
  },
  {
    name: "location",
    placeholder: "Enter the name",
    componentType: "input",
    label: "Issuing Organization",
    type: "text",
  },
  {
    name: "location",
    placeholder: "Enter the Credential URL",
    componentType: "input",
    label: "Credential URL",
    type: "text",
  },
  {
    row: [
      {
        label: "Starting Year",
        name: "startYear",
        placeholder: "Select Date",
        componentType: "calendar",
      },
      {
        label: "Ending Year",
        name: "endYear",
        placeholder: "Select Date",
        componentType: "calendar",
      },
    ],
  },
];
export const awardsFields = [
  {
    name: "location",
    placeholder: "Enter the name",
    componentType: "input",
    label: "Title",
    type: "text",
  },
  {
    name: "issuer",
    placeholder: "Enter Issuer",
    componentType: "input",
    label: "Issuer",
    type: "text",
  },
  {
    label: "Issue Date",
    name: "endYear",
    placeholder: "Select Date",
    componentType: "calendar",
  },
];
export const clubFields = [
  {
    name: "location",
    placeholder: "Enter the name",
    componentType: "input",
    label: "Title",
    type: "text",
  },
  {
    name: "issuer",
    placeholder: "Enter Issuer",
    componentType: "input",
    label: "Institution",
    type: "text",
  },
  {
    label: "Joining Date",
    name: "endYear",
    placeholder: "Select Date",
    componentType: "calendar",
  },
];
