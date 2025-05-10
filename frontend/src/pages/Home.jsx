import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FiKey,
  FiShield,
  FiUser,
  FiCheckCircle,
  FiCpu,
  FiUsers,
  FiArrowRight,
  FiActivity,
} from "react-icons/fi";

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
    <div className="w-full min-h-screen bg-gradient-to-br from-[#f6fff2] via-[#e6f7e6] to-[#eaf6ff] font-sans">
      {/* Section 1: Hero */}
      <section className="w-full py-32">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-start gap-10">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 tracking-tight mb-4 text-left">
            Own your presence.
            <br />
            Verify your humanity.
            <br />
            On-chain.
          </h1>
          <p className="text-lg text-gray-700 mb-8 text-left">
            블록체인 위에 새겨진 나의 정체성
          </p>
          <Link to="/create-profile">
            <button className="bg-green-700 hover:bg-green-800 text-white px-8 py-4 rounded-xl font-bold text-xl shadow-md transition">
              Get Started
            </button>
          </Link>
        </div>
      </section>

      {/* Section 2: How SoulFrame Works */}
      <section className="w-full py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 tracking-tight text-left">
            How SoulFrame Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-white/80 rounded-3xl shadow-xl p-10 flex flex-col gap-4">
              <div className="text-3xl text-green-700 mb-2">
                <FiKey />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">
                지갑 로그인
              </div>
              <div className="text-gray-700 text-base">
                Web3 지갑으로 안전하게 시작
              </div>
            </div>
            <div className="bg-green-100 rounded-3xl shadow-xl p-10 flex flex-col gap-4">
              <div className="text-3xl text-green-700 mb-2">
                <FiShield />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">
                Humanity 인증
              </div>
              <div className="text-gray-700 text-base">
                실시간 Liveness로 신원 증명
              </div>
            </div>
            <div className="bg-white/80 rounded-3xl shadow-xl p-10 flex flex-col gap-4">
              <div className="text-3xl text-green-700 mb-2">
                <FiCpu />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">
                AI 프로필 생성
              </div>
              <div className="text-gray-700 text-base">
                AI가 요약하는 나만의 Web3 ID
              </div>
            </div>
            <div className="bg-green-100 rounded-3xl shadow-xl p-10 flex flex-col gap-4">
              <div className="text-3xl text-green-700 mb-2">
                <FiCheckCircle />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">
                SoulFrame NFT 발행
              </div>
              <div className="text-gray-700 text-base">
                신뢰 기반 SBT NFT로 완성
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Liveness 인증 소개 */}
      <section className="w-full py-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="bg-white/80 rounded-3xl shadow-xl p-10 flex flex-col gap-4">
            <div className="text-3xl text-green-700 mb-2">
              <FiActivity />
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">
              Liveness 인증
            </div>
            <div className="text-gray-700 text-base">
              정맥 인증으로 살아있는 신원만 증명
            </div>
            <img
              src="https://muycfsrwjjlylklhfgho.supabase.co/storage/v1/object/public/images/1724824301092.png"
              alt="Palm Vein Authentication Process Diagram"
              className="mt-6 w-full max-w-lg rounded-xl shadow-md bg-white"
            />
          </div>
          <div className="flex flex-col gap-6">
            <h2 className="text-4xl font-bold text-gray-900 mb-2 tracking-tight">
              How We Verify You're Alive
            </h2>
            <p className="text-lg text-gray-700 mb-2">
              Your veins. Your presence. Your identity.
            </p>
            <p className="text-base text-green-700">
              정맥 속 흐름으로 살아있음을 증명합니다
            </p>
          </div>
        </div>
      </section>

      {/* Section 4: Trust Status & 권한 */}
      <section className="w-full py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 tracking-tight text-left">
            Your Trust Status Determines Your Access
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-green-100 rounded-3xl shadow-xl p-10 flex flex-col gap-4">
              <div className="flex items-center gap-2 mb-2">
                <FiCheckCircle className="text-green-700 text-2xl" />
                <h3 className="text-xl font-bold text-green-800">Active</h3>
              </div>
              <ul className="text-base leading-relaxed text-gray-800">
                <li>
                  <FiCheckCircle className="inline mr-1 text-green-600" />
                  DAO 투표 참여 가능
                </li>
                <li>
                  <FiCheckCircle className="inline mr-1 text-green-600" />
                  자동매매 컨펌 없이 실행
                </li>
                <li>
                  <FiCheckCircle className="inline mr-1 text-green-600" />
                  토큰 발행 및 판매 기능 활성
                </li>
                <li>
                  <FiCheckCircle className="inline mr-1 text-green-600" />
                  전체 기능 완전 사용 가능
                </li>
              </ul>
            </div>
            <div className="bg-yellow-100 rounded-3xl shadow-xl p-10 flex flex-col gap-4">
              <div className="flex items-center gap-2 mb-2">
                <FiShield className="text-yellow-600 text-2xl" />
                <h3 className="text-xl font-bold text-yellow-700">Idle</h3>
              </div>
              <ul className="text-base leading-relaxed text-gray-800">
                <li>
                  <FiArrowRight className="inline mr-1 text-yellow-600" />
                  DAO 기능 제한 (읽기 전용)
                </li>
                <li>
                  <FiArrowRight className="inline mr-1 text-yellow-600" />
                  토큰 거래 컨펌 필요
                </li>
                <li>
                  <FiArrowRight className="inline mr-1 text-yellow-600" />
                  자동매매 일시 제한
                </li>
              </ul>
            </div>
            <div className="bg-orange-100 rounded-3xl shadow-xl p-10 flex flex-col gap-4">
              <div className="flex items-center gap-2 mb-2">
                <FiUser className="text-orange-700 text-2xl" />
                <h3 className="text-xl font-bold text-orange-700">Dormant</h3>
              </div>
              <ul className="text-base leading-relaxed text-gray-800">
                <li>
                  <FiUser className="inline mr-1 text-orange-700" />
                  DAO 접근 불가
                </li>
                <li>
                  <FiUser className="inline mr-1 text-orange-700" />
                  자동매매 불가
                </li>
                <li>
                  <FiCheckCircle className="inline mr-1 text-green-600" />
                  AI 비서 채팅만 가능
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: User Flow & CTA */}
      <section className="w-full py-24">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-2 tracking-tight">
            User Flow
          </h2>
          <div className="flex flex-wrap justify-center gap-8 w-full max-w-4xl">
            {[
              {
                label: "지갑 연결",
                icon: <FiKey className="text-green-700" />,
              },
              {
                label: "Humanity 인증",
                icon: <FiShield className="text-green-700" />,
              },
              {
                label: "AI 프로필",
                icon: <FiCpu className="text-green-700" />,
              },
              {
                label: "NFT 발행",
                icon: <FiCheckCircle className="text-green-700" />,
              },
              {
                label: "프로필 확인",
                icon: <FiUser className="text-green-700" />,
              },
              { label: "AI 비서", icon: <FiCpu className="text-green-700" /> },
              {
                label: "DAO 참여",
                icon: <FiUsers className="text-green-700" />,
              },
            ].map((step, idx) => (
              <div key={step.label} className="flex flex-col items-center">
                <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-white/80 border border-white/40 text-3xl mb-2 shadow-md">
                  {step.icon}
                </div>
                <div className="text-base font-semibold text-gray-900">
                  {step.label}
                </div>
                {idx < 6 && (
                  <div className="w-8 h-1 bg-green-300 rounded-full my-2 mx-auto"></div>
                )}
              </div>
            ))}
          </div>
          <Link to="/create-profile">
            <button className="bg-green-700 hover:bg-green-800 text-white px-10 py-4 rounded-xl font-bold text-xl shadow-md transition mt-8">
              Start your SoulFrame
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
