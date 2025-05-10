import React from "react";
import { Link } from "react-router-dom";

export default function MySoulFrame() {
  // 실제 데이터 및 검증 로직은 추후 구현
  const metadata = {
    humanity_verified: true,
    traits: "분석적, NFT 관심, \"나만의 Web3 프로필\"",
    image: "https://placehold.co/200x200?text=AI+NFT+Image"
  };
  const userAddress = "0x1234...abcd";
  const verifierLink = `https://soulframe.verifier.io/?user=${userAddress}`;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#0f172a] via-[#312e81] to-[#a21caf] p-4">
      <div className="backdrop-blur-xl bg-white/10 border border-indigo-200/30 rounded-3xl shadow-2xl flex flex-col items-center px-10 py-12 max-w-md w-full animate-fade-in">
        <h2 className="text-3xl font-extrabold mb-6 bg-gradient-to-r from-indigo-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-glow">My SoulFrame</h2>
        <div className="relative mb-6">
          <img src={metadata.image} alt="NFT" className="w-32 h-32 rounded-full border-4 border-fuchsia-300 shadow-xl animate-fade-in" />
          <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-3 py-1 bg-gradient-to-r from-indigo-400 to-fuchsia-400 text-white rounded-full text-xs font-bold shadow animate-pulse">SoulFrame NFT</span>
        </div>
        <div className="bg-white/30 border border-indigo-200/30 rounded-xl p-4 text-center text-indigo-900 font-semibold text-lg shadow animate-fade-in-slow w-80 mb-4">
          <div className="mb-1">인증 완료: <span className="text-green-500 font-bold">O</span></div>
          <div>특성: {metadata.traits}</div>
        </div>
        <div className="mb-2 text-indigo-300 text-xs">내 주소: <span className="font-mono text-fuchsia-300">{userAddress}</span></div>
        <a href={verifierLink} target="_blank" rel="noopener noreferrer" className="inline-block mb-2 px-4 py-2 bg-gradient-to-r from-indigo-400 to-fuchsia-400 text-white rounded-full font-semibold shadow hover:from-fuchsia-400 hover:to-indigo-400 transition">외부 검증 링크</a>
        <Link to="/ai-agent">
          <button className="mt-6 w-full bg-gradient-to-r from-indigo-500 via-fuchsia-400 to-cyan-400 text-white py-3 rounded-full font-bold shadow-lg hover:from-fuchsia-400 hover:to-indigo-500 transition text-lg animate-pulse">AI Agent와 대화하기</button>
        </Link>
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
