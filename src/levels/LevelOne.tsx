import { useState } from "react";

import {
  containerStyle,
  leftPanelStyle,
  rightPanelStyle,
  resultBoxStyle,
  headingStyle,
  subHeadingStyle,
  textStyle,
  textInput,
  ExerciseTextInput,
} from "../styles/styles.ts";
import { CustomButton } from "../components/CustomButton.tsx";
import { ColoredText } from "../components/ColoredText.tsx";

export const LevelOne = () => {
  const [text, setText] = useState<string>("");
  const [code, setCode] = useState<string>("");
  const [userInput, setUserInput] = useState<string>("")

  const handleText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value)
    console.log(text);
  }

  const handleCode = () => {
    setCode(text)
    setText("")
    console.log(code)
  }
  return (
    <div style={containerStyle}>
      <div style={leftPanelStyle}>
        <h1 style={headingStyle}>
          1.
        </h1>
        <h2 style={subHeadingStyle}>
          Definiremos nuestro estado inicial:
        </h2>
        <p style={textStyle}>
          Hemos creado un estado llamado <b>userInput</b>, el cual es actualizado por <b>setUserInput</b>.
        </p>
        <p style={textStyle}>
          Para hacer que nuestro código funcione en el input de al lado tenemos que actualizar la información añadida.
        </p>
        <p style={textStyle}>
          Para lograrlo el código de <b>{`<input>`}</b> tendrá dos atributos clave, que nos ayudarán a que el valor de lo que hay en el cuadro sea <b>userInput</b>.
        </p>
          <ul style={textStyle}>
            <li>Uno de ellos es <b>value={"{}"}</b>, dónde añadiremos el valor de <b>userInput</b>, haciendo que texto del cuadro cambie dependiendo del valor de userInput.</li>
          </ul>
        <div>
          <div style={{ marginBottom: 20 }}>
            <label style={textStyle}><b>Prúebalo aquí ⬇</b></label>
          </div>
          <div style={{ width: "80%" }}>
              
              <ColoredText
              text={[
                ["const [ ", "mediumorchid"],
                ["userInput", "yellow"],
                [", ", "white"],
                ["setUserInput ", "lightblue"],
                ["] ", "mediumorchid"],
                ["= ", "white"],
                ["useState", "lightblue"],
                ["(", "mediumorchid"],
                [`"`, "lightgreen"],
                [<input type="text" 
                  placeholder="Escribe algo..." 
                  value={text} onChange={(e) => setText(e.target.value)}
                  style={ExerciseTextInput}
                  />, undefined],
                [`"`, "lightgreen"],
                [")", "mediumorchid"]

              ]} 
              />


            <div style={{ margin: 0, display: "flex", justifyContent: "end" }}>
             <CustomButton onClick={() => setUserInput(text)}>Probar</CustomButton>
            </div>
          </div>
        </div>

      </div>

      <div style={rightPanelStyle}>
        <div style={resultBoxStyle}>
          <h2 style={subHeadingStyle}>
            Resultado
          </h2>
          <p style={textStyle}>Aquí verás lo que pasa cuando cambias el estado inicial.</p>
          <input
            type="text"
            placeholder="Escribe algo..."
            value={userInput}
            onChange={(e) => setText(e.target.value)}
            style={textInput}
          />

          <p style={{ color: "#ccc", fontSize: "18px" }}>
            {/* {text ? `Texto actualizado: ${text}` : "Aquí aparecerá el texto actualizado"} */}
          </p>
        </div>
      </div>
    </div>
  );
}

