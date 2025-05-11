import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
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
    <div className="w-full font-sans">
      {/* Navigation dots */}
      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50 flex flex-col gap-3">
        {sections.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              currentSection === index
                ? "bg-blue-500 scale-125"
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
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
              Prove you're alive.
              <br />
              Own your identity.
              <br />
              <span className="text-3xl md:text-4xl block mt-3 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
                Live as an AI-powered persona
              </span>
            </h1>
            <p className="text-lg md:text-xl text-blue-200 mb-8">
              SoulFrame is the first liveness-based identity system on-chain.
            </p>
            <Link to="/create-profile">
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-xl px-8 py-3 text-lg shadow-lg transition">
                Start your SoulFrame
              </button>
            </Link>
          </div>
          <div className="flex-1 flex justify-center md:justify-end order-1 md:order-2 mb-8 md:mb-0">
            <div className="relative w-64 h-64 md:w-96 md:h-96">
              <img
                src="/assets/handzz.jpg"
                alt="Holographic Hand"
                className="w-full h-full object-contain rounded-lg drop-shadow-2xl"
              />
              <div className="absolute -inset-1 bg-blue-500/20 rounded-xl blur-xl -z-10"></div>
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 to-blue-500/10 rounded-xl"></div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Section 2: How SoulFrame Works */}
      <section
        id="how-it-works"
        ref={sectionRefs.current[1]}
        className="relative w-full h-screen flex items-center justify-center bg-[#121417] text-white overflow-hidden snap-start"
      >
        <motion.div
          initial="hidden"
          animate={currentSection === 1 ? "visible" : "hidden"}
          variants={sectionVariants}
          className="max-w-7xl mx-auto px-6"
        >
          <h2 className="text-3xl font-bold text-center mb-12 text-white">
            How SoulFrame Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                icon: <FiKey />,
                title: "지갑 연결",
                desc: "Connect your wallet to start the process",
              },
              {
                icon: <FiShield />,
                title: "Humanity 인증",
                desc: "Verify your humanity through liveness check",
              },
              {
                icon: <FiCpu />,
                title: "AI 프로필",
                desc: "Generate your AI-powered digital identity",
              },
              {
                icon: <FiCheckCircle />,
                title: "NFT 발행",
                desc: "Mint your soulbound NFT identity",
              },
            ].map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="bg-[#1A1B1E] rounded-3xl shadow-xl p-8 flex flex-col items-center border border-white/10"
              >
                <div className="text-3xl text-blue-400 mb-4">{card.icon}</div>
                <div className="text-xl font-bold text-white mb-2">
                  {card.title}
                </div>
                <p className="text-sm text-center text-white/60">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Section 3: Liveness 인증 */}
      <section
        id="liveness"
        ref={sectionRefs.current[2]}
        className="relative w-full h-screen flex items-center justify-center bg-white overflow-hidden snap-start"
      >
        <motion.div
          initial="hidden"
          animate={currentSection === 2 ? "visible" : "hidden"}
          variants={sectionVariants}
          className="max-w-6xl mx-auto px-6 flex flex-col items-center"
        >
          <img
            src="https://muycfsrwjjlylklhfgho.supabase.co/storage/v1/object/public/images/1724824301092.png"
            alt="Liveness Vein"
            className="w-full max-w-4xl object-contain mb-10"
          />
          <div className="w-full max-w-2xl mx-auto flex flex-col items-center">
            <h2 className="text-3xl font-bold mb-4 text-black text-center">
              How We Verify You're Alive
            </h2>
            <p className="text-lg text-black mb-6 text-center">
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
          <h2 className="text-3xl font-bold text-center mb-12 text-white">
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
                      <span className="text-lg">✓</span>
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
        className="relative w-full h-screen flex items-center justify-center bg-white overflow-hidden snap-start"
      >
        <motion.div
          initial="hidden"
          animate={currentSection === 4 ? "visible" : "hidden"}
          variants={sectionVariants}
          className="max-w-6xl mx-auto px-6"
        >
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
        </motion.div>
      </section>

      {/* Section 6: User Flow */}
      <section
        id="user-flow"
        ref={sectionRefs.current[5]}
        className="relative w-full h-screen flex items-center justify-center bg-[#121417] text-white overflow-hidden snap-start"
      >
        <motion.div
          initial="hidden"
          animate={currentSection === 5 ? "visible" : "hidden"}
          variants={sectionVariants}
          className="max-w-7xl mx-auto px-6"
        >
          <h2 className="text-3xl font-bold text-center mb-12 text-white">
            How Users Experience SoulFrame
          </h2>
          <div className="relative">
            {/* Timeline */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-500/30"></div>

            {/* Timeline Steps */}
            <div className="space-y-24">
              {[
                {
                  title: "지갑 연결",
                  desc: "MetaMask 또는 다른 Web3 지갑으로 로그인",
                  icon: <FiKey className="text-2xl" />,
                },
                {
                  title: "생체 인증",
                  desc: "Humanity Protocol 기반 생체 인증 절차 완료",
                  icon: <FiActivity className="text-2xl" />,
                },
                {
                  title: "AI 페르소나",
                  desc: "ElizaOS 기반 AI가 나만의 디지털 정체성 생성",
                  icon: <FiCpu className="text-2xl" />,
                },
                {
                  title: "NFT 발행",
                  desc: "나만의 SoulFrame NFT 발행 및 기능 활성화",
                  icon: <FiCheckCircle className="text-2xl" />,
                },
              ].map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: i * 0.2 }}
                  className={`flex items-center ${
                    i % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  }`}
                >
                  <div
                    className={`w-1/2 ${
                      i % 2 === 0 ? "text-right pr-8" : "text-left pl-8"
                    }`}
                  >
                    <h3 className="text-xl font-bold text-blue-400 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-white/80">{step.desc}</p>
                  </div>
                  <div className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full bg-[#1E2124] border-2 border-blue-500">
                    {step.icon}
                  </div>
                  <div className="w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Section 7: Use Cases */}
      <section
        id="use-cases"
        ref={sectionRefs.current[6]}
        className="relative w-full h-screen flex items-center justify-center bg-white overflow-hidden snap-start"
      >
        <motion.div
          initial="hidden"
          animate={currentSection === 6 ? "visible" : "hidden"}
          variants={sectionVariants}
          className="max-w-7xl mx-auto px-6"
        >
          <h2 className="text-3xl font-bold text-center mb-12 text-[#121417]">
            SoulFrame Use Cases
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "DAO 거버넌스",
                desc: "진짜 인간만 DAO 투표 참여. Sybil 공격 방지.",
                icon: <FiUsers className="text-3xl" />,
                color: "bg-blue-100 text-blue-800",
              },
              {
                title: "Web3 커뮤니티",
                desc: "Discord, Telegram 등 Web3 커뮤니티 인증.",
                icon: <FiUsers className="text-3xl" />,
                color: "bg-purple-100 text-purple-800",
              },
              {
                title: "토큰 에어드랍",
                desc: "휴먼 프로필 소유자에게만 진짜 에어드랍.",
                icon: <FiActivity className="text-3xl" />,
                color: "bg-green-100 text-green-800",
              },
              {
                title: "신원 DeFi",
                desc: "Web3 평판과 신원 기반 DeFi 솔루션.",
                icon: <FiLock className="text-3xl" />,
                color: "bg-yellow-100 text-yellow-800",
              },
              {
                title: "디지털 여권",
                desc: "메타버스와 Web3 내 디지털 신원증명.",
                icon: <FiShield className="text-3xl" />,
                color: "bg-red-100 text-red-800",
              },
              {
                title: "분산형 소셜",
                desc: "소셜 미디어에서 실제 인간 인증.",
                icon: <FiUsers className="text-3xl" />,
                color: "bg-indigo-100 text-indigo-800",
              },
            ].map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-white rounded-xl shadow-lg p-6 border border-gray-200"
              >
                <div
                  className={`rounded-full w-12 h-12 flex items-center justify-center mb-4 ${card.color}`}
                >
                  {card.icon}
                </div>
                <h3 className="text-xl font-bold text-[#121417] mb-2">
                  {card.title}
                </h3>
                <p className="text-sm text-[#121417]/70">{card.desc}</p>
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
          <h2 className="text-3xl font-bold text-center mb-12 text-white">
            SoulFrame Roadmap
          </h2>
          <div className="relative pb-12">
            {/* Horizontal line */}
            <div className="absolute h-1 w-full bg-blue-900 top-16"></div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                {
                  phase: "Phase 1",
                  title: "MVP Launch",
                  items: ["기본 생체인증", "웹 앱 베타", "MVP 출시"],
                  status: "completed",
                  date: "2023 Q4",
                },
                {
                  phase: "Phase 2",
                  title: "AI Integration",
                  items: ["ElizaOS 연동", "AI 페르소나", "DAO 통합"],
                  status: "current",
                  date: "2024 Q2",
                },
                {
                  phase: "Phase 3",
                  title: "ID Framework",
                  items: ["파트너십 확장", "SDK 개발", "신원 DeFi"],
                  status: "upcoming",
                  date: "2024 Q4",
                },
                {
                  phase: "Phase 4",
                  title: "Global Expansion",
                  items: ["글로벌 확장", "엔터프라이즈", "웹3 표준화"],
                  status: "upcoming",
                  date: "2025 Q2",
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
                        ? "border-blue-500 bg-blue-500"
                        : "border-blue-900 bg-[#121417]"
                    } top-12 z-10`}
                  ></div>

                  <div className="text-center mb-8">
                    <span className="text-blue-400 font-bold">
                      {phase.phase}
                    </span>
                  </div>

                  <div
                    className={`rounded-xl p-5 mt-10 ${
                      phase.status === "current"
                        ? "bg-blue-900/50 border-blue-500 border"
                        : "bg-[#1A1B1E]"
                    }`}
                  >
                    <h3 className="font-bold text-xl mb-2">{phase.title}</h3>
                    <p className="text-sm text-blue-300 mb-3">{phase.date}</p>
                    <ul className="space-y-2">
                      {phase.items.map((item, j) => (
                        <li key={j} className="text-sm flex items-center gap-2">
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
        className="relative w-full h-screen flex items-center justify-center bg-white overflow-hidden snap-start"
      >
        <motion.div
          initial="hidden"
          animate={currentSection === 8 ? "visible" : "hidden"}
          variants={sectionVariants}
          className="max-w-7xl mx-auto px-6"
        >
          <h2 className="text-3xl font-bold text-center mb-12 text-[#121417]">
            FAQ & Community
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* FAQ Section */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-[#121417]">
                자주 묻는 질문
              </h3>
              <div className="space-y-6">
                {[
                  {
                    q: "왜 생체인증이 필요한가요?",
                    a: "Sybil 공격을 방지하고 진짜 인간만 참여할 수 있는 Web3 환경을 만들기 위해서입니다.",
                  },
                  {
                    q: "내 개인정보는 어떻게 보호되나요?",
                    a: "생체 데이터는 온체인에 저장되지 않으며, 인증 과정에서만 사용됩니다. Zero-Knowledge 증명 방식으로 개인정보를 보호합니다.",
                  },
                  {
                    q: "SoulFrame NFT는 판매 가능한가요?",
                    a: "아니요, SoulFrame은 Soulbound NFT로 거래나 이전이 불가능합니다. 당신의 고유한 디지털 신원을 나타냅니다.",
                  },
                  {
                    q: "어떤 블록체인을 지원하나요?",
                    a: "현재 이더리움과 폴리곤을 지원하며, 향후 더 많은 체인을 추가할 예정입니다.",
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-[#F5F5F7] rounded-xl p-5"
                  >
                    <h4 className="font-bold text-lg mb-2 text-[#121417]">
                      {item.q}
                    </h4>
                    <p className="text-[#121417]/80 text-sm">{item.a}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Community Section */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-[#121417]">
                커뮤니티 참여
              </h3>
              <div className="bg-[#121417] rounded-xl p-8 text-white">
                <p className="mb-6">
                  SoulFrame 커뮤니티에 참여하고 최신 소식을 받아보세요.
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
                  <h4 className="font-bold mb-3">뉴스레터 구독</h4>
                  <div className="flex gap-2">
                    <input
                      type="email"
                      placeholder="이메일 입력"
                      className="rounded-lg bg-white/10 border border-white/20 p-2 flex-grow text-white"
                    />
                    <button className="bg-blue-500 hover:bg-blue-600 rounded-lg px-4 py-2 font-medium">
                      구독
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
  );
}
