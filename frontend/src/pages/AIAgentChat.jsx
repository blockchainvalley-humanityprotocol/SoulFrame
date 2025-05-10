import React, { useState } from "react";
import SoulFrameCard from "../components/SoulFrameCard";

const defaultProfile = {
  avatar: "https://api.dicebear.com/7.x/adventurer/svg?seed=sexyAI",
  address: "0x44...4b42",
  status: "active", // 'active' | 'idle' | 'dormant'
  nickname: "섹시 AI 비서",
  traits: ["카리스마", "분석적", "섹시"],
  interests: ["NFT", "DeFi", "DAO"],
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
  "나의 프로필을 요약해줘",
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
    <div className="w-full min-h-screen bg-gradient-to-br from-[#f6fff2] via-[#e6f7e6] to-[#eaf6ff] flex items-center justify-center font-sans py-12 px-2">
      <div className="flex w-full max-w-5xl h-[600px] rounded-3xl shadow-xl overflow-hidden bg-white/80 border border-green-200 animate-fade-in">
        {/* 좌측: NFT 비서 프로필 */}
        <div className="w-1/3 bg-white/0 flex flex-col items-center justify-center p-8 border-r border-green-100">
          <SoulFrameCard {...defaultProfile} />
        </div>
        {/* 우측: 기능 영역 */}
        <div className="w-2/3 flex flex-col justify-between p-8 bg-white/10">
          {/* 상단: 탭 NavBar */}
          <div className="flex gap-2 mb-6">
            {TABS.map((t) => (
              <button
                key={t.key}
                className={`px-5 py-2 rounded-full font-bold text-base border transition ${
                  tab === t.key
                    ? "bg-green-700 text-white border-green-700"
                    : "bg-white/60 text-green-700 border-green-200 hover:bg-green-100"
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
                <div className="flex-1 overflow-y-auto mb-4 space-y-3 pr-2">
                  {messages.map((msg, i) => (
                    <div
                      key={i}
                      className={`flex ${
                        msg.from === "ai" ? "justify-start" : "justify-end"
                      }`}
                    >
                      <div
                        className={`px-4 py-2 rounded-2xl max-w-[70%] text-sm shadow ${
                          msg.from === "ai"
                            ? "bg-green-100 text-green-900"
                            : "bg-green-700 text-white"
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
                      className="bg-green-100 text-green-900 px-3 py-1 rounded-full text-xs font-semibold hover:bg-green-200 transition"
                      onClick={() => handleSend(p)}
                    >
                      {p}
                    </button>
                  ))}
                </div>
                {/* 입력창 */}
                <div className="flex gap-2">
                  <input
                    className="flex-1 border border-indigo-200/40 bg-white/30 text-indigo-900 placeholder:text-indigo-300 px-4 py-3 rounded-xl shadow focus:border-fuchsia-400 focus:ring-2 focus:ring-fuchsia-200/40 transition"
                    placeholder="메시지를 입력하세요..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") handleSend(input);
                    }}
                  />
                  <button
                    className="bg-gradient-to-r from-indigo-400 via-fuchsia-400 to-cyan-400 text-white py-3 px-6 rounded-full font-bold shadow-lg text-lg hover:from-fuchsia-400 hover:to-indigo-500 transition"
                    onClick={() => handleSend(input)}
                  >
                    전송
                  </button>
                </div>
              </>
            )}
            {tab === "mint" && (
              <div className="flex-1 flex flex-col items-center justify-center">
                <div className="text-lg font-bold mb-4">토큰 발행</div>
                {isVerified ? (
                  <>
                    <input
                      className="mb-3 px-4 py-2 rounded bg-gray-100 text-gray-900 w-64"
                      placeholder="발행할 토큰 수량"
                      disabled
                    />
                    <button
                      className="bg-fuchsia-500 text-white px-6 py-2 rounded-full font-bold shadow hover:bg-fuchsia-600 transition opacity-60 cursor-not-allowed"
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
              <div className="flex-1 flex flex-col items-center justify-center">
                <div className="text-lg font-bold mb-4">토큰 거래</div>
                {isVerified ? (
                  <>
                    <input
                      className="mb-3 px-4 py-2 rounded bg-gray-100 text-gray-900 w-64"
                      placeholder="거래할 토큰 수량"
                      disabled
                    />
                    <button
                      className="bg-fuchsia-500 text-white px-6 py-2 rounded-full font-bold shadow hover:bg-fuchsia-600 transition opacity-60 cursor-not-allowed"
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
              <div className="flex-1 flex flex-col items-center justify-center">
                <div className="text-lg font-bold mb-4">토큰 판매</div>
                {isVerified ? (
                  <>
                    <input
                      className="mb-3 px-4 py-2 rounded bg-gray-100 text-gray-900 w-64"
                      placeholder="판매할 토큰 수량"
                      disabled
                    />
                    <button
                      className="bg-fuchsia-500 text-white px-6 py-2 rounded-full font-bold shadow hover:bg-fuchsia-600 transition opacity-60 cursor-not-allowed"
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
