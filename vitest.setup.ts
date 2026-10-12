import "@testing-library/jest-dom/vitest";
import { cleanup } from "@testing-library/react";
import { afterEach } from "vitest";

// 각 테스트가 그린 화면을 지워서, 테스트끼리 상태를 공유하지 않게 한다.
afterEach(() => {
  cleanup();
});
