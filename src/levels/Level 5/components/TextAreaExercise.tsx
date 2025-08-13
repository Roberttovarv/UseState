import { useState } from "react";
import { ColoredText } from "../../../components/ColoredText";
import { textStyle, CodeContainer, ExerciseTextArea, CorrectExerciseTextArea, WrongExerciseTextArea } from "../../../styles/styles";
import { CustomButton } from "../../../components/CustomButton";
import { OPTIONS } from "./OPTIONS";

type Prop = {
    valid: () => void
}
export const TextAreaExercise = ({valid}: Prop) => {
    const [textAreaIsValid, setTextAreaIsValid] = useState<boolean | null>(null)
    const [userText, setUserText] = useState<string>("")

    const handleTextArea = () => {


        const isCorrect = Object.values(OPTIONS()).some(option => NormalizeTextArea(option) === NormalizeTextArea(userText))
        if (isCorrect) {
            setTextAreaIsValid(true)
            valid()
        } else {
            setTextAreaIsValid(false)
            setTimeout(() => setTextAreaIsValid(null), 1500)
        }
    }

    const textAreaStyle = textAreaIsValid === null
        ? ExerciseTextArea
        : textAreaIsValid
            ? CorrectExerciseTextArea
            : !textAreaIsValid
                ? { ...WrongExerciseTextArea, animation: "shake 0.3s ease-in-out" }
                : ExerciseTextArea;
    return (
        <div>
            <div style={{ padding: ".3rem" }}>
                <span style={{ ...textStyle }}>Crea la lógica de la función</span>
            </div>
            <div style={CodeContainer}>
                <ColoredText text={[
                    ["const ", "mediumorchid"],
                    ["toggleLight = ", "lightblue"],
                    ["() => {", "mediumorchid"]
                ]}
                />
                <ColoredText text={[
                    [<textarea
                        placeholder={``}
                        style={textAreaStyle}
                        value={userText}
                        onChange={(e) => setUserText(e.target.value)}
                    />]
                ]} />
                <ColoredText text={[
                    ["}", "mediumorchid"]
                ]} />
            </div>
            <div>
                <CustomButton onClick={handleTextArea}>Enviar</CustomButton>
            </div>
        </div>
    )
}

const NormalizeTextArea = (str: string): string => {
    return str
        .replace(/"/g, "'")
        .replace(/;/g, "")
        .replace(/A/g, "a")      
        .replace(/E/g, "e")
        .match(/[\w]+|[^\s\w]/g)
        ?.join(" ")
        .trim() || "";
};