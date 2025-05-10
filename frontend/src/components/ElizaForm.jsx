import React from "react";

export default function ElizaForm({ values, onChange }) {
  return (
    <form className="bg-gray-800 rounded-xl p-6 flex flex-col gap-4 w-full max-w-md mx-auto">
      <div>
        <label className="block text-gray-300 mb-1">성격/성향</label>
        <input
          type="text"
          name="traits"
          value={values.traits}
          onChange={onChange}
          placeholder="예: 분석적인, 커뮤니티 중심"
          className="w-full px-3 py-2 rounded bg-gray-700 text-white"
        />
      </div>
      <div>
        <label className="block text-gray-300 mb-1">관심 분야</label>
        <input
          type="text"
          name="interests"
          value={values.interests}
          onChange={onChange}
          placeholder="예: NFT, DeFi, DAO"
          className="w-full px-3 py-2 rounded bg-gray-700 text-white"
        />
      </div>
      <div>
        <label className="block text-gray-300 mb-1">한 줄 자기소개</label>
        <input
          type="text"
          name="bio"
          value={values.bio}
          onChange={onChange}
          placeholder="나를 한 줄로 소개해보세요"
          className="w-full px-3 py-2 rounded bg-gray-700 text-white"
        />
      </div>
    </form>
  );
}
