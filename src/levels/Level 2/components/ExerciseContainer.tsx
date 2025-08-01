import { ColoredText } from "../../../components/ColoredText"
import { CodeContainer, CorrectExerciseTextInput, WrongExerciseTextInput, injectShakeAnimation, ExerciseTextInput } from "../../../styles/styles"
import type { FC } from "react"
import { useEffect } from "react"

type ExerciseContainerTypes = {
    valueText: string,
    setValueText: (value: string) => void,
    valueIsValid: boolean | null,
    onChangeText: string,
    onChangeIsValid: boolean | null,
    setOnChangeText: (value: string) => void
}


export const ExerciseContainer: FC<ExerciseContainerTypes> = ({ valueText, setValueText, valueIsValid, onChangeText, onChangeIsValid, setOnChangeText }) => {
    const ValueStyle = valueIsValid
        ? CorrectExerciseTextInput
        : valueIsValid === false
            ? { ...WrongExerciseTextInput, animation: "shake 0.3s ease-in-out" }
            : ExerciseTextInput

    const onChangeStyle = onChangeIsValid
            ? CorrectExerciseTextInput
            : onChangeIsValid === false
                ? { ...WrongExerciseTextInput, animation: "shake 0.3s ease-in-out" }
                : ExerciseTextInput
    useEffect(() => {
        injectShakeAnimation()
    }, [])
    return (
        <div style={CodeContainer}>
            <ColoredText text={[
                ["<"],
                ["input ", "indianred"]]} />
            <ColoredText text={[
                ["   type", "orange"],
                ["=", "lightblue"],
                ['"text"', "lightgreen"]
            ]} />
            <ColoredText text={[
                ["   placeholder", "orange"],
                ["=", "lightblue"],
                ['"Añade la función para actualizar el estado"', "lightgreen"]
            ]} />
            <ColoredText text={[
                ["   value", "orange"],
                ["={", "lightblue"],
                [<input
                    type="text"
                    placeholder="Añade el valor"
                    value={valueText}
                    onChange={(event) => setValueText(event.target.value)}
                    style={ValueStyle}
                />, undefined],
                ["}", "lightblue"],
            ]} />
            <ColoredText text={[
                ["   onChange", "orange"],
                ["={", "lightblue"],
                ['(', "orange"],
                ["event", "indianred"],
                [') ', "orange"],
                ["=> ", "mediumorchid"],
                [<input
                    type="text"
                    placeholder="Añade la función para actualizar el estado"
                    value={onChangeText}
                    onChange={(event) => setOnChangeText(event.target.value)}
                    style={onChangeStyle}
                />, undefined],
                ["}", "lightblue"],
            ]}
            />
            <ColoredText text={[["/>"]]} />
        </div>
    )
}