import { ColoredText } from "../../../components/ColoredText";
import { useState, type FC } from "react"
import { textStyle, CodeContainer, CorrectExerciseTextInput, WrongExerciseTextInput, ExerciseTextInput} from "../../../styles/styles";
import { CustomButton } from "../../../components/CustomButton";

type ColorSetterProps = {

}

export const ColorSetter: FC<ColorSetterProps> = () => {

    const [color, setColor] = useState<string>("")
    const [isValid, setIsValid] = useState<boolean | null>(null)

    const ColorInputStyle = isValid
        ? CorrectExerciseTextInput
        : isValid === false
            ? { ...WrongExerciseTextInput, animation: "shake 0.3s ease-in-out" }
            : ExerciseTextInput;

    const sanitize = (str: string) => str.replace(/\s+/g, "").replace(/"/g, "'")

    
    return (
        <>
            <div>
                <div style={{ padding: ".3rem" }}>
                    <span style={textStyle}>Añade "orange" al estado</span>
                </div>
                <div style={CodeContainer}>
                    <ColoredText text={[
                        ["<"],
                        ["button", "indianred"]
                    ]}
                    />
                    <ColoredText text={[
                        ["onClick", "orange"],
                        ["={", "lightblue"],
                        ["() ", "orange"],
                        ["=> ", "mediumorchid"],
                        [<input
                            type="text"
                            placeholder="Cambia el color"
                            value={color}
                            onChange={(e) => setColor(e.target.value)}
                            style={{ ...ColorInputStyle, width: 150 }}
                        />],
                        ["}", "lightblue"],
                        [">"]
                    ]}
                    />
                    <ColoredText text={[
                        ["Probar"]
                    ]} />
                    <ColoredText text={[
                        ["</"],
                        ["button", "indianred"],
                        [">"]
                    ]} />

                </div>
                <div>
                    <CustomButton onClick={handleColorOne}>Probar</CustomButton>
                </div>
            </div>
        </>
    )
}