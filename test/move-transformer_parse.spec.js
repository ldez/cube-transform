import MoveTransformer from "../src/move-transformer";

describe('Parse moves', () => {

  const moveTransformer = new MoveTransformer();

  it("should decompose R", () => {
    const element = {
      base: "R",
      extra: ""
    };
    expect(moveTransformer.parse("R")).toEqual(element);
  });

  it("should decompose R'", () => {
    const element = {
      base: "R",
      extra: "'"
    };
    expect(moveTransformer.parse("R'")).toEqual(element);
  });

  it("should decompose R2'", () => {
    const element = {
      base: "R",
      extra: "2'"
    };
    expect(moveTransformer.parse("R2'")).toEqual(element);
  });

  it("should decompose nothing", () => {
    const element = {};
    expect(moveTransformer.parse("")).toEqual(element);
  });
});
