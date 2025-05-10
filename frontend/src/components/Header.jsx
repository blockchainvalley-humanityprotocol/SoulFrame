import React, { useState, useRef } from "react";
import { usePrivy } from "@privy-io/react-auth";

const avatarUrl = "https://api.dicebear.com/7.x/adventurer/svg?seed=SoulFrame";
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
    <header className="w-full flex items-center justify-between px-8 py-4 bg-gradient-to-r from-[#f6fff2] via-[#e6f7e6] to-[#eaf6ff] border-b border-green-100 shadow-md z-50 font-sans">
      <div className="flex items-center gap-3">
        <div className="text-2xl font-extrabold text-green-700 tracking-tight flex items-center gap-2 drop-shadow">
          <span role="img" aria-label="logo">
            🟢
          </span>
          SoulFrame
        </div>
        <nav className="flex gap-6 ml-10 text-base font-semibold text-green-900">
          <a href="/" className="hover:text-green-700 hover:bg-green-50 rounded-lg px-3 py-1 transition">Home</a>
          <a href="/mint" className="hover:text-green-700 hover:bg-green-50 rounded-lg px-3 py-1 transition">Mint</a>
          <a href="/ai-agent" className="hover:text-green-700 hover:bg-green-50 rounded-lg px-3 py-1 transition">My AI-NFT</a>
          <a
            href="https://docs.soulframe.io"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-700 hover:bg-green-50 rounded-lg px-3 py-1 transition"
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
            className="flex items-center gap-2 cursor-pointer select-none bg-white/80 border border-green-200 rounded-full px-3 py-1 shadow-md hover:shadow-lg transition"
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
                className="absolute right-0 top-12 w-56 bg-white/90 text-green-900 rounded-2xl shadow-xl border border-green-200 p-4 z-50 animate-fade-in backdrop-blur"
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
            className="bg-green-700 hover:bg-green-800 text-white px-6 py-2 rounded-full font-bold shadow-md border border-green-300 transition"
            onClick={login}
          >
            Connect Wallet
          </button>
        )}
      </div>
    </header>
  );
}
