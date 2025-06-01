import { useState, useEffect } from "react";

import {
    containerStyle,
    leftPanelStyle,
    rightPanelStyle,
    resultBoxStyle,
    textStyle,
    textInput,
    ExerciseTextInput,
    WrongExerciseTextInput,
    CorrectExerciseTextInput,
    injectShakeAnimation
} from "../styles/styles.ts";

import { CustomButton } from "../components/CustomButton.tsx";
import { ColoredText } from "../components/ColoredText.tsx";

export const LevelTwo = () => {
    const [valueText, setValueText] = useState<string>("");
    const [onChangeText, setOnChangeText] = useState<string>("");
    const [userInput, setUserInput] = useState<string>("");
    const [valueIsValid, setValueIsValid] = useState<boolean>(false);
    const [onChangeIsValid, setOnChangeIsValid] = useState<boolean>(false);
    const [isWrong, setIsWrong] = useState<boolean>(false);


    useEffect(() => {
        injectShakeAnimation()

    }, [])

const handleUserExercise = () => {
  if (valueText !== "userInput") {
    setValueIsValid(false);
    setUserInput("");
    handleWrongInput();
    return;
  }

  if (onChangeText !== "setUserInput(event.target.value)") {
    setOnChangeIsValid(false);
    setUserInput("");
    handleWrongInput();
    return;
  }
  setValueIsValid(true);
  setOnChangeIsValid(true);
    }

    const handleWrongInput = () => {
        setIsWrong(true)

        setTimeout(() => {
            setIsWrong(false)
        }, 1500)
    }

    return (
        <div style={containerStyle}>
            <div style={leftPanelStyle}>
                <h3 >2.</h3>
                <h2>Actualizaremos el estado al hacer cambios en el input:</h2>
                <p style={textStyle}>
                    Para que el estado cambie a medida que escribes, utilizamos el evento onChange.
                    Cada vez que el usuario escribe algo nuevo, esta función se dispara y recibe un evento.
                    Ese evento tiene una propiedad llamada target, que apunta al elemento que generó el cambio, en este caso, el input.
                    Y dentro de ese target está el value, que es justo el texto que el usuario ha tecleado.


                </p>
                <p style={textStyle}>
                    Con esa información, simplemente llamamos a &nbsp;
                    <ColoredText text={[
                        ["setUserInput", "lightblue"],
                        ["(", "orange"],
                        ["event.target.value", "indianred"],
                        [")", "orange"]
                    ]} style={{display: "inline-flex"}}
                    />,
                    que actualiza nuestro estado con el nuevo texto.
                    Así, el input y el estado van siempre sincronizados, y cada letra que escribes se refleja en el estado.
                </p>

                <div>
                    <div style={{ marginBottom: 20 }}>
                        <label style={textStyle}><b>Pruébalo aquí ⬇</b></label>
                    </div>
                    <div style={{ width: "80%" }}>
                        <div style={{
                            backgroundColor: containerStyle.backgroundColor,
                            borderRadius: 5,
                            padding: ".5rem"
                        }}>
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
                                    style={
                                        valueIsValid
                                            ? CorrectExerciseTextInput
                                            : isWrong
                                                ? { ...WrongExerciseTextInput, animation: "shake 0.3s ease-in-out" }
                                                : ExerciseTextInput}
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
                                    style={
                                        onChangeIsValid
                                            ? CorrectExerciseTextInput
                                            : isWrong
                                                ? { ...WrongExerciseTextInput, animation: "shake 0.3s ease-in-out" }
                                                : ExerciseTextInput}
                                />, undefined],
                                ["}", "lightblue"],
                            ]}
                            />
                            <ColoredText text={[["/>"]]} />
                        </div>
                        <div style={{ margin: 0, display: "flex", justifyContent: "end" }}>
                            <CustomButton onClick={handleUserExercise}>Probar</CustomButton>
                        </div>
                    </div>
                </div>

            </div>
            <div style={rightPanelStyle}>
                <div style={resultBoxStyle}>
                    <h2>Resultado</h2>
                    <p style={textStyle}>Aquí verás lo que pasa cuando cambias el estado inicial.</p>
                    <input
                        id="FinalResult"
                        type="text"
                        placeholder="Escribe algo..."
                        {...
                        (valueIsValid && onChangeIsValid ?
                            {
                                value: userInput,
                                onChange: (event) => setUserInput(event?.target.value)
                            } :
                            {}
                        )}
                        style={textInput}
                    />
                    <p style={{ color: "#ccc", fontSize: "18px" }}>
                        {userInput ? `Texto actualizado: ${userInput}` : "Aquí aparecerá el texto actualizado"}
                    </p>
                </div>
            </div>
        </div>
    );
}

