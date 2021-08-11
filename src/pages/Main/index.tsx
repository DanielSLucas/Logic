import React, { useState } from 'react';
import { useEffect } from 'react';
import { useCallback } from 'react';
import ReactFlow, { Edge, Node, Elements, isNode, removeElements, addEdge, Connection, Controls, MiniMap } from 'react-flow-renderer';

import And from '../../nodes/And';

import { MainContainer, SideBar, FlowContainer } from './styles';

const nodeTypes = {
  and: And,
}

const Main: React.FC = () => {
  const [elements, setElements] = useState<Elements>([]);

  useEffect(() => {
    setElements([
      {
        id: '1',
        type: 'input',
        data: { label: 'Input Node', isSelected: false },
        position: { x: 250, y: 25 },
      },
      {
        id: '2',
        type: 'and',
        data: { isSelected: false },
        position: { x: 100, y: 125 },
      },
      {
        id: '3',
        type: 'output',
        data: { label: 'Output Node', isSelected: false },
        position: { x: 250, y: 250 },
      },
      // { id: 'e1-2', source: '1', target: '2' },
      // { id: 'e2-3', source: '2', target: '3' },
    ])
  }, [])

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

  const onConnect = useCallback(
    (params: Edge<any> | Connection) =>
      setElements((els) =>
        addEdge({ ...params }, els)
      ),
    []
  );

  return (
    <MainContainer>
      <SideBar></SideBar>
      <FlowContainer>
        <ReactFlow 
          elements={elements} 
          nodeTypes={nodeTypes} 
          onElementClick={handleElementClick}
          onPaneClick={handlePaneClick}
          deleteKeyCode="Delete"
          onElementsRemove={handleElementsRemove}
          onNodeMouseEnter={handleNodeMouseEnter}
          onNodeMouseLeave={handleNodeMouseLeave}
          onConnect={onConnect}
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
    </MainContainer>
  )
}


export default Main;
