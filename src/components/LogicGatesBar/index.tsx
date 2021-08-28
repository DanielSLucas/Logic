import { Container } from "./styles";

const LogicGatesBar: React.FC = () => {
  const onDragStart = (event: any, nodeType: any) => {
    event.dataTransfer.setData('application/reactflow', nodeType);
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <Container>
      {/* <div className="description">You can drag these nodes to the pane on the right.</div> */}
      <div className="dndnode and" onDragStart={(event) => onDragStart(event, 'and')} draggable>
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="27" viewBox="0 0 32 27" fill="none">
          <path d="M0.5 0.5H18.5C25.6797 0.5 31.5 6.3203 31.5 13.5C31.5 20.6797 25.6797 26.5 18.5 26.5H0.5V0.5Z" />
        </svg>
        And
      </div>

      <div className="dndnode nand" onDragStart={(event) => onDragStart(event, 'nand')} draggable>
        <svg width="41" height="31" viewBox="0 0 41 31" fill="none" xmlns="http://www.w3.org/2000/svg">      
          <path d="M2.5 1.5H20.5C27.6797 1.5 33.5 7.3203 33.5 14.5C33.5 21.6797 27.6797 27.5 20.5 27.5H2.5V1.5Z"/>
          <path d="M38 15C38 15.5304 37.7893 16.0391 37.4142 16.4142C37.0391 16.7893 36.5304 17 36 17C35.4696 17 34.9609 16.7893 34.5858 16.4142C34.2107 16.0391 34 15.5304 34 15C34 14.4696 34.2107 13.9609 34.5858 13.5858C34.9609 13.2107 35.4696 13 36 13C36.5304 13 37.0391 13.2107 37.4142 13.5858C37.7893 13.9609 38 14.4696 38 15Z" strokeLinecap="square"/>      
        </svg>
        Nand
      </div>

      <div className="dndnode or" onDragStart={(event) => onDragStart(event, 'or')} draggable>
        <svg width="42" height="32" viewBox="0 0 42 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 28C7.46357 17.846 7.26963 12.1544 3 2H17C26.9942 2.81757 31.7311 5.58697 38.5 15C32.7092 22.95 28.3222 26.1498 17 28H3Z"/>
        </svg>
        Or
      </div>

      <div className="dndnode nor" onDragStart={(event) => onDragStart(event, 'nor')} draggable>
        <svg width="46" height="32" viewBox="0 0 46 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 28C7.46357 17.846 7.26963 12.1544 3 2H17C26.9942 2.81757 31.7311 5.58697 38.5 15C32.7092 22.95 28.3222 26.1498 17 28H3Z"/>
          <path d="M43 15C43 15.5304 42.7893 16.0391 42.4142 16.4142C42.0391 16.7893 41.5304 17 41 17C40.4696 17 39.9609 16.7893 39.5858 16.4142C39.2107 16.0391 39 15.5304 39 15C39 14.4696 39.2107 13.9609 39.5858 13.5858C39.9609 13.2107 40.4696 13 41 13C41.5304 13 42.0391 13.2107 42.4142 13.5858C42.7893 13.9609 43 14.4696 43 15Z" strokeLinecap="square"/>
        </svg>
        Nor
      </div>

      <div className="dndnode not" onDragStart={(event) => onDragStart(event, 'not')} draggable>
        <svg width="39" height="33" viewBox="0 0 39 33" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M36 16C36 16.5304 35.7893 17.0391 35.4142 17.4142C35.0391 17.7893 34.5304 18 34 18C33.4696 18 32.9609 17.7893 32.5858 17.4142C32.2107 17.0391 32 16.5304 32 16C32 15.4696 32.2107 14.9609 32.5858 14.5858C32.9609 14.2107 33.4696 14 34 14C34.5304 14 35.0391 14.2107 35.4142 14.5858C35.7893 14.9609 36 15.4696 36 16Z" strokeLinecap="square"/>
          <path d="M8.50215 3.02635L31.0114 16.0007L8.52065 29.0071L8.50215 3.02635Z"/>
        </svg>
        Not
      </div>

      <div className="dndnode xor" onDragStart={(event) => onDragStart(event, 'xor')} draggable>
        <svg width="46" height="32" viewBox="0 0 46 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 28C11.4636 17.846 11.2696 12.1544 7 2H21C30.9942 2.81757 35.7311 5.58697 42.5 15C36.7092 22.95 32.3222 26.1498 21 28H7Z"/>
          <path d="M3 2C7.17934 12.8922 7.70002 18.6767 3 28"/>
        </svg>
        Xor
      </div>
      
      <div className="dndnode xnor" onDragStart={(event) => onDragStart(event, 'xnor')} draggable>
        <svg width="50" height="32" viewBox="0 0 50 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 28C11.4636 17.846 11.2696 12.1544 7 2H21C30.9942 2.81757 35.7311 5.58697 42.5 15C36.7092 22.95 32.3222 26.1498 21 28H7Z"/>
          <path d="M47 15C47 15.5304 46.7893 16.0391 46.4142 16.4142C46.0391 16.7893 45.5304 17 45 17C44.4696 17 43.9609 16.7893 43.5858 16.4142C43.2107 16.0391 43 15.5304 43 15C43 14.4696 43.2107 13.9609 43.5858 13.5858C43.9609 13.2107 44.4696 13 45 13C45.5304 13 46.0391 13.2107 46.4142 13.5858C46.7893 13.9609 47 14.4696 47 15Z" strokeLinecap="square"/>
          <path d="M3 2C7.17934 12.8922 7.70002 18.6767 3 28"/>
        </svg>
        Xnor
      </div>

      <div className="dndnode switch" onDragStart={(event) => onDragStart(event, 'switch')} draggable>      
        <div>
          1 <hr/> 0
        </div>
        Switch
      </div>

      <div className="dndnode display" onDragStart={(event) => onDragStart(event, 'display')} draggable>      
        Display
      </div>

    </Container>
  )
}

export default LogicGatesBar;