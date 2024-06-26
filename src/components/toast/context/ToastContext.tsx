import type { PropsWithChildren } from "react";
import { createContext, useState } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";
import Toast from "../Toast";

export interface ToastState {
  id: number;
  message: string;
  isError?: boolean;
}

export interface ToastValue {
  toasts: ToastState[];
}

export interface ToastAction {
  toast: {
    success: (message: string) => void;
    error: (message: string) => void;
  };
  deleteToast: (id: number) => void;
}

export const ToastValueContext = createContext<ToastValue | null>(null);
export const ToastActionContext = createContext<ToastAction | null>(null);

export const ToastProvider = ({ children }: PropsWithChildren) => {
  const [toasts, setToasts] = useState<ToastState[]>([]);

  const showToast = (id: number, message: string, isError?: boolean) => {
    setToasts([...toasts, { id, message, isError }]);
  };

  const deleteToast = (id: number) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  };

  const toast = {
    success: (message: string) => showToast(Number(Date.now()), message),
    error: (message: string) => showToast(Number(Date.now()), message, true),
  };

  const toastValue = {
    toasts,
  };

  const toastAction = {
    toast,
    deleteToast,
  };

  return (
    <ToastActionContext.Provider value={toastAction}>
      <ToastValueContext.Provider value={toastValue}>
        {children}
        {createPortal(
          <ToastContainer>
            {toasts.map(({ id, message, isError }) => (
              <Toast key={id} id={id} message={message} isError={isError} />
            ))}
          </ToastContainer>,
          document.getElementById("toast-container") as HTMLElement
        )}
      </ToastValueContext.Provider>
    </ToastActionContext.Provider>
  );
};

export default ToastProvider;

const ToastContainer = styled.div`
  position: fixed;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  transform: translate(0, -10px);
`;
