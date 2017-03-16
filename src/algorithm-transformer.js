export default class AlgorithmTransformer {

  constructor(moveTransformer, sequenceParser) {
    this.moveTransformer = moveTransformer;
    this.sequenceParser = sequenceParser;
  }

  /**
   * Opposite algorithm.
   * @param   {string}   algorithm The algorithm.
   * @returns {string} The resulting algorithm.
   */
  oppositeAlgorithm(algorithm) {
    return this.sequenceParser
      .toSubSeqences(algorithm)
      .reverse()
      .map((subSequence) => {
        subSequence.inverse = this.sequenceParser.toMoves(subSequence.moves)
          .reverse()
          .map(this.moveTransformer.opposite)
          .join(' ');

        return subSequence;
      })
      .map((subSequence) => `${subSequence.start}${subSequence.inverse}${subSequence.end}`)
      .join(' ');
  }

  /**
   * Reverse an algorithm.
   * @param   {string} algorithm The algorithm.
   * @returns {string} The resulting algorithm.
   */
  reverseAlgorithm(algorithm) {
    return this.sequenceParser
      .toSubSeqences(algorithm)
      .map((subSequence) => {
        subSequence.inverse = this.sequenceParser.toMoves(subSequence.moves)
          .map(this.moveTransformer.opposite)
          .join(' ');

        return subSequence;
      })
      .map((subSequence) => `${subSequence.start}${subSequence.inverse}${subSequence.end}`)
      .join(' ');
  }

  /**
   * Apply a rotate on an algorithm.
   * @param   {string} algorithm The algorithm.
   * @param   {string} axe       The axe (x, y, z, x', y', z')
   * @returns {string} The resulting algorithm.
   */
  rotateAlgorithm(algorithm, axe) {
    return this.sequenceParser
      .toSubSeqences(algorithm)
      .map((subSequence) => {
        subSequence.rotate = this.sequenceParser.toMoves(subSequence.moves)
          .map((move => this.moveTransformer.rotate(move, axe)))
          .join(' ');

        return subSequence;
      })
      .map((subSequence) => `${subSequence.start}${subSequence.rotate}${subSequence.end}`)
      .join(' ');
  }

}
