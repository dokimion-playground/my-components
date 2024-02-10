import styled, { RuleSet, css } from "styled-components";
import { ButtonProps, ButtonVariants } from "./Button";

type ButtonVariantStyles = Record<
  ButtonVariants,
  (color: ButtonProps["color"]) => RuleSet<object>
>;

const buttonStyleTypeStyles: ButtonVariantStyles = {
  outlined: (color) => css`
    border: 1px solid ${({ theme }) => theme.colors[color ?? "black"]};
    background: transparent;
  `,
  filled: (color) => css`
    background-color: ${({ theme }) => theme.colors[color ?? "black"]};
  `,
  transparent: () => css`
    background-color: transparent;
  `,
};

export const ButtonContainer = styled.button<ButtonProps>`
  width: ${({ customWidth }) => customWidth};
  height: ${({ customHeight }) => customHeight};
  border-radius: ${({ theme }) => theme.borderRadius.xs};
  color: ${({ theme, textColor }) => theme.textColors[textColor ?? "default"]};
  font-size: ${({ theme, size }) => theme.fontSizes[size ?? "md"]};
  font-weight: ${({ theme, weight }) => theme.fontWeights[weight ?? "bold"]};
  ${({ variant, color }) => buttonStyleTypeStyles[variant ?? "filled"](color)};
  ${({ css }) => css}
`;
