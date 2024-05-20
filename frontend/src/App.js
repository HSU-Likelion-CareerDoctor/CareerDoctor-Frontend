import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./pages/Main/main";
import CreateVote from "./pages/Balance/createVote";
import BalanceMain from "./pages/Balance/balanceMain";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/balanceMain" element={<BalanceMain />} />
        <Route path="/createVote" element={<CreateVote />} />
      </Routes>
    </Router>
  );
}

export default App;
