import { useState } from "react";

import {
  containerStyle,
  leftPanelStyle,
  rightPanelStyle,
  textStyle,
} from "../../styles/styles.ts";

import { CustomButton } from "../../components/CustomButton.tsx";
import { ExerciseContainer3 } from "./components/ExerciseContainer3.tsx";
import { ResultBox } from "../../components/ResultBox.tsx";
import { ConsolasBold } from "../../components/ConsolasBold.tsx";

export const LevelThree = () => {
  const [color, setColor] = useState<string>("");
  const [newColor, setNewColor] = useState<string>("");
  const [text, setText] = useState<string>("");

  return (
    <div style={containerStyle}>
      <div style={leftPanelStyle}>
        <h2>3 - Otros usos de los estados:</h2>
        <p style={textStyle}>
          Hemos podido configurar y cambiar nuestro estado, pero los estados no
          funcionan solamente en inputs. Son muy dinámicos y flexibles,
          permitiéndonos manejarlos en casi cualquier parte de nuestro código.
        </p>
        <p style={textStyle}>
          Para tomar otro ejemplo, cambiaremos el color del texto que asignamos
          en el input del al lado. usaremos un estado llamado <b>color</b>, el
          cual será actualizado con <b>setColor</b>.
        </p>
        <p style={textStyle}>
          La variable <b>color</b> la usaremos dentro del estilo del texto para
          ir modificándolo a medida que vayamos variando los estados.
        </p>

        <div>
          <div style={{ marginBottom: 20 }}>
            <label style={textStyle}>
              <ConsolasBold>Cambia los colores del estado</ConsolasBold>
            </label>
          </div>
          <ExerciseContainer3
            color={color}
            onChange={setColor}
            setNewColor={setNewColor}
          />
        </div>
      </div>
      <div style={rightPanelStyle}>
        <ResultBox
          header="Escribe algo para que cambie su color"
          footer={text}
          onChange={setText}
          newColor={newColor}
        />
      </div>
    </div>
  );
};
