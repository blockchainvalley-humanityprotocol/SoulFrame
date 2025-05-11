import React, { useState, useRef } from "react";
import { usePrivy } from "@privy-io/react-auth";
import AI1 from "../assets/AI1.png";
import Logo from "../assets/Logo.png";

const nickname = "hyenee3782"; // 임시 닉네임
const isHumanityVerified = true; // 인증 여부 (실제 연동시 상태로)

export default function Header() {
  const { login, logout, ready, authenticated, user } = usePrivy();
  const wallet =
    user?.wallet?.address ||
    (typeof window !== "undefined"
      ? window.localStorage.getItem("wallet")
      : null);
  const shortWallet = wallet
    ? wallet.slice(0, 6) + "..." + wallet.slice(-4)
    : "";

  React.useEffect(() => {
    if (user?.wallet?.address && typeof window !== "undefined") {
      window.localStorage.setItem("wallet", user.wallet.address);
    }
  }, [user]);
  const [open, setOpen] = useState(false);
  const menuRef = useRef();
  const closeTimer = useRef(null);

  const handleMouseEnter = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
    setOpen(true);
  };

  const handleMouseLeave = () => {
    closeTimer.current = setTimeout(() => {
      setOpen(false);
    }, 250); // 250ms delay
  };

  React.useEffect(() => {
    function handleClick(e) {
      if (menuRef.current && !menuRef.current.contains(e.target))
        setOpen(false);
    }
    if (open) document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open]);

  return (
    <header className="fixed top-0 left-0 w-full z-[1000] bg-black/80 backdrop-blur-md border-b border-white/10 shadow-xl flex items-center justify-between px-8 py-4">
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2">
          <img src={Logo} alt="SoulFrame Logo" className="w-40 h-15" />
        </div>
        <nav className="flex gap-6 ml-10 text-base font-medium">
          <a href="/" className="text-white hover:text-green-400 transition">
            Home
          </a>
          <a
            href="/mint"
            className="text-white hover:text-green-400 transition"
          >
            Mint
          </a>
          <a
            href="/ai-agent"
            className="text-white hover:text-green-400 transition"
          >
            My AI-NFT
          </a>
          <a
            href="https://docs.soulframe.io"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-green-400 transition"
          >
            Docs
          </a>
        </nav>
      </div>
      <div
        className="relative"
        ref={menuRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {authenticated ? (
          <div
            className="flex items-center gap-2 cursor-pointer select-none bg-purple-500/5 border border-purple-500/20 rounded-full px-3 py-1 shadow-md hover:bg-purple-500/10 transition text-purple-400"
            onClick={() => setOpen((v) => !v)}
          >
            <img
              src={AI1}
              alt="avatar"
              className="w-9 h-9 rounded-full border-2 border-purple-400 shadow"
            />
            <div className="flex flex-col items-start">
              <div className="flex items-center gap-1">
                <span className="font-semibold text-purple-400">
                  @{nickname}
                </span>
                {isHumanityVerified && (
                  <span className="ml-1 px-2 py-0.5 rounded-full bg-green-500/20 text-xs text-green-400 font-semibold border border-green-500/30">
                    .human
                  </span>
                )}
              </div>
              <div className="flex items-center gap-1">
                <span className="font-mono text-purple-300 text-xs">
                  {shortWallet}
                </span>
                {isHumanityVerified && (
                  <span className="w-4 h-4 rounded-full bg-green-500 border-2 border-white flex items-center justify-center text-white text-[10px] font-semibold ml-1">
                    ✔
                  </span>
                )}
              </div>
            </div>
            {open && (
              <div
                className="absolute right-0 top-12 w-56 bg-[#1A1B1E]/95 text-purple-400 rounded-2xl shadow-xl border border-purple-400/20 p-4 z-50 animate-fade-in backdrop-blur"
                style={{ minWidth: 220 }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <img
                    src={AI1}
                    alt="avatar"
                    className="w-10 h-10 rounded-full border-2 border-purple-400"
                  />
                  <div>
                    <div className="font-semibold text-base text-purple-400">
                      @{nickname}
                      {isHumanityVerified && (
                        <span className="ml-1 px-2 py-0.5 rounded-full bg-green-500/20 text-xs text-green-400 font-semibold border border-green-500/30">
                          .human
                        </span>
                      )}
                    </div>
                    <div className="font-mono text-purple-300 text-xs">
                      {shortWallet}
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <a
                    href="/profile"
                    className="flex items-center gap-2 hover:bg-purple-400/10 rounded-lg px-3 py-2 transition"
                  >
                    <span className="text-lg">👤</span> My Profile
                  </a>
                  <a
                    href="/setting"
                    className="flex items-center gap-2 hover:bg-purple-400/10 rounded-lg px-3 py-2 transition"
                  >
                    <span className="text-lg">✏️</span> Setting
                  </a>
                  <button
                    className="flex items-center gap-2 hover:bg-purple-400/10 rounded-lg px-3 py-2 transition text-left"
                    onClick={async () => {
                      await logout();
                      window.localStorage.removeItem("wallet");
                      window.location.reload();
                    }}
                  >
                    <span className="text-lg">⏏️</span> Disconnect
                  </button>
                </div>
              </div>
            )}
          </div>
        ) : (
          <button
            className="bg-purple-500/5 hover:bg-purple-500/10 text-purple-400 px-6 py-2 rounded-full font-semibold shadow-md border border-purple-500/20 transition"
            onClick={login}
          >
            Connect Wallet
          </button>
        )}
      </div>
      <style>{`
        .drop-shadow-glow { text-shadow: 0 0 16px rgba(74, 222, 128, 0.4), 0 0 32px rgba(74, 222, 128, 0.2); }
        .animate-fade-in { animation: fadeIn 1.2s cubic-bezier(.4,0,.2,1) both; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(30px);} to { opacity: 1; transform: none; } }
      `}</style>
    </header>
  );
}
