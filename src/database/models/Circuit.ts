import mongoose, { Document, Schema } from 'mongoose';
import { Elements } from 'react-flow-renderer';

type ICircuit = Document & {
  elements: Elements;
};

mongoose.connect(
  'mongodb+srv://admin:admin@cluster0.ztsbr.mongodb.net/logicdb?retryWrites=true&w=majority',
);

const circuitsSchema = new Schema({
  elements: Array,
});

// const Circuit = mongoose.model<ICircuit>('circuits', circuitsSchema);

export default mongoose.models.circuits ||
  mongoose.model<ICircuit>('circuits', circuitsSchema);
