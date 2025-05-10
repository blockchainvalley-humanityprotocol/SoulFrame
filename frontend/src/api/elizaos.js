// ElizaOS 연동 유틸 (AI 프로필 요약 및 이미지)
// 실제 서비스에서는 ElizaOS API 엔드포인트 필요

const ELIZAOS_API_BASE =
  import.meta.env.VITE_ELIZAOS_API_BASE || "http://localhost:3001";

/**
 * ElizaOS REST API로 agent(캐릭터)를 생성하고 요약/이미지/ID/설정 전체를 반환
 * @param {Object} param0
 * @returns {Promise<{id: string, summary: string, image: string, character: object}>}
 */
export async function getAISummary({ trait, interest, intro }) {
  // 실제 ElizaOS REST API 호출 예시
  const res = await fetch(`${ELIZAOS_API_BASE}/api/agents`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      trait,
      interest,
      intro,
    }),
  });
  if (!res.ok) throw new Error("ElizaOS agent 생성 실패");
  const agent = await res.json();
  // agent: { id, summary, image, character }
  return agent;
  // --- 아래는 mock ---
  // return {
  //   id: "test-agent-id",
  //   summary: `요약: ${trait} 성향, ${interest}에 관심. "${intro}"`,
  //   image: 'https://placehold.co/200x200?text=AI+NFT+Image',
  //   character: { trait, interest, intro }
  // };
}
