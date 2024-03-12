import { bindActionCreators } from "@reduxjs/toolkit";
import { useMemo } from "react";
import { rootActions } from "./rootActions";
import { useDispatch } from "react-redux";
import { AppDispatch } from ".";

export const useActions = () => {
  const dispatch: AppDispatch = useDispatch();
  return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch]);
};
