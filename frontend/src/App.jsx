import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import HumanityAuth from "./pages/HumanityAuth";
import CreateProfile from "./pages/CreateProfile";
import MintSoulFrame from "./pages/MintSoulFrame";
import MySoulFrame from "./pages/MySoulFrame";
import AIAgentChat from "./pages/AIAgentChat";
import Header from "./components/Header";
import { privyLogin } from "./api/privy";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(!!window.localStorage.getItem("wallet"));

  const handleLogin = async () => {
    // Privy 팝업 또는 OAuth 연동 (실제 서비스에서는 Privy SDK 권장)
    const email = window.prompt("이메일을 입력하세요 (모의 팝업)");
    if (!email) return;
    const res = await privyLogin({ email });
    if (res.success) {
      window.localStorage.setItem("wallet", res.wallet);
      window.localStorage.setItem("privyToken", res.privyToken);
      setIsLoggedIn(true);
      window.location.reload(); // 인증 후 새로고침(상태 반영)
    } else {
      alert("로그인 실패");
    }
  };

  return (
    <Router>
      <Header onLogin={handleLogin} isLoggedIn={isLoggedIn} />
      <div className="pt-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/humanity-auth" element={<HumanityAuth />} />
          <Route path="/create-profile" element={<CreateProfile />} />
          <Route path="/mint" element={<MintSoulFrame />} />
          <Route path="/mysoulframe" element={<MySoulFrame />} />
          <Route path="/ai-agent" element={<AIAgentChat />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
