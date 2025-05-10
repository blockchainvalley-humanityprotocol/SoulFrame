import React from "react";
import { Link } from "react-router-dom";

const features = [
  {
    title: "AI 프로필 생성",
    desc: "ElizaOS 기반 AI가 나만의 Web3 정체성을 요약해줍니다.",
    icon: "🤖",
  },
  {
    title: "Soulbound NFT",
    desc: "이동 불가, 복제 불가! 나만의 신뢰 ID를 NFT로.",
    icon: "🪪",
  },
  {
    title: "Liveness 인증",
    desc: "Humanity Protocol로 살아있는 신원만 증명.",
    icon: "🩸",
  },
  {
    title: "DAO/커뮤니티 인증",
    desc: "NFT로 Web3 커뮤니티, DAO, 에어드랍 참여.",
    icon: "🌐",
  },
];

const partners = [
  { name: "Humanity Protocol", color: "from-fuchsia-400 to-indigo-400" },
  { name: "ElizaOS", color: "from-cyan-400 to-fuchsia-400" },
  { name: "React", color: "from-blue-400 to-cyan-400" },
  { name: "Solidity", color: "from-green-400 to-blue-400" },
];

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#0f172a] via-[#312e81] to-[#a21caf] overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center py-20 bg-gradient-to-br from-[#0f172a] via-[#312e81] to-[#a21caf]">
        <div className="absolute inset-0 w-full h-full -z-10">
          {/* 우주/행성/별똥별 SVG 배경 */}
          <svg
            width="100%"
            height="100%"
            className="absolute left-0 top-0 opacity-60"
            style={{ zIndex: -1 }}
          >
            <circle cx="80" cy="120" r="60" fill="#a21caf" fillOpacity="0.18" />
            <circle cx="90%" cy="80" r="40" fill="#38bdf8" fillOpacity="0.13" />
            <circle
              cx="60%"
              cy="400"
              r="90"
              fill="#f472b6"
              fillOpacity="0.10"
            />
            <circle
              cx="30%"
              cy="600"
              r="70"
              fill="#818cf8"
              fillOpacity="0.10"
            />
            {/* 별똥별 효과 */}
            <rect
              x="60%"
              y="30"
              width="2"
              height="80"
              fill="#fff"
              opacity="0.12"
              rx="1"
            />
            <rect
              x="20%"
              y="200"
              width="1.5"
              height="60"
              fill="#fff"
              opacity="0.10"
              rx="1"
            />
          </svg>
        </div>
        <h1 className="text-6xl font-extrabold mb-4 bg-gradient-to-r from-indigo-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-glow animate-pulse text-center">
          Welcome to SoulFrame
        </h1>
        <h2 className="mb-6 text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-fuchsia-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent drop-shadow-glow text-center animate-fade-in-slow">
          Own your identity.
          <br />
          Prove your presence.
          <br />
          On-chain.
        </h2>
        <p className="mb-6 text-2xl text-white/90 font-medium tracking-tight text-center">
          블록체인 위에 새겨진 나의 정체성
        </p>
        <p className="mb-8 text-lg text-indigo-100 text-center max-w-xl">
          Web3에서 살아있는 신원과 AI 프로필을 결합한, 진짜 나만의 디지털
          페르소나를 만들어보세요.
        </p>
        <Link to="/create-profile">
          <button className="bg-gradient-to-r from-fuchsia-400 to-indigo-400 text-white px-8 py-4 rounded-full font-bold text-xl shadow-lg hover:from-indigo-400 hover:to-fuchsia-400 transition animate-bounce">
            Get Started
          </button>
        </Link>
        <div className="mt-12 flex flex-wrap gap-6 justify-center">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-white/10 border border-indigo-200/30 rounded-2xl shadow-xl p-6 w-64 flex flex-col items-center backdrop-blur-xl hover:scale-105 transition"
            >
              <div className="text-4xl mb-2">{f.icon}</div>
              <div className="font-bold text-lg text-white mb-1">{f.title}</div>
              <div className="text-indigo-100 text-sm text-center">
                {f.desc}
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* Liveness 인증 프로세스 다이어그램 섹션 (흰색 배경) */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl font-semibold text-center mb-6 text-gray-900">
            How We Verify You're Alive
          </h2>
          <p className="text-center text-sm text-gray-500 mb-8">
            SoulFrame uses palm vein recognition to ensure your identity is not
            only unique, but alive in real-time.
          </p>
          <img
            src="https://muycfsrwjjlylklhfgho.supabase.co/storage/v1/object/public/images/1724824301092.png"
            alt="Palm Vein Authentication Process"
            className="w-full rounded-xl shadow-md bg-white"
          />
          <div className="text-center text-xs text-gray-400 mt-4">
            Powered by Humanity Protocol
          </div>
        </div>
      </section>
      {/* How it works / Architecture (보라/그라데이션) */}
      <section className="py-20 flex flex-col items-center bg-gradient-to-br from-[#0f172a] via-[#312e81] to-[#a21caf]">
        <h2 className="text-3xl font-extrabold mb-8 bg-gradient-to-r from-fuchsia-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-glow">
          How SoulFrame Works
        </h2>
        <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
          <div className="flex flex-col items-center">
            <div className="bg-gradient-to-br from-indigo-400 to-fuchsia-400 w-20 h-20 rounded-full flex items-center justify-center text-3xl text-white mb-2">
              1
            </div>
            <div className="text-white font-bold mb-1">지갑 로그인</div>
            <div className="text-indigo-200 text-xs text-center">
              Privy로 Web3 로그인
            </div>
          </div>
          <span className="text-3xl text-fuchsia-400">→</span>
          <div className="flex flex-col items-center">
            <div className="bg-gradient-to-br from-fuchsia-400 to-cyan-400 w-20 h-20 rounded-full flex items-center justify-center text-3xl text-white mb-2">
              2
            </div>
            <div className="text-white font-bold mb-1">Humanity 인증</div>
            <div className="text-indigo-200 text-xs text-center">
              Liveness로 SBT 획득
            </div>
          </div>
          <span className="text-3xl text-fuchsia-400">→</span>
          <div className="flex flex-col items-center">
            <div className="bg-gradient-to-br from-cyan-400 to-indigo-400 w-20 h-20 rounded-full flex items-center justify-center text-3xl text-white mb-2">
              3
            </div>
            <div className="text-white font-bold mb-1">AI 프로필 생성</div>
            <div className="text-indigo-200 text-xs text-center">
              ElizaOS로 나만의 요약
            </div>
          </div>
          <span className="text-3xl text-fuchsia-400">→</span>
          <div className="flex flex-col items-center">
            <div className="bg-gradient-to-br from-indigo-400 to-fuchsia-400 w-20 h-20 rounded-full flex items-center justify-center text-3xl text-white mb-2">
              4
            </div>
            <div className="text-white font-bold mb-1">SoulFrame NFT 발행</div>
            <div className="text-indigo-200 text-xs text-center">
              Web3 신뢰 ID 완성
            </div>
          </div>
        </div>
      </section>
      {/* Discover Communities / 활용 시나리오 (흰색 배경) */}
      <section className="py-20 flex flex-col items-center bg-white">
        <h2 className="text-3xl font-extrabold mb-8 bg-gradient-to-r from-indigo-400 to-fuchsia-400 bg-clip-text text-transparent drop-shadow-glow">
          Discover New Communities
        </h2>
        <div className="relative w-full max-w-2xl h-72 flex items-center justify-center">
          {/* 행성 궤도 SVG */}
          <svg width="100%" height="100%" className="absolute left-0 top-0">
            <ellipse
              cx="50%"
              cy="50%"
              rx="45%"
              ry="40%"
              fill="none"
              stroke="#818cf8"
              strokeWidth="2"
              opacity="0.3"
            />
            <ellipse
              cx="50%"
              cy="50%"
              rx="30%"
              ry="25%"
              fill="none"
              stroke="#a21caf"
              strokeWidth="2"
              opacity="0.2"
            />
            <ellipse
              cx="50%"
              cy="50%"
              rx="15%"
              ry="12%"
              fill="none"
              stroke="#38bdf8"
              strokeWidth="2"
              opacity="0.2"
            />
          </svg>
          {/* 행성 아이콘들 */}
          <div className="absolute left-[10%] top-[30%] text-4xl">🪐</div>
          <div className="absolute left-[70%] top-[20%] text-3xl">🛰️</div>
          <div className="absolute left-[80%] top-[60%] text-4xl">🌑</div>
          <div className="absolute left-[30%] top-[70%] text-3xl">🛸</div>
          <div className="absolute left-[50%] top-[10%] text-4xl">🌟</div>
          <div className="absolute left-[60%] top-[80%] text-3xl">🪐</div>
          <div className="absolute left-[40%] top-[60%] text-3xl">🪐</div>
          <div className="absolute left-[50%] top-[50%] text-5xl animate-pulse">
            👤
          </div>
        </div>
        <div className="mt-8 text-gray-700 text-center max-w-xl text-lg">
          SoulFrame NFT를 통해 다양한 Web3 커뮤니티, DAO, 에어드랍, 인증 기반
          미션에 참여하세요!
        </div>
      </section>
      {/* 파트너/스택 로고 (보라/그라데이션) */}
      <section className="py-20 flex flex-col items-center bg-gradient-to-br from-[#0f172a] via-[#312e81] to-[#a21caf]">
        <h2 className="text-xl font-bold mb-4 text-indigo-200">Powered by</h2>
        <div className="flex gap-6 flex-wrap justify-center">
          {partners.map((p) => (
            <span
              key={p.name}
              className={`px-6 py-2 rounded-full font-bold text-white text-lg bg-gradient-to-r ${p.color} shadow-lg`}
            >
              {p.name}
            </span>
          ))}
        </div>
      </section>
      {/* CTA (보라/그라데이션) */}
      <section className="py-20 flex flex-col items-center bg-gradient-to-br from-[#0f172a] via-[#312e81] to-[#a21caf]">
        <h2 className="text-2xl font-extrabold mb-4 bg-gradient-to-r from-fuchsia-400 to-indigo-400 bg-clip-text text-transparent drop-shadow-glow">
          Start your SoulFrame
        </h2>
        <Link to="/create-profile">
          <button className="bg-gradient-to-r from-fuchsia-400 to-indigo-400 text-white px-8 py-4 rounded-full font-bold text-xl shadow-lg hover:from-indigo-400 hover:to-fuchsia-400 transition animate-bounce">
            프로필 만들기
          </button>
        </Link>
      </section>
      {/* SoulFrame 전체 플로우 Stepper */}
      <section className="py-8 flex flex-col items-center bg-gradient-to-br from-[#0f172a] via-[#312e81] to-[#a21caf]">
        <div className="max-w-5xl w-full flex flex-col items-center">
          <h3 className="text-lg font-bold text-white mb-6">
            SoulFrame 유저 플로우
          </h3>
          <div className="flex flex-wrap justify-center gap-4 w-full">
            {/* 단계별 Stepper */}
            {[
              { label: "지갑 연결", icon: "🔑" },
              { label: "프로필 입력", icon: "📝" },
              { label: "인증", icon: "🟢" },
              { label: "NFT 발행", icon: "🪪" },
              { label: "프로필 확인", icon: "👤" },
              { label: "AI 비서", icon: "🤖" },
              { label: "DAO 참여", icon: "🌐" },
            ].map((step, idx) => (
              <div key={step.label} className="flex flex-col items-center">
                <div
                  className={`w-12 h-12 flex items-center justify-center rounded-full text-2xl font-bold mb-2 border-2 ${
                    idx === 0
                      ? "bg-fuchsia-500 text-white border-fuchsia-400 shadow-lg"
                      : "bg-white/10 text-fuchsia-200 border-fuchsia-200"
                  }`}
                >
                  {step.icon}
                </div>
                <div
                  className={`text-xs font-semibold ${
                    idx === 0 ? "text-white" : "text-fuchsia-200"
                  }`}
                >
                  {step.label}
                </div>
                {idx < 6 && (
                  <div className="w-8 h-1 bg-fuchsia-400 rounded-full my-2 mx-auto"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      <footer className="py-12 text-center text-indigo-300 text-xs opacity-70 bg-gradient-to-br from-[#0f172a] via-[#312e81] to-[#a21caf]">
        © 2024 SoulFrame. Powered by Humanity Protocol & ElizaOS.
      </footer>
      <style>{`
        .drop-shadow-glow { text-shadow: 0 0 16px #a5b4fc, 0 0 32px #f0abfc; }
        .animate-fade-in { animation: fadeIn 1.2s cubic-bezier(.4,0,.2,1) both; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(30px);} to { opacity: 1; transform: none; } }
      `}</style>
    </div>
  );
}
