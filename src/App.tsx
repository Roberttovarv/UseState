
import type { CSSProperties } from "react";
import React from "react";
import { CustomButton } from "./components/CustomButton.tsx";
import { LevelOne } from "./levels/Level 1/LevelOne.tsx"
import { StartScreen } from "./levels/Level 0/StartScreen.tsx";
import { useState } from "react";
import { LevelTwo } from "./levels/Level 2/LevelTwo.tsx";
import { LevelThree } from "./levels/Level 3/LevelThree.tsx";
import { LevelFour } from "./levels/Level 4/LevelFour.tsx";
import { LevelFive } from "./levels/Level 5/LevelFive.tsx";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/Routes.tsx";


function App() {
  return (
    <React.StrictMode>
      <RouterProvider router={router} >

      </RouterProvider>
    </React.StrictMode>

  );
}

export default App;

const appStyle: React.CSSProperties = {
  height: "100vh",
  width: "100vw",
  padding: "30px",
  boxSizing: "border-box",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  overflow: "hidden",
};

const ButtonsContainer: CSSProperties = {
  position: "fixed",
  bottom: "50px",
  right: "38%",
  display: "flex",
  gap: "1rem"
}
const levelContainerStyle: CSSProperties = {
  width: "100%",
  height: "100%",
  overflow: "hidden",
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "column",
};