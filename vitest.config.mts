import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [react()],
  resolve: {
    // tsconfig의 `@/*` → `src/*` 별칭을 테스트에서도 그대로 쓴다.
    tsconfigPaths: true,
  },
  test: {
    // 컴포넌트를 그려볼 수 있도록 브라우저 흉내 환경(jsdom)에서 실행한다.
    environment: "jsdom",
    setupFiles: ["./vitest.setup.ts"],
    include: ["src/**/*.test.{ts,tsx}"],
    // 아직 테스트 파일이 없는 단계(main 스캐폴드)에서도 CI가 통과하도록 한다.
    passWithNoTests: true,
  },
});
