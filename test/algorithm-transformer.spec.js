
import MoveTransformer from '../src/move-transformer';
import SequenceParser from '../src/sequence-parser';
import AlgorithmTransformer from '../src/algorithm-transformer';

describe('Opposite moves', () => {

  const ma = new MoveTransformer();
  const sa = new SequenceParser();

  const algorithmTransformer = new AlgorithmTransformer(ma, sa);

  it("R should be oposite of R'", () => {
    expect(algorithmTransformer.oppositeAlgorithm("R'"))
      .toBe("R");
  });

  it("should oposite algorithm when algorithm is a dot OLL", () => {
    expect(algorithmTransformer.oppositeAlgorithm("(RU'U')(R2'FRF')U2(R'FRF')"))
      .toBe("(F R' F' R) U2' (F R' F' R2) (U U R')");
  });

  it("should reverse algorithm when algorithm is a dot OLL", () => {
    expect(algorithmTransformer.reverseAlgorithm("(RU'U')(R2'FRF')U2(R'FRF')"))
      .toBe("(R' U U) (R2 F' R' F) U2' (R F' R' F)");
  });

  it("should rotate algorithm when rotation on axe x", () => {
    expect(algorithmTransformer.rotateAlgorithm("(RU'U')(R2'FRF')U2(R'FRF')", "x"))
      .toBe("(R B' B') (R2' U R U') B2 (R' U R U')");
  });

  it("should rotate algorithm when rotation on axe y", () => {
    expect(algorithmTransformer.rotateAlgorithm("(RU'U')(R2'FRF')U2(R'FRF')", "y"))
      .toBe("(F U' U') (F2' L F L') U2 (F' L F L')");
  });

  it("should rotate algorithm when rotation on axe z", () => {
    expect(algorithmTransformer.rotateAlgorithm("(RU'U')(R2'FRF')U2(R'FRF')", "z"))
      .toBe("(D R' R') (D2' F D F') R2 (D' F D F')");
  });

  it("nothing should be oposite of nothing", () => {
    expect(algorithmTransformer.oppositeAlgorithm(""))
      .toBe("");
  });

});
