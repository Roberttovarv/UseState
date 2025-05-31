import { useState } from "react";

import {
    containerStyle,
    leftPanelStyle,
    rightPanelStyle,
    resultBoxStyle,
    textStyle,
    textInput,
    ExerciseTextInput,
} from "../styles/styles.ts";

import { CustomButton } from "../components/CustomButton.tsx";
import { ColoredText } from "../components/ColoredText.tsx";

export const LevelTwo = () => {
    const [valueText, setValueText] = useState<string>("");
    const [onChangeText, setOnChangeText] = useState<string>("");
    const [userInput, setUserInput] = useState<string>("")

    const [valueExercise, setValueExercise] = useState<string>("");
    const [onChangeExercise, setOnChangeExercise] = useState<string>("");

    const handleUserExercise = () => {
        setValueExercise(valueText);
        setOnChangeExercise(onChangeText)
        console.log(valueExercise, onChangeExercise);

    }


    return (
        <div style={containerStyle}>
            <div style={leftPanelStyle}>
                <h3 >2.</h3>
                <h2>Actualizaremos el estado al hacer cambios en el input:</h2>
                <p style={textStyle}>
                    El segundo elemento que usa <b>{"<input>"}</b> para actualizar nuestro estado es <b>{"onChange"}</b>, que redefinirá el estado de <b>useInput</b> a medida que vayamos añadiendo contenido en el contenedor</p>
                <p style={textStyle}>
                    Para ello debemos insertar <b>userInput</b> en <b>setUserInput</b>.
                </p>
                <p style={textStyle}>
                    Usaremos <b>onChange</b> y dentro de el haremos una función flecha usando un evento para que el estado se actualice cada vez que ocurra un cambio.
                </p>
                <p style={textStyle}>

                </p>
                <div>
                    <div style={{ marginBottom: 20 }}>
                        <label style={textStyle}><b>Prúebalo aquí ⬇</b></label>
                    </div>
                    <div style={{ width: "80%" }}>
                        <div style={{
                            backgroundColor: containerStyle.backgroundColor,
                            borderRadius: 5
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
                                    style={{ ...ExerciseTextInput, width: 150, margin: 0 }}
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
                                    style={{ ...ExerciseTextInput, width: 300, margin: 0 }}
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
                        type="text"
                        placeholder="Escribe algo..."
                        value={userInput}
                        onChange={(e) => setUserInput(e.target.value)}
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

