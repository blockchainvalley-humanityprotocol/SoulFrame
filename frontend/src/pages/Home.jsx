import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FiKey,
  FiShield,
  FiCheckCircle,
  FiCpu,
  FiActivity,
  FiLock,
  FiUsers,
} from "react-icons/fi";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

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

const trustStatusFeatures = {
  active: [
    "모든 기능 사용 가능",
    "DAO 투표 참여",
    "에어드랍 자격",
    "커뮤니티 인증",
  ],
  idle: [
    "기본 기능 사용",
    "제한된 DAO 참여",
    "에어드랍 제한",
    "30일 이내 재인증 필요",
  ],
  dormant: [
    "기본 프로필만 표시",
    "DAO 참여 불가",
    "에어드랍 제외",
    "재인증 필요",
  ],
};

const trustStatusCards = [
  {
    key: "active",
    title: "Active",
    img: "/assets/active.png",
    features: [
      "모든 기능 사용 가능",
      "DAO 투표 참여",
      "에어드랍 자격",
      "커뮤니티 인증",
    ],
  },
  {
    key: "idle",
    title: "Idle",
    img: "/assets/idle.png",
    features: [
      "기본 기능 사용",
      "제한된 DAO 참여",
      "에어드랍 제한",
      "30일 이내 재인증 필요",
    ],
  },
  {
    key: "dormant",
    title: "Dormant",
    img: "/assets/dormant.png",
    features: [
      "기본 프로필만 표시",
      "DAO 참여 불가",
      "에어드랍 제외",
      "재인증 필요",
    ],
  },
];

