import React, { useState } from "react";
import character1 from "../assets/character_1.jpeg";
import { useNavigate } from "react-router-dom";
import { getAISummary } from "../api/elizaos";
import { usePrivy } from "@privy-io/react-auth";

export default function MintSoulFrame() {
  const { user } = usePrivy();
  // 실제 SBT 체크 및 NFT 민팅 로직은 추후 구현
  const [hasSBT, setHasSBT] = useState(false); // 실제 인증 결과 반영
  // 프론트에서만 사용하는 인증 시뮬레이션 state
  const [isVerified, setIsVerified] = useState(false);
  const [minted, setMinted] = useState(false); // 실제 민팅 여부
  const [metadata, setMetadata] = useState(null); // NFT 메타데이터
  const [showModal, setShowModal] = useState(false); // 민팅 성공 모달

  // 입력값 상태
  const [traits, setTraits] = useState("");
  const [interests, setInterests] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  // NFT 발행 핸들러
  const handleMint = () => {
    // 입력값만 있으면 바로 모달 오픈
    if (traits && interests) {
      setShowModal(true);
      setMetadata({ summary: "AI가 생성한 요약입니다." }); // summary 더미값
      setMinted(true);
      setError(null);
    } else {
      setError("성격과 관심사를 입력해 주세요.");
    }
  };

  return (
    <div className="w-full min-h-screen bg-[#0C0E10] flex flex-col items-center justify-center font-sans py-12 px-2">
      <div className="bg-[#1A1B1E] rounded-3xl shadow-xl flex flex-col items-center px-8 py-10 max-w-lg w-full animate-fade-in border border-white">
        <h2 className="text-4xl font-extrabold mb-6 text-white tracking-tight text-center">
          Mint Your Soul NFT
        </h2>
        {!hasSBT && !isVerified ? (
          <>
            <button
              className="w-full bg-[#1A1B1E] border border-white text-white px-8 py-4 rounded-xl font-bold text-xl shadow-md transition mb-6 hover:bg-[#232428]"
              onClick={() => setIsVerified(true)}
            >
              Verify your humanity
            </button>
          </>
        ) : (
          <>
            <div className="w-full mb-4">
              <label className="block mb-2 font-semibold text-white">
                성격 (쉼표로 구분)
              </label>
              <input
                value={traits}
                onChange={(e) => setTraits(e.target.value)}
                className="w-full p-2 rounded bg-[#232428] text-white placeholder-white border border-white focus:outline-none"
                placeholder="예: 차분함, 도전적임, 유머러스함"
              />
            </div>
            <div className="w-full mb-6">
              <label className="block mb-2 font-semibold text-white">
                관심사/취미 (쉼표로 구분)
              </label>
              <input
                value={interests}
                onChange={(e) => setInterests(e.target.value)}
                className="w-full p-2 rounded bg-[#232428] text-white placeholder-white border border-white focus:outline-none"
                placeholder="예: 음악, 독서, 투자"
              />
            </div>
            {error && (
              <div className="text-red-400 font-bold mb-3">{error}</div>
            )}
            <button
              className="w-full bg-[#1A1B1E] border border-white text-white px-8 py-4 rounded-xl font-bold text-xl shadow-md transition mb-4 hover:bg-[#232428] disabled:opacity-60"
              onClick={handleMint}
              disabled={loading || !traits || !interests}
            >
              {loading ? "NFT 발행 중..." : "NFT 발행하기"}
            </button>
          </>
        )}
        {/* 민팅 성공 모달 */}
        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
            <div
              className="bg-[#1A1B1E] rounded-2xl shadow-2xl p-8 flex flex-col items-center animate-fade-in border border-white"
              style={{ minWidth: 320 }}
            >
              <h3 className="text-2xl font-bold mb-4 text-white">
                🎉 NFT 발행 완료!
              </h3>
              <img
                src={character1}
                alt="NFT"
                className="w-28 h-28 rounded-full border-4 border-fuchsia-300 shadow mb-4"
              />
              <div className="text-white text-center mb-2">
                <div>
                  <b>성격:</b> {traits}
                </div>
                <div>
                  <b>관심사/취미:</b> {interests}
                </div>
              </div>
              <button
                className="mt-2 mb-2 bg-[#1A1B1E] border border-white text-white px-6 py-2 rounded-full font-bold shadow-lg hover:bg-[#232428] transition"
                onClick={() => {
                  setShowModal(false);
                  navigate("/ai-agent");
                }}
              >
                AI NFT 확인하기
              </button>
            </div>
          </div>
        )}
      </div>
      <style>{`
        .drop-shadow-glow { text-shadow: 0 0 16px #a5b4fc, 0 0 32px #f0abfc; }
        .animate-fade-in { animation: fadeIn 1.2s cubic-bezier(.4,0,.2,1) both; }
        .animate-fade-in-slow { animation: fadeIn 2.2s cubic-bezier(.4,0,.2,1) both; }
        .animate-shake { animation: shake 0.3s linear 1; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(30px);} to { opacity: 1; transform: none; } }
        @keyframes shake { 10%, 90% { transform: translateX(-2px); } 20%, 80% { transform: translateX(4px); } 30%, 50%, 70% { transform: translateX(-8px); } 40%, 60% { transform: translateX(8px); } }
      `}</style>
    </div>
  );
}
