import "whatwg-fetch";
import { afterEach, afterAll, beforeAll } from "vitest";
import { server } from "./mocks";

beforeAll(() => server.listen({ onUnhandledRequest: `error` }));
afterAll(() => server.close());
afterEach(() => server.resetHandlers());
