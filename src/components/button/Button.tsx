import { ComponentPropsWithoutRef } from "react";

import type { CSSProp } from "styled-components";
import type {
  ColorKeys,
  FontWeightKeys,
  Sizes,
  TextColorKeys,
} from "../../styles/theme";
import { ButtonContainer } from "./style";

export type ButtonVariants = "outlined" | "filled" | "transparent";

export interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  customWidth?: string;
  customHeight?: string;
  color?: ColorKeys;
  textColor?: TextColorKeys;
  size?: Sizes;
  weight?: FontWeightKeys;
  variant?: ButtonVariants;
  css?: CSSProp;
}

export default function Button({
  customWidth = "fit-content",
  customHeight = "40px",
  color = "primary",
  textColor = "default",
  size = "md",
  weight = "regular",
  variant = "filled",
  children,
  ...props
}: ButtonProps) {
  return (
    <ButtonContainer
      customWidth={customWidth}
      customHeight={customHeight}
      color={color}
      textColor={textColor}
      size={size}
      weight={weight}
      variant={variant}
      {...props}
    >
      {children}
    </ButtonContainer>
  );
}
