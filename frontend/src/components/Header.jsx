import React from "react";
import { usePrivy } from '@privy-io/react-auth';

export default function Header() {
  const { ready, authenticated, login, logout, user } = usePrivy();
  const wallet = user?.wallet?.address;
  const shortWallet = wallet ? wallet.slice(0, 6) + "..." + wallet.slice(-4) : "";

  return (
    <header className="w-full flex items-center justify-between px-8 py-4 bg-white/70 backdrop-blur border-b border-indigo-100 shadow-lg z-50"
      style={{ boxShadow: "0 2px 16px 0 rgba(99,102,241,0.13)" }}>
      <div className="flex items-center gap-3">
        <div className="text-3xl font-extrabold bg-gradient-to-r from-indigo-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-glow animate-pulse">
          <span role="img" aria-label="logo">🪩</span> SoulFrame
        </div>
        <nav className="hidden md:flex gap-6 ml-10 text-base font-semibold">
          <a href="/" className="hover:text-indigo-500 transition">Home</a>
          <a href="/mysoulframe" className="hover:text-indigo-500 transition">My SoulFrame</a>
          <a href="/ai-agent" className="hover:text-indigo-500 transition">AI Agent</a>
        </nav>
      </div>
      <div>
        {!ready ? (
          <button disabled>Loading...</button>
        ) : authenticated ? (
          <span className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500 to-fuchsia-400 text-white font-mono shadow border border-indigo-200 text-sm">
            <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
            {shortWallet}
            <button onClick={logout} className="ml-3 px-2 py-1 rounded bg-white/20 text-xs border border-fuchsia-200 hover:bg-fuchsia-100 hover:text-indigo-700 transition">Disconnect</button>
          </span>
        ) : (
          <button
            className="bg-gradient-to-r from-indigo-500 to-fuchsia-400 text-white px-6 py-2 rounded-full font-bold shadow-lg hover:from-fuchsia-400 hover:to-indigo-500 transition border border-indigo-200"
            onClick={login}
          >
            Connect Wallet
          </button>
        )}
      </div>
    </header>
  );
}
