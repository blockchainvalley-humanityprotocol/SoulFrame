import React from "react";
import { Link } from "react-router-dom";

export default function MySoulFrame() {
  // localStorage에서 NFT 메타데이터 불러오기
  let metadata = null;
  try {
    metadata = JSON.parse(window.localStorage.getItem("mysoulframe"));
  } catch (e) {
    metadata = null;
  }
  const userAddress = metadata?.wallet || "";
  const verifierLink = userAddress ? `https://soulframe.verifier.io/?user=${userAddress}` : "#";

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-[#f6fff2] via-[#e6f7e6] to-[#eaf6ff] flex flex-col items-center justify-center font-sans py-12 px-2">
      <div className="bg-white/80 rounded-3xl shadow-xl flex flex-col items-center px-8 py-10 max-w-lg w-full animate-fade-in">
        <h2 className="text-4xl font-extrabold mb-6 text-green-700 tracking-tight text-center">
          My SoulFrame
        </h2>
        {metadata ? (
          <>
            <div className="relative mb-6">
              <img
                src={metadata.image}
                alt="NFT"
                className="w-32 h-32 rounded-full border-4 border-green-300 shadow-xl animate-fade-in bg-white object-cover"
              />
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-3 py-1 bg-gradient-to-r from-green-500 to-green-700 text-white rounded-full text-xs font-bold shadow animate-pulse">
                SoulFrame NFT
              </span>
            </div>
            <div className="bg-white/80 border border-green-200 rounded-xl p-4 text-center text-green-900 font-semibold text-lg shadow animate-fade-in-slow w-full mb-4">
              <div className="mb-1">
                인증 완료: <span className="text-green-600 font-bold">O</span>
              </div>
              <div>Agent ID: <span className="font-mono text-xs text-green-600">{metadata.agentId}</span></div>
              <div>특성: {metadata.traits}</div>
              <div>AI 요약: {metadata.summary}</div>
              <div>자기소개: {metadata.intro}</div>
              <div>선호 대화 스타일: {metadata.chatStyle}</div>
              <div className="mt-2 text-xs text-gray-500 text-left overflow-x-auto max-h-32">
                <b>Agent 캐릭터 파일:</b>
                <pre className="whitespace-pre-wrap break-all bg-gray-50 rounded p-2 mt-1 max-h-24 overflow-y-auto">{JSON.stringify(metadata.character, null, 2)}</pre>
              </div>
            </div>
            <div className="mb-2 text-green-700 text-xs">
              내 주소: {" "}
              <span className="font-mono text-green-600">{userAddress}</span>
            </div>
            <a
              href={verifierLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mb-2 px-4 py-2 bg-green-700 hover:bg-green-800 text-white rounded-full font-semibold shadow transition"
            >
              외부 검증 링크
            </a>
            <Link to="/ai-agent">
              <button className="mt-6 w-full bg-green-700 hover:bg-green-800 text-white px-8 py-4 rounded-xl font-bold text-xl shadow-md transition">
                AI Agent와 대화하기
              </button>
            </Link>
          </>
        ) : (
          <div className="text-indigo-200 text-lg font-bold mb-8">아직 발행된 SoulFrame NFT가 없습니다.</div>
        )}
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
