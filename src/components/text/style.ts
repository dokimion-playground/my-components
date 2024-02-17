import styled from "styled-components";
import { TextStyleProps } from "./Text";
import theme from "../../styles/theme";

export const TextContainer = styled.p<TextStyleProps>`
  font-size: ${({ theme, size }) => theme.fontSizes[size ?? "md"]};
  font-weight: ${({ theme, weight }) => theme.fontWeights[weight ?? "regular"]};
  line-height: ${({ theme, lineHeight }) =>
    theme.lineHeights[lineHeight ?? "md"]};
  color: ${({ color }) => color ?? theme.textColors.default};
  text-align: ${({ align }) => align};
  ${({ css }) => css}
`;
