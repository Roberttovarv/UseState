import { useState } from "react";

import {
  containerStyle,
  leftPanelStyle,
  rightPanelStyle,
  resultBoxStyle,
  headingStyle,
  subHeadingStyle,
  textStyle,
  textArea,
  textInput,
  buttonStyle,
} from "../styles/styles.ts";

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
          <ul>
            <li>Uno de ellos es <b>value={"{}"}</b>, dónde añadiremos el valor de <b>userInput</b>, haciendo que texto del cuadro cambie dependiendo del valor de userInput.</li>
          </ul>
        </p>
        <div>
          <div style={{ marginBottom: 20 }}>
            <label style={textStyle}>Prúebalo aquí</label>
          </div>
          <div style={{ width: "80%" }}>
            <div style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",             // centra verticalmente
              gap: "0.4rem",                    // opcional: separa elementos
              fontFamily: "consolas",
              backgroundColor: containerStyle.backgroundColor,
              borderRadius: 10,
              padding: "10px",              // menos padding vertical
              width: "100%"
            }}>
              <span style={{ color: "purple" }}>const [</span>
              <span style={{ color: "yellow" }}>userInput</span>,
              <span style={{ color: "lightblue" }}>setUserInput</span>
              <span style={{ color: "purple" }}>]</span> =
              <span style={{ color: "lightblue" }}> useState</span>
              <span style={{ color: "purple" }}>(</span>
              <span style={{ color: "lightgreen" }}>"</span>

              <input
                type="text"
                placeholder="Escribe algo..."
                value={text}
                onChange={(e) => setText(e.target.value)}
                style={{
                  ...textInput,
                  width: "auto",
                  minWidth: "50",
                  maxWidth: "110px",
                  color: "lightgreen",
                  height: "1rem",
                  marginTop: 12,
                  fontSize: "1em",         // iguala texto
                  padding: "0.2em 0.4em",  // espaciado interno
                  verticalAlign: "middle",
                }}
              />
              <span style={{ color: "lightgreen" }}>"</span>
              <span style={{ color: "purple" }}>)</span>


            </div>
            <div style={{ margin: 0, display: "flex", justifyContent: "end" }}>
              <button
                style={{...buttonStyle}}
                onClick={() => setUserInput(text)}
              >Probar</button>
            </div>
          </div>
        </div>

      </div>

      <div style={rightPanelStyle}>
        <div style={resultBoxStyle}>
          <h2 style={subHeadingStyle}>
            Resultado
          </h2>
          <p style={textStyle}>Aquí verás lo que pasa cuando cambias el estado.</p>
          <input
            type="text"
            placeholder="Escribe algo..."
            value={userInput}
            onChange={(e) => setText(e.target.value)}
            style={textInput}
          />

          <p style={{ color: "#ccc", fontSize: "18px" }}>
            {text ? `Texto actualizado: ${text}` : "Aquí aparecerá el texto actualizado"}
          </p>
        </div>
      </div>
    </div>
  );
}

{/* <textarea
style={textArea}
onChange={handleText}
value={text}
placeholder={`Cambia los valores del estado para que entiendas su funcionalidad.\n\n`}
/> */}