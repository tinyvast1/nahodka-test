import { FC, PropsWithChildren, TextareaHTMLAttributes } from "react";
import cls from "./Input.module.scss";
import classNames from "classnames";

interface TextareaProps
  extends PropsWithChildren,
    TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
}

export const Textarea: FC<TextareaProps> = (props) => {
  const { className, children, ...otherProps } = props;

  return (
    <textarea
      className={classNames(cls.Input, cls.Textarea, className)}
      {...otherProps}
    >
      {children}
    </textarea>
  );
};
