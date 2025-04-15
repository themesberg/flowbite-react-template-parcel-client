import { initThemeMode } from "flowbite-react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import "./App.css";

let container = document.getElementById("app")!;
let root = createRoot(container);
root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);

initThemeMode();
