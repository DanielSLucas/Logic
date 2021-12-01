import mongoose, { Document, Schema } from 'mongoose';
import { FlowExportObject } from 'react-flow-renderer';

type ICircuit = Document & {
  reactFlowInstance: FlowExportObject;
};

const circuitsSchema = new Schema({
  reactFlowInstance: Object,
});

export default mongoose.models.circuits ||
  mongoose.model<ICircuit>('circuits', circuitsSchema);
