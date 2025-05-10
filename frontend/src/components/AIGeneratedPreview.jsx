import React from "react";

export default function AIGeneratedPreview({ traits, interests, bio }) {
  // traits, interests는 콤마로 구분된 문자열로 가정
  const traitList = traits ? traits.split(",").map((t) => t.trim()) : [];
  const interestList = interests
    ? interests.split(",").map((i) => i.trim())
    : [];
  const summary = `나는 ${traitList.join(
    ", "
  )} 성향을 가지고 있고, ${interestList.join(", ")}에 관심이 많아요. \n${bio}`;
  return (
    <div className="bg-gray-900 rounded-xl p-6 flex flex-col items-center w-full max-w-md mx-auto mt-4">
      <img
        src="https://api.dicebear.com/7.x/adventurer/svg?seed=ElizaPreview"
        alt="ai-preview"
        className="w-20 h-20 rounded-full border-2 border-gray-700 mb-2"
      />
      <div className="text-white text-center whitespace-pre-line">
        {summary}
      </div>
    </div>
  );
}
