import mongoose, { Document, Schema } from 'mongoose';
import { FlowExportObject } from 'react-flow-renderer';

type ICircuit = Document & {
  reactFlowInstance: FlowExportObject;
};

mongoose.connect(
  'mongodb+srv://admin:admin@cluster0.ztsbr.mongodb.net/logicdb?retryWrites=true&w=majority',
);

const circuitsSchema = new Schema({
  reactFlowInstance: Object,
});

export default mongoose.models.circuits ||
  mongoose.model<ICircuit>('circuits', circuitsSchema);
