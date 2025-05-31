
import { LevelOne } from "./levels/LevelOne.tsx"
import { buttonStyle } from "./styles/styles.ts";


function App() {
  return (
    <div style={appStyle}>
      <LevelOne />
      <div
        style={{
          position: "fixed",
          bottom: "20px",
          right: "50%",
          marginRight: 20
        }}
      >
        <button style={{...buttonStyle, marginRight: 15}}>Anterior</button>
        <button style={buttonStyle}>Siguiente</button>
        </div>
        </div>

  );
}

export default App;

const appStyle: React.CSSProperties = {
      height: "100vh",
      width: "100vw",
      margin: 0,
      padding: 0,
      display: "flex",
      justifyContent: "center",
      alignItems: "center", 
      overflow: "hidden",
    }
