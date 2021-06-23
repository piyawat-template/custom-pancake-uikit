import { AnchorHTMLAttributes } from "react";
import { TextProps } from "../Text";

export interface LinkProps extends TextProps, AnchorHTMLAttributes<HTMLAnchorElement> {
  external?: boolean
  className?: string
  as?: React.ElementType | keyof JSX.IntrinsicElements
}
