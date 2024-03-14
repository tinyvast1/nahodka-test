import { FC, InputHTMLAttributes, PropsWithChildren } from "react";
import cls from "./Input.module.scss";
import classNames from "classnames";

interface InputProps
  extends PropsWithChildren,
    InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export const Input: FC<InputProps> = (props) => {
  const { className, children, ...otherProps } = props;

  return (
    <input className={classNames(cls.Input, className)} {...otherProps}>
      {children}
    </input>
  );
};
