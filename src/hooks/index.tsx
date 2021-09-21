import { ReactFlowProvider } from 'react-flow-renderer';
import { ElementsProvider } from './elements';
import { ToastProvider } from './toasts';

const AppProvider: React.FC = ({ children }) => (
  <ElementsProvider>
    <ReactFlowProvider>
      <ToastProvider>{children}</ToastProvider>
    </ReactFlowProvider>
  </ElementsProvider>
);

export default AppProvider;
