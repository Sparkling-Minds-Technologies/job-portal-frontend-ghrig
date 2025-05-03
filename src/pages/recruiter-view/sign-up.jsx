import React from "react";
import Navbar from "../../components/recruiter-view/navbar";
import SignUpComponent from "../../components/recruiter-view/sign-up";

const SignUp = () => {
  return (
    <div className="flex flex-col w-full">
      <Navbar />
      <SignUpComponent />
    </div>
  );
};

export default SignUp;
