import { Container } from "./styles";

const SideBar: React.FC = () => {
  const onDragStart = (event: any, nodeType: any) => {
    event.dataTransfer.setData('application/reactflow', nodeType);
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <Container>
      <div className="description">You can drag these nodes to the pane on the right.</div>
      <div className="dndnode input" onDragStart={(event) => onDragStart(event, 'input')} draggable>
        Input Node
      </div>
      <div className="dndnode and" onDragStart={(event) => onDragStart(event, 'and')} draggable>
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="27" viewBox="0 0 32 27" fill="none">
          <path d="M0.5 0.5H18.5C25.6797 0.5 31.5 6.3203 31.5 13.5C31.5 20.6797 25.6797 26.5 18.5 26.5H0.5V0.5Z" />
        </svg>
        And Node
      </div>
      <div className="dndnode output" onDragStart={(event) => onDragStart(event, 'output')} draggable>
        Output Node
      </div>
      <div className="dndnode switch" onDragStart={(event) => onDragStart(event, 'switch')} draggable>
        Switch Node
      </div>
    </Container>
  )
}

export default SideBar;