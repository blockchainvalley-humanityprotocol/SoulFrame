import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import green from "../assets/trust-status/green.png";
import yellow from "../assets/trust-status/yellow.png";
import red from "../assets/trust-status/red.png";
import hand from "../assets/hand.png";
import aiRobot1 from "../assets/ai-robot1.jpeg";
import Header from "../components/Header";
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
    img: green,
    features: [
      "All features enabled",
      "DAO voting eligible",
      "Airdrop eligible",
      "Verified in communities",
    ],
  },
  {
    key: "idle",
    title: "Idle",
    img: yellow,
    features: [
      "Limited features",
      "Restricted DAO voting",
      "Airdrop not eligible",
      "Re-verification required (within 30 days)",
    ],
  },
  {
    key: "dormant",
    title: "Dormant",
    img: red,
    features: [
      "Profile only visible",
      "No DAO voting rights",
      "Airdrop excluded",
      "Re-verification required",
    ],
  },
];

// Custom hook for tracking scroll position
function useScrollPosition() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return scrollY;
}

// Section variants for animation
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  exit: { opacity: 0, y: -50, transition: { duration: 0.6 } },
};

const sections = [
  "hero",
  "how-it-works",
  "liveness",
  "trust-status",
  "ai-persona",
  "user-flow",
  "use-cases",
  "roadmap",
  "faq",
];

function RotatingMessageBox() {
  const messages = [
    <span
      className="text-lg md:text-xl font-semibold text-white text-center block leading-relaxed"
      key="liveness"
    >
      Liveness is verified through the real-time pulse flow
      <br className="hidden md:inline" /> within your veins.
    </span>,
    <span
      className="text-lg md:text-xl font-semibold text-white text-center block leading-relaxed"
      key="privacy"
    >
      Your data remains private.
      <br />
      With future{" "}
      <span className="font-bold" style={{ color: "#934406" }}>
        Zero-Knowledge Proof
      </span>{" "}
      integration,
      <br />
      no one — not even us — can see your raw biometric data.
    </span>,
  ];
  const [idx, setIdx] = useState(0);
  const [animating, setAnimating] = useState(false);
  useEffect(() => {
    const timer = setInterval(() => {
      setAnimating(true);
      setTimeout(() => {
        setIdx((prev) => (prev + 1) % messages.length);
        setAnimating(false);
      }, 400);
    }, 5000);
    return () => clearInterval(timer);
  }, []);
  return (
    <div className="relative bg-[#181A20]/80 border border-[#934406]/40 rounded-xl shadow-lg px-6 py-8 flex items-center justify-center min-h-[120px] w-full max-w-2xl overflow-hidden transition-all duration-700">
      <div
        className={`w-full flex items-center justify-center absolute left-0 top-0 h-full transition-transform duration-400 ${
          animating
            ? "-translate-x-full opacity-0"
            : "translate-x-0 opacity-100"
        }`}
        key={idx + "-out"}
        style={{ zIndex: animating ? 1 : 2 }}
      >
        {messages[idx % messages.length]}
      </div>
      <div
        className={`w-full flex items-center justify-center absolute left-0 top-0 h-full transition-transform duration-400 ${
          animating ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        }`}
        key={idx + "-in"}
        style={{ zIndex: animating ? 2 : 1 }}
      >
        {messages[(idx + 1) % messages.length]}
      </div>
    </div>
  );
}

