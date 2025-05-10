import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAISummary } from "../api/elizaos";
import { issueVC } from "../api/humanity";

export default function MintSoulFrame() {
  // 실제 SBT 체크 및 NFT 민팅 로직은 추후 구현
  const hasSBT = true; // 예시: 인증 완료 상태
  const [minted, setMinted] = useState(false); // 실제 민팅 여부
  const [metadata, setMetadata] = useState(null); // NFT 메타데이터

  // 입력값 상태
  const [intro, setIntro] = useState("");
  const [traits, setTraits] = useState("");
  const [chatStyle, setChatStyle] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  // NFT 발행 핸들러
  const handleMint = async () => {
    setLoading(true);
    setError("");
    try {
      // 1. AI 요약/이미지 생성
      const aiRes = await getAISummary({
        trait: traits,
        interest: chatStyle,
        intro,
      });
      setMetadata(aiRes);
      // 2. NFT 발행(VC 발급)
      // 예시: 현재 유저의 address를 subject_address로 전달해야 함 (실제 서비스에 맞게 수정)
      const address = "0x1234...user"; // TODO: 실제 유저 지갑 주소로 대체
      await issueVC({
        claims: {
          intro,
          traits,
          chatStyle,
          aiSummary: aiRes.summary,
          aiImage: aiRes.image,
        },
        subject_address: address,
      });
      setMinted(true);
      setTimeout(() => navigate("/mysoulframe"), 1200);
    } catch (e) {
      setError("NFT 발행 중 오류가 발생했습니다. 다시 시도해 주세요.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#0f172a] via-[#312e81] to-[#a21caf] p-4">
      <div className="backdrop-blur-xl bg-white/10 border border-indigo-200/30 rounded-3xl shadow-2xl flex flex-col items-center px-10 py-12 max-w-md w-full animate-fade-in">
        <h2 className="text-3xl font-extrabold mb-6 bg-gradient-to-r from-indigo-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-glow">
          SoulFrame NFT 발행
        </h2>
        {!hasSBT ? (
          <div className="bg-white/20 border border-red-300/30 rounded-xl px-6 py-4 text-red-400 font-bold mb-3 animate-shake">
            Humanity 인증이 필요합니다.
          </div>
        ) : minted ? (
          <div className="flex flex-col items-center space-y-5 w-80">
            <div className="relative">
              <img
                src={
                  metadata?.image ||
                  "https://placehold.co/200x200?text=AI+NFT+Image"
                }
                alt="NFT"
                className="w-32 h-32 rounded-full border-4 border-fuchsia-300 shadow-xl animate-fade-in"
              />
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-3 py-1 bg-gradient-to-r from-indigo-400 to-fuchsia-400 text-white rounded-full text-xs font-bold shadow animate-pulse">
                SoulFrame NFT
              </span>
            </div>
            <div className="bg-white/30 border border-indigo-200/30 rounded-xl p-4 text-center text-indigo-900 font-semibold text-lg shadow animate-fade-in-slow">
              <div className="mb-1">
                인증 완료: <span className="text-green-500 font-bold">O</span>
              </div>
              <div>특성: {traits}</div>
              <div>AI 요약: {metadata?.summary}</div>
            </div>
          </div>
        ) : (
          <>
            <div className="w-full mb-4">
              <label className="block mb-2 font-semibold">자기소개</label>
              <textarea
                value={intro}
                onChange={(e) => setIntro(e.target.value)}
                className="w-full p-2 rounded"
                rows={2}
                placeholder="나를 한 줄로 소개해 주세요"
              />
            </div>
            <div className="w-full mb-4">
              <label className="block mb-2 font-semibold">
                성격 키워드 (쉼표로 구분)
              </label>
              <input
                value={traits}
                onChange={(e) => setTraits(e.target.value)}
                className="w-full p-2 rounded"
                placeholder="예: 분석적, 창의적, 친화적"
              />
            </div>
            <div className="w-full mb-6">
              <label className="block mb-2 font-semibold">
                선호하는 대화 스타일
              </label>
              <input
                value={chatStyle}
                onChange={(e) => setChatStyle(e.target.value)}
                className="w-full p-2 rounded"
                placeholder="예: 논리적, 따뜻한, 유머러스"
              />
            </div>
            {error && (
              <div className="text-red-400 font-bold mb-3">{error}</div>
            )}
            <button
              className="w-full bg-gradient-to-r from-indigo-500 via-fuchsia-400 to-cyan-400 text-white py-3 rounded-full font-bold shadow-lg hover:from-fuchsia-400 hover:to-indigo-500 transition text-lg animate-pulse mb-4 disabled:opacity-60"
              onClick={handleMint}
              disabled={loading || !intro || !traits || !chatStyle}
            >
              {loading ? "NFT 발행 중..." : "NFT 발행하기"}
            </button>
          </>
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
