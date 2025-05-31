
import type { CSSProperties } from "react";
import { CustomButton } from "./components/CustomButton.tsx";
import { LevelOne } from "./levels/LevelOne.tsx"
import { StartScreen } from "./levels/StartScreen.tsx";
import { useState } from "react";
import { LevelTwo } from "./levels/LevelTwo.tsx";





function App() {

  const [level, setLevel] = useState<Boolean>(false)
  let  currentLevel = <LevelTwo />

  if (level) {
    currentLevel = <LevelTwo />
  }

  return (
    <div style={appStyle}>
      <div style={levelContainerStyle}>

  {currentLevel}
      </div>
      <div
        style={level ? ButtonsContainer : {...ButtonsContainer, right: "45%"}}
      >
        <CustomButton
          onClick={() => setLevel(false)}
        >Anterior
        </CustomButton>
        <CustomButton
          onClick={() => setLevel(true)}
        >Siguiente
        </CustomButton>
      </div>
    </div>

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
  right: "50%",
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