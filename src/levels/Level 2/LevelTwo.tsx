import { useState } from "react";

import {
  containerStyle,
  leftPanelStyle,
  rightPanelStyle,
  textStyle,
} from "../../styles/styles.ts";

import { CodeLine } from "./components/CodeLine.tsx";
import { ExerciseContainer2 } from "./components/ExerciseContainer2.tsx";
import { ResultBox } from "../../components/ResultBox.tsx";
import { ConsolasBold } from "../../components/ConsolasBold.tsx";

export const LevelTwo = () => {
  const [valueText, setValueText] = useState<string>("");
  const [onChangeText, setOnChangeText] = useState<string>("");
  const [userInput, setUserInput] = useState<string>("");
  const [valueIsValid, setValueIsValid] = useState<boolean | null>(null);
  const [onChangeIsValid, setOnChangeIsValid] = useState<boolean | null>(null);

  const validateValue = () => {
    if (valueText === "") {
      return;
    }
    if (valueText !== "userInput") {
      setValueIsValid(false);
      setUserInput("");
      setTimeout(() => {
        setValueIsValid(null);
      }, 1500);
      return;
    }
    setValueIsValid(true);
  };
  const validateOnChange = () => {
    if (onChangeText === "") {
      return;
    }
    if (
      onChangeText.split(" ").join("") !== "setUserInput(event.target.value)"
    ) {
      setOnChangeIsValid(false);
      setUserInput("");
      return;
    }
    setOnChangeIsValid(true);
  };
  const handleUserExercise = () => {
    validateOnChange();
    validateValue();
  };
  const handleResultBox = (value: string) => {
    if (valueIsValid && onChangeIsValid) {
      setUserInput(value);
    }
  };
  return (
    <div style={containerStyle}>
      <div style={leftPanelStyle}>
        <h2>2 - Actualizaremos el estado al hacer cambios en el input:</h2>
        <p style={textStyle}>
          Para que el estado cambie a medida que escribes, utilizamos la
          propiedad onChange. Cada vez que el usuario escribe algo nuevo, esta
          función se dispara y recibe un evento. Ese evento tiene una propiedad
          llamada target, que apunta al elemento que generó el cambio, en este
          caso, el input. Y dentro de ese target está el value, que es justo el
          texto que el usuario ha tecleado.
        </p>
        <p style={textStyle}>
          Con esa información, simplemente llamamos a <CodeLine />, que
          actualiza nuestro estado con el nuevo texto. Así, el input y el estado
          van siempre sincronizados, y cada letra que escribes se refleja en el
          estado.
        </p>
        <p style={textStyle}>
          Puedes probar primero en el recuadro de al lado antes de escribir tu
          código, así podrás visualizar los cambios.
        </p>
        <div>
          <div style={{ marginBottom: 20 }}>
            <label style={textStyle}>
              <ConsolasBold>Ahora, escribe tu código:</ConsolasBold>
            </label>
          </div>

          <ExerciseContainer2
            valueText={valueText}
            setValueText={setValueText}
            valueIsValid={valueIsValid}
            onChangeText={onChangeText}
            onChangeIsValid={onChangeIsValid}
            setOnChangeText={setOnChangeText}
            handleUserExercise={handleUserExercise}
          />
        </div>
      </div>
      <div style={rightPanelStyle}>
        <ResultBox
          onChange={handleResultBox}
          header={
            "Aquí verás qué pasa cuando cambias el valor del input una vez lo hayas configurado correctamente"
          }
          footer={userInput}
        />
      </div>
    </div>
  );
};
