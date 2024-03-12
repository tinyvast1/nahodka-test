import { RootState } from "@/app/store";
import { useActions } from "@/app/store/useActions";
import { useSelector } from "react-redux";

export function Counter() {
  const value = useSelector((state: RootState) => state.counter.value);
  const { increase, decrease } = useActions();
  return (
    <>
      <div>{value}</div>
      <button onClick={() => increase()}>+</button>
      <button onClick={() => decrease()}>-</button>
    </>
  );
}
