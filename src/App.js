import "./App.css";
import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import DashBoard from "./Pages/DashBoard";
import TalkToExperts from "./Pages/TalkToExperts";
import Exams from "./Pages/Exams";
import Statistics from "./Pages/Stats";
import ExpertChat from "./Pages/ExpertChat";
import MCQExam from "./Pages/MCQExam";
import OpenEndedExam from "./Pages/OpenEndedExam";
import { useContext, useEffect } from "react";
import { AuthContext } from "./context/AuthContextProvider";
const RequeireAuth = () => {
  const authCtx = useContext(AuthContext);
  if (!authCtx.isLoggedIn) {
    return <Navigate to={"/login"} />;
  }
  return <Outlet />;
};
function App() {

  return (
    <div className="h-screen">
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route element={<RequeireAuth />}>
          <Route path="/" element={<DashBoard />} />
          <Route path="/talk-to-expert" element={<TalkToExperts />} />
          <Route path="/exam" element={<Exams />} />
          <Route path="/stats/:examId" element={<Statistics />} />
          <Route path="/expertChat/:fileId" element={<ExpertChat />} />
          <Route path="/exam/mcq/:examId" element={<MCQExam />} />
          <Route path="/exam/openEnd/:examId" element={<OpenEndedExam />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
