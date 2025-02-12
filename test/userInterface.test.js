import { describe, expect, test } from "vitest";
import { isActivePath } from "../js/utils/userInterface";

describe("isActivePath", () => {
  test("currentPath matches href exactly", () => {
    const href = "/venue";
    const currentPath = "/venue";
    expect(isActivePath(href, currentPath)).toBe(true);
  });

  test("Returns true for root path (“/”) when path is “/” or “/index.html”", () => {
    expect(isActivePath("/", "/")).toBe(true);
    expect(isActivePath("/", "/index.html")).toBe(true);
  });

  test("Returns true when current path includes the href", () => {
    const href = "/venue";
    const currentPath = "/venue/123";
    expect(isActivePath(href, currentPath)).toBe(true);
  });
  test("Returns false when paths don't match", () => {
    const href = "/venue";
    const currentPath = "/event";
    expect(isActivePath(href, currentPath)).toBe(false);
  });
});
