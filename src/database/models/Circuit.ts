import mongoose, { Document, Schema } from 'mongoose';
import { FlowExportObject } from 'react-flow-renderer';

type ICircuit = Document & {
  reactFlowInstance: FlowExportObject;
};

mongoose.connect(process.env.MONGODB_URI);

const circuitsSchema = new Schema({
  reactFlowInstance: Object,
});

export default mongoose.models.circuits ||
  mongoose.model<ICircuit>('circuits', circuitsSchema);
