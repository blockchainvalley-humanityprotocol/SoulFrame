// ElizaOS 연동 유틸 (AI 프로필 요약 및 이미지)
// 실제 서비스에서는 ElizaOS API 엔드포인트 필요

export async function getAISummary({ trait, interest, intro }) {
  // 실제로는 ElizaOS API 호출 필요
  return {
    summary: `요약: ${trait} 성향, ${interest}에 관심. "${intro}"`,
    image: 'https://placehold.co/200x200?text=AI+NFT+Image',
  };
}
