import { initThemeMode } from "flowbite-react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import { ThemeInit } from "../.flowbite-react/init";
import { App } from "./App";
import "./App.css";

let container = document.getElementById("app")!;
let root = createRoot(container);
root.render(
  <StrictMode>
    {/* TODO: @parcel/core: Failed to resolve 'flowbite-react/store/init' from './.flowbite-react/init.tsx' */}
    {/* <ThemeInit /> */}
    <App />
  </StrictMode>,
);

initThemeMode();
