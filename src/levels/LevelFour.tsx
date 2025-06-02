import { useEffect, useState } from "react";

import {
    containerStyle,
    leftPanelStyle,
    rightPanelStyle,
    resultBoxStyle,
    textStyle,
    ExerciseTextInput,
    CodeContainer,
    injectShakeAnimation,
    CorrectExerciseTextInput,
    WrongExerciseTextInput
} from "../styles/styles.ts";

import { CustomButton } from "../components/CustomButton.tsx";
import { ColoredText } from "../components/ColoredText.tsx";

export const LevelFour = () => {

    useEffect(() => {
        injectShakeAnimation()
    }, [])

    const [color, setColor] = useState<string>("");
    const [text, setText] = useState<string>("")
    const [state, setState] = useState<string>("")
    const [isWrong, setIsWrong] = useState<boolean>(false);
    const [isValid, setIsValid] = useState<boolean>(false);

    const [colorOne, setColorOne] = useState<string>("")
    const [colorTwo, setColorTwo] = useState<string>("")
    const [colorThree, setColorThree] = useState<string>("")


    const handleTextInput = () => {
        if (text === "color") {
            setState(text)
            setIsValid(true)
            return
        }
        handleWrongInput()
        setIsValid(false)

    }

    const handleColorOne = () => {
        if (colorOne.split(' ').join('') === "orange") {
            setColor(colorOne)
        }
    }        

    const handleColorTwo = () => {
        if (colorTwo.split(' ').join('') === "pink") {
            setColor(colorTwo)
        }
    }    

    const handleColorThree = () => {
        if (colorThree.split(' ').join('') === "beige") {
            setColor(colorThree)
        }
    }

    const handleWrongInput = () => {
        setIsWrong(true)

        setTimeout(() => {
            setIsWrong(false)
        }, 1500)
    }

    const inputStyle = isValid
        ? CorrectExerciseTextInput
        : isWrong
            ? { ...WrongExerciseTextInput, animation: "shake 0.3s ease-in-out" }
            : ExerciseTextInput;

    return (
        <div style={containerStyle}>
            <div style={leftPanelStyle}>
                <h2>4 - Otra manera de cambiar un estado:</h2>
                <p style={textStyle}>
                    En la sección dos aprendimos que podíamos actualizar un estado mediante la
                    propiedad <ColoredText text={[["onChange", "lightgreen"]]} style={{ display: "inline-flex" }} />, Sin embargo, también podemos usar
                    otra propiedad llamada <ColoredText text={[["onClick", "lightgreen"]]} style={{ display: "inline-flex" }} />,
                    que a diferencia de <ColoredText text={[["onChange", "lightgreen"]]} style={{ display: "inline-flex" }} />,
                    se puede implementar en casi todos los elementos HTML de nuestra página.
                    Aunque comúnmente se aplica en botones o en divs con estilos que simulan botones.
                </p>
                <p style={textStyle}>
                    Para éste ejercicio implementaremos el uso de <ColoredText text={[["onClick", "lightgreen"]]} style={{ display: "inline-flex" }} /> en
                    tres botones que permitirán cambiar el color del div que aparece a la derecha.
                    Cada botón deberá ser configurado correctamente con sus respectivas
                    propiedades para que la interacción funcione como se espera.
                </p>
                <div>
                    <div style={{ marginBottom: 20 , width: "80%"}}>
                        <label style={textStyle}>
                            <b>
                                Primero añade el estado de color al estilo y luego prueba distintos
                                 colores añadiendo funciones flecha para cambiar el estado del color.
                                 </b>
                                 </label>
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
                                    placeholder="Cambia el color"
                                    value={text}
                                    onChange={(e) => setText(e.target.value)}
                                    style={inputStyle}
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
                        <div style={{ width: "100%", display: "flex", gap: "1rem", marginTop: "1rem" }}>
                            <div>
                                <div style={{padding: ".3rem"}}>
                                <span style={{...textStyle}}>Añade "orange" al estado</span>
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
                                        [<input
                                            type="text"
                                            placeholder="Cambia el color"
                                            value={colorOne}
                                            onChange={(e) => setColorOne(e.target.value)}
                                            style={{ ...inputStyle, width: 150 }}
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
                                    <CustomButton onClick={handleColorThree}>Probar</CustomButton>
                                </div>
                            </div>
                            <div>
                                                                <div style={{padding: ".3rem"}}>
                                <span style={{...textStyle}}>Añade "pink" al estado</span>
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
                                        [<input
                                            type="text"
                                            placeholder="Cambia el color"
                                            value={colorTwo}
                                            onChange={(e) => setColorTwo(e.target.value)}
                                            style={{ ...inputStyle, width: 150 }}
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
                                    <CustomButton onClick={handleColorTwo}>Probar</CustomButton>
                                </div>
                            </div>
                            <div>
                                                                <div style={{padding: ".3rem"}}>
                                <span style={{...textStyle}}>Añade "orange" al estado</span>
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
                                        [<input
                                            type="text"
                                            placeholder="Cambia el color"
                                            value={colorThree}
                                            onChange={(e) => setColorThree(e.target.value)}
                                            style={{ ...inputStyle, width: 150 }}
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
                                    <CustomButton onClick={handleColorThree}>Probar</CustomButton>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div style={rightPanelStyle}>
                <div style={{ ...resultBoxStyle, backgroundColor: state !== "" ? state : undefined }}>
                    <h2>Cámbiame el color!</h2>
                </div>
            </div>
        </div>
    );
}

