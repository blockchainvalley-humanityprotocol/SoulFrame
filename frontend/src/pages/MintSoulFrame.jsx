import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAISummary } from "../api/elizaos";
import { isKycVerified } from "../api/humanity";
import { usePrivy } from "@privy-io/react-auth";

export default function MintSoulFrame() {
  const { user } = usePrivy();
  // 실제 SBT 체크 및 NFT 민팅 로직은 추후 구현
  const [hasSBT, setHasSBT] = useState(false); // 실제 인증 결과 반영
  const [minted, setMinted] = useState(false); // 실제 민팅 여부
  const [metadata, setMetadata] = useState(null); // NFT 메타데이터
  const [showModal, setShowModal] = useState(false); // 민팅 성공 모달

  // 입력값 상태
  const [intro, setIntro] = useState("");
  const [traits, setTraits] = useState("");
  const [chatStyle, setChatStyle] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [uploadedImage, setUploadedImage] = useState(null); // 유저가 업로드한 이미지
  const [uploadedImageUrl, setUploadedImageUrl] = useState("");

  const navigate = useNavigate();

  // NFT 발행 핸들러
  const handleMint = async () => {
    setLoading(true);
    setError("");
    try {
      // 현재 로그인된 privy wallet address를 subject_address로 사용
      const address = user?.wallet?.address;
      if (!address) throw new Error("지갑 주소를 찾을 수 없습니다. 로그인 상태를 확인해 주세요.");
      // 1. KYC 인증 여부 확인
      // (임시) Humanity API를 사용할 수 없으므로 무조건 인증된 것으로 처리
      const verified = true;
      setHasSBT(true);
      // 아래 코드는 실제 API 사용 시 복구
      // const verified = await isKycVerified(address);
      // setHasSBT(verified);
      // if (!verified) {
      //   setError("Humanity KYC 인증이 필요합니다. 인증 후 다시 시도해 주세요.");
      //   setLoading(false);
      //   return;
      // }
      // 2. elizaos agent 생성 (id/summary/image/character 반환)
      const aiRes = await getAISummary({
        trait: traits,
        interest: chatStyle,
        intro,
      });
      // 이미지: 업로드한 이미지가 있으면 그걸 사용, 없으면 elizaos 결과 사용
      const finalImage = uploadedImageUrl || aiRes.image;
      setMetadata({ ...aiRes, image: finalImage });
      // 민팅 성공 시 localStorage에 ainft 정보 저장
      window.localStorage.setItem("mysoulframe", JSON.stringify({
        agentId: aiRes.id,
        image: finalImage,
        summary: aiRes.summary,
        character: aiRes.character,
        traits,
        intro,
        chatStyle,
        wallet: address
      }));
      setMinted(true);
      setShowModal(true);
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
              <label className="block mb-2 font-semibold">
                NFT 이미지 업로드 (선택)
              </label>
              <input
                type="file"
                accept="image/*"
                className="mb-2"
                onChange={(e) => {
                  const file = e.target.files[0];
                  if (file) {
                    setUploadedImage(file);
                    const reader = new FileReader();
                    reader.onloadend = () => setUploadedImageUrl(reader.result);
                    reader.readAsDataURL(file);
                  } else {
                    setUploadedImage(null);
                    setUploadedImageUrl("");
                  }
                }}
              />
              {uploadedImageUrl && (
                <img
                  src={uploadedImageUrl}
                  alt="미리보기"
                  className="w-24 h-24 rounded-full border-2 border-fuchsia-300 shadow mb-2 object-cover"
                />
              )}
            </div>
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
        {/* 민팅 성공 모달 */}
        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
            <div
              className="bg-white rounded-2xl shadow-2xl p-8 flex flex-col items-center animate-fade-in"
              style={{ minWidth: 320 }}
            >
              <h3 className="text-2xl font-bold mb-4 text-indigo-700">
                🎉 NFT 발행 완료!
              </h3>
              <img
                src={
                  metadata?.image ||
                  "https://placehold.co/200x200?text=AI+NFT+Image"
                }
                alt="NFT"
                className="w-28 h-28 rounded-full border-4 border-fuchsia-300 shadow mb-4"
              />
              <div className="text-center text-lg font-semibold mb-2">
                AI 성격 요약
              </div>
              <div className="bg-indigo-50 px-4 py-2 rounded-xl text-indigo-900 text-center mb-4">
                {metadata?.summary}
              </div>
              <button
                className="mt-2 bg-gradient-to-r from-indigo-500 to-fuchsia-400 text-white px-6 py-2 rounded-full font-bold shadow-lg hover:from-fuchsia-400 hover:to-indigo-500 transition"
                onClick={() => {
                  setShowModal(false);
                  navigate("/mysoulframe");
                }}
              >
                마이페이지로 이동
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
