export class AreaCalculator extends HTMLElement {
  public isAlreadyConnected: boolean = false;

  constructor() {
    super();
  }

  public getTotalArea() {
    const rectangles = this.querySelectorAll(
      "calc-rectangle"
    ) as NodeListOf<HTMLElement>;
    let totalArea = 0;

    if (!rectangles || rectangles.length === 0) return 0;

    rectangles.forEach((rect) => {
      const rectWidth = rect.getAttribute("rect-width");
      const rectHeight = rect.getAttribute("rect-height");
      if (!rectWidth || !rectHeight) return;
      totalArea += parseInt(rectWidth) * parseInt(rectHeight);
    });

    return totalArea;
  };

  connectedCallback() {
    const resultText = document.createElement("output");
    resultText.innerText =
      this.getTotalArea() > 0
        ? "Total area is " + this.getTotalArea()
        : "Total area could not be calculated";
    resultText.classList.add("area-calculator__result");

    this.appendChild(resultText);
  }
}
