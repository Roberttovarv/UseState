
import { StartScreen } from "./levels/StartScreen"

function App() {

  return (
    <div style={{ height: "100vh", overflow: "hidden", margin: 0, padding: 0 }}>
      <div style={{ height: "100%", display: "flex", flexDirection: "column" }}>
        <h1> In this section you'll learn how  React State works and how to implement it!</h1>
        <StartScreen />
        <div>
          <p>➡</p>
        </div>
      </div>
    </div>
  )
}

export default App
