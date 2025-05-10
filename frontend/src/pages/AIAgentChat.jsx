import React from "react";

export default function AIAgentChat() {
  // 실제 ElizaOS 연동 및 대화 로직은 추후 구현
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#0f172a] via-[#312e81] to-[#a21caf] p-4">
      <div className="backdrop-blur-xl bg-white/10 border border-indigo-200/30 rounded-3xl shadow-2xl flex flex-col items-center px-10 py-12 max-w-lg w-full animate-fade-in">
        <h2 className="text-3xl font-extrabold mb-6 bg-gradient-to-r from-indigo-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-glow">AI Agent 대화</h2>
        <div className="bg-white/20 border border-indigo-200/30 rounded-xl p-5 w-full text-center mb-6 animate-fade-in-slow">
          <div className="mb-2 text-fuchsia-400 font-semibold">“내 정체성 기반으로 나를 소개해줘”</div>
          <div className="mb-2 text-cyan-400 font-semibold">“이력 기반으로 추천해줄 Web3 커뮤니티 있어?”</div>
          <div className="text-xs text-indigo-300">(ElizaOS 연동 예정)</div>
        </div>
        <input className="border border-indigo-200/40 bg-white/20 text-indigo-900 placeholder:text-indigo-300 px-4 py-3 rounded-xl w-full shadow focus:border-fuchsia-400 focus:ring-2 focus:ring-fuchsia-200/40 transition mb-3 opacity-60 cursor-not-allowed" placeholder="메시지 입력... (준비중)" disabled />
        <button className="w-full bg-gradient-to-r from-indigo-400 via-fuchsia-400 to-cyan-400 text-white py-3 rounded-full font-bold shadow-lg opacity-60 cursor-not-allowed text-lg" disabled>전송</button>
      </div>
      <style>{`
        .drop-shadow-glow { text-shadow: 0 0 16px #a5b4fc, 0 0 32px #f0abfc; }
        .animate-fade-in { animation: fadeIn 1.2s cubic-bezier(.4,0,.2,1) both; }
        .animate-fade-in-slow { animation: fadeIn 2.2s cubic-bezier(.4,0,.2,1) both; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(30px);} to { opacity: 1; transform: none; } }
      `}</style>
    </div>
  );
}
