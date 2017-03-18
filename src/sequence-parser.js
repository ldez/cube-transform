export default class SequenceParser {

  toMoves(sequence) {
    const moveRegex = /([A-Za-z]['|\d]{0,2})/g;

    const moves = [];
    let temp;
    while ((temp = moveRegex.exec(sequence)) !== null) {
      moves.push(temp[0]);
    }
    return moves;
  }

  toSubSeqences(rawSequence) {
    const subSequenceRegex = /([\(]?)([^\(^\)]+)((\)\d?)?)/g;

    const subSequences = [];

    let temp;
    while ((temp = subSequenceRegex.exec(rawSequence)) !== null) {
      let expr = {
        start: temp[1] || '',
        moves: temp[2] || '',
        end: temp[3] || ''
      };
      subSequences.push(expr);
    }
    return subSequences;
  }

}
