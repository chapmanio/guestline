import "whatwg-fetch";
import { afterEach, afterAll, beforeAll, expect } from "vitest";
import { cleanup } from "@testing-library/react";
import * as matchers from "@testing-library/jest-dom/matchers";

import { server } from "./mocks";

expect.extend(matchers);

beforeAll(() => server.listen({ onUnhandledRequest: `error` }));
afterAll(() => server.close());
afterEach(() => {
  server.resetHandlers();
  cleanup();
});
