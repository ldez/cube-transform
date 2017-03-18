import MoveTransformer from "../src/move-transformer";

describe('Opposite moves', () => {

  const moveTransformer = new MoveTransformer();

  describe('Basic moves', () => {

    it("R should be oposite of R'", () => {
      expect(moveTransformer.opposite("R'")).toBe("R");
    });

    it("R' should be oposite of R", () => {
      expect(moveTransformer.opposite("R")).toBe("R'");
    });

    it("L should be oposite of L'", () => {
      expect(moveTransformer.opposite("L'")).toBe("L");
    });

    it("L' should be oposite of L", () => {
      expect(moveTransformer.opposite("L")).toBe("L'");
    });

    it("U' should be oposite of U", () => {
      expect(moveTransformer.opposite("U")).toBe("U'");
    });

    it("U should be oposite of U'", () => {
      expect(moveTransformer.opposite("U'")).toBe("U");
    });

    it("D' should be oposite of D", () => {
      expect(moveTransformer.opposite("D")).toBe("D'");
    });

    it("D should be oposite of D'", () => {
      expect(moveTransformer.opposite("D'")).toBe("D");
    });

    it("F' should be oposite of F", () => {
      expect(moveTransformer.opposite("F")).toBe("F'");
    });

    it("F should be oposite of F'", () => {
      expect(moveTransformer.opposite("F'")).toBe("F");
    });

    it("B' should be oposite of B", () => {
      expect(moveTransformer.opposite("B")).toBe("B'");
    });

    it("B should be oposite of B'", () => {
      expect(moveTransformer.opposite("B'")).toBe("B");
    });

  });

  describe('2 layers moves', () => {

    it("r should be oposite of r'", () => {
      expect(moveTransformer.opposite("r'")).toBe("r");
    });

    it("r' should be oposite of r", () => {
      expect(moveTransformer.opposite("r")).toBe("r'");
    });

    it("l should be oposite of l'", () => {
      expect(moveTransformer.opposite("l'")).toBe("l");
    });

    it("l' should be oposite of l", () => {
      expect(moveTransformer.opposite("l")).toBe("l'");
    });

    it("u' should be oposite of u", () => {
      expect(moveTransformer.opposite("u")).toBe("u'");
    });

    it("u should be oposite of u'", () => {
      expect(moveTransformer.opposite("u'")).toBe("u");
    });

    it("d' should be oposite of d", () => {
      expect(moveTransformer.opposite("d")).toBe("d'");
    });

    it("d should be oposite of d'", () => {
      expect(moveTransformer.opposite("d'")).toBe("d");
    });

    it("f' should be oposite of f", () => {
      expect(moveTransformer.opposite("f")).toBe("f'");
    });

    it("f should be oposite of f'", () => {
      expect(moveTransformer.opposite("f'")).toBe("f");
    });

    it("b' should be oposite of b", () => {
      expect(moveTransformer.opposite("b")).toBe("b'");
    });

    it("b should be oposite of b'", () => {
      expect(moveTransformer.opposite("b'")).toBe("b");
    });

  });

  describe('Axe moves', () => {

    it("x' should be oposite of x", () => {
      expect(moveTransformer.opposite("x")).toBe("x'");
    });

    it("x should be oposite of x'", () => {
      expect(moveTransformer.opposite("x'")).toBe("x");
    });

    it("y' should be oposite of y", () => {
      expect(moveTransformer.opposite("y")).toBe("y'");
    });

    it("y should be oposite of y'", () => {
      expect(moveTransformer.opposite("y'")).toBe("y");
    });

    it("z' should be oposite of z", () => {
      expect(moveTransformer.opposite("z")).toBe("z'");
    });

    it("z should be oposite of z'", () => {
      expect(moveTransformer.opposite("z'")).toBe("z");
    });

  });

  describe('Special moves', () => {

    it("R2 should be oposite of R2'", () => {
      expect(moveTransformer.opposite("R2'")).toBe("R2");
    });

    it("R2' should be oposite of R2", () => {
      expect(moveTransformer.opposite("R2")).toBe("R2'");
    });

    it("R' should be oposite of R''", () => {
      expect(moveTransformer.opposite("R''")).toBe("R'");
    });

  });

});
