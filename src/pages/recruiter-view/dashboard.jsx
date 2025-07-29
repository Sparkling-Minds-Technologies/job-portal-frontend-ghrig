import DashboardComponent from "../../components/recruiter-view/dashboard";
import Navbar from "../../components/recruiter-view/navbar";

const RecruiterDashboard = () => {
  return (
    <div className="w-full flex flex-col gap-[40px]">
      <Navbar onlySupport={false} />
      <DashboardComponent />
    </div>
  );
};

export default RecruiterDashboard;
