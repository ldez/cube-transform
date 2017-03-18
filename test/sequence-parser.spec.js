import SequenceParser from "../src/sequence-parser";

describe('Sequences parser', () => {

  const sequenceParser = new SequenceParser();

  describe('toMoves', () => {

    it("should split moves when moves doesn't separated by space", () => {
      expect(sequenceParser.toMoves("R'DU2F2'"))
        .toEqual(["R'", "D", "U2", "F2'"]);
    });

    it("should split moves when moves separated by space", () => {
      expect(sequenceParser.toMoves("R' D U2 F2'"))
        .toEqual(["R'", "D", "U2", "F2'"]);
    });

    it("should split moves when moves contains ''", () => {
      expect(sequenceParser.toMoves("R'' F"))
        .toEqual(["R''", "F"]);
    });

  });

  describe('toSubSeqences', () => {

    it("should split algorithm when moves doesn't separated by space", () => {
      const subSeq = [
        { start: '', moves: "R'DU2F2'", end: '' }
      ];
      expect(sequenceParser.toSubSeqences("R'DU2F2'")).toEqual(subSeq);
    });

    it("should split algorithm when moves separated by space", () => {
      const subSeq = [
        { start: '', moves: "R' D U2 F2'", end: '' }
      ];
      expect(sequenceParser.toSubSeqences("R' D U2 F2'")).toEqual(subSeq);
    });

    it("should split algorithm when algorithm ends with sequence groups", () => {
      const subSeq = [
        { start: '', moves: "R'DU2F2'", end: '' },
        { start: '(', moves: "UR2'D'BR", end: ')' }
      ];
      expect(sequenceParser.toSubSeqences("R'DU2F2'(UR2'D'BR)")).toEqual(subSeq);
    });

    it("should split algorithm when algorithm starts with sequence groups", () => {
      const subSeq = [
        { start: '(', moves: "UR2'D'BR", end: ')' },
        { start: '', moves: "R'DU2F2'", end: '' }
      ];
      expect(sequenceParser.toSubSeqences("(UR2'D'BR)R'DU2F2'")).toEqual(subSeq);
    });

    it("should split algorithm when algorithm contains one sequence groups in the middle", () => {
      const subSeq = [
        { start: '', moves: "R'DU2F2'", end: '' },
        { start: '(', moves: "UR2'D'BR", end: ')' },
        { start: '', moves: "R'DU2F2'", end: '' }
      ];
      expect(sequenceParser.toSubSeqences("R'DU2F2'(UR2'D'BR)R'DU2F2'")).toEqual(subSeq);
    });

    it("should split algorithm when algorithm contains sevrarl sequence groups", () => {
      const subSeq = [
        { start: '', moves: "R'DU2F2'", end: '' },
        { start: '(', moves: "UR2'D'BR", end: ')' },
        { start: '', moves: "R'DU2F2'", end: '' },
        { start: '(', moves: "UR2'D'BR", end: ')' },
        { start: '(', moves: "UR2'D'BR", end: ')' }
      ];
      expect(sequenceParser.toSubSeqences("R'DU2F2'(UR2'D'BR)R'DU2F2'(UR2'D'BR)(UR2'D'BR)")).toEqual(subSeq);
    });

    it("should split algorithm when algorithm contains repeated sequence groups", () => {
      const subSeq = [
        { start: '', moves: "R'DU2F2'", end: '' },
        { start: '(', moves: "UR2'D'BR", end: ')2' },
        { start: '', moves: "R'DU2F2'", end: '' }
      ];
      expect(sequenceParser.toSubSeqences("R'DU2F2'(UR2'D'BR)2R'DU2F2'")).toEqual(subSeq);
    });
  });

});
