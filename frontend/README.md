# SoulFrame Frontend

- React (Vite) + TailwindCSS 기반 Web3 신원 플랫폼
- Privy 지갑 연동, Humanity Protocol 인증, ElizaOS AI 프로필, Soulbound NFT 발행 등 구현

## 개발 시작

```bash
cd frontend
npm install
npm run dev
```

---

## 페이지별 기능

### 1. Home (`/`)

- 서비스 소개, 슬로건, "나만의 Web3 프로필 만들기" CTA 버튼

### 3. Humanity 인증 (`/humanity-auth`)

- Humanity Protocol API로 VC(Verifiable Credential) 발급 (SBT)
- 인증 성공 시 → [프로필 생성] 페이지로 이동
- 실패 시 에러 표시

### 4. 프로필 생성 (`/create-profile`)

- 성향, 관심사, 한 줄 소개 입력
- ElizaOS API로 AI 요약/이미지 생성
- AI 결과 확인 및 수정 가능
- → [NFT 발행] 페이지로 이동

### 5. SoulFrame NFT 발행 (`/mint`)

- Humanity 인증(SBT) 여부 확인
- AI 프로필 기반 Soulbound NFT 발행 (실제 민팅 로직은 추후 구현)
- → [내 SoulFrame] 페이지로 이동

### 6. 내 SoulFrame (`/mysoulframe`)

- 내 NFT/프로필/인증상태/외부 검증 링크 표시
- → [AI Agent 대화] 페이지로 이동

### 7. AI Agent 대화 (`/ai-agent`)

- ElizaOS 기반 AI Agent와 대화 (예시 쿼리, 실제 연동은 추후 구현)

---

## 전체 페이지 플로우

```
Home → Login → Humanity 인증 → 프로필 생성 → NFT 발행 → 내 SoulFrame → AI Agent 대화
```

---

## 주요 연동/기술

- **Privy**: Web3 지갑/로그인 관리
- **Humanity Protocol**: 인증(SBT, VC 발급)
- **ElizaOS**: AI 프로필 요약/이미지/에이전트 대화
- **React Router**: 페이지 전환
- **TailwindCSS**: UI 스타일링

---

## 환경변수

- `REACT_APP_HUMANITY_API_TOKEN` (Humanity API 연동용)

---

## 참고

- 각 API/SDK의 실제 연동은 문서 참고 및 Key 발급 필요
- 현재는 목업/테스트 구조로 동작하며, 실제 서비스 연동 시 확장 가능
