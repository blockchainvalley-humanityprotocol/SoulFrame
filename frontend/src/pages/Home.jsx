import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#0f172a] via-[#312e81] to-[#a21caf] p-4">
      <div className="backdrop-blur-xl bg-white/10 border border-indigo-200/30 rounded-3xl shadow-2xl flex flex-col items-center px-10 py-12 max-w-lg w-full animate-fade-in">
        <h1 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-indigo-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-glow animate-pulse">
          SoulFrame
        </h1>
        <p className="mb-8 text-xl text-white/90 font-medium tracking-tight text-center">
          블록체인 위에 새겨진 나의 정체성
        </p>
        <div className="mb-8 w-full">
          <div className="mb-3 text-base text-indigo-100 text-center">
            Web3에서 나만의 신뢰 가능한 프로필을 만들어보세요.
          </div>
          <div className="text-indigo-300 text-center text-sm">
            상단의{" "}
            <span className="font-semibold text-fuchsia-300">
              Connect Wallet
            </span>{" "}
            버튼을 눌러 시작하세요.
          </div>
        </div>
        <div className="mt-6 text-xs text-indigo-200 text-center">
          Powered by{" "}
          <span className="font-bold text-fuchsia-300">Humanity Protocol</span>{" "}
          & <span className="font-bold text-cyan-300">ElizaOS</span>
        </div>
      </div>
      <style>{`
        .drop-shadow-glow { text-shadow: 0 0 16px #a5b4fc, 0 0 32px #f0abfc; }
        .animate-fade-in { animation: fadeIn 1.2s cubic-bezier(.4,0,.2,1) both; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(30px);} to { opacity: 1; transform: none; } }
      `}</style>
    </div>
  );
}
