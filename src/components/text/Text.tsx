import { CSSProperties, ElementType } from "react";
import {
  OverridableComponentPropsWithoutRef,
  Sizes,
} from "../../constants/types";
import theme, { FontWeightKeys } from "../../styles/theme";
import { CSSProp } from "styled-components";
import { TextContainer } from "./style";

type TextElement = Extract<ElementType, "p" | "span">;
type TextAligns = "left" | "center" | "right";

export interface TextStyleProps {
  size?: Sizes;
  weight?: FontWeightKeys;
  lineHeight?: Sizes;
  color?: CSSProperties["color"];
  align?: TextAligns;
  css?: CSSProp;
}

export type TextProps<T extends TextElement> =
  OverridableComponentPropsWithoutRef<T, TextStyleProps>;

export default function Text<T extends TextElement = "p">({
  children,
  size = "md",
  weight = "regular",
  lineHeight = "md",
  color = theme.textColors.default,
  align = "left",
  ...props
}: TextProps<T>) {
  return (
    <TextContainer
      size={size}
      weight={weight}
      lineHeight={lineHeight}
      color={color}
      align={align}
      {...props}
    >
      {children}
    </TextContainer>
  );
}
