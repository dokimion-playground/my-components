import styled from "styled-components";
import { ToastProps } from "./Toast";
import Text from "../text/Text";
import { fadeOut, slideIn } from "../../styles/animation";

type ToastStyleProps = Pick<ToastProps, "isError"> & { isAnimating?: boolean };

export const ToastWrapper = styled.div<ToastStyleProps>`
  position: relative;
  width: calc(100% - 20px);
  height: 55px;
  max-width: 560px;
  border-radius: 10px;
  background: ${({ isError, theme }) =>
    isError ? theme.colors.error : theme.colors.black};
  animation: ${({ isAnimating }) => (isAnimating ? slideIn : fadeOut)} 0.3s
    ease-in-out forwards;
`;

export const Message = styled(Text)`
  margin-left: 20px;
  line-height: 55px;
`;
