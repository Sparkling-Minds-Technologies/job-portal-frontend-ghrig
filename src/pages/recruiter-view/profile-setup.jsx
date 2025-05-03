import React from "react";
import Navbar from "../../components/recruiter-view/navbar";
import ProfileSetupComponent from "../../components/recruiter-view/profle-setup";

const ProfileSetup = () => {
  return (
    <div className="flex flex-col w-full">
      <Navbar />
      <ProfileSetupComponent />
    </div>
  );
};

export default ProfileSetup;
