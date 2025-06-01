import { useState } from "react";

import {
  containerStyle,
  leftPanelStyle,
  rightPanelStyle,
  resultBoxStyle,
  textStyle,
  textInput,
  ExerciseTextInput,
} from "../styles/styles.ts";

import { CustomButton } from "../components/CustomButton.tsx";
import { ColoredText } from "../components/ColoredText.tsx";

export const LevelOne = () => {
  const [text, setText] = useState<string>("");
  const [userInput, setUserInput] = useState<string>("")


  return (
    <div style={containerStyle}>
      <div style={leftPanelStyle}>
        <h3>1.</h3>
        <h2>Definiremos nuestro estado inicial:</h2>
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
            <div style={{ backgroundColor: "#1e1e1e", borderRadius: 5, padding: ".5rem" }}>

              <ColoredText
                text={[
                  ["const [ ", "mediumorchid"],
                  ["userInput", "palegoldenrod"],
                  [", ", "white"],
                  ["setUserInput ", "lightblue"],
                  ["] ", "mediumorchid"],
                  ["= ", "white"],
                  ["useState", "lightblue"],
                  ["(", "mediumorchid"],
                  [`"`, "lightgreen"],
                  [<input
                    type="text"
                    placeholder="Escribe algo..."
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    style={ExerciseTextInput}
                  />, undefined],
                  [`"`, "lightgreen"],
                  [")", "mediumorchid"]
                ]}
              /> <br />
              <ColoredText text={[
                ["<"],
                ["input ", "indianred"]]} />
              <ColoredText text={[
                ["   type", "orange"],
                ["=", "lightblue"],
                ['"text"', "lightgreen"]
              ]} />
              <ColoredText text={[
                ["   placeholder", "orange"],
                ["=", "lightblue"],
                ['"Añade la función para actualizar el estado"', "lightgreen"]
              ]} />
              <ColoredText text={[
                ["   value", "orange"],
                ["={", "lightblue"],
                ["userInput", "palegoldenrod"],
                ["}", "lightblue"]
              ]} />
              <ColoredText text={[["/>"]]} />
            </div>
            <div style={{ margin: 0, display: "flex", justifyContent: "end" }}>
              <CustomButton onClick={() => setUserInput(text)}>Probar</CustomButton>
            </div>
          </div>
        </div>

      </div>

      <div style={rightPanelStyle}>
        <div style={resultBoxStyle}>
          <h2>Resultado</h2>
          <p style={textStyle}>Aquí verás lo que pasa cuando cambias el estado inicial.</p>
          <input
            type="text"
            placeholder="Escribe algo..."
            value={userInput}
            onChange={(e) => setText(e.target.value)}
            style={textInput}
          />

          <p style={{ color: "#ccc", fontSize: "18px" }}>
          </p>
        </div>
      </div>
    </div>
  );
}

