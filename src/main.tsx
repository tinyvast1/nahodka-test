import { createRoot } from "react-dom/client";
import App from "@/app/App";
import '@/app/styles/index.scss'
import { ReduxProvider } from "./app/providers/Redux";

createRoot(document.getElementById("root")!).render(
  <ReduxProvider>
    <App />
  </ReduxProvider>
);