export default function Home() {
  const [currentSection, setCurrentSection] = useState(0);
  const scrollY = useScrollPosition();
  const sectionRefs = useRef(sections.map(() => React.createRef()));

  // Handle scroll position to determine active section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sections.findIndex((id) => id === entry.target.id);
            setCurrentSection(index);
          }
        });
      },
      { threshold: 0.5 }
    );

    // Add observer to each section
    sectionRefs.current.forEach((ref, index) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      sectionRefs.current.forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []);

  // Navigate to specific section
  const goToSection = (index) => {
    const sectionRef = sectionRefs.current[index];
    if (sectionRef && sectionRef.current) {
      window.scrollTo({
        top: sectionRef.current.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <Header />
      <div className="w-full font-sans pt-20">
        {/* Navigation dots */}
        <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50 flex flex-col gap-3">
          {sections.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${
                currentSection === index
                  ? "bg-[#934406] scale-125"
                  : "bg-gray-400 opacity-50"
              } transition-all duration-300`}
              onClick={() => goToSection(index)}
              aria-label={`Go to section ${index + 1}`}
            />
          ))}
        </div>

        {/* Section 1: Hero / Mission Statement */}
        <section
          id="hero"
          ref={sectionRefs.current[0]}
          className="relative w-full h-screen flex items-center justify-center bg-[#121417] text-white overflow-hidden snap-start"
        >
          <motion.div
            initial="hidden"
            animate={currentSection === 0 ? "visible" : "hidden"}
            variants={sectionVariants}
            className="container mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-10"
          >
            <div className="flex-1 text-left md:pr-8 order-2 md:order-1">
              <h1
                className="text-3xl md:text-5xl font-semibold text-white mb-2 leading-tight tracking-tight max-w-4xl"
                style={{ wordBreak: "keep-all" }}
              >
                Prove you're alive.
                <br />
                Own your identity.
              </h1>
              <h2
                className="text-2xl md:text-3xl font-semibold mb-4"
                style={{ color: "#934406" }}
              >
                Live as an AI-powered persona
              </h2>
              <p className="text-base md:text-lg text-white/80 mb-8">
                SoulFrame is your on-chain AI identity — verified by your veins,
                shaped by your values.
              </p>
              <Link to="/mint">
                <button className="bg-[#934406] hover:bg-[#b85a0a] text-white font-semibold rounded-xl px-8 py-3 text-lg shadow-lg transition glow-on-hover">
                  Start your SoulFrame
                </button>
              </Link>
            </div>
            <div className="flex-1 flex justify-center md:justify-end order-1 md:order-2 mb-8 md:mb-0">
              <div className="relative w-[380px] h-[380px] md:w-[520px] md:h-[520px] md:mr-24 mr-4 flex items-center justify-center bg-transparent shadow-none rounded-none">
                <img
                  src={hand}
                  alt="Holographic Hand"
                  className="w-full h-full object-contain bg-transparent shadow-none rounded-none"
                  style={{
                    background: "transparent",
                    boxShadow: "none",
                    borderRadius: 0,
                  }}
                />
              </div>
            </div>
          </motion.div>
          <div className="absolute inset-0 w-full h-full pointer-events-none -z-10">
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 1440 900"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
            >
              <g opacity="0.18">
                <path
                  d="M0 700 Q 360 600 720 700 T 1440 700"
                  stroke="#00faff"
                  strokeWidth="2"
                  fill="none"
                >
                  <animate
                    attributeName="d"
                    values="M0 700 Q 360 600 720 700 T 1440 700;M0 710 Q 360 620 720 690 T 1440 710;M0 700 Q 360 600 720 700 T 1440 700"
                    dur="6s"
                    repeatCount="indefinite"
                  />
                </path>
                <path
                  d="M0 800 Q 480 850 960 800 T 1440 800"
                  stroke="#00faff"
                  strokeWidth="1.5"
                  fill="none"
                >
                  <animate
                    attributeName="d"
                    values="M0 800 Q 480 850 960 800 T 1440 800;M0 790 Q 480 830 960 810 T 1440 790;M0 800 Q 480 850 960 800 T 1440 800"
                    dur="7s"
                    repeatCount="indefinite"
                  />
                </path>
                <path
                  d="M0 600 Q 720 500 1440 600"
                  stroke="#00faff"
                  strokeWidth="1"
                  fill="none"
                >
                  <animate
                    attributeName="d"
                    values="M0 600 Q 720 500 1440 600;M0 610 Q 720 520 1440 590;M0 600 Q 720 500 1440 600"
                    dur="8s"
                    repeatCount="indefinite"
                  />
                </path>
                <circle cx="300" cy="650" r="16" fill="#00faff" opacity="0.5">
                  <animate
                    attributeName="opacity"
                    values="0.5;1;0.5"
                    dur="4s"
                    repeatCount="indefinite"
                  />
                </circle>
                <circle cx="900" cy="750" r="10" fill="#00faff" opacity="0.4">
                  <animate
                    attributeName="opacity"
                    values="0.4;0.9;0.4"
                    dur="5s"
                    repeatCount="indefinite"
                  />
                </circle>
                <circle cx="1200" cy="620" r="14" fill="#00faff" opacity="0.3">
                  <animate
                    attributeName="opacity"
                    values="0.3;0.8;0.3"
                    dur="6s"
                    repeatCount="indefinite"
                  />
                </circle>
                <circle cx="600" cy="800" r="12" fill="#00faff" opacity="0.5">
                  <animate
                    attributeName="opacity"
                    values="0.5;1;0.5"
                    dur="3.5s"
                    repeatCount="indefinite"
                  />
                </circle>
                <circle cx="1100" cy="680" r="8" fill="#00faff" opacity="0.4">
                  <animate
                    attributeName="opacity"
                    values="0.4;0.7;0.4"
                    dur="4.5s"
                    repeatCount="indefinite"
                  />
                </circle>
                <circle cx="400" cy="720" r="10" fill="#00faff" opacity="0.3">
                  <animate
                    attributeName="opacity"
                    values="0.3;0.6;0.3"
                    dur="5.5s"
                    repeatCount="indefinite"
                  />
                </circle>
              </g>
            </svg>
          </div>
        </section>

        {/* Section 2: How SoulFrame Works → 타임라인으로 대체 */}
        <section
          id="how-it-works"
          ref={sectionRefs.current[1]}
          className="relative w-full min-h-screen flex items-center justify-center bg-[#121417] text-white overflow-hidden snap-start pt-20 md:pt-24 pb-6"
        >
          <motion.div
            initial="hidden"
            animate={currentSection === 1 ? "visible" : "hidden"}
            variants={sectionVariants}
            className="max-w-5xl mx-auto px-4 py-4 md:py-6"
          >
            <h2
              className="text-2xl md:text-3xl font-bold text-center mb-6"
              style={{ color: "#934406" }}
            >
              Get Soul-Framed in 4 Steps
            </h2>
            <div className="relative">
              {/* Timeline */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-500/30"></div>
              {/* Timeline Steps */}
              <div className="space-y-8 md:space-y-12 lg:space-y-16 py-2 md:py-4">
                {[
                  {
                    title: "Wallet Connect",
                    desc: "Login via Web3 wallet",
                    icon: (
                      <FiKey
                        className="text-xl md:text-2xl"
                        style={{ color: "#934406" }}
                      />
                    ),
                    color: "text-[#934406]",
                  },
                  {
                    title: "Humanity Verification",
                    desc: "Complete identity verification with Humanity Protocol",
                    icon: (
                      <FiActivity
                        className="text-xl md:text-2xl"
                        style={{ color: "#934406" }}
                      />
                    ),
                    color: "text-[#934406]",
                  },
                  {
                    title: "AI Persona",
                    desc: "Generate your AI-powered identity via ElizaOS",
                    icon: (
                      <FiCpu
                        className="text-xl md:text-2xl"
                        style={{ color: "#934406" }}
                      />
                    ),
                    color: "text-[#934406]",
                  },
                  {
                    title: "NFT Minting",
                    desc: "Mint your SoulFrame NFT and unlock its features",
                    icon: (
                      <FiCheckCircle
                        className="text-xl md:text-2xl"
                        style={{ color: "#934406" }}
                      />
                    ),
                    color: "text-[#934406]",
                  },
                ].map((step, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: i * 0.2 }}
                    className={`flex items-center ${
                      i % 2 === 0 ? "flex-row" : "flex-row-reverse"
                    } gap-4 md:gap-6`}
                  >
                    <div
                      className={`w-1/2 flex flex-col justify-center ${
                        i % 2 === 0
                          ? "items-end text-right pr-3 md:pr-6"
                          : "items-start text-left pl-3 md:pl-6"
                      }`}
                    >
                      <h3
                        className={`text-base md:text-lg font-bold mb-1 ${step.color}`}
                      >
                        {step.title}
                      </h3>
                      <p
                        className="text-sm md:text-base text-white/80 max-w-md leading-relaxed mt-1"
                        style={{ wordBreak: "keep-all", textWrap: "balance" }}
                      >
                        {step.desc}
                      </p>
                    </div>
                    <div
                      className="relative z-10 flex items-center justify-center w-8 h-8 md:w-12 md:h-12 rounded-full bg-[#1E2124] border-2 border-blue-500 mx-2"
                      style={{ minWidth: "2rem", minHeight: "2rem" }}
                    >
                      {step.icon}
                    </div>
                    <div className="w-1/2"></div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        {/* Section 3: Liveness 인증 */}
        <section
          id="liveness"
          ref={sectionRefs.current[2]}
          className="relative w-full h-screen flex items-center justify-center bg-[#121417] overflow-hidden snap-start"
        >
          <motion.div
            initial="hidden"
            animate={currentSection === 2 ? "visible" : "hidden"}
            variants={sectionVariants}
            className="max-w-6xl mx-auto px-6 flex flex-col items-center"
          >
            {/* 이미지에 효과 추가 */}
            <div className="relative w-full max-w-4xl mb-10">
              <div className="absolute inset-0 bg-blue-500/10 rounded-3xl blur-3xl -z-10 transform scale-110"></div>
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/10 via-cyan-500/5 to-purple-500/10 rounded-3xl blur-2xl -z-10"></div>
              <img
                src="https://muycfsrwjjlylklhfgho.supabase.co/storage/v1/object/public/images/1724824301092.png"
                alt="Liveness Vein"
                className="w-full object-contain rounded-2xl relative z-10 filter drop-shadow-2xl"
              />
              {/* 반짝이는 효과 추가 */}
              <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-ping opacity-70"></div>
              <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-cyan-400 rounded-full animate-pulse delay-1000 opacity-60"></div>
              <div className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-purple-400 rounded-full animate-ping delay-2000 opacity-70"></div>
            </div>

            <div className="w-full max-w-2xl mx-auto flex flex-col items-center gap-6">
              <h2
                className="text-3xl md:text-4xl font-bold mb-6 text-center"
                style={{ color: "#934406" }}
              >
                How We Verify You're Alive
              </h2>
              <RotatingMessageBox />
            </div>
          </motion.div>
        </section>

        {/* Section 4: Trust 상태 시스템 */}
        <section
          id="trust-status"
          ref={sectionRefs.current[3]}
          className="relative w-full h-screen flex items-center justify-center bg-[#121417] overflow-hidden snap-start"
        >
          <motion.div
            initial="hidden"
            animate={currentSection === 3 ? "visible" : "hidden"}
            variants={sectionVariants}
            className="max-w-7xl mx-auto px-6"
          >
            <h2
              className="text-3xl font-bold text-center mb-12"
              style={{ color: "#934406" }}
            >
              Your Identity Has a Status
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {trustStatusCards.map((card, i) => (
                <motion.div
                  key={card.key}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.2, duration: 0.7 }}
                  className="flex flex-col items-center text-center"
                >
                  <img
                    src={card.img}
                    alt={card.title}
                    className="w-40 h-40 md:w-48 md:h-48 object-contain mb-5"
                  />
                  <ul className="space-y-2 text-left">
                    {card.features.map((feature, j) => (
                      <li
                        className="flex items-center gap-2 text-white/80"
                        key={j}
                      >
                        <span className="text-lg" style={{ color: "#934406" }}>
                          ✓
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Section 5: AI Persona */}
        <section
          id="ai-persona"
          ref={sectionRefs.current[4]}
          className="relative w-full h-screen flex items-center justify-center bg-[#121417] overflow-hidden snap-start"
        >
          <motion.div
            initial="hidden"
            animate={currentSection === 4 ? "visible" : "hidden"}
            variants={sectionVariants}
            className="max-w-6xl mx-auto px-6"
          >
            <h2
              className="text-3xl font-bold text-center mb-12"
              style={{ color: "#934406" }}
            >
              Create Your AI Persona
            </h2>
            <div className="flex flex-col md:flex-row items-center justify-between gap-12 w-full">
              {/* 왼쪽: 대화 말풍선 영역 */}
              <div className="flex-1 flex flex-col gap-6">
                {/* 유저 질문 (왼쪽 말풍선) */}
                <div className="flex w-full">
                  <div className="flex flex-col w-full max-w-[420px] min-w-[320px]">
                    <div className="relative bg-[#23272F]/90 border border-[#934406]/30 rounded-2xl px-5 py-4 shadow-lg w-full max-w-[420px] min-w-[320px] text-white text-[15px] leading-relaxed">
                      <span className="block font-semibold mb-1 text-[#934406]">
                        You
                      </span>
                      {/* 태그 영역 (You 바로 아래) */}
                      <div className="flex gap-2 mb-2">
                        <span className="px-3 py-0.5 rounded-full border border-[#934406] text-[#934406] text-xs font-semibold bg-[#23272F]/60">
                          Meme Coin Trading
                        </span>
                        <span className="px-3 py-0.5 rounded-full border border-[#934406] text-[#934406] text-xs font-semibold bg-[#23272F]/60">
                          Stable Yield
                        </span>
                      </div>
                      "Where can I get the highest stable yield right now?"
                      <br />
                      "Is automatic BTC trading possible?"
                    </div>
                  </div>
                </div>
                {/* AI 답변 (오른쪽 말풍선) */}
                <div className="flex w-full justify-end">
                  <div className="relative bg-[#1A1B1E]/90 border border-[#934406]/30 rounded-2xl px-5 py-4 shadow-lg w-full max-w-[420px] min-w-[320px] text-white text-[15px] leading-relaxed text-right">
                    <span className="block font-semibold mb-1 text-[#934406]">
                      AI Persona
                    </span>
                    <div className="mb-1 text-[#22c55e] font-semibold text-sm">
                      [🟢 Status: Active]
                    </div>
                    Auto trading enabled, all features activated.
                  </div>
                </div>
                {/* AI 답변 (오른쪽 말풍선) - 추가 */}
                <div className="flex w-full justify-end">
                  <div className="relative bg-[#1A1B1E]/90 border border-[#934406]/30 rounded-2xl px-5 py-4 shadow-lg w-full max-w-[420px] min-w-[320px] text-white text-[15px] leading-relaxed text-right">
                    <span className="block font-semibold mb-1 text-[#934406]">
                      AI Persona
                    </span>
                    You can currently sell BTC under the given conditions.
                    <br />
                    The set price target has already been reached.
                    <br />
                    <br />
                    <span className="font-bold text-white">
                      📌 Stable Yield Recommendations:
                    </span>
                    <br />
                    <span className="text-white">
                      • Bybit BTC-USDC Pool – APR 33%
                      <br />• Curve stUSDT – APR 29%
                    </span>
                    <br />
                    <br />
                    <span className="font-semibold text-white">
                      Would you like to deposit now?
                    </span>
                  </div>
                </div>
              </div>
              {/* 오른쪽: 이미지 */}
              <div className="flex-1 flex items-center justify-center relative">
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-[500px] h-[500px] rounded-full bg-gradient-to-br from-[#934406]/30 via-[#23272F]/60 to-[#934406]/10 blur-2xl"></div>
                </div>
                <img
                  src={aiRobot1}
                  alt="AI Persona"
                  className="relative z-10 w-[360px] h-[360px] object-cover rounded-full shadow-2xl border-4 border-[#23272F]/60"
                  style={{
                    objectFit: "cover",
                    objectPosition: "center 40%",
                    transform: "translateY(10%)",
                  }}
                />
              </div>
            </div>
          </motion.div>
        </section>

        {/* Section 7: Use Cases */}
        <section
          id="use-cases"
          ref={sectionRefs.current[6]}
          className="relative w-full h-screen flex items-center justify-center bg-[#121417] overflow-hidden snap-start"
        >
          <motion.div
            initial="hidden"
            animate={currentSection === 6 ? "visible" : "hidden"}
            variants={sectionVariants}
            className="max-w-7xl mx-auto px-6"
          >
            <h2
              className="text-3xl font-bold text-center mb-12"
              style={{ color: "#934406" }}
            >
              SoulFrame Use Cases
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "DAO Governance",
                  desc: "Only real humans can participate in DAO voting. Prevent Sybil attacks.",
                  icon: (
                    <FiUsers
                      className="text-3xl"
                      style={{ color: "#934406" }}
                    />
                  ),
                  color: "bg-[#1A1B1E] text-blue-400",
                },
                {
                  title: "Web3 Community",
                  desc: "Authenticate in Web3 communities like Discord and Telegram.",
                  icon: (
                    <FiUsers
                      className="text-3xl"
                      style={{ color: "#934406" }}
                    />
                  ),
                  color: "bg-[#1A1B1E] text-purple-400",
                },
                {
                  title: "Token Airdrop",
                  desc: "Genuine airdrops only for verified human profile holders.",
                  icon: (
                    <FiActivity
                      className="text-3xl"
                      style={{ color: "#934406" }}
                    />
                  ),
                  color: "bg-[#1A1B1E] text-green-400",
                },
                {
                  title: "Identity DeFi",
                  desc: "DeFi solutions based on Web3 reputation and identity.",
                  icon: (
                    <FiLock className="text-3xl" style={{ color: "#934406" }} />
                  ),
                  color: "bg-[#1A1B1E] text-yellow-400",
                },
                {
                  title: "Digital Passport",
                  desc: "Digital identity verification in the Metaverse and Web3.",
                  icon: (
                    <FiShield
                      className="text-3xl"
                      style={{ color: "#934406" }}
                    />
                  ),
                  color: "bg-[#1A1B1E] text-red-400",
                },
                {
                  title: "Decentralized Social",
                  desc: "Prove your humanity in social media platforms.",
                  icon: (
                    <FiUsers
                      className="text-3xl"
                      style={{ color: "#934406" }}
                    />
                  ),
                  color: "bg-[#1A1B1E] text-indigo-400",
                },
              ].map((card, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="bg-[#1A1B1E] rounded-xl shadow-lg p-6 border border-white/10"
                >
                  <div
                    className={`rounded-full w-12 h-12 flex items-center justify-center mb-4 ${card.color}`}
                  >
                    {card.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {card.title}
                  </h3>
                  <p className="text-sm text-white/70">{card.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Section 8: Roadmap */}
        <section
          id="roadmap"
          ref={sectionRefs.current[7]}
          className="relative w-full h-screen flex items-center justify-center bg-[#121417] text-white overflow-hidden snap-start"
        >
          <motion.div
            initial="hidden"
            animate={currentSection === 7 ? "visible" : "hidden"}
            variants={sectionVariants}
            className="max-w-6xl mx-auto px-6"
          >
            <h2
              className="text-3xl font-bold text-center mb-12"
              style={{ color: "#934406" }}
            >
              SoulFrame Roadmap
            </h2>
            <div className="relative pb-12">
              {/* Horizontal line */}
              <div className="absolute h-1 w-full bg-[#23272F] top-16"></div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {[
                  {
                    phase: "Phase 1",
                    title: "Persona & SBT",
                    items: [
                      "AI Persona Prototype",
                      "SBT NFT Design",
                      "Profile-to-Image Test",
                      "Minting UI/UX",
                    ],
                    status: "current",
                    date: "2025 Q2 (Now)",
                  },
                  {
                    phase: "Phase 2",
                    title: "On-chain Integration",
                    items: [
                      "DAO Verification",
                      "Automated Trading",
                      "Status-based Access",
                      "DID Integration",
                    ],
                    status: "upcoming",
                    date: "2025 Q3",
                  },
                  {
                    phase: "Phase 3",
                    title: "ZK & Privacy",
                    items: [
                      "ZK Authentication",
                      "Privacy Protection",
                      "SDK/API Release",
                      "Global DID Prep",
                    ],
                    status: "upcoming",
                    date: "2025 Q4",
                  },
                  {
                    phase: "Phase 4",
                    title: "Global Expansion",
                    items: [
                      "Global Launch",
                      "Enterprise Support",
                      "Web3 Standardization",
                      "Ecosystem Growth",
                    ],
                    status: "upcoming",
                    date: "2026 Q1",
                  },
                ].map((phase, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.15, duration: 0.6 }}
                    className="relative"
                  >
                    {/* Circle on timeline */}
                    <div
                      className={`absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full border-4 ${
                        phase.status === "completed"
                          ? "border-green-500 bg-green-500"
                          : phase.status === "current"
                          ? "border-green-500 bg-green-500"
                          : "border-[#23272F] bg-[#23272F]"
                      } top-12 z-10`}
                    ></div>

                    <div className="text-center mb-8">
                      <span className="font-bold" style={{ color: "#934406" }}>
                        {phase.phase}
                      </span>
                    </div>

                    <div
                      className={`rounded-xl p-5 mt-10 ${
                        phase.status === "current"
                          ? "bg-[#1A1B1E] border border-green-500"
                          : "bg-[#1A1B1E] border border-[#23272F]"
                      }`}
                    >
                      <h3 className="font-bold text-xl mb-2">{phase.title}</h3>
                      <p className="text-sm text-blue-300 mb-3">{phase.date}</p>
                      <ul className="space-y-2">
                        {phase.items.map((item, j) => (
                          <li
                            key={j}
                            className="text-sm flex items-center gap-2"
                          >
                            <span
                              className={
                                phase.status === "completed"
                                  ? "text-green-500"
                                  : "text-white/70"
                              }
                            >
                              {phase.status === "completed" ? "✓" : "•"}
                            </span>
                            <span className="text-white/80">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        {/* Section 9: FAQ & Community */}
        <section
          id="faq"
          ref={sectionRefs.current[8]}
          className="relative w-full h-screen flex items-center justify-center bg-[#121417] overflow-hidden snap-start"
        >
          <motion.div
            initial="hidden"
            animate={currentSection === 8 ? "visible" : "hidden"}
            variants={sectionVariants}
            className="max-w-7xl mx-auto px-6"
          >
            <h2
              className="text-3xl font-bold text-center mb-12"
              style={{ color: "#934406" }}
            >
              FAQ & Community
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* FAQ Section */}
              <div>
                <h3 className="text-2xl font-bold mb-6 text-white">
                  Frequently Asked Questions
                </h3>
                <div className="space-y-6">
                  {[
                    {
                      q: "Why is biometric verification necessary?",
                      a: "To prevent Sybil attacks and ensure only real humans can participate in the Web3 environment.",
                    },
                    {
                      q: "How is my personal data protected?",
                      a: "Biometric data is never stored on-chain and is only used during verification. Zero-Knowledge proofs protect your privacy.",
                    },
                    {
                      q: "Can I sell my SoulFrame NFT?",
                      a: "No, SoulFrame is a Soulbound NFT and cannot be transferred or traded. It represents your unique digital identity.",
                    },
                    {
                      q: "Which blockchains are supported?",
                      a: "Currently supports Ethereum and Polygon. More chains will be added in the future.",
                    },
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: i * 0.1 }}
                      className="bg-[#1A1B1E] rounded-xl p-5"
                    >
                      <h4
                        className="font-bold text-lg mb-2"
                        style={{ color: "#934406" }}
                      >
                        {item.q}
                      </h4>
                      <p className="text-white/80 text-sm">{item.a}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Community Section */}
              <div>
                <h3 className="text-2xl font-bold mb-6 text-white">
                  Join the Community
                </h3>
                <div className="bg-[#1A1B1E] rounded-xl p-8 text-white">
                  <p className="mb-6">
                    Join the SoulFrame community and get the latest updates.
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {[
                      { name: "Discord", color: "bg-indigo-500" },
                      { name: "Twitter", color: "bg-blue-400" },
                      { name: "Telegram", color: "bg-blue-500" },
                      { name: "GitHub", color: "bg-gray-700" },
                    ].map((platform, i) => (
                      <a
                        key={i}
                        href="#"
                        className={`${platform.color} rounded-lg px-4 py-3 text-center font-medium hover:opacity-90 transition`}
                      >
                        {platform.name}
                      </a>
                    ))}
                  </div>

                  <div>
                    <h4 className="font-bold mb-3">Subscribe to Newsletter</h4>
                    <div className="flex gap-2">
                      <input
                        type="email"
                        placeholder="Enter your email"
                        className="rounded-lg bg-[#121417] border border-white/20 p-2 flex-grow text-white"
                      />
                      <button className="bg-[#934406] hover:bg-[#b85a0a] rounded-lg px-4 py-2 font-medium text-white">
                        Subscribe
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* CSS for scroll snapping */}
        <style jsx="true">{`
          html {
            scroll-snap-type: y mandatory;
            scroll-behavior: smooth;
          }
          section {
            scroll-snap-align: start;
            scroll-snap-stop: always;
          }
        `}</style>
      </div>
    </>
  );
}
