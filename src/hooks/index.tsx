import { ExplanationProvider } from "./explanation";

const AppProvider: React.FC = ({ children }) => (
  <ExplanationProvider>
    {children}
  </ExplanationProvider>
);

export default AppProvider;