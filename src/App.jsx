import { Route, Routes } from "react-router-dom";
import RecruiterLayout from "./components/recruiter-view/layout";
import ProfileSetup from "./pages/recruiter-view/profile-setup";
import SignUp from "./pages/recruiter-view/sign-up";
import JobOpenings from "./pages/recruiter-view/job-openings";
import Dashboard from "./pages/recruiter-view/dashboard";
import Candidates from "./pages/recruiter-view/candidates";
import CandidateCreate from "./pages/recruiter-view/candidate-create";
import MatchesAndSubmission from "./pages/recruiter-view/matches-and-submission";
import ClientLoginPage from "./pages/client/client-login";
import ClientProfilePage from "./pages/client/client-profile";
import ClientLayout from "./components/client/ClientLayout";

function App() {
  return (
    <div className="flex flex-col overflow-hidden bg-white">
      <Routes>
        <Route path="/recruiter/profile-setup" element={<ProfileSetup />} />
        <Route path="/recruiter/sign-up" element={<SignUp />} />
        <Route path="/recruiter" element={<RecruiterLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="candidates" element={<Candidates />} />
          <Route
            path="candidates/candidate-create"
            element={<CandidateCreate />}
          />
          <Route path="job-openings" element={<JobOpenings />} />
          {/* <Route path="job-openings" element={<JobOpenings />} /> */}
          <Route
            path="matches-and-submissions"
            element={<MatchesAndSubmission />}
          />
        </Route>
        {/* <Route path="*" element={<NotFound />} /> */}

        {/* Client Routes */}
        <Route path="/client/login" element={<ClientLoginPage />} />
        <Route path="/client/profile" element={<ClientProfilePage />} />
        <Route path="/client" element={<ClientLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
