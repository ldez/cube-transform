  import allRotations from './all-rotations';

  export default class MoveAnalyzer {

    opposite(move) {
      if (move.indexOf("'") === -1) {
        return move + "'";
      }
      return move.replace("\'", '');
    }

    _rotate(move, axeRotations) {
      const {
        unit,
        extra
      } = this.destructure(move);
      return this.normalize(axeRotations[unit] + extra);
    }

    rotate(move, axe) {
      let result;
      if (axe === 'x') {
        result = this._rotate(move, allRotations.axeX);
      } else if (axe === "x'") {
        result = this._rotate(move, allRotations.axeXPrime);
      } else if (axe === "y") {
        result = this._rotate(move, allRotations.axeY);
      } else if (axe === "y'") {
        result = this._rotate(move, allRotations.axeYPrime);
      } else if (axe === "z") {
        result = this._rotate(move, allRotations.axeZ);
      } else if (axe === "z'") {
        result = this._rotate(move, allRotations.axeZPrime);
      } else {
        result = "fuck !";
      }
      return result;
    }

    destructure(move) {
      const moveRegex = /([A-Za-z])(['|\d]{0,2})/g;

      const moves = {};
      let temp;
      while ((temp = moveRegex.exec(move)) !== null) {
        moves.unit = temp[1];
        moves.extra = temp[2];
      }
      return moves;
    }

    normalize(move) {
      return move.replace("''", "");
    }

  }