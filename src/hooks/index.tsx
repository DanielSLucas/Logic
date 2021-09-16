import { ReactFlowProvider } from 'react-flow-renderer';
import { ElementsProvider } from './elements';

const AppProvider: React.FC = ({ children }) => (
  <ElementsProvider>
    <ReactFlowProvider>{children}</ReactFlowProvider>
  </ElementsProvider>
);

export default AppProvider;
