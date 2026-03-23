# 누리봄 아동청소년발달연구소 — 프론트엔드

누리봄 아동청소년발달연구소 공식 웹사이트 프론트엔드 프로젝트입니다.

## 기술 스택

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Icons:** lucide-react
- **Package Manager:** pnpm

## 시작하기

```bash
# 의존성 설치
pnpm install

# 개발 서버 실행
pnpm dev

# 빌드
pnpm build

# 프로덕션 서버 실행
pnpm start
```

개발 서버 실행 후 [http://localhost:3000](http://localhost:3000) 에서 확인할 수 있습니다.

## 프로젝트 구조

```
src/
├── app/
│   ├── page.tsx          # 메인 홈페이지
│   ├── programs/         # 치료프로그램 소개 페이지
│   └── therapists/       # 치료사 소개 페이지
├── constants/
│   ├── nav.ts            # 네비게이션 메뉴 데이터
│   ├── programs.ts       # 치료프로그램 데이터
│   └── therapists.ts     # 치료사 프로필 데이터
public/
└── images/               # 정적 이미지 리소스
```

## 주요 페이지

| 경로 | 설명 |
|------|------|
| `/` | 메인 홈페이지 |
| `/programs` | 치료프로그램 (놀이치료, 미술치료, 언어치료, 인지학습 등) |
| `/therapists` | 치료사 소개 (심리상담·인지치료·언어치료·임상심리) |
