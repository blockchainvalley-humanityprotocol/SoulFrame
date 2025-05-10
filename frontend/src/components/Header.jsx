import React, { useState, useRef } from "react";

const avatarUrl = "https://api.dicebear.com/7.x/adventurer/svg?seed=SoulFrame";
const nickname = "hyenee3782"; // 임시 닉네임
const isHumanityVerified = true; // 인증 여부 (실제 연동시 상태로)

export default function Header({ onLogin, isLoggedIn }) {
  const wallet =
    typeof window !== "undefined"
      ? window.localStorage.getItem("wallet")
      : null;
  const shortWallet = wallet
    ? wallet.slice(0, 4) + "..." + wallet.slice(-4)
    : "";
  const [open, setOpen] = useState(false);
  const menuRef = useRef();

  React.useEffect(() => {
    function handleClick(e) {
      if (menuRef.current && !menuRef.current.contains(e.target))
        setOpen(false);
    }
    if (open) document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open]);

  return (
    <header
      className="w-full flex items-center justify-between px-8 py-4 bg-white/70 backdrop-blur border-b border-indigo-100 shadow-lg z-50"
      style={{ boxShadow: "0 2px 16px 0 rgba(99,102,241,0.13)" }}
    >
      <div className="flex items-center gap-3">
        <div className="text-3xl font-extrabold bg-gradient-to-r from-indigo-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-glow animate-pulse">
          <span role="img" aria-label="logo">
            🪩
          </span>{" "}
          SoulFrame
        </div>
        <nav className="hidden md:flex gap-6 ml-10 text-base font-semibold">
          <a href="/" className="hover:text-indigo-500 transition">
            Home
          </a>
          <a href="/mysoulframe" className="hover:text-indigo-500 transition">
            My SoulFrame
          </a>
          <a href="/ai-agent" className="hover:text-indigo-500 transition">
            AI Agent
          </a>
        </nav>
      </div>
      <div className="relative" ref={menuRef}>
        {isLoggedIn ? (
          <div
            className="flex items-center gap-2 cursor-pointer select-none"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
            onClick={() => setOpen((v) => !v)}
          >
            <img
              src={avatarUrl}
              alt="avatar"
              className="w-9 h-9 rounded-full border-2 border-fuchsia-400 shadow"
            />
            <div className="flex flex-col items-start">
              <div className="flex items-center gap-1">
                <span className="font-bold text-white">@{nickname}</span>
                {isHumanityVerified && (
                  <span className="ml-1 px-2 py-0.5 rounded-full bg-blue-700 text-xs text-white font-bold border border-blue-300">
                    .human
                  </span>
                )}
              </div>
              <div className="flex items-center gap-1">
                <span className="font-mono text-indigo-100 text-xs">
                  {shortWallet}
                </span>
                {isHumanityVerified && (
                  <span className="w-4 h-4 rounded-full bg-blue-500 border-2 border-white flex items-center justify-center text-white text-[10px] font-bold ml-1">
                    ✔
                  </span>
                )}
              </div>
            </div>
            {open && (
              <div
                className="absolute right-0 top-12 w-56 bg-gray-900 text-white rounded-2xl shadow-2xl border border-indigo-200/30 p-4 z-50 animate-fade-in"
                style={{ minWidth: 220 }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <img
                    src={avatarUrl}
                    alt="avatar"
                    className="w-10 h-10 rounded-full border-2 border-fuchsia-400"
                  />
                  <div>
                    <div className="font-bold text-base">
                      @{nickname}
                      {isHumanityVerified && (
                        <span className="ml-1 px-2 py-0.5 rounded-full bg-blue-700 text-xs text-white font-bold border border-blue-300">
                          .human
                        </span>
                      )}
                    </div>
                    <div className="font-mono text-indigo-200 text-xs">
                      {shortWallet}
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <a
                    href="/mysoulframe"
                    className="flex items-center gap-2 hover:bg-gray-800 rounded-lg px-3 py-2 transition"
                  >
                    <span className="text-lg">👤</span> My Profile
                  </a>
                  <a
                    href="/setting"
                    className="flex items-center gap-2 hover:bg-gray-800 rounded-lg px-3 py-2 transition"
                  >
                    <span className="text-lg">✏️</span> Setting
                  </a>
                  <button
                    className="flex items-center gap-2 hover:bg-gray-800 rounded-lg px-3 py-2 transition text-left"
                    onClick={() => {
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
            className="bg-gradient-to-r from-indigo-500 to-fuchsia-400 text-white px-6 py-2 rounded-full font-bold shadow-lg hover:from-fuchsia-400 hover:to-indigo-500 transition border border-indigo-200"
            onClick={onLogin}
          >
            Connect Wallet
          </button>
        )}
      </div>
    </header>
  );
}
