import SequenceParser from "../src/sequence-parser";

describe('sequences', () => {

  it("R should be oposite of R'", () => {
    const sequenceParser = new SequenceParser();

    expect(sequenceParser.toMoves("R'D")).toEqual(["R'", "D"]);
  });

  it("R' should be oposite of R''", () => {
    const sequenceParser = new SequenceParser();

    expect(sequenceParser.toMoves("R'' F")).toEqual(["R''", "F"]);
  });

});
