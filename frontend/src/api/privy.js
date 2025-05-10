// Privy API 연동 유틸(프론트엔드용)
// 실제 서비스에서는 Privy SDK 권장

export async function privyLogin({ email }) {
  // 실제로는 Privy SDK 또는 OAuth 연동 필요
  // 여기서는 목업 API 예시
  return {
    success: true,
    wallet: '0x1234...abcd',
    email,
    privyToken: 'mock-privy-token',
  };
}

export async function getPrivyUser({ privyToken }) {
  // 실제로는 Privy SDK에서 유저 정보 조회
  return {
    wallet: '0x1234...abcd',
    email: 'user@example.com',
  };
}
