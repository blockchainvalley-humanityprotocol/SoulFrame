import React from "react";

export default function Gatekeeper({ verified = false, children }) {
  if (!verified) {
    return (
      <div className="bg-red-900 text-white rounded-xl p-6 text-center max-w-md mx-auto mt-8">
        <div className="text-2xl mb-2">🚫 접근 제한</div>
        <div className="text-sm">
          이 페이지는 인증된 SoulFrame NFT 보유자만 접근할 수 있습니다.
        </div>
      </div>
    );
  }
  return <>{children}</>;
}
