/* eslint-disable @typescript-eslint/no-explicit-any */
import React, {
  useRef,
  useState,
  useCallback,
  useEffect,
  useContext,
} from 'react';
import { useRouter } from 'next/router';
import Prismic from '@prismicio/client';
import { Document } from '@prismicio/client/types/documents';
import { ThemeContext } from 'styled-components';

import ReactFlow, {
  Edge,
  Elements,
  isNode,
  removeElements,
  addEdge,
  Connection,
  Controls,
  MiniMap,
  FlowElement,
  FlowExportObject,
  useZoomPanHelper,
  OnLoadParams,
} from 'react-flow-renderer';

import { GetServerSideProps } from 'next';
import { FiMail } from 'react-icons/fi';
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

import {
  Container,
  ReactFlowContainer,
  ScreenSizeWarning,
} from '../styles/Main';
import SaveButton from '../components/ShareButton';
import { useElements } from '../hooks/elements';
import SideBar from '../components/SideBar';
import { client } from '../lib/prismic';
import SEO from '../components/SEO';
import TabsBar from '../components/TabsBar';

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
  initalFlowInstance: FlowExportObject;
  lessons: Document[];
}

const Main: React.FC<MainProps> = ({ initalFlowInstance, lessons }) => {
  const router = useRouter();
  const theme = useContext(ThemeContext);
  const { elements, setElements } = useElements();
  const reactFlowWrapper = useRef<HTMLDivElement>({} as HTMLDivElement);
  const [reactFlowInstance, setReactFlowInstance] =
    useState<OnLoadParams>(null);
  const { transform } = useZoomPanHelper();

  useEffect(() => {
    if (router.query.id) {
      initalFlowInstance.elements.forEach(element => {
        // eslint-disable-next-line no-plusplus
        if (isNode(element)) id++;
      });

      const [x = 0, y = 0] = initalFlowInstance.position;
      setElements(updateElements(initalFlowInstance.elements) || []);
      transform({ x, y, zoom: initalFlowInstance.zoom || 0 });
    }
  }, [initalFlowInstance, router, transform, setElements]);

  const handleLoad = useCallback((_reactFlowInstance: OnLoadParams) => {
    return setReactFlowInstance(_reactFlowInstance);
  }, []);

  const handleNodeMouseEnter = useCallback(
    (
      event: React.MouseEvent<Element, MouseEvent>,
      clikedElement: FlowElement,
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
    [elements, setElements],
  );

  const handleNodeMouseLeave = useCallback(
    (
      event: React.MouseEvent<Element, MouseEvent>,
      clikedElement: FlowElement,
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
    [elements, setElements],
  );

  const handleElementClick = useCallback(
    (
      event: React.MouseEvent<Element, MouseEvent>,
      clikedElement: FlowElement,
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
    [elements, setElements],
  );

  const handlePaneClick = useCallback(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
    [elements, setElements],
  );

  const handleElementsRemove = useCallback(
    elementsToRemove =>
      setElements(els => updateElements(removeElements(elementsToRemove, els))),
    [setElements],
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
    [elements, setElements],
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
    [reactFlowInstance, setElements],
  );

  return (
    <>
      <SEO
        title="Logic"
        description="Um site para ensinar e simular circuitos lógicos."
        shouldExludeTitleSuffix
      />

      <ScreenSizeWarning>
        <h1>Logic</h1>
        <p>
          Este site suporta apenas dipositivos com mais de 1024px de largura.
        </p>
        <footer>
          <a href="mailto:daniellucas-pms@hotmail.com">
            <FiMail />
            Contact us!
          </a>
        </footer>
      </ScreenSizeWarning>

      <Container>
        <main>
          <SideBar lessons={lessons} />
          <ReactFlowContainer ref={reactFlowWrapper}>
            <div style={{ width: '100%', position: 'relative' }}>
              <LogicGatesBar />
              <SaveButton rfInstance={reactFlowInstance} />
              <TabsBar rfInstance={reactFlowInstance} />
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
              <MiniMap
                style={{
                  backgroundColor:
                    theme.colors.background === '#28262E'
                      ? theme.colors.background
                      : '',
                }}
                nodeColor={theme.colors.lighterBorder}
                nodeStrokeWidth={3}
              />
            </ReactFlow>
          </ReactFlowContainer>
        </main>
      </Container>
    </>
  );
};

export default Main;

export const getServerSideProps: GetServerSideProps<MainProps> =
  async context => {
    let initalFlowInstance = null;

    if (context.query.id) {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_URL}/api/circuit?id=${context.query.id}`,
        {
          method: 'GET',
        },
      );

      const data = await response.json();

      initalFlowInstance = data.reactFlowInstance as FlowExportObject;
    }

    const response = await client().query([
      Prismic.Predicates.at('document.type', 'lesson'),
    ]);

    const lessons = response.results.sort(
      (lessonA, lessonB) =>
        lessonA.data.lesson_number - lessonB.data.lesson_number,
    );

    return {
      props: {
        initalFlowInstance,
        lessons,
      },
    };
  };
