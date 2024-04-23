import styled from "styled-components";
import { InputProps } from "./Input";
import Text from "../text/Text";

type InputContainerStyleProps = Pick<InputProps, "customWidth" | "minWidth">;
type CustomInputStyleProps = Pick<InputProps, "isError">;

export const InputContainer = styled.div<InputContainerStyleProps>`
  position: relative;
  min-width: ${({ minWidth }) => minWidth ?? 0};
  max-width: ${({ customWidth }) => customWidth};
  text-align: center;
`;

export const CustomInput = styled.input<CustomInputStyleProps>`
  width: 100%;
  height: 40px;
  padding: 10px 0 10px 12px;
  color: ${({ isError, theme }) =>
    isError ? theme.colors.error : theme.textColors.default};
  border: 1px solid
    ${({ isError, theme }) =>
      isError ? theme.colors.error : theme.borderColors.default};
  border-radius: 5px;

  &:focus {
    border: 2px solid
      ${({ isError, theme }) =>
        isError ? theme.colors.error : theme.borderColors.strong};
    outline: none;
  }

  &:disabled {
    border: 1px solid ${({ theme }) => theme.borderColors.disabled};
    background: ${({ theme }) => theme.colors.gray1};
  }

  &::placeholder {
    color: ${({ theme }) => theme.textColors.disabled};
    font-size: ${({ theme }) => theme.fontSizes.sm};
  }
`;

export const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  height: 100%;
  margin-right: 8px;
`;

export const ErrorMessage = styled(Text)`
  color: ${({ theme }) => theme.colors.error};
  font-size: ${({ theme }) => theme.fontSizes.xs};
`;
