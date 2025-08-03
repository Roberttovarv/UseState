
import type { CSSProperties } from "react";
import { CustomButton } from "./components/CustomButton.tsx";
import { LevelOne } from "./levels/Level 1/LevelOne.tsx"
import { StartScreen } from "./levels/Level 0/StartScreen.tsx";
import { useState } from "react";
import { LevelTwo } from "./levels/Level 2/LevelTwo.tsx";
import { LevelThree } from "./levels/Level 3/LevelThree.tsx";
import { LevelFour } from "./levels/Level 4/LevelFour.tsx";
import { LevelFive } from "./levels/Level 5/LevelFive.tsx";


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
      if (level === 4) {
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
  } else if (level === 3) {
    currentLevel = <LevelThree />
  } else if (level === 4) {
    currentLevel = <LevelFour />
  }
  let currentTest = <LevelFive />
  return (
    <div style={appStyle}>
      <div style={levelContainerStyle}>
        {currentTest}
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