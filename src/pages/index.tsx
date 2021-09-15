/* eslint-disable @typescript-eslint/no-empty-function */
import React, { useRef, useState, useCallback, useEffect } from 'react';
import { useRouter } from 'next/router';

import ReactFlow, {
  Edge,
  Node,
  Elements,
  isNode,
  removeElements,
  addEdge,
  Connection,
  Controls,
  MiniMap,
  ReactFlowProvider,
  FlowElement,
} from 'react-flow-renderer';

import { FiSave } from 'react-icons/fi';
import { GetServerSideProps } from 'next';
import updateElements from '../utils/updateElements';

import LogicGatesBar from '../components/LogicGatesBar';

import And from '../components/nodes/And';
import Or from '../components/nodes/Or';
import Switch from '../components/nodes/Switch';
import Nand from '../components/nodes/Nand';
import Nor from '../components/nodes/Nor';
import Not from '../components/nodes/Not';
import Xor from '../components/nodes/Xor';
import Xnor from '../components/nodes/Xnor';
import Display from '../components/nodes/Display';

import { Container } from '../styles/Main';
import SaveButton from '../components/SaveButton';
import RefreshButton from '../components/RefreshButton';

const nodeTypes = {
  and: And,
  nand: Nand,
  or: Or,
  nor: Nor,
  not: Not,
  xor: Xor,
  xnor: Xnor,
  switch: Switch,
  display: Display,
};

let id = 0;
// eslint-disable-next-line no-plusplus
const getId = () => `dndnode_${id++}`;

interface MainProps {
  initalElements: Elements;
}

