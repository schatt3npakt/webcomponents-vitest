import { beforeAll, afterEach, describe, it, expect } from "vitest";
import { Rectangle } from "./Rectangle";

const originalDocument = `<!DOCTYPE html><body></body></html>`;

describe("Rectangle", () => {
  beforeAll(() => {
    customElements.define("calc-rectangle", Rectangle)
  })

  afterEach(() => {
    document.documentElement.innerHTML = originalDocument;
  });

  it("should be connected after being added to the page", () => {
    const rect = new Rectangle();
    expect(rect.isConnected).toBe(false);
    document.body.appendChild(rect);
    expect(rect.isConnected).toBe(true);
  })
})