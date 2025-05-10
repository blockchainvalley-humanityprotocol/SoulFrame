# SoulFrame

*“블록체인 위에 새겨진 나의 정체성”*

## 프로젝트 개요
- **분야**: Web3 Identity, Soulbound NFT, DID, Sybil 방지, AI
- **주요 기능:**
  - Humanity Protocol 1인 1인증 (SBT)
  - ElizaOS 기반 AI 프로필 생성 (사용자 입력 기반)
  - Soulbound NFT로 발행 (이동 불가, 신뢰 기반 ID)
  - 외부 dApp/DAO에서 인증 상태 즉시 확인

## 폴더 구조
```
contracts/    # 스마트컨트랙트 (Solidity, Hardhat)
frontend/     # 프론트엔드 (React, Vite, Tailwind)
```

## 기술 스택
- Front-end: React.js (Vite), TailwindCSS
- Wallet: Privy
- AI: ElizaOS (입력 기반 프로필 요약)
- NFT: Solidity (ERC721 + Soulbound)
- 인증: Humanity Protocol, Oracle

## 시작 방법

### 1. 컨트랙트 개발
```bash
cd contracts
# Hardhat 세팅 및 배포
```

### 2. 프론트엔드 개발
```bash
cd frontend
npm install
npm run dev
```

---

> 자세한 기획/흐름/기술 개요는 상단 설명 참고
