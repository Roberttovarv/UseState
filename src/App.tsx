
import type { CSSProperties } from "react";
import { CustomButton } from "./components/CustomButton.tsx";
import { LevelOne } from "./levels/LevelOne.tsx"
import { StartScreen } from "./levels/StartScreen.tsx";
import { useState } from "react";
import { LevelTwo } from "./levels/LevelTwo.tsx";

function App() {
  const [level, setLevel] = useState<number>(0)
  const handleLevel = (action: number) => {
    if (action === 1) {
      if (level === 0) {
        return
      }
      setLevel(level -1)
    }
        if (action === 2) {
      if (level === 2) {
        return
      }
      setLevel(level + 1)
    }
  }

  let currentLevel;

  if (level === 0) {
    currentLevel = <StartScreen />;
  } else if (level === 1) {
    currentLevel = <LevelOne />;
  } else if (level === 2) {
    currentLevel = <LevelTwo />;
  }

  return (
    <div style={appStyle}>
      <div style={levelContainerStyle}>
        {currentLevel}
      </div>
      <div
        style={level ? ButtonsContainer : { ...ButtonsContainer, right: "45%" }}
      >
        <CustomButton
          onClick={() => handleLevel(1)}
        >Anterior
        </CustomButton>
        <CustomButton
          onClick={() => handleLevel(2)}
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