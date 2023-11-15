import { expect, describe, it, afterEach, beforeAll } from "vitest";
import { AreaCalculator } from "./AreaCalculator";
import { Rectangle } from "./Rectangle";

const originalDocument = `<!DOCTYPE html><body></body></html>`;

describe("AreaCalculator", () => {
  beforeAll(() => {
    customElements.define("area-calculator", AreaCalculator);
    customElements.define("calc-rectangle", Rectangle)
  })

  afterEach(() => {
    document.documentElement.innerHTML = originalDocument;
  });

  it("should be connected after being added to page", () => {
    const areaCalculator = new AreaCalculator();
    expect(areaCalculator.isConnected).toBe(false);
    document.body.appendChild(areaCalculator);
    expect(areaCalculator.isConnected).toBe(true);
  });

  it("should calculate areas of rectangle children correctly", () => {
    const areaCalculator = new AreaCalculator();
    document.body.appendChild(areaCalculator);

    const rectangles = [
      {height: 10, width: 10},
      {height: 50, width: 50}
    ]

    areaCalculator.innerHTML = `
      <calc-rectangle rect-width="${rectangles[0].width}" rect-height="${rectangles[0].height}" />
      <calc-rectangle rect-width="${rectangles[1].width}" rect-height="${rectangles[1].height}" />
    `

    expect(areaCalculator.getTotalArea()).toBe(
      rectangles[0].width * rectangles[0].height + rectangles[1].width * rectangles[1].height
    )
  });

  it("should add a result text after being connected", () => {
    const areaCalculator = new AreaCalculator();
    document.body.appendChild(areaCalculator);

    const resultText = document.querySelector("output.area-calculator__result")
    expect(resultText).not.toBe(null);
  })
});
