import MoveTransformer from "../src/move-transformer";

describe('moves', () => {

  it("R should be oposite of R'", () => {
    const moveTransformer = new MoveTransformer();

    expect(moveTransformer.opposite("R'")).toBe("R");
  });

  it("R' should be oposite of R''", () => {
    const moveTransformer = new MoveTransformer();

    expect(moveTransformer.opposite("R''")).toBe("R'");
  });

});
