import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./pages/Main/main";
import CreateVote from "./pages/Balance/createVote";
import BalanceMain from "./pages/Balance/balanceMain";
import VoteRegister from "./pages/Balance/voteRegister";
import VoteDetail from "./pages/Balance/voteDetail";
import Signup from "./pages/Main/Signup";
import Login from "./pages/Main/Login";
import Mypage from "./pages/Mypage/mypage";
import FeedbackPage from "./pages/Mypage/FeedbackPage";
import SpecDiagnosis from "./pages/Spec/SpecDiagnosis";

import SpecOpinion from "./pages/Spec/SpecOpinion";
import CreateOpinion from "./pages/Spec/createOpinion";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/balanceMain" element={<BalanceMain />} />
        <Route path="/createVote" element={<CreateVote />} />
        <Route path="/voteRegister" element={<VoteRegister />} />
        <Route path="/voteDetail/:postId" element={<VoteDetail />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/feedback" element={<FeedbackPage />} />
        <Route path="/spec" element={<SpecDiagnosis />} />
        <Route path="/specOpinion" element={<SpecOpinion />} />
        <Route path="/createOpinion" element={<CreateOpinion />} />
      </Routes>
    </Router>
  );
}

export default App;
