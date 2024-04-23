import theme from "../../styles/theme";
import { Message, ToastWrapper } from "./style";
import useToast from "./useToast";

export interface ToastProps {
  id: number;
  message: string;
  isError?: boolean;
}

const Toast = ({ id, message, isError = false }: ToastProps) => {
  const isShown = useToast(id);

  return (
    <ToastWrapper isError={isError} isAnimating={isShown}>
      <Message color={theme.colors.gray4} aria-live="assertive">
        {message}
      </Message>
    </ToastWrapper>
  );
};

export default Toast;
