import React, { useState } from "react";
import SoulFrameCard from "../components/SoulFrameCard";
import AI1 from "../assets/AI1.png";

const defaultProfile = {
  avatar: AI1,
  address: "0x44...4b42",
  status: "active", // 'active' | 'idle' | 'dormant'
  nickname: "SoulFrame AI Agent",
  traits: ["카리스마", "탁월함", "분석적"],
  interests: ["#NFT", "#DeFi", "#Human"],
  bio: "Web3 세상에서 당신만을 위한 AI 비서입니다.",
  investmentStyles: ["단기투자", "스테이블 투자"],
};

const defaultMessages = [
  {
    from: "ai",
    text: "안녕하세요! 저는 당신의 Soulbound NFT AI 비서입니다. 무엇이든 물어보세요!",
  },
];

const promptButtons = [
  "오늘의 Web3 트렌드 알려줘",
  "내 성향에 맞는 커뮤니티 추천해줘",
  "NFT 투자 팁 알려줘",
];

const TABS = [
  { key: "chat", label: "AI Chat" },
  { key: "mint", label: "토큰 발행" },
  { key: "trade", label: "토큰 거래" },
  { key: "sell", label: "토큰 판매" },
];

export default function AIAgentChat() {
  const [messages, setMessages] = useState(defaultMessages);
  const [input, setInput] = useState("");
  const [tab, setTab] = useState("chat");
  const isVerified = defaultProfile.status === "active";

  // 실제 AI 연동 없이, 입력시 메시지 추가만 구현
  const handleSend = (msg) => {
    if (!msg) return;
    setMessages([
      ...messages,
      { from: "user", text: msg },
      { from: "ai", text: "(AI 답변 예시) " + msg },
    ]);
    setInput("");
  };

  return (
    <div className="w-full min-h-screen bg-[#0C0E10] flex items-center justify-center font-sans py-8 px-2">
      <div className="flex w-full max-w-6xl h-[650px] rounded-3xl shadow-xl overflow-hidden bg-[#1A1B1E] border border-green-500/30 animate-fade-in">
        {/* 좌측: NFT 비서 프로필 */}
        <div className="w-1/3 bg-[#1A1B1E] flex flex-col items-center justify-start p-6 border-r border-green-500/30">
          {/* 프로필 아바타 */}
          <div className="relative mb-20">
            <div className="w-64 h-64 rounded-full bg-gradient-to-tr from-purple-500/20 via-indigo-500/20 to-blue-500/20 p-1 flex items-center justify-center shadow-2xl border border-purple-500/30 backdrop-blur-sm">
              <img
                src={defaultProfile.avatar}
                alt="avatar"
                className="w-60 h-60 rounded-full bg-[#1A1B1E] object-cover border border-purple-500/30 shadow-lg"
              />
            </div>
            {/* 뱃지 */}
            <span className="absolute bottom-3 right-3 bg-purple-600/20 p-2 rounded-full border border-purple-500/30 backdrop-blur-sm">
              <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
                <path
                  fill="#fff"
                  d="M12 2a1 1 0 0 1 .894.553l2.382 4.83 5.334.775a1 1 0 0 1 .554 1.707l-3.858 3.762.911 5.312a1 1 0 0 1-1.451 1.054L12 17.347l-4.768 2.502a1 1 0 0 1-1.451-1.054l.911-5.312-3.858-3.762a1 1 0 0 1 .554-1.707l5.334-.775L11.106 2.553A1 1 0 0 1 12 2Z"
                />
              </svg>
            </span>
          </div>
          {/* 닉네임 + Status + 서브텍스트 */}
          <div className="flex flex-col items-center mb-8 w-full">
            <span className="text-3xl font-extrabold bg-gradient-to-r from-purple-400 via-fuchsia-400 to-purple-400 bg-clip-text text-transparent mb-4 tracking-tight text-center drop-shadow-[0_0_15px_rgba(168,85,247,0.3)]">
              SoulFrame AI Agent
            </span>
            <span className="flex items-center gap-2 mb-4">
              <span className="inline-block w-3 h-3 rounded-full bg-green-400 border-2 border-green-300 shadow animate-pulse"></span>
              <span className="text-green-400 text-xs font-semibold">
                active
              </span>
            </span>
            <span className="text-green-500/90 text-base text-center font-medium mb-6">
              Web3 세상에서 당신만을 위한 AI 비서
            </span>
          </div>
          {/* traits 태그 */}
          <div className="flex flex-wrap gap-2 mb-4 justify-center">
            {defaultProfile.traits.map((trait, idx) => (
              <span
                key={idx}
                className="px-3 py-1.5 rounded-full bg-purple-600/10 text-purple-400 text-xs font-semibold border border-purple-500/30 hover:bg-purple-600/20 transition-all duration-300"
              >
                {trait}
              </span>
            ))}
          </div>
          {/* interests 태그 */}
          <div className="flex flex-wrap gap-2 mb-4 justify-center">
            {defaultProfile.interests.map((interest, idx) => (
              <span
                key={idx}
                className="px-3 py-1.5 rounded-full bg-indigo-600/10 text-indigo-400 text-xs font-semibold border border-indigo-500/30 hover:bg-indigo-600/20 transition-all duration-300 whitespace-nowrap"
              >
                {interest}
              </span>
            ))}
          </div>
        </div>
        {/* 우측: 기능 영역 */}
        <div className="w-2/3 flex flex-col justify-between p-6 bg-[#1A1B1E]">
          {/* 상단: 탭 NavBar */}
          <div className="flex gap-2 mb-4">
            {TABS.map((t) => (
              <button
                key={t.key}
                className={`px-4 py-1.5 rounded-full font-bold text-sm border border-green-500/30 transition-all duration-300 ${
                  tab === t.key
                    ? "bg-green-600/20 text-green-400 border-green-500/50"
                    : "bg-[#1A1B1E] text-green-400/80 hover:bg-green-600/10"
                }`}
                onClick={() => setTab(t.key)}
              >
                {t.label}
              </button>
            ))}
          </div>
          {/* 탭별 내용 */}
          <div className="flex-1 flex flex-col">
            {tab === "chat" && (
              <>
                {/* 메시지 리스트 */}
                <div className="flex-1 overflow-y-auto mb-3 space-y-3 pr-2">
                  {messages.map((msg, i) => (
                    <div
                      key={i}
                      className={`flex ${
                        msg.from === "ai" ? "justify-start" : "justify-end"
                      }`}
                    >
                      <div
                        className={`px-3 py-2 rounded-2xl max-w-[80%] text-sm shadow-lg backdrop-blur-sm ${
                          msg.from === "ai"
                            ? "bg-green-600/10 text-green-400 border border-green-500/30"
                            : "bg-green-600/20 text-green-400 border border-green-500/50"
                        }`}
                      >
                        {msg.text}
                      </div>
                    </div>
                  ))}
                </div>
                {/* 추천 프롬프트 버튼 */}
                <div className="flex gap-2 mb-3 flex-wrap">
                  {promptButtons.map((p, i) => (
                    <button
                      key={i}
                      className="bg-green-600/10 text-green-400 border border-green-500/30 px-3 py-1.5 rounded-full text-xs font-semibold hover:bg-green-600/20 transition-all duration-300"
                      onClick={() => handleSend(p)}
                    >
                      {p}
                    </button>
                  ))}
                </div>
                {/* 입력창 */}
                <div className="flex gap-2">
                  <input
                    className="flex-1 border border-green-500/30 bg-green-600/10 text-green-400 placeholder:text-green-400/50 px-3 py-2 rounded-xl shadow focus:border-green-500/50 focus:ring-2 focus:ring-green-500/20 transition-all duration-300"
                    placeholder="메시지를 입력하세요..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") handleSend(input);
                    }}
                  />
                  <button
                    className="bg-green-600/20 text-green-400 border border-green-500/50 py-2 px-4 rounded-xl font-bold shadow-lg text-base hover:bg-green-600/30 transition-all duration-300"
                    onClick={() => handleSend(input)}
                  >
                    전송
                  </button>
                </div>
              </>
            )}
            {tab === "mint" && (
              <div className="flex-1 flex flex-col items-center justify-center text-[#FFFFFF]">
                <div className="text-lg font-bold mb-4">토큰 발행</div>
                {isVerified ? (
                  <>
                    <input
                      className="mb-3 px-4 py-2 rounded bg-[#1A1B1E] text-[#FFFFFF] border border-white w-64"
                      placeholder="발행할 토큰 수량"
                      disabled
                    />
                    <button
                      className="bg-[#1A1B1E] text-[#FFFFFF] border border-white px-6 py-2 rounded-full font-bold shadow hover:bg-[#2A2B2E] transition opacity-60 cursor-not-allowed"
                      disabled
                    >
                      (Demo) 발행 준비 중
                    </button>
                  </>
                ) : (
                  <div className="text-red-400 font-semibold">
                    휴머니티 인증(초록불) 상태에서만 토큰 발행이 가능합니다.
                  </div>
                )}
              </div>
            )}
            {tab === "trade" && (
              <div className="flex-1 flex flex-col items-center justify-center text-[#FFFFFF]">
                <div className="text-lg font-bold mb-4">토큰 거래</div>
                {isVerified ? (
                  <>
                    <input
                      className="mb-3 px-4 py-2 rounded bg-[#1A1B1E] text-[#FFFFFF] border border-white w-64"
                      placeholder="거래할 토큰 수량"
                      disabled
                    />
                    <button
                      className="bg-[#1A1B1E] text-[#FFFFFF] border border-white px-6 py-2 rounded-full font-bold shadow hover:bg-[#2A2B2E] transition opacity-60 cursor-not-allowed"
                      disabled
                    >
                      (Demo) 거래 준비 중
                    </button>
                  </>
                ) : (
                  <div className="text-red-400 font-semibold">
                    휴머니티 인증(초록불) 상태에서만 토큰 거래가 가능합니다.
                  </div>
                )}
              </div>
            )}
            {tab === "sell" && (
              <div className="flex-1 flex flex-col items-center justify-center text-[#FFFFFF]">
                <div className="text-lg font-bold mb-4">토큰 판매</div>
                {isVerified ? (
                  <>
                    <input
                      className="mb-3 px-4 py-2 rounded bg-[#1A1B1E] text-[#FFFFFF] border border-white w-64"
                      placeholder="판매할 토큰 수량"
                      disabled
                    />
                    <button
                      className="bg-[#1A1B1E] text-[#FFFFFF] border border-white px-6 py-2 rounded-full font-bold shadow hover:bg-[#2A2B2E] transition opacity-60 cursor-not-allowed"
                      disabled
                    >
                      (Demo) 판매 준비 중
                    </button>
                  </>
                ) : (
                  <div className="text-red-400 font-semibold">
                    휴머니티 인증(초록불) 상태에서만 토큰 판매가 가능합니다.
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
      <style>{`
        .animate-fade-in { animation: fadeIn 1.2s cubic-bezier(.4,0,.2,1) both; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(30px);} to { opacity: 1; transform: none; } }
      `}</style>
    </div>
  );
}
