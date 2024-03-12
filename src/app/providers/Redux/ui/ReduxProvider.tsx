import { store } from "@/app/store";
import { FC, PropsWithChildren } from "react";
import { Provider } from "react-redux";

interface ReduxProviderProps extends PropsWithChildren {

}

export const ReduxProvider: FC<ReduxProviderProps> = (props) => {
  const { children, ...otherProps } = props;
  
  return (
    <Provider store={store} {...otherProps}>
      {children}
    </Provider>
  );
};
