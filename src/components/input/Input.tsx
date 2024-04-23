import type { ComponentPropsWithRef, ForwardedRef, ReactNode } from "react";
import { forwardRef } from "react";
import {
  CustomInput,
  ErrorMessage,
  IconWrapper,
  InputContainer,
} from "./style";

export interface InputProps extends ComponentPropsWithRef<"input"> {
  customWidth?: string;
  minWidth?: string;
  isError?: boolean;
  rightIcon?: ReactNode;
  errorMessage?: string;
}

const Input = forwardRef(
  (
    {
      customWidth = "300px",
      minWidth,
      isError = false,
      rightIcon,
      errorMessage,
      ...props
    }: InputProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <>
        <InputContainer customWidth={customWidth} minWidth={minWidth}>
          <CustomInput ref={ref} isError={isError} {...props} />
          {rightIcon && <IconWrapper>{rightIcon}</IconWrapper>}
        </InputContainer>
        {isError && <ErrorMessage>{errorMessage}</ErrorMessage>}
      </>
    );
  }
);

Input.displayName = "Input";

export default Input;
