import React, { useRef, useState, useEffect, useCallback } from 'react';

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
} from 'react-flow-renderer';

import SideBar from '../../components/SideBar';
import LogicGatesBar from '../../components/LogicGatesBar';

import And from '../../nodes/And';
import Or from '../../nodes/Or';
import Switch from '../../nodes/Switch';
import Nand from '../../nodes/Nand';
import Nor from '../../nodes/Nor';
import Not from '../../nodes/Not';
import Xor from '../../nodes/Xor';
import Xnor from '../../nodes/Xnor';
import Display from '../../nodes/Display';

import { MainContainer, FlowContainer } from './styles';

const nodeTypes = {
  and: And,
  nand: Nand,
  or: Or,
  nor: Nor,
  not: Not,
  xor: Xor,
  xnor: Xnor,
  switch: Switch,
  display: Display
}

let id = 0;
const getId = () => `dndnode_${id++}`;

const Main: React.FC = () => {
  const reactFlowWrapper = useRef<HTMLDivElement>({} as HTMLDivElement);
  const [reactFlowInstance, setReactFlowInstance] = useState<any>(null);
  const [elements, setElements] = useState<Elements>([]);

  useEffect(() => {
    setElements([
      {
        id: '1',
        type: 'and',
        data: { isSelected: false, nodeId: '1', setElements, },
        position: { x: 100, y: 100 },
      },
      {
        id: '2',
        type: 'switch',
        data: { isSelected: false, inputValue: 0, nodeId: '2', setElements, },
        position: { x: 250, y: 125 },
      },
      {
        id: '3',
        type: 'or',
        data: { isSelected: false, nodeId: '4', setElements, },
        position: { x: 100, y: 200 },
      },
      {
        id: '5',
        type: 'nand',
        data: { isSelected: false, nodeId: '5', setElements, },
        position: { x: 100, y: 300 },
      },
      {
        id: '6',
        type: 'nor',
        data: { isSelected: false, nodeId: '7', setElements, },
        position: { x: 100, y: 400 },
      },
      {
        id: '8',
        type: 'not',
        data: { isSelected: false, nodeId: '9', setElements, },
        position: { x: 100, y: 500 },
      },
      {
        id: '10',
        type: 'xor',
        data: { isSelected: false, nodeId: '10', setElements, },
        position: { x: 225, y: 500 },
      },
      {
        id: '11',
        type: 'xnor',
        data: { isSelected: false, nodeId: '11', setElements, },
        position: { x: 225, y: 400 },
      },
      {
        id: '12',
        type: 'display',
        data: { isSelected: false, nodeId: '12', setElements, output: '1' },
        position: { x: 225, y: 300 },
      },
    ])
  }, [])

  const handleLoad = useCallback((_reactFlowInstance) => { 
    return setReactFlowInstance(_reactFlowInstance)
  },[]);

  const handleNodeMouseEnter = useCallback((event: React.MouseEvent<Element, MouseEvent>, clikedElement: Node<any> | Edge<any>) => {  
    const newElements = elements.map(element => {
      if(isNode(element) && element.id === clikedElement.id) {
        return {
          ...element,
          data: {
            ...element.data,
            isHovered: true,
          }
        }
      }
      return element;
    });

    setElements(newElements);
  },[elements]);

  const handleNodeMouseLeave = useCallback((event: React.MouseEvent<Element, MouseEvent>, clikedElement: Node<any> | Edge<any>) => {  
    const newElements = elements.map(element => {
      if(isNode(element) && element.id === clikedElement.id) {
        return {
          ...element,
          data: {
            ...element.data,
            isHovered: false,
          }
        }
      }
      return element;
    });

    setElements(newElements);
  },[elements]);

  const handleElementClick = useCallback((event: React.MouseEvent<Element, MouseEvent>, clikedElement: Node<any> | Edge<any>) => {
    let preNewElements = elements
    
    if (elements.some(element =>  isNode(element) && element.data.isSelected)) {
      preNewElements = elements.map(element => {
        if(isNode(element) && element.data.isSelected) {
          return {
            ...element,
            data: {
              ...element.data,
              isSelected: false,
            }
          }
        }
        return element;
      });
    };
    
    const newElements = preNewElements.map(element => {
      if(isNode(element) && element.id === clikedElement.id) {
        return {
          ...element,
          data: {
            ...element.data,
            isSelected: true,
          }
        }
      }
      return element;
    });

    setElements(newElements);
  },[elements]);

  const handlePaneClick = useCallback((event: React.MouseEvent<Element, MouseEvent>) => {
    const newElements = elements.map(element => {
      if(isNode(element) && element.data.isSelected) {
        return {
          ...element,
          data: {
            ...element.data,
            isSelected: false,
          }
        }
      }
      return element;
    });
    setElements(newElements);
  },[elements]);

  const handleElementsRemove = useCallback(
    (elementsToRemove) =>
      setElements((els) => removeElements(elementsToRemove, els)),
    []
  );

  const handleConnect = useCallback((params: Edge<any> | Connection) =>{
    // const sourceNode = elements.find(element => element.id === params.source);
    // const targetNode = elements.find(element => element.id === params.target);
    
    // if (sourceNode?.type === "switch" && targetNode?.type === "and") {
    //   if (!targetNode.data.inputs) {
    //     targetNode.data.inputs = [{origin: sourceNode.id, value: sourceNode.data.inputValue}];
    //   } else {
    //     const sourceInputIndex = targetNode.data.inputs.findIndex(
    //       (input: any) => input.orgin === sourceNode.id
    //     );

    //     if (sourceInputIndex !== -1) {
    //       targetNode.data.inputs[sourceInputIndex].value = sourceNode.data.inputValue;
    //     } else {
    //       targetNode.data.inputs = [
    //         ...targetNode.data.inputs,
    //         {origin: sourceNode.id, value: sourceNode.data.inputValue}
    //       ]
    //     }
    //   }          
    // }

    // const newElements = elements.map(element => {
    //   if(element.id === params.source) {
    //     return sourceNode;
    //   }
    //   return element
    // });

    // setElements(
    //   addEdge({ ...params }, newElements as Elements<any>)
    // )

    setElements((elements) => addEdge({ ...params }, elements));
  },[]);

  const handleDragOver = useCallback((event: any) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  },[]);

  const handleDrop = useCallback((event: any) => {
    event.preventDefault();
    
    const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
    const type = event.dataTransfer.getData('application/reactflow');
    const position = reactFlowInstance.project({
      x: event.clientX - reactFlowBounds.left,
      y: event.clientY - reactFlowBounds.top,
    });
    const newNode = {
      id: getId(),
      type,
      position,
      data: { label: `${type} node` },
    };

    setElements((es) => es.concat(newNode));
  },[reactFlowInstance]);

  return (
    <MainContainer>      
      <SideBar />
      <ReactFlowProvider>
        <FlowContainer ref={reactFlowWrapper}>
          <LogicGatesBar />
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
              nodeColor={(node) => {
                switch (node.type) {
                  case 'input':
                    return 'rgb(0,0,255)';
                  case 'default':
                    return '#00ff00';
                  case 'output':                  
                    return 'red';
                  default:
                    return '#eee';
                }
              }}
              nodeStrokeWidth={3}
            />
          </ReactFlow>
        </FlowContainer>
      </ReactFlowProvider>
    </MainContainer>
  )
}


export default Main;
