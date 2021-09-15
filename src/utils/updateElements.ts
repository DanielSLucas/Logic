/* eslint-disable no-param-reassign */
import { Elements, isEdge } from 'react-flow-renderer';

function and(inputs: string[]): boolean {
  return !inputs.includes('0');
}

function nand(inputs: string[]): boolean {
  return !and(inputs);
}

function or(inputs: string[]): boolean {
  return !!inputs.includes('1');
}

function nor(inputs: string[]): boolean {
  return !or(inputs);
}

function not(inputs: string[]): boolean {
  return inputs[0] === '0';
}

function xor(inputs: string[]): boolean {
  return !!(inputs.includes('1') && inputs.includes('0'));
}

function xnor(inputs: string[]): boolean {
  return !xor(inputs);
}

function toStringBinaryResponse(response: boolean): '1' | '0' {
  return response ? '1' : '0';
}

type LogicOperations = 'and' | 'nand' | 'or' | 'nor' | 'not' | 'xor' | 'xnor';

const logicOperations = {
  and,
  nand,
  or,
  nor,
  not,
  xor,
  xnor,
};

function updateElements(elements: Elements): Elements {
  return elements.map(element => {
    if (isEdge(element)) {
      return element;
    }

    const connections: Array<any> = elements.filter(
      (edge: any) => edge.target === element.id,
    );

    const hasConnections = connections.length !== 0;

    if (!hasConnections) {
      return element;
    }

    const sourceNodes = connections.map((edge: any) => {
      return elements.find(node => node.id === edge.source);
    });

    const inputs = sourceNodes.map((node, i) => {
      return {
        sourceNode: node?.id,
        targetHandle: connections[i].targetHandle,
        value: node?.data.inputValue || node?.data.output,
      };
    });

    element.data.inputs = inputs;

    if (element.type && Object.keys(logicOperations).includes(element.type)) {
      element.data.output = toStringBinaryResponse(
        logicOperations[element.type as LogicOperations](
          inputs.map(input => input.value),
        ),
      );
    }

    return element;
  });
}

export default updateElements;
