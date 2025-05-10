import React, { useState } from "react";
import { Link } from "react-router-dom";
import { getAISummary } from "../api/elizaos";

export default function CreateProfile() {
  const [form, setForm] = useState({
    trait: "",
    interest: "",
    intro: "",
  });
  const [aiSummary, setAiSummary] = useState("");
  const [aiImage, setAiImage] = useState("");
  const [step, setStep] = useState(1);

  // ElizaOS 연동: AI 요약 및 이미지 생성
  const handleAISummary = async () => {
    const { summary, image } = await getAISummary(form);
    setAiSummary(summary);
    setAiImage(image);
    setStep(2);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#0f172a] via-[#312e81] to-[#a21caf] p-4">
      <div className="backdrop-blur-xl bg-white/10 border border-indigo-200/30 rounded-3xl shadow-2xl flex flex-col items-center px-10 py-12 max-w-md w-full animate-fade-in">
        <h2 className="text-3xl font-extrabold mb-6 bg-gradient-to-r from-indigo-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-glow">AI 프로필 생성</h2>
        {step === 1 && (
          <div className="space-y-5 w-80">
            <input
              className="border border-indigo-200/40 bg-white/20 text-indigo-900 placeholder:text-indigo-300 px-4 py-3 rounded-xl w-full shadow focus:border-fuchsia-400 focus:ring-2 focus:ring-fuchsia-200/40 transition"
              placeholder="나의 성향 (예: 분석적, 창의적)"
              value={form.trait}
              onChange={e => setForm({ ...form, trait: e.target.value })}
            />
            <input
              className="border border-indigo-200/40 bg-white/20 text-indigo-900 placeholder:text-indigo-300 px-4 py-3 rounded-xl w-full shadow focus:border-fuchsia-400 focus:ring-2 focus:ring-fuchsia-200/40 transition"
              placeholder="관심 분야 (예: NFT, DeFi)"
              value={form.interest}
              onChange={e => setForm({ ...form, interest: e.target.value })}
            />
            <input
              className="border border-indigo-200/40 bg-white/20 text-indigo-900 placeholder:text-indigo-300 px-4 py-3 rounded-xl w-full shadow focus:border-fuchsia-400 focus:ring-2 focus:ring-fuchsia-200/40 transition"
              placeholder="한 줄 소개"
              value={form.intro}
              onChange={e => setForm({ ...form, intro: e.target.value })}
            />
            <button onClick={handleAISummary} className="w-full bg-gradient-to-r from-indigo-500 via-fuchsia-400 to-cyan-400 text-white py-3 rounded-full font-bold shadow-lg hover:from-fuchsia-400 hover:to-indigo-500 transition text-lg animate-pulse">AI 요약 생성</button>
          </div>
        )}
        {step === 2 && (
          <div className="flex flex-col items-center space-y-5 w-80">
            <div className="relative">
              <img src={aiImage} alt="AI NFT" className="w-32 h-32 rounded-full border-4 border-fuchsia-300 shadow-xl animate-fade-in" />
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-3 py-1 bg-gradient-to-r from-indigo-400 to-fuchsia-400 text-white rounded-full text-xs font-bold shadow animate-pulse">AI NFT</span>
            </div>
            <div className="bg-white/30 border border-indigo-200/30 rounded-xl p-4 text-center text-indigo-900 font-semibold text-lg shadow animate-fade-in-slow">{aiSummary}</div>
            <button onClick={() => setStep(1)} className="text-sm text-fuchsia-400 hover:underline">수정하기</button>
            <button className="w-full bg-gradient-to-r from-green-400 via-fuchsia-400 to-indigo-500 text-white py-3 rounded-full font-bold shadow-lg hover:from-fuchsia-400 hover:to-green-400 transition text-lg animate-pulse" onClick={() => window.location.href='/mint'}>SoulFrame NFT 발행</button>
          </div>
        )}
      </div>
      <style>{`
        .drop-shadow-glow { text-shadow: 0 0 16px #a5b4fc, 0 0 32px #f0abfc; }
        .animate-fade-in { animation: fadeIn 1.2s cubic-bezier(.4,0,.2,1) both; }
        .animate-fade-in-slow { animation: fadeIn 2.2s cubic-bezier(.4,0,.2,1) both; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(30px);} to { opacity: 1; transform: none; } }
      `}</style>
    </div>
  );
}
