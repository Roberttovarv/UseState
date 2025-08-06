import { ColoredText } from "../../../components/ColoredText";
import { useState } from "react";
import {
  textStyle,
  CodeContainer,
  CorrectExerciseTextInput,
  WrongExerciseTextInput,
  ExerciseTextInput,
} from "../../../styles/styles";
import { CustomButton } from "../../../components/CustomButton";
import { Normalize } from "../../../styles/Utils";

type Props = {
  expected: string;
  onValid: () => void;
  label: string;
};

export const ColorSetter = ({ expected, onValid, label }: Props) => {
  const [userInput, setUserInput] = useState<string>("");
  const [isValid, setIsValid] = useState<boolean | null>(null);

  const ColorInputStyle = isValid
    ? CorrectExerciseTextInput
    : isValid === false
    ? { ...WrongExerciseTextInput, animation: "shake 0.3s ease-in-out" }
    : ExerciseTextInput;

  const handleColor = () => {
    console.log(userInput)
    console.log(expected)
    if (Normalize(userInput) === `setColor('${expected}')`) {
      setIsValid(true);
      onValid();
      return;
    }
    setIsValid(false);
    setTimeout(() => setIsValid(null), 1500);
  };
  return (
    <>
      <div>
        <div style={{ padding: ".3rem" }}>
          <span style={textStyle}>{label}</span>
        </div>
        <div style={CodeContainer}>
          <ColoredText text={[["<"], ["button", "indianred"]]} />
          <ColoredText
            text={[
              ["onClick", "orange"],
              ["={", "lightblue"],
              ["() ", "orange"],
              ["=> ", "mediumorchid"],
              [
                <input
                  type="text"
                  placeholder="Cambia el color"
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)}
                  style={{ ...ColorInputStyle, width: 150 }}
                />,
              ],
              ["}", "lightblue"],
              [">"],
            ]}
          />
          <ColoredText text={[["Probar"]]} />
          <ColoredText text={[["</"], ["button", "indianred"], [">"]]} />
        </div>
        <div>
          <CustomButton onClick={handleColor}>Probar</CustomButton>
        </div>
      </div>
    </>
  );
};
