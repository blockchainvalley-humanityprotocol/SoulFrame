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
    <header className="w-full flex items-center justify-between px-8 py-4 bg-gradient-to-r from-[#f6fff2] via-[#e6f7e6] to-[#eaf6ff] border-b border-green-100 shadow z-50">
      <div className="flex items-center gap-3">
        <div className="text-2xl font-extrabold text-green-700 tracking-tight flex items-center gap-2">
          <span role="img" aria-label="logo">
            🟢
          </span>
          SoulFrame
        </div>
        <nav className="flex gap-6 ml-10 text-base font-semibold text-green-900">
          <a href="/" className="hover:text-green-700 transition">
            Home
          </a>
          <a href="/create" className="hover:text-green-700 transition">
            Create
          </a>
          <a href="/verify" className="hover:text-green-700 transition">
            Verify
          </a>
          <a href="/mint" className="hover:text-green-700 transition">
            Mint
          </a>
          <a href="/profile" className="hover:text-green-700 transition">
            Profile
          </a>
          <a href="/ai-agent" className="hover:text-green-700 transition">
            AI Agent
          </a>
          <a href="/dao-access" className="hover:text-green-700 transition">
            DAO Access
          </a>
          <a
            href="https://docs.soulframe.io"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-700 transition"
          >
            Docs
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
              className="w-9 h-9 rounded-full border-2 border-green-400 shadow"
            />
            <div className="flex flex-col items-start">
              <div className="flex items-center gap-1">
                <span className="font-bold text-green-900">@{nickname}</span>
                {isHumanityVerified && (
                  <span className="ml-1 px-2 py-0.5 rounded-full bg-green-200 text-xs text-green-800 font-bold border border-green-300">
                    .human
                  </span>
                )}
              </div>
              <div className="flex items-center gap-1">
                <span className="font-mono text-green-700 text-xs">
                  {shortWallet}
                </span>
                {isHumanityVerified && (
                  <span className="w-4 h-4 rounded-full bg-green-500 border-2 border-white flex items-center justify-center text-white text-[10px] font-bold ml-1">
                    ✔
                  </span>
                )}
              </div>
            </div>
            {open && (
              <div
                className="absolute right-0 top-12 w-56 bg-white text-green-900 rounded-2xl shadow-2xl border border-green-200 p-4 z-50 animate-fade-in"
                style={{ minWidth: 220 }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <img
                    src={avatarUrl}
                    alt="avatar"
                    className="w-10 h-10 rounded-full border-2 border-green-400"
                  />
                  <div>
                    <div className="font-bold text-base">
                      @{nickname}
                      {isHumanityVerified && (
                        <span className="ml-1 px-2 py-0.5 rounded-full bg-green-200 text-xs text-green-800 font-bold border border-green-300">
                          .human
                        </span>
                      )}
                    </div>
                    <div className="font-mono text-green-700 text-xs">
                      {shortWallet}
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <a
                    href="/profile"
                    className="flex items-center gap-2 hover:bg-green-50 rounded-lg px-3 py-2 transition"
                  >
                    <span className="text-lg">👤</span> My Profile
                  </a>
                  <a
                    href="/setting"
                    className="flex items-center gap-2 hover:bg-green-50 rounded-lg px-3 py-2 transition"
                  >
                    <span className="text-lg">✏️</span> Setting
                  </a>
                  <button
                    className="flex items-center gap-2 hover:bg-green-50 rounded-lg px-3 py-2 transition text-left"
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
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full font-bold shadow-lg border border-green-300"
            onClick={onLogin}
          >
            Connect Wallet
          </button>
        )}
      </div>
    </header>
  );
}
