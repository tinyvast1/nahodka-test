import { FC, PropsWithChildren } from "react";
import cls from "./Wrapper.module.scss";
import classNames from "classnames";

interface WrapperProps extends PropsWithChildren {
  className?: string;
}

export const Wrapper: FC<WrapperProps> = (props) => {
  const { className, children, ...otherProps } = props;

  return (
    <div className={classNames(cls.Wrapper, className)} {...otherProps}>
      {children}
    </div>
  );
};