const Main: React.FC<MainProps> = ({ initalElements }) => {
  const router = useRouter();
  const reactFlowWrapper = useRef<HTMLDivElement>({} as HTMLDivElement);
  const [reactFlowInstance, setReactFlowInstance] = useState<any>(null);
  const [elements, setElements] = useState<Elements>([]);

  useEffect(() => {
    setElements(
      initalElements.map(element => {
        if (element.data) {
          return {
            ...element,
            data: {
              ...element.data,
              setElements,
            },
          };
        }
        return element;
      }),
    );
  }, [initalElements]);

  const handleLoad = useCallback(_reactFlowInstance => {
    return setReactFlowInstance(_reactFlowInstance);
  }, []);

  const handleNodeMouseEnter = useCallback(
    (
      event: React.MouseEvent<Element, MouseEvent>,
      clikedElement: Node<any> | Edge<any>,
    ) => {
      const newElements = elements.map(element => {
        if (isNode(element) && element.id === clikedElement.id) {
          return {
            ...element,
            data: {
              ...element.data,
              isHovered: true,
            },
          };
        }
        return element;
      });

      setElements(newElements);
    },
    [elements],
  );

  const handleNodeMouseLeave = useCallback(
    (
      event: React.MouseEvent<Element, MouseEvent>,
      clikedElement: Node<any> | Edge<any>,
    ) => {
      const newElements = elements.map(element => {
        if (isNode(element) && element.id === clikedElement.id) {
          return {
            ...element,
            data: {
              ...element.data,
              isHovered: false,
            },
          };
        }
        return element;
      });

      setElements(newElements);
    },
    [elements],
  );

  const handleElementClick = useCallback(
    (
      event: React.MouseEvent<Element, MouseEvent>,
      clikedElement: Node<any> | Edge<any>,
    ) => {
      let preNewElements = elements;

      if (
        elements.some(element => isNode(element) && element.data.isSelected)
      ) {
        preNewElements = elements.map(element => {
          if (isNode(element) && element.data.isSelected) {
            return {
              ...element,
              data: {
                ...element.data,
                isSelected: false,
              },
            };
          }
          return element;
        });
      }

      const newElements = preNewElements.map(element => {
        if (isNode(element) && element.id === clikedElement.id) {
          return {
            ...element,
            data: {
              ...element.data,
              isSelected: true,
            },
          };
        }
        return element;
      });

      setElements(newElements);
    },
    [elements],
  );

  const handlePaneClick = useCallback(
    (event: React.MouseEvent<Element, MouseEvent>) => {
      const newElements = updateElements(
        elements.map(element => {
          if (isNode(element) && element.data.isSelected) {
            return {
              ...element,
              data: {
                ...element.data,
                isSelected: false,
              },
            };
          }
          return element;
        }),
      );
      setElements(newElements);
    },
    [elements],
  );

  const handleElementsRemove = useCallback(
    elementsToRemove =>
      setElements(els => updateElements(removeElements(elementsToRemove, els))),
    [],
  );

  const handleConnect = useCallback(
    (params: Edge<any> | Connection) => {
      const sourceNode = elements.find(element => element.id === params.source);
      const targetNode = elements.find(element => element.id === params.target);

      function setTargetNodeInputs() {
        if (sourceNode && targetNode) {
          const newInput = {
            sourceNode: sourceNode.id,
            targetHandle: params.targetHandle,
            value: sourceNode.data.inputValue || sourceNode.data.output,
          };

          if (
            targetNode.data.inputs.length === 0 ||
            targetNode.type === 'display'
          ) {
            targetNode.data.inputs = [newInput];
            return;
          }

          const existentInputIndex = targetNode.data.inputs.findIndex(
            (existentInput: any) => {
              return (
                existentInput.sourceNode === newInput.sourceNode &&
                existentInput.targetHandle === newInput.targetHandle
              );
            },
          );

          if (existentInputIndex !== -1) {
            targetNode.data.inputs[existentInputIndex] = newInput;
            return;
          }

          targetNode.data.inputs = [...targetNode.data.inputs, newInput];
        }
      }
      setTargetNodeInputs();

      const newElements = elements.map(element => {
        if (element.id === params.target) {
          return targetNode as FlowElement;
        }
        return element;
      });

      setElements(
        addEdge(
          { ...params, type: 'smoothstep', style: { strokeWidth: 2 } },
          updateElements(newElements) as Elements<any>,
        ),
      );
    },
    [elements],
  );

  const handleDragOver = useCallback((event: any) => {
    event.preventDefault();
    // eslint-disable-next-line no-param-reassign
    event.dataTransfer.dropEffect = 'move';
  }, []);

  const handleDrop = useCallback(
    (event: any) => {
      event.preventDefault();

      const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
      const type = event.dataTransfer.getData('application/reactflow');
      const position = reactFlowInstance.project({
        x: event.clientX - reactFlowBounds.left,
        y: event.clientY - reactFlowBounds.top,
      });

      const nodeId = getId();

      const data = {
        isSelected: false,
        isHovered: false,
        nodeId,
        setElements,
      };

      if (type === 'switch') {
        Object.assign(data, {
          inputValue: '0',
        });
      } else {
        Object.assign(data, {
          output: '0',
          inputs: [],
        });
      }

      const newNode = {
        id: nodeId,
        type,
        position,
        data,
      };

      setElements(state => updateElements(state.concat(newNode)));
    },
    [reactFlowInstance],
  );

  return (
    <ReactFlowProvider>
      <Container ref={reactFlowWrapper}>
        <div style={{ width: '100%' }}>
          <LogicGatesBar />
          <div>
            <SaveButton />
            <RefreshButton setElements={setElements} />
          </div>
        </div>

        <ReactFlow
          onLoad={handleLoad}
          elements={elements}
          nodeTypes={nodeTypes}
          onElementClick={handleElementClick}
          onPaneClick={handlePaneClick}
          deleteKeyCode="Delete"
          onElementsRemove={handleElementsRemove}
          onNodeMouseEnter={handleNodeMouseEnter}
          onNodeMouseLeave={handleNodeMouseLeave}
          onConnect={handleConnect}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
        >
          <Controls />
          <MiniMap nodeColor="#eee" nodeStrokeWidth={3} />
        </ReactFlow>
      </Container>
    </ReactFlowProvider>
  );
};

export default Main;

export const getServerSideProps: GetServerSideProps<MainProps> =
  async context => {
    let initalElements = [];

    if (context.query.id) {
      const response = await fetch(
        `http://localhost:3000/api/circuit?id=${context.query.id}`,
        {
          method: 'GET',
        },
      );

      const data = await response.json();

      initalElements = data.circuit.elements as Elements;
    }

    return {
      props: {
        initalElements,
      },
    };
  };
