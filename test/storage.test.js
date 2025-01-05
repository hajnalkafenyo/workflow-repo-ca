import { describe, expect, test } from "vitest";
import { getUsername } from "../js/utils/storage";

describe("getUsername", () => {
  test("returns null when no user exists in storage", () => {
    expect(getUsername()).toBe(null);
  });

  test("returns the name from the user object in storage", () => {
    const user = { name: "Alice" };
    localStorage.setItem("user", JSON.stringify(user));

    const result = getUsername();
    expect(result).toBe("Alice");
  });
});
