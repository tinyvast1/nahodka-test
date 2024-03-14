import { ChangeEvent, SetStateAction, Dispatch } from "react";

export type ChangeInputType = (
  e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  setValue: Dispatch<SetStateAction<string>>
) => void;

export const changeInput: ChangeInputType = (e, setValue) => {
  setValue(e.target.value);
};
