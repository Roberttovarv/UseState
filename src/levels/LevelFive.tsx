import { useState } from "react";

import {
    containerStyle,
    leftPanelStyle,
    rightPanelStyle,
    resultBoxStyle,
    textStyle,
    textInput,
    ExerciseTextInput,
    CodeContainer,
    ExerciseTextArea,
} from "../styles/styles.ts";
import { ColoredText } from "../components/ColoredText.tsx";
import { CustomButton } from "../components/CustomButton.tsx";

export const LevelFive = () => {
    const [ isTurnedOn, setIsTurnedOn ] = useState<string>("")
    const [ lightColor, setLightColor ] = useState<string>("")

    const nullFunction = () => {
        console.log("Null")
    }

    return (
        <div style={containerStyle}>
            <div style={leftPanelStyle}>
                <h2>5 - Manejo de estados dentro de variables:</h2>
                <p style={textStyle}>
                    Como podremos imaginarnos, los estados podemos manejarlos sin tener que hardcodearlos todo el tiempo,
                    para ello utilizaremos variables las cuales nos permitirán manejar estos estados y realizar múltiples acciones.
                </p>
                <p style={textStyle}>
                    En éste módulo usaremos la función <ColoredText text={[["toggleLight", "palegoldenrod"]]} style={{ display: "inline-flex" }} /> y &nbsp;
                    <ColoredText text={[["changeColorGreen", "palegoldenrod"]]} style={{ display: "inline-flex" }} /> para cambiar los colores de
                    las luces de un semáforo.
                </p>
                <div>
                    <div style={{ marginBottom: 20 }}>
                        <label style={textStyle}><b>Pruébalo aquí:</b></label>
                    </div>
                </div>
                <div style={{ width: "100%", display: "flex", gap: "1rem", marginTop: "1rem" }}>
                    <div>
                        <div style={{ padding: ".3rem" }}>
                            <span style={{ ...textStyle }}>Añade "red" al estado</span>
                        </div>
                        <div style={CodeContainer}>
                            <ColoredText text={[
                                ["const ", "mediumorchid"],
                                ["changeColorGreen = ", "lightblue"],
                                ["() => {", "mediumorchid"]
                            ]}
                            />
                            <ColoredText text={[
                                [<textarea 
                                    placeholder='Crea una condición en la que si toggleLight es true, cambie color a "green", sino, a "black"'
                                    style={ExerciseTextArea}
                                />]
                            ]} />
                            <ColoredText text={[
                                ["}", "mediumorchid"]
                            ]} />

                        </div>
                        <div>
                            <CustomButton onClick={nullFunction}>Probar</CustomButton>
                        </div>
                    </div>
                    <div>
                        <div style={{ padding: ".3rem" }}>
                            <span style={{ ...textStyle }}>Añade "green" al estado</span>
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
                                    value={"Hola"}
                                    onChange={nullFunction}
                                    style={{ width: 150 }}
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
                            <CustomButton onClick={nullFunction}>Probar</CustomButton>
                        </div>
                    </div>
                </div>
                                <div style={{ width: "100%", display: "flex", gap: "1rem", marginTop: "1rem" }}>
                    <div>
                        <div style={{ padding: ".3rem" }}>
                            <span style={{ ...textStyle }}>Añade "red" al estado</span>
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
                                    value={"hola"}
                                    onChange={(e) => console.log(e)}
                                    style={{...ExerciseTextInput, width: 150 }}
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
                            <CustomButton onClick={nullFunction}>Probar</CustomButton>
                        </div>
                    </div>
                    <div>
                        <div style={{ padding: ".3rem" }}>
                            <span style={{ ...textStyle }}>Añade "green" al estado</span>
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
                                    value={"Hola"}
                                    onChange={nullFunction}
                                    style={{ width: 150 }}
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
                            <CustomButton onClick={nullFunction}>Probar</CustomButton>
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
                        style={textInput}
                    />

                </div>
            </div>
        </div>
    );
}
