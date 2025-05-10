import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import HumanityAuth from "./pages/HumanityAuth";
import CreateProfile from "./pages/CreateProfile";
import MintSoulFrame from "./pages/MintSoulFrame";
import MySoulFrame from "./pages/MySoulFrame";
import AIAgentChat from "./pages/AIAgentChat";
import Header from "./components/Header";
import { PrivyProvider } from "@privy-io/react-auth";

function App() {
  return (
    <PrivyProvider appId="cmahyjqcc01uoi90np9ilatp2">
      <Router>
        <Header />
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
    </PrivyProvider>
  );
}

export default App;
