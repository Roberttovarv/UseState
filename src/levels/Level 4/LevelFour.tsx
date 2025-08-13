import { useEffect, useState } from "react";

import {
  containerStyle,
  leftPanelStyle,
  rightPanelStyle,
  resultBoxStyle,
  textStyle,
  injectShakeAnimation,
} from "../../styles/styles.ts";

import { ConsolasBold } from "../../components/ConsolasBold.tsx";
import { ExercisesContainer4 } from "./components/ExercisesContainer4.tsx";

export const LevelFour = () => {
  useEffect(() => {
    injectShakeAnimation();
  }, []);

  const [color, setColor] = useState<string>("#2c2c2c");
  const [text, setText] = useState<string>("");

  const [textIsValid, setTextIsValid] = useState<boolean | null>(null);

  return (
    <div style={containerStyle}>
      <div style={leftPanelStyle}>
        <h2>4 - Otra manera de cambiar un estado:</h2>
        <p style={textStyle}>
          En la sección dos aprendimos que podíamos actualizar un estado
          mediante la propiedad{" "}
          <ConsolasBold color="lightgreen" backgroundColor={true}>
            onChange
          </ConsolasBold>
          , sin embargo, también podemos usar otra propiedad llamada{" "}
          <ConsolasBold color="lightgreen" backgroundColor={true}>
            onClick
          </ConsolasBold>
          , que a diferencia de{" "}
          <ConsolasBold color="lightgreen" backgroundColor={true}>
            onChange
          </ConsolasBold>
          , se puede aplicar en casi todos los elementos HTML de nuestra página.
          Aunque comúnmente se aplica en botones o en elementos{" "}
          <ConsolasBold backgroundColor={true}>{"<div>"}</ConsolasBold> con
          estilos que simulan botones.
        </p>
        <p style={textStyle}>
          Para este ejercicio implementaremos el uso de{" "}
          <ConsolasBold color="lightgreen" backgroundColor={true}>
            onClick
          </ConsolasBold>{" "}
          en tres botones que permitirán cambiar el color del{" "}
          <ConsolasBold backgroundColor={true}>{"<div>"}</ConsolasBold> que
          aparece a la derecha. Cada botón deberá ser configurado correctamente
          con sus respectivas propiedades para que la interacción funcione
          correctamente.
        </p>
        <div>
          <div style={{ marginBottom: 20, width: "80%" }}>
            <label style={textStyle}>
              <ConsolasBold>
                Primero, añade el estado color al estilo del elemento y luego
                prueba distintos colores usando funciones flecha para cambiar el
                valor del estado.
              </ConsolasBold>{" "}
            </label>
          </div>
          <div style={{ maxWidth: "80%", marginBottom: "rem" }}>
            <ExercisesContainer4
              text={text}
              setText={setText}
              textIsValid={textIsValid}
              setTextIsValid={setTextIsValid}
              setColor={setColor}
            />
          </div>
          <p
            style={{ ...textStyle, fontFamily: "consolas", marginTop: "1rem" }}
          >
            <ConsolasBold>Observación:</ConsolasBold> Cuando añades una función
            con argumentos a la propiedad de un componente, siempre debes
            hacerlo mediante una función flecha.
          </p>
        </div>
      </div>
      <div style={rightPanelStyle}>
        <div
          {...(textIsValid
            ? {
                style: {
                  ...resultBoxStyle,
                  backgroundColor: color !== "" ? color : undefined,
                },
              }
            : { style: { ...resultBoxStyle } })}
        >
          <h2 style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.5)" }}>
            Cámbiame el color!
          </h2>
        </div>
      </div>
    </div>
  );
};
