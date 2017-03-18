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
});
