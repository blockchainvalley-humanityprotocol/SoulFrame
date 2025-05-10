// Humanity Protocol API 연동 함수: VC 검증(verify)만 구현
import axios from "axios";

// 사용자의 VC 리스트를 가져옴 (GET /credentials/list)
export async function fetchVCList(subject_address) {
  const url = `https://issuer.humanity.org/credentials/list`;
  // 실제 API는 인증/파라미터가 있을 수 있으나, 예시에서는 주소만 사용
  // (실제 DID가 필요하다면 쿼리 파라미터 등으로 수정)
  const res = await axios.get(url, {
    params: { subject_address },
  });
  return res.data; // VC 배열 반환
}

// KYC 인증 여부를 반환 (true/false)
export async function isKycVerified(subject_address) {
  try {
    const vcList = await fetchVCList(subject_address);
    // claims.kyc === "passed" 인 VC가 있는지 확인
    return (
      Array.isArray(vcList) &&
      vcList.some(vc => vc.claims && vc.claims.kyc === "passed")
    );
  } catch (e) {
    return false; // 조회 실패 시 미인증 처리
  }
}
