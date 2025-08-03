import { useEffect, useState } from "react";

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
    CorrectExerciseTextArea,
    WrongExerciseTextArea,
    injectShakeAnimation
} from "../../styles/styles.ts";
import { ColoredText } from "../../components/ColoredText.tsx";
import { CustomButton } from "../../components/CustomButton.tsx";

export const LevelFive = () => {
    const [isTurnedOn, setIsTurnedOn] = useState<boolean>(false)
    const [lightColor, setLightColor] = useState<string>("")
    const [buttonText, setButtonText] = useState<string>("")
    const [userText, setUserText] = useState<string>("")
    const [textAreaIsValid, setTextAreaIsValid] = useState<boolean | null>(null)

    const nullFunction = () => {
        console.log("Null")
    }

    useEffect(() => { injectShakeAnimation() }, [])
    
    
    const handleTextArea = () => {
        
        const isCorrect = (textOption1 === normalize(userText)) || (textOption2 === normalize(userText))
        if (isCorrect) {
            setTextAreaIsValid(true)
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
        <div style={containerStyle}>
            <div style={leftPanelStyle}>
                <h2>5 - Manejo de estados dentro de variables:</h2>
                <p style={textStyle}>
                    Los estados pueden ser manejardos sin tener que hardcodearlos todo el tiempo,
                    para ello utilizaremos variables que nos permitirán cambiar estos estados y realizar múltiples acciones con ellos.
                </p>
                <p style={textStyle}>
                    En éste módulo usaremos la función <ColoredText text={[["toggleLight", "palegoldenrod"]]} style={{ display: "inline-flex" }} /> para
                    cambiar los "encender" y "apagar" una luz.
                </p>
                <p style={textStyle}>
                    Dentro de dicha función tendremos que cambiar los valores de &nbsp;
                    <ColoredText text={[["buttonText", "lightgreen"]]} style={{ display: "inline-flex" }} />, &nbsp;
                    <ColoredText text={[["lightColor", "lightgreen"]]} style={{ display: "inline-flex" }} /> y &nbsp;
                    <ColoredText text={[["isTurnedOn", "lightgreen"]]} style={{ display: "inline-flex" }} />. <br />
                    Donde si <ColoredText text={[["isTurnedOn", "lightgreen"]]} style={{ display: "inline-flex" }} /> es &nbsp;
                    <ColoredText text={[["true", "lightgreen"]]} style={{ display: "inline-flex" }} />, debemos cambiar su valor a &nbsp;
                    <ColoredText text={[["false", "lightgreen"]]} style={{ display: "inline-flex" }} />, &nbsp;
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
                                ["toggleLight = ", "lightblue"],
                                ["() => {", "mediumorchid"]
                            ]}
                            />
                            <ColoredText text={[
                                [<textarea
                                    placeholder='Crea un condicional en el que si toggleLight es true, 
                                    cambie el estado isTurnedOn a false, el estado color a "green" y buttonText a 
                                    "apagar", sino, a el valor de estos serían: true, "false" y "gray"'
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
                                    style={{ ...ExerciseTextInput, width: 150 }}
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

const textOption1 = `if(isTurnedOn){setIsTurnedOn(false)setLightColor("gray")setButtonText("Encender")}else{setIsTurnedOn(true)setLightColor("red")setButtonText("Apagar")}`
const textOption2 = `if(!isTurnedOn){setIsTurnedOn(true)setLightColor("red")setButtonText("Apagar")}else{setIsTurnedOn(false)setLightColor("gray")setButtonText("Encender")}`

const normalize = (str: string) =>
    str
        .replace(/[\s;]/g, "")
        .replace(/['"]/g, '"') 