import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function HumanityAuth() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleVerify = async () => {
    setLoading(true);
    setError("");
    try {
      const wallet = window.localStorage.getItem("wallet");
      if (!wallet) throw new Error("지갑 정보 없음. 먼저 로그인하세요.");
      navigate("/create-profile");
    } catch (e) {
      setError(e.message || "인증 실패");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#0f172a] via-[#312e81] to-[#a21caf] p-4">
      <div className="backdrop-blur-xl bg-white/10 border border-indigo-200/30 rounded-3xl shadow-2xl flex flex-col items-center px-10 py-12 max-w-md w-full animate-fade-in">
        <h2 className="text-3xl font-extrabold mb-4 bg-gradient-to-r from-indigo-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-glow">
          Humanity 인증
        </h2>
        <div className="mb-4 text-indigo-100 text-center text-base font-medium">
          Humanity Protocol을 통해 1인 1인증을 진행하세요.
          <br />
          <span className="text-xs text-fuchsia-300">
            (실제 인증 및 SBT 발급 로직은 API로 연동됨)
          </span>
        </div>
        <button
          className="w-full bg-gradient-to-r from-green-400 via-fuchsia-400 to-indigo-500 text-white px-8 py-3 rounded-full font-bold shadow-lg hover:from-fuchsia-400 hover:to-green-400 transition border border-indigo-200 text-lg tracking-wide mb-4 mt-2 animate-pulse"
          onClick={handleVerify}
          disabled={loading}
        >
          {loading ? (
            <span className="flex items-center justify-center gap-2">
              <span className="w-3 h-3 rounded-full border-2 border-white border-t-transparent animate-spin"></span>
              인증 중...
            </span>
          ) : (
            <>인증 진행하기</>
          )}
        </button>
        {error && (
          <div className="text-red-400 bg-white/20 border border-red-300/30 rounded px-4 py-2 text-sm font-bold mb-2 animate-shake">
            {error}
          </div>
        )}
        <div className="mb-2 mt-2 text-indigo-200 text-xs text-center">
          인증이 완료되면 SBT 발급 여부가 자동 체크됩니다.
        </div>
      </div>
      <style>{`
        .drop-shadow-glow { text-shadow: 0 0 16px #a5b4fc, 0 0 32px #f0abfc; }
        .animate-fade-in { animation: fadeIn 1.2s cubic-bezier(.4,0,.2,1) both; }
        .animate-shake { animation: shake 0.3s linear 1; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(30px);} to { opacity: 1; transform: none; } }
        @keyframes shake { 10%, 90% { transform: translateX(-2px); } 20%, 80% { transform: translateX(4px); } 30%, 50%, 70% { transform: translateX(-8px); } 40%, 60% { transform: translateX(8px); } }
      `}</style>
    </div>
  );
}
