import React from "react";
import Navbar from "../../components/recruiter-view/navbar";
import SignUpComponent from "../../components/recruiter-view/sign-up";
import ClientLogin from "../../components/client/ClientLogin/ClientLogin";

const ClientLoginPage = () => {
  return (
    <div className="flex flex-col w-full">
      <Navbar />
      <ClientLogin />
    </div>
  );
};

export default ClientLoginPage;
