import { FC, PropsWithChildren, ButtonHTMLAttributes } from "react";
import cls from "./Button.module.scss";
import classNames from "classnames";

export enum ButtonTheme {
  CLEAR = "clear",
  BACKGROUND = "background",
  OUTLINE = "outline",
}

interface ButtonProps
  extends PropsWithChildren,
    ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
}

export const Button: FC<ButtonProps> = (props) => {
  const {
    className,
    theme = ButtonTheme.BACKGROUND,
    children,
    ...otherProps
  } = props;

  return (
    <button
      className={classNames(cls.Button, cls[theme], className)}
      {...otherProps}
    >
      {children}
    </button>
  );
};
