// Humanity Protocol API 연동 유틸
// 환경변수에 HUMANITY_API_TOKEN 필요

const API_BASE = "https://issuer.humanity.org/credentials";

export async function issueVC({ claims, subject_address }) {
  const res = await fetch(`${API_BASE}/issue`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.REACT_APP_HUMANITY_API_TOKEN}`,
    },
    body: JSON.stringify({ claims, subject_address }),
  });
  if (!res.ok) throw new Error("VC 발급 실패");
  return res.json();
}

export async function revokeVC({ credentialId }) {
  const res = await fetch(`${API_BASE}/revoke`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.REACT_APP_HUMANITY_API_TOKEN}`,
    },
    body: JSON.stringify({ credentialId }),
  });
  if (!res.ok) throw new Error("VC 폐기 실패");
  return res.json();
}

export async function listVCs({ holderDid }) {
  const res = await fetch(`${API_BASE}/list?holderDid=${holderDid}`, {
    headers: {
      Authorization: `Bearer ${process.env.REACT_APP_HUMANITY_API_TOKEN}`,
    },
  });
  if (!res.ok) throw new Error("VC 목록 조회 실패");
  return res.json();
}
