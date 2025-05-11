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
    img: "/assets/trust-status/green.png",
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
    img: "/assets/trust-status/yellow.png",
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
    img: "/assets/trust-status/red.png",
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
      className="w-full min-h-screen bg-gradient-to-br from-[#f6fff2] via-[#e6f7e6] to-[#eaf6ff] font-sans"
    >
      {/* 1. Hero: 수평 슬라이딩 + sticky */}
      <section
        id="hero"
        data-scroll-section
        className="relative w-full h-[60vh] flex items-center justify-center bg-black overflow-hidden"
      >
        <div
          className="w-full h-full flex items-center justify-center"
          data-scroll
          data-scroll-sticky
          data-scroll-target="#hero"
        >
          <h1
            className="text-5xl md:text-7xl font-extrabold text-white whitespace-nowrap"
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="3"
          >
            ON-CHAIN IDENTITY IS ALIVE
          </h1>
        </div>
      </section>

      {/* 2. How SoulFrame Works: 패럴랙스 카드 */}
      <section data-scroll-section className="py-24 bg-transparent">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { icon: <FiKey />, title: "지갑 로그인", speed: "2" },
            { icon: <FiShield />, title: "Humanity 인증", speed: "1" },
            { icon: <FiCpu />, title: "AI 프로필", speed: "-1" },
            { icon: <FiCheckCircle />, title: "NFT 발행", speed: "-2" },
          ].map((card, i) => (
            <div
              key={card.title}
              className="bg-white/80 rounded-3xl shadow-xl p-10 flex flex-col items-center"
              data-scroll
              data-scroll-speed={card.speed}
            >
              <div className="text-3xl text-green-700 mb-2">{card.icon}</div>
              <div className="text-xl font-bold text-gray-900 mb-1">
                {card.title}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Liveness 인증: sticky 이미지 + SVG 애니메이션 */}
      <section data-scroll-section className="py-32 bg-transparent relative">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div
            className="sticky top-32 w-96 h-96 flex items-center justify-center"
            data-scroll
            data-scroll-sticky
            data-scroll-target="#liveness"
            id="liveness"
          >
            <img
              src="/assets/hand-vein.png"
              alt="Vein"
              className="w-full h-full object-contain"
            />
            <motion.svg
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="absolute w-80 h-80"
              viewBox="0 0 200 200"
            >
              <motion.path
                d="M20,100 Q50,20 100,100 T180,100"
                fill="none"
                stroke="#4ade80"
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 2, ease: "easeInOut" }}
              />
              <motion.circle
                cx="20"
                cy="100"
                r="4"
                fill="#4ade80"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 1.5, duration: 0.5 }}
              />
              <motion.circle
                cx="180"
                cy="100"
                r="4"
                fill="#4ade80"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 2, duration: 0.5 }}
              />
            </motion.svg>
          </div>
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-4">
              How We Verify You're Alive
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              정맥 속 흐름으로 살아있음을 증명합니다. Humanity Protocol의 최신
              기술로 당신의 신원을 안전하게 보호합니다.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <FiShield className="text-green-600" />
                <span>생체 인증으로 안전한 신원 확인</span>
              </li>
              <li className="flex items-center gap-2">
                <FiLock className="text-green-600" />
                <span>개인정보는 절대 저장하지 않습니다</span>
              </li>
              <li className="flex items-center gap-2">
                <FiActivity className="text-green-600" />
                <span>실시간 정맥 패턴 분석</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 4. Trust Status: 이미지+텍스트 */}
      <section
        data-scroll-section
        className="py-24 bg-transparent px-4 md:px-12"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Trust Status</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {trustStatusCards.map((card, i) => (
              <motion.div
                key={card.key}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2, duration: 0.7 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 md:gap-6 bg-transparent p-0 shadow-none rounded-none w-full"
              >
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-28 h-28 object-contain flex-shrink-0"
                />
                <div className="flex-1 break-words md:px-6">
                  <h3 className="text-xl font-bold mb-4 break-keep">
                    {card.title}
                  </h3>
                  <ul className="space-y-2">
                    {card.features.map((feature, j) => (
                      <li
                        key={j}
                        className="flex items-center gap-2 break-words"
                      >
                        <span className="text-lg">✔</span>
                        <span className="break-words break-keep">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. User Flow & CTA: Flow 스텝 slide-in, CTA 버튼 */}
      <section data-scroll-section className="py-24 bg-transparent">
        <div className="max-w-5xl mx-auto flex flex-col items-center gap-12">
          <h2 className="text-3xl font-bold mb-8">User Flow</h2>
          <div className="flex gap-8">
            {["지갑 연결", "인증", "AI", "NFT", "DAO"].map((step, i) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                viewport={{ once: true }}
                className="flex flex-col items-center"
              >
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-md mb-2" />
                <div className="text-base font-semibold">{step}</div>
              </motion.div>
            ))}
          </div>
          <Link to="/create-profile">
            <button className="bg-green-700 hover:bg-green-800 text-white px-10 py-4 rounded-xl font-bold text-xl shadow-md transition mt-8">
              Start your SoulFrame
            </button>
          </Link>
        </div>
      </section>

      {/* 6. Powered By: 파트너 섹션 */}
      <section data-scroll-section className="py-24 bg-transparent">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Powered By</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {partners.map((partner, i) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className={`bg-gradient-to-r ${partner.color} rounded-2xl p-6 text-center`}
              >
                <h3 className="text-xl font-bold text-white">{partner.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
