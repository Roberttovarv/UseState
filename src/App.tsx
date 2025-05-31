
import { LevelOne } from "./levels/LevelOne.tsx"
import { buttonStyle } from "./styles/styles.ts";


function App() {
  return (
    <div style={{
      height: "100vh",
      width: "100vw",
      margin: 0,
      padding: 0,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",  // centra verticalmente
      overflow: "hidden",
    }}>
      <LevelOne />
      <div
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px"
        }}
      >
        <button style={{...buttonStyle, marginRight: 15}}>Anterior</button>
        <button style={buttonStyle}>Siguiente</button>
        </div>
        </div>

  );
}

export default App;
