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
import { ButtonTextString } from "./strings/ButtonTextString";

type Props = {
  onValid: () => void;
  label: string;
};

export const ButtonSetter = ({ onValid, label }: Props) => {
  const [userInput, setUserInput] = useState<string>("");
  const [isValid, setIsValid] = useState<boolean | null>(null);

  const ColorInputStyle = isValid
    ? CorrectExerciseTextInput
    : isValid === false
    ? { ...WrongExerciseTextInput, animation: "shake 0.3s ease-in-out" }
    : ExerciseTextInput;

  const handleColor = () => {
    if (userInput === `toggleLight`) {
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
              ["   onClick", "orange"],
              ["={", "lightblue"],

              [
                <input
                  type="text"
                  placeholder="Añade la función"
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)}
                  style={{ ...ColorInputStyle, width: 150 }}
                />,
              ],
            ]}
          />
          <ColoredText text={[["   }", "lightblue"]]} />
          <ColoredText text={[[">"]]} />
          <ColoredText
            text={[
              ["   {", "lightblue"],
              [<ButtonTextString color="palegoldenrod" />],
              ["}", "lightblue"],
            ]}
          />
          <ColoredText text={[["</"], ["button", "indianred"], [">"]]} />
        </div>
        <div>
          <CustomButton onClick={handleColor}>Enviar</CustomButton>
        </div>
      </div>
    </>
  );
};
