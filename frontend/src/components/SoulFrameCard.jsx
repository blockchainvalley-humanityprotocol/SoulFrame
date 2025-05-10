import React from "react";
import StatusBadge from "./StatusBadge";

export default function SoulFrameCard({
  avatar = "https://api.dicebear.com/7.x/adventurer/svg?seed=SoulFrame",
  address = "0x44...4b42",
  status = "active",
  nickname = "나의 Web3 페르소나",
  traits = ["분석적인", "커뮤니티 중심"],
  interests = ["NFT", "DeFi", "DAO"],
  bio = "블록체인 위에 새겨진 나의 정체성",
  investmentStyles = ["단기투자", "스테이블 투자"],
}) {
  return (
    <div className="bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col items-center w-full max-w-sm mx-auto">
      <img
        src={avatar}
        alt="avatar"
        className="w-24 h-24 rounded-full border-4 border-gray-700 mb-3"
      />
      <div className="flex items-center gap-2 mb-1">
        <span className="font-mono text-sm text-gray-300">{address}</span>
        <StatusBadge status={status} />
      </div>
      <div className="font-bold text-lg text-white mb-1">{nickname}</div>
      <div className="text-gray-400 text-sm mb-2">{bio}</div>
      <div className="flex flex-wrap gap-2 mb-2">
        {traits.map((t) => (
          <span
            key={t}
            className="bg-blue-700 text-xs px-2 py-1 rounded-full text-white"
          >
            {t}
          </span>
        ))}
      </div>
      <div className="flex flex-wrap gap-2 mb-2">
        {interests.map((i) => (
          <span
            key={i}
            className="bg-purple-700 text-xs px-2 py-1 rounded-full text-white"
          >
            #{i}
          </span>
        ))}
      </div>
      {/* 투자성향 뱃지 */}
      {investmentStyles && investmentStyles.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-2">
          {investmentStyles.map((style) => (
            <span
              key={style}
              className="bg-green-700 text-xs px-2 py-1 rounded-full text-white"
            >
              {style}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
