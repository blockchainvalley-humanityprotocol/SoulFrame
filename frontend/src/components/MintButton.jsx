import React from "react";

export default function MintButton({ disabled = true }) {
  return (
    <button
      className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold py-2 px-4 rounded-lg mt-4 opacity-60 cursor-not-allowed"
      disabled={disabled}
      onClick={() => alert("민팅은 준비 중입니다.")}
    >
      SoulFrame NFT 민팅
    </button>
  );
}
