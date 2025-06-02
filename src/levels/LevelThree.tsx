import { useState } from "react";

import {
    containerStyle,
    leftPanelStyle,
    rightPanelStyle,
    resultBoxStyle,
    textStyle,
    textInput,
    ExerciseTextInput,
    CodeContainer
} from "../styles/styles.ts";

import { CustomButton } from "../components/CustomButton.tsx";
import { ColoredText } from "../components/ColoredText.tsx";

export const LevelThree = () => {

    const [color, setColor] = useState<string>("");
    const [addColor, setAddColor] = useState<string>("");
    const [text, setText] = useState<string>("")

    return (
        <div style={containerStyle}>
            <div style={leftPanelStyle}>
                <h2>3 - Otros usos de los estados:</h2>
                <p style={textStyle}>
                    Hemos podido configurar y cambiar nuestro estado, pero los estados no funcionan solamente en inputs.
                    Son muy dinámicos y flexibles, permitiéndonos manejarlos en casi cualquier parte de nuestro código.
                </p>
                <p style={textStyle}>
                    Para tomar otro ejemplo, cambiaremos el color del texto que asignamos en el input del al lado.
                    usaremos un estado llamado <b>color</b>, el cual será actualizado con <b>setColor</b>.
                </p>
                <p style={textStyle}>
                    La variable <b>color</b> la usaremos dentro del estilo del texto para ir modificándolo a medida que vayamos variando los estados.
                </p>
                <p>
                    Recuerda añadir algo al input de al lado para que puedas visualizar los cambios.
                </p>
                <div>
                    <div style={{ marginBottom: 20 }}>
                        <label style={textStyle}><b>Cambia los colores del estado</b></label>
                    </div>
                    <div style={{ width: "80%" }}>
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
                                    [`"`, "lightgreen"],
                                    [<input
                                        type="text"
                                        placeholder="Cambia el color"
                                        value={color}
                                        onChange={(e) => setColor(e.target.value)}
                                        style={ExerciseTextInput}
                                    />, undefined],
                                    [`"`, "lightgreen"],
                                    [")", "mediumorchid"]
                                ]}
                            />
                            <br />
                            <ColoredText text={[
                                ["<"],
                                ["p", "indianred"],
                                [" style", "orange"],
                                ["={", "lightblue"],
                                ["{", "orange"],
                                [" color", "indianred"],
                                [":"],
                                [" color ", "palegoldenrod"],
                                ["}", "orange"],
                                ["}", "lightblue"],
                                [">"]
                            ]}
                            />
                            <ColoredText
                                text={[
                                    ["   {", "orange"],
                                    ["userInput", "palegoldenrod"],
                                    ["}", "orange"]
                                ]}
                            />
                            <ColoredText text={[
                                ["<"],
                                ["p", "indianred"],
                                ["/>"]
                            ]} />
                        </div>
                        <div style={{ margin: 0, display: "flex", justifyContent: "end" }}>
                            <CustomButton onClick={() => setAddColor(color)}>Probar</CustomButton>
                        </div>
                        <p style={textStyle}><b>Pista</b>:</p>
                        <p style={{ ...textStyle, fontSize: ".9rem" }}>Puede añadir los siguientes colores para probrarlos: green, red, lightblue, orange, yellow.</p>
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
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        style={textInput}
                    />
                    <p style={{ color: addColor, fontSize: "18px" }}>
                        {text ? `Texto actualizado: \n ${text}` : "Añade un texto arriba para que veas los cambios"}
                    </p>
                </div>
            </div>
        </div>
    );
}

