import { ColoredText } from "../../../components/ColoredText"
import { CodeContainer, CorrectExerciseTextInput, WrongExerciseTextInput, ExerciseTextInput } from "../../../styles/styles"
import { CustomButton } from "../../../components/CustomButton";
import type { FC } from "react";

type StyleSetterProps = {
    text: string,
    onChange: (value: string) => void,
    textIsValid: boolean | null
    setTextIsValid: (value: boolean | null) => void
}

export const StyleSetter: FC<StyleSetterProps> = ({ text, onChange, textIsValid, setTextIsValid }) => {

    const TextInputStyle = textIsValid
        ? CorrectExerciseTextInput
        : textIsValid === false
            ? { ...WrongExerciseTextInput, animation: "shake 0.3s ease-in-out" }
            : ExerciseTextInput;
    const handleTextInput = () => {
        if (text === "color") {
            setTextIsValid(true)
            return
        } else {
            setTextIsValid(false)

            setTimeout(() => setTextIsValid(null), 1500)
        }
    }
    return (
        <>
            <div style={CodeContainer}>
                <ColoredText
                    text={[
                        ["const [ ", "mediumorchid"],
                        ["color", "palegoldenrod"],
                        [", ", "white"],
                        ["setColor ", "lightblue"],
                        ["] ", "mediumorchid"],
                        ["= ", "white"],
                        ["useState", "lightblue"],
                        ["(", "mediumorchid"],
                        [`""`, "lightgreen"],
                        [")", "mediumorchid"]
                    ]}
                />
                <br />
                <ColoredText text={[
                    ["<"],
                    ["div", "indianred"],
                    [" style", "orange"],
                    ["={", "lightblue"],
                    ["{", "orange"],
                    [" color", "indianred"],
                    [":"],
                    [<input
                        type="text"
                        placeholder="Cambia la propiedad"
                        value={text}
                        onChange={(e) => onChange(e.target.value)}
                        style={TextInputStyle}
                    />],
                    ["}", "orange"],
                    ["}", "lightblue"],
                    [">"],
                    ["  Cámbiame el color!  "],
                    ["<"],
                    ["div", "indianred"],
                    ["/>"]
                ]}
                />
            </div>
            <div style={{ margin: 0, display: "flex", justifyContent: "end" }}>
                <CustomButton onClick={handleTextInput}>Enviar</CustomButton>
            </div>
        </>
    )
}