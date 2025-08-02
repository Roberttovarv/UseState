import { useState } from "react";

import {
  containerStyle,
  leftPanelStyle,
  rightPanelStyle,
  textStyle,
  CodeContainer,
} from "../../styles/styles.ts";

import { CustomButton } from "../../components/CustomButton.tsx";
import { StateLine } from "./components/StateLine.tsx";
import { InputTextExample } from "./components/InputTextExample.tsx";
import { ResultBox } from "../../components/ResultBox.tsx";

export const LevelOne = () => {
  const [text, setText] = useState<string>("");
  const [userInput, setUserInput] = useState<string>("")

  return (
    <div style={containerStyle}>
      <div style={leftPanelStyle}>
        <h2>1 - Definiremos nuestro estado inicial:</h2>
        <p style={textStyle}>
          Creamos un estado llamado <b>userInput</b>, que se actualiza mediante la función <b>setUserInput</b>.
        </p>
        <p style={textStyle}>
          Para que el campo de entrada {"<input>"} refleje y actualice este estado, utilizamos dos atributos clave:

        </p>
        <p style={textStyle}>
          En el elemento <b>{"<input>"}</b>, usamos el atributo value para que su contenido siempre refleje el valor actual de userInput. <br />
          Esto asegura que el valor mostrado en el input y el estado estén sincronizados.
        </p>

        <div>
          <div style={{ marginBottom: 20 }}>
            <label style={textStyle}><b>Pruébalo aquí:</b></label>
          </div>
          <div style={{ width: "80%" }}>
            <div style={CodeContainer}>
              <StateLine text={text} setText={setText} />
              <br />
              <InputTextExample />
            </div>
            <div style={{ margin: 0, display: "flex", justifyContent: "end" }}>
              <CustomButton onClick={() => setUserInput(text)}>Probar</CustomButton>
            </div>
          </div>
        </div>
      </div>

      <div style={rightPanelStyle}>
        <ResultBox userInput={userInput} onChange={setText} header={"Aquí verás lo que pasa cuando cambias el estado inicial."}/>
      </div>
    </div>
  );
}

