import MoveTransformer from './move-transformer';
import SequenceParser from './sequence-parser';
import AlgorithmTransformer from './algorithm-transformer';

const ma = new MoveTransformer();
const sa = new SequenceParser();

const algorithmTransformer = new AlgorithmTransformer(ma, sa);

export {
  algorithmTransformer
};
