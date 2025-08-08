import { ColoredText } from "../../../components/ColoredText";
import {
  CodeContainer,
  CorrectExerciseTextInput,
  WrongExerciseTextInput,
  injectShakeAnimation,
  ExerciseTextInput,
} from "../../../styles/styles";
import { useEffect } from "react";
import { CustomButton } from "../../../components/CustomButton";

type Props = {
  valueText: string;
  setValueText: (value: string) => void;
  valueIsValid: boolean | null;
  onChangeText: string;
  onChangeIsValid: boolean | null;
  setOnChangeText: (value: string) => void;
  handleUserExercise: () => void;
};

export const ExerciseContainer2 = ({
  valueText,
  setValueText,
  valueIsValid,
  onChangeText,
  onChangeIsValid,
  setOnChangeText,
  handleUserExercise,
}: Props) => {
  const ValueStyle = valueIsValid
    ? CorrectExerciseTextInput
    : valueIsValid === false
    ? { ...WrongExerciseTextInput, animation: "shake 0.3s ease-in-out" }
    : ExerciseTextInput;

  const onChangeStyle = onChangeIsValid
    ? CorrectExerciseTextInput
    : onChangeIsValid === false
    ? { ...WrongExerciseTextInput, animation: "shake 0.3s ease-in-out" }
    : ExerciseTextInput;
  useEffect(() => {
    injectShakeAnimation();
  }, []);

  return (
    <div style={{ width: "45rem" }}>
      <div style={CodeContainer}>
        <ColoredText text={[["<"], ["input ", "indianred"]]} />
        <ColoredText
          text={[
            ["   type", "orange"],
            ["=", "lightblue"],
            ['"text"', "lightgreen"],
          ]}
        />
        <ColoredText
          text={[
            ["   placeholder", "orange"],
            ["=", "lightblue"],
            ['"Añade la función para actualizar el estado"', "lightgreen"],
          ]}
        />
        <ColoredText
          text={[
            ["   value", "orange"],
            ["={", "lightblue"],
            [
              <input
                type="text"
                placeholder="Añade el valor"
                value={valueText}
                onChange={(event) => setValueText(event.target.value)}
                style={ValueStyle}
              />,
              undefined,
            ],
            ["}", "lightblue"],
          ]}
        />
        <ColoredText
          text={[
            ["   onChange", "orange"],
            ["={", "lightblue"],
            ["(", "orange"],
            ["event", "indianred"],
            [") ", "orange"],
            ["=> ", "mediumorchid"],
            [
              <input
                type="text"
                placeholder="Añade la función para actualizar el estado"
                value={onChangeText}
                onChange={(event) => setOnChangeText(event.target.value)}
                style={{ ...onChangeStyle, width: "23rem" }}
              />,
              undefined,
            ],
            ["}", "lightblue"],
          ]}
        />
        <ColoredText text={[["/>"]]} />
      </div>
      <div style={{ margin: 0, display: "flex", justifyContent: "end" }}>
        <CustomButton onClick={handleUserExercise}>Probar</CustomButton>
      </div>
    </div>
  );
};
