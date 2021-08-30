
function and(inputs) {
  return inputs.includes("0") ? false : true;
}

function nand(inputs) {
  return !and(inputs);
}

function or(inputs) {
  return inputs.includes("1") ? true : false;
}

function nor(inputs) {
  return !or(inputs);
}

function not(inputs) {
  return inputs[0] === "0" ? true : false;
}

function xor(inputs) {
  return inputs.includes("1") && inputs.includes("0") ? true : false;
}

function xnor(inputs) {
  return !xor(inputs);
}

const logicOperations = {
  and,
  nand,
  or,
  nor,
  not,
  xor,
  xnor,
}


function isEdge(element) {
  return element.id.includes("reactflow__edge");
}

function updateElements(elements) {
  return elements.map(element => {
    if (isEdge(element)) {
      return element;
    }
    
    const connections = elements.filter(edge => edge.target === element.id);
    
    const hasConnections = connections.length !== 0;

    if (!hasConnections) {
      return element;
    }

    const sourceNodes = connections.map(edge => {
      return elements.find(node => node.id === edge.source);
    });

    const inputs = sourceNodes.map((node, i) => {     
      return {
        sourceNode: node.id,
        targetHandle: connections[i].targetHandle,
        value: node.data.inputValue || node.data.output
      }
    });

    element.data.inputs = inputs;
    
    if (Object.keys(logicOperations).includes(element.type)) {
      element.data.output = logicOperations[element.type](inputs.map(input => input.value)) ? "1" : "0";
    }    

    return element;
  });
}

module.exports = updateElements;