import { useContext, useCallback, createContext, useState } from 'react';
import { Document } from '@prismicio/client/types/documents';
import { v4 as uuid } from 'uuid';
import ToastContainer from '../components/ToastContainer';

interface ToastContexData {
  addToast(toastData: Omit<IToast, 'id'>): IToast;
  removeToast(id: string): void;
  isShowingAnToast: boolean;
}

const ToastContext = createContext<ToastContexData>({} as ToastContexData);

export interface IToast {
  id: string;
  title: string;
  content: Document;
}

const ToastProvider: React.FC = ({ children }) => {
  const [toasts, setToasts] = useState<IToast[]>([]);
  const [isShowingAnToast, setIsShowingAnToast] = useState(false);

  const addToast = useCallback(
    ({ title, content }: Omit<IToast, 'id'>): IToast => {
      const toast = {
        id: uuid(),
        title,
        content,
      };

      setToasts(state => [...state, toast]);
      setIsShowingAnToast(true);
      return toast;
    },
    [],
  );

  const removeToast = useCallback((id: string) => {
    setToasts(state => state.filter(toast => toast.id !== id));
    setIsShowingAnToast(false);
  }, []);

  return (
    <ToastContext.Provider value={{ isShowingAnToast, addToast, removeToast }}>
      {children}
      <ToastContainer toasts={toasts} />
    </ToastContext.Provider>
  );
};

function useToast(): ToastContexData {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }

  return context;
}

export { ToastProvider, useToast };
