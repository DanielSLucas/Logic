import { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '../../database/dbConnect';
import Circuit from '../../database/models/Circuit';

export default async function circuit(
  request: NextApiRequest,
  response: NextApiResponse,
): Promise<void> {
  const { method } = request;
  await dbConnect();

  if (method === 'GET') {
    try {
      const circuitId = request.query.id;

      const foundCircuit = await Circuit.findById(circuitId);

      return response.status(200).json(foundCircuit);
    } catch (error) {
      response.status(400).json({ success: false });
    }
  }

  if (method === 'POST') {
    try {
      const reactFlowInstance = request.body;

      const newCircuit = await Circuit.create({
        reactFlowInstance,
      });

      return response.status(200).json({ id: newCircuit.id });
    } catch (error) {
      response.status(400).json({ success: false });
    }
  }

  if (method === 'PUT') {
    try {
      const circuitId = request.query.id;
      const reactFlowInstance = request.body;

      const updatedCircuit = await Circuit.findByIdAndUpdate(circuitId, {
        reactFlowInstance,
      });

      return response.status(200).json({ id: updatedCircuit.id });
    } catch (error) {
      response.status(400).json({ success: false });
    }
  }

  return response.status(400).json({ success: false });
}
