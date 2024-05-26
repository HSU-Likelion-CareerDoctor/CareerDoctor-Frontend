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

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/balanceMain" element={<BalanceMain />} />
        <Route path="/createVote" element={<CreateVote />} />
        <Route path="/voteRegister" element={<VoteRegister />} />
        <Route path="/voteDetail" element={<VoteDetail />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/feedback" element={<FeedbackPage />} />
      </Routes>
    </Router>
  );
}

export default App;
