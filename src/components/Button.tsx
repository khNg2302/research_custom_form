"use client";
import {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  ReactNode,
  useCallback,
  useRef,
} from "react";
import { AppTheme } from "./AppPage";

enum ButtonVariant {
  PRIMARY = "PRIMARY",
}

export interface ButtonProps
  extends DetailedHTMLProps<
      ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    AppTheme {
  label?: string;
  children?: ReactNode;
  variant?: ButtonVariant;
}

const Button = ({
  theme,
  variant,
  label,
  type,
  children,
  ...res
}: ButtonProps) => {
  const defineClassname = useCallback(() => {
    switch (variant) {
      default:
        return "button-primary";
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const className = useRef<string>(defineClassname());
  return (
    <button
      data-theme={theme}
      type={type || "button"}
      className={className.current}
      {...res}
    >
      {label}
      {children}
    </button>
  );
};

export default Button;
