import React from "react";
import Navbar from "../../components/recruiter-view/navbar";
import ClientProfile from "../../components/client/ClientProfile/ClientProfile";

const ClientProfilePage = () => {
  return (
    <div className="flex flex-col w-full">
      <Navbar />
      <ClientProfile />
    </div>
  );
};

export default ClientProfilePage;