export default function Home() {
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      const scroll = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
        lerp: 0.08,
        direction: "vertical",
      });
      return () => scroll.destroy();
    }
  }, []);

  return (
    <div
      ref={scrollRef}
      data-scroll-container
      className="w-full min-h-screen bg-gradient-to-br from-[#0C0E10] via-[#111214] to-[#0C0E10] font-sans"
    >
      {/* Section 1: Hero / Mission Statement */}
      <section
        id="hero"
        data-scroll-section
        className="relative w-full h-[60vh] flex items-center justify-center bg-[#121417] text-white overflow-hidden border-b border-white/10"
      >
        <div
          className="w-full h-full flex items-center justify-center"
          data-scroll
          data-scroll-sticky
          data-scroll-target="#hero"
        >
          <div className="flex flex-col items-center">
            <h1
              className="text-5xl md:text-7xl font-extrabold text-white text-center mb-4 leading-relaxed"
              data-scroll
              data-scroll-direction="horizontal"
              data-scroll-speed="3"
            >
              Prove you're alive.
              <br />
              Own your identity.
              <br />
              <span className="text-4xl md:text-5xl block mt-2">
                Live as an AI-powered persona
              </span>
            </h1>
            <Link to="/create-profile">
              <button className="mt-8 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl px-8 py-4 text-lg shadow-lg transition">
                Start your SoulFrame
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Section 2: How SoulFrame Works */}
      <section
        data-scroll-section
        className="py-24 border-b border-white/10 bg-[#121417]"
      >
        <h2 className="text-3xl font-bold text-center mb-12 text-white">
          How SoulFrame Works
        </h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { icon: <FiKey />, title: "지갑 연결", speed: "2" },
            { icon: <FiShield />, title: "Humanity 인증", speed: "1" },
            { icon: <FiCpu />, title: "AI 프로필", speed: "-1" },
            { icon: <FiCheckCircle />, title: "NFT 발행", speed: "-2" },
          ].map((card, i) => (
            <div
              key={card.title}
              className="bg-[#1A1B1E] rounded-3xl shadow-xl p-10 flex flex-col items-center border border-white/10"
              data-scroll
              data-scroll-speed={card.speed}
            >
              <div className="text-3xl text-white mb-2">{card.icon}</div>
              <div className="text-xl font-bold text-white mb-1">
                {card.title}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 3: Liveness 인증 */}
      <section
        data-scroll-section
        className="py-32 border-b border-gray-200 relative bg-white"
      >
        <div className="max-w-6xl mx-auto flex flex-col items-center gap-12">
          <img
            src="https://muycfsrwjjlylklhfgho.supabase.co/storage/v1/object/public/images/1724824301092.png"
            alt="Liveness Vein"
            className="w-full max-w-6xl object-contain mb-10"
          />
          <div className="w-full max-w-2xl mx-auto flex flex-col items-center">
            <h2 className="text-3xl font-bold mb-4 text-black text-center">
              How We Verify You're Alive
            </h2>
            <p className="text-lg text-black mb-6 text-center whitespace-normal">
              정맥 속 흐름으로 살아있음을 증명합니다. Humanity Protocol의 최신
              기술로 당신의 신원을 안전하게 보호합니다.
            </p>
            <ul className="space-y-3 w-full max-w-md mx-auto text-center">
              <li className="flex items-center justify-center gap-2 text-black/80">
                <span className="text-green-500">✅</span>
                <span>생체 인증 기반</span>
              </li>
              <li className="flex items-center justify-center gap-2 text-black/80">
                <span className="text-green-500">🔒</span>
                <span>개인정보 저장 안함</span>
              </li>
              <li className="flex items-center justify-center gap-2 text-black/80">
                <span className="text-green-500">📡</span>
                <span>실시간 정맥 분석</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 4: Trust 상태 시스템 */}
      <section
        data-scroll-section
        className="py-24 border-b border-white/10 px-4 md:px-12 bg-[#121417]"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">
            Trust Status
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {trustStatusCards.map((card, i) => (
              <motion.div
                key={card.key}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2, duration: 0.7 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center"
              >
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-32 h-32 object-contain mb-5"
                />
                <h3
                  className={`text-2xl font-bold mb-4 ${
                    card.key === "active"
                      ? "text-green-500"
                      : card.key === "idle"
                      ? "text-yellow-500"
                      : "text-red-500"
                  }`}
                >
                  {card.title}
                </h3>
                <ul className="space-y-2 text-left">
                  {card.features.map((feature, j) => (
                    <li
                      className="flex items-center gap-2 text-white/80"
                      key={j}
                    >
                      <span className="text-lg">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: AI Persona */}
      <section
        data-scroll-section
        className="py-24 border-b border-gray-200 bg-white"
      >
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#121417]">
            Create Your AI Persona
          </h2>
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1 flex flex-col">
              <p className="text-[#121417] mb-4">
                성향, 관심사, 한 줄 자기소개 기반 프로필 생성
              </p>
              <textarea
                className="w-full p-4 rounded-lg bg-[#f5f5f5] border border-gray-300 text-[#121417] mb-4 min-h-[120px]"
                placeholder="Web3 enthusiast, 탈중앙화와 개인정보 보호에 관심, DAOs와 DeFi에 특히 집중하는 개발자..."
              />
              <button className="bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl px-6 py-3 self-start">
                AI 프로필 생성
              </button>
              <p className="text-xs text-[#121417]/60 mt-2">
                향후 AI Agent와 연결 예정
              </p>
            </div>
            <div className="flex-1 flex flex-col items-center">
              <div className="w-56 h-56 rounded-full overflow-hidden flex items-center justify-center mb-6 shadow-lg border-2 border-[#121417]">
                <img
                  src="/assets/ai-robot.png"
                  alt="AI Persona"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-[#121417] rounded-xl p-6 text-white">
                "Web3 builder with passion for decentralized identity solutions.
                Actively contributes to DAO governance and values privacy-first
                technology."
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: User Flow */}
      <section
        data-scroll-section
        className="py-24 border-b border-white/10 bg-[#121417]"
      >
        <div className="max-w-5xl mx-auto flex flex-col items-center gap-12 px-4">
          <h2 className="text-3xl font-bold mb-8 text-white text-center">
            User Flow
          </h2>
          <div className="flex flex-wrap justify-center gap-8">
            {[
              "지갑 연결",
              "Humanity 인증",
              "프로필 생성",
              "NFT 발행",
              "DAO 참여",
            ].map((step, i) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                viewport={{ once: true }}
                className="flex flex-col items-center"
              >
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-2xl font-bold text-black mb-3">
                  {i + 1}
                </div>
                <div className="text-base font-semibold text-white text-center">
                  {step}
                </div>
              </motion.div>
            ))}
          </div>
          <Link to="/create-profile">
            <button className="bg-green-500 hover:bg-green-600 text-white rounded-xl px-8 py-3 font-bold mt-8">
              Start your SoulFrame
            </button>
          </Link>
        </div>
      </section>

      {/* Section 7: Use Case 시나리오 */}
      <section
        data-scroll-section
        className="py-24 border-b border-gray-200 bg-white"
      >
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#121417]">
            Use Cases
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-[#f5f5f5] border border-gray-200 rounded-2xl p-6 text-[#121417] flex flex-col items-center"
            >
              <span className="text-4xl mb-4">🗳️</span>
              <h3 className="text-xl font-bold mb-2">DAO 투표 권한</h3>
              <p className="text-sm text-center text-[#121417]/70">
                살아있는 인간만 DAO 투표에 참여 가능합니다.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-[#f5f5f5] border border-gray-200 rounded-2xl p-6 text-[#121417] flex flex-col items-center"
            >
              <span className="text-4xl mb-4">🎁</span>
              <h3 className="text-xl font-bold mb-2">인증 기반 에어드랍</h3>
              <p className="text-sm text-center text-[#121417]/70">
                실제 인간임이 확인된 지갑에만 에어드랍 지급
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-[#f5f5f5] border border-gray-200 rounded-2xl p-6 text-[#121417] flex flex-col items-center"
            >
              <span className="text-4xl mb-4">👥</span>
              <h3 className="text-xl font-bold mb-2">커뮤니티 입장</h3>
              <p className="text-sm text-center text-[#121417]/70">
                인증된 사람만 Web3 커뮤니티에 입장 가능
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-[#f5f5f5] border border-gray-200 rounded-2xl p-6 text-[#121417] flex flex-col items-center"
            >
              <span className="text-4xl mb-4">💼</span>
              <h3 className="text-xl font-bold mb-2">Web3 이력서</h3>
              <p className="text-sm text-center text-[#121417]/70">
                검증 가능한 디지털 정체성으로 이력 증명
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-[#f5f5f5] border border-gray-200 rounded-2xl p-6 text-[#121417] flex flex-col items-center"
            >
              <span className="text-4xl mb-4">🤖</span>
              <h3 className="text-xl font-bold mb-2">자동매매 조건</h3>
              <p className="text-sm text-center text-[#121417]/70">
                인증 상태와 연동된 자동 DeFi 전략 활성화
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 8: Roadmap */}
      <section
        data-scroll-section
        className="py-24 border-b border-white/10 bg-[#121417]"
      >
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">
            Roadmap
          </h2>
          <ol className="relative border-l border-white/20 ml-4 md:ml-10">
            <motion.li
              className="mb-10 ml-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-green-500 rounded-full ring-8 ring-[#0C0E10]">
                <FiCheckCircle className="text-white" />
              </span>
              <h3 className="flex items-center text-xl font-semibold text-white">
                Soulbound NFT 발행 완료
              </h3>
              <p className="text-white/70 mt-1">
                이동 불가, 복제 불가 신원 NFT 시스템 구축
              </p>
            </motion.li>
            <motion.li
              className="mb-10 ml-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-blue-500 rounded-full ring-8 ring-[#0C0E10]">
                <FiCpu className="text-white" />
              </span>
              <h3 className="flex items-center text-xl font-semibold text-white">
                AI 비서 기능 개발 중
              </h3>
              <p className="text-white/70 mt-1">
                ElizaOS 기반 개인화된 AI 비서 시스템 연동
              </p>
            </motion.li>
            <motion.li
              className="mb-10 ml-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-purple-500 rounded-full ring-8 ring-[#0C0E10]">
                <FiActivity className="text-white" />
              </span>
              <h3 className="flex items-center text-xl font-semibold text-white">
                DeFi 전략 분석 연동 예정
              </h3>
              <p className="text-white/70 mt-1">
                투자 자동화 및 개인화된 포트폴리오 관리
              </p>
            </motion.li>
            <motion.li
              className="ml-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-yellow-500 rounded-full ring-8 ring-[#0C0E10]">
                <FiUsers className="text-white" />
              </span>
              <h3 className="flex items-center text-xl font-semibold text-white">
                DAO 게이트 연동 예정
              </h3>
              <p className="text-white/70 mt-1">
                주요 DAO 플랫폼과 인증 시스템 통합
              </p>
            </motion.li>
          </ol>
        </div>
      </section>

      {/* Section 9: FAQ + 커뮤니티 연결 */}
      <section data-scroll-section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#121417]">
            FAQ & Community
          </h2>
          <div className="mb-12 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-[#f5f5f5] border border-gray-200 rounded-xl p-5 text-[#121417]"
            >
              <h3 className="font-bold text-lg mb-2">
                Q. SoulFrame 인증은 어떻게 하나요?
              </h3>
              <p className="text-[#121417]/80">
                A. 지갑 연결 후, Humanity Protocol의 Liveness 인증을 거치면
                됩니다. 전체 과정은 약 2분 소요됩니다.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-[#f5f5f5] border border-gray-200 rounded-xl p-5 text-[#121417]"
            >
              <h3 className="font-bold text-lg mb-2">
                Q. NFT를 다른 사람에게 전송할 수 있나요?
              </h3>
              <p className="text-[#121417]/80">
                A. SoulFrame NFT는 Soulbound로, 타인에게 전송이 불가합니다. 본인
                신원과 영구적으로 연결됩니다.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-[#f5f5f5] border border-gray-200 rounded-xl p-5 text-[#121417]"
            >
              <h3 className="font-bold text-lg mb-2">
                Q. 개인정보는 안전한가요?
              </h3>
              <p className="text-[#121417]/80">
                A. 네, 모든 인증은 온체인/비식별화로 처리되며 개인정보는
                저장하지 않습니다. 오직 검증 결과만 블록체인에 기록됩니다.
              </p>
            </motion.div>
          </div>
          <div className="flex justify-center gap-6">
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 hover:bg-blue-600 text-white rounded-full px-8 py-3 font-bold"
            >
              Twitter
            </a>
            <a
              href="https://discord.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-indigo-500 hover:bg-indigo-600 text-white rounded-full px-8 py-3 font-bold"
            >
              Discord
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
