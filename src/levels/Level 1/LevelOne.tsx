import { useState } from "react";

import {
  containerStyle,
  leftPanelStyle,
  rightPanelStyle,
  textStyle,
} from "../../styles/styles.ts";

import { ContainerArea1 } from "./components/ContainerArea1.tsx";
import { ResultBox } from "../../components/ResultBox.tsx";
import { ConsolasBold } from "../../components/ConsolasBold.tsx";

export const LevelOne = () => {
  const [text, setText] = useState<string>("");
  const [userInput, setUserInput] = useState<string>("");

  return (
    <div style={containerStyle}>
      <div style={leftPanelStyle}>
        <h2>1 - Definiremos nuestro estado inicial:</h2>
        <p style={textStyle}>
          Creamos un estado llamado <ConsolasBold>userInput</ConsolasBold>, que
          se actualiza mediante la función{" "}
          <ConsolasBold>setUserInput</ConsolasBold>.
        </p>
        <p style={textStyle}>
          Para que el campo de entrada <ConsolasBold>{"<input>"}</ConsolasBold>{" "}
          refleje y actualice este estado, utilizamos dos atributos clave:
        </p>
        <p style={textStyle}>
          En el elemento <ConsolasBold>{"<input>"}</ConsolasBold>, usamos el
          atributo value para que su contenido siempre refleje el valor actual
          de userInput. <br />
          Esto asegura que el valor mostrado en el input y el estado estén
          sincronizados.
        </p>

        <div>
          <div style={{ marginBottom: 20 }}>
            <label style={textStyle}>
              <ConsolasBold>Pruébalo aquí:</ConsolasBold>
            </label>
          </div>
          <ContainerArea1
            text={text}
            setText={setText}
            setUserInput={setUserInput}
          />
        </div>
      </div>

      <div style={rightPanelStyle}>
        <ResultBox
          userInput={userInput}
          onChange={setText}
          header={"Aquí verás lo que pasa cuando cambias el estado inicial."}
        />
      </div>
    </div>
  );
};
