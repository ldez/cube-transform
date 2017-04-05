import MoveTransformer from "../src/move-transformer";

describe('Rotate moves', () => {

  const moveTransformer = new MoveTransformer();

  describe('Rotation on axe x', () => {
    let axe = "x";

    it("should be R when R", () => {
      expect(moveTransformer.rotate("R", axe)).toBe("R");
    });

    it("should be L when L", () => {
      expect(moveTransformer.rotate("L", axe)).toBe("L");
    });

    it("should be B when U", () => {
      expect(moveTransformer.rotate("U", axe)).toBe("B");
    });

    it("should be F when D", () => {
      expect(moveTransformer.rotate("D", axe)).toBe("F");
    });

    it("should be U when F", () => {
      expect(moveTransformer.rotate("F", axe)).toBe("U");
    });

    it("should be D when B", () => {
      expect(moveTransformer.rotate("B", axe)).toBe("D");
    });

    it("should be S' when E", () => {
      expect(moveTransformer.rotate("E", axe)).toBe("S'");
    });

    it("should be M when M", () => {
      expect(moveTransformer.rotate("M", axe)).toBe("M");
    });

    it("should be E' when S", () => {
      expect(moveTransformer.rotate("S", axe)).toBe("E'");
    });

    it("should be x when x", () => {
      expect(moveTransformer.rotate("x", axe)).toBe("x");
    });

    it("should be z' when y", () => {
      expect(moveTransformer.rotate("y", axe)).toBe("z'");
    });

    it("should be y' when z", () => {
      expect(moveTransformer.rotate("z", axe)).toBe("y'");
    });
  });

  describe('Rotation on axe y', () => {
    let axe = "y";

    it("should be F when R", () => {
      expect(moveTransformer.rotate("R", axe)).toBe("F");
    });

    it("should be B when L", () => {
      expect(moveTransformer.rotate("L", axe)).toBe("B");
    });

    it("should be U when U", () => {
      expect(moveTransformer.rotate("U", axe)).toBe("U");
    });

    it("should be D when D", () => {
      expect(moveTransformer.rotate("D", axe)).toBe("D");
    });

    it("should be L when F", () => {
      expect(moveTransformer.rotate("F", axe)).toBe("L");
    });

    it("should be R when B", () => {
      expect(moveTransformer.rotate("B", axe)).toBe("R");
    });

    it("should be E when E", () => {
      expect(moveTransformer.rotate("E", axe)).toBe("E");
    });

    it("should be S' when M", () => {
      expect(moveTransformer.rotate("M", axe)).toBe("S'");
    });

    it("should be M when S", () => {
      expect(moveTransformer.rotate("S", axe)).toBe("M");
    });

    it("should be z' when x", () => {
      expect(moveTransformer.rotate("x", axe)).toBe("z'");
    });

    it("should be y when y", () => {
      expect(moveTransformer.rotate("y", axe)).toBe("y");
    });

    it("should be x' when z", () => {
      expect(moveTransformer.rotate("z", axe)).toBe("x'");
    });
  });

  describe('Rotation on axe z', () => {
    let axe = "z";

    it("should be D when R", () => {
      expect(moveTransformer.rotate("R", axe)).toBe("D");
    });

    it("should be U when L", () => {
      expect(moveTransformer.rotate("L", "z")).toBe("U");
    });

    it("should be R when U", () => {
      expect(moveTransformer.rotate("U", "z")).toBe("R");
    });

    it("should be L when D", () => {
      expect(moveTransformer.rotate("D", "z")).toBe("L");
    });

    it("should be F when F", () => {
      expect(moveTransformer.rotate("F", "z")).toBe("F");
    });

    it("should be B when B", () => {
      expect(moveTransformer.rotate("B", "z")).toBe("B");
    });

    it("should be S' when E", () => {
      expect(moveTransformer.rotate("E", axe)).toBe("M");
    });

    it("should be M when M", () => {
      expect(moveTransformer.rotate("M", axe)).toBe("E'");
    });

    it("should be E' when S", () => {
      expect(moveTransformer.rotate("S", axe)).toBe("S");
    });

    it("should be y' when x", () => {
      expect(moveTransformer.rotate("x", axe)).toBe("y'");
    });

    it("should be x when y", () => {
      expect(moveTransformer.rotate("y", axe)).toBe("x");
    });

    it("should be z when z", () => {
      expect(moveTransformer.rotate("z", axe)).toBe("z");
    });

  });


  xit("dsjqkh", () => {
    const move = "TR2'";
    const moveRegex = /([T]?[RLUDFBrludfbMESxyz])(['|\d]{0,2})/;
    const moves = move.match(moveRegex);
    expect(moves).toEqual(["R2'", "R", "2'"]);
  });

});
