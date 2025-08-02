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
} from "../../styles/styles.ts";

import { CustomButton } from "../../components/CustomButton.tsx";
import { ColoredText } from "../../components/ColoredText.tsx";

export const LevelFour = () => {
    useEffect(() => {
        injectShakeAnimation()
    }, [])

    const [validProperty, setValidProperty] = useState(false)

    const [color, setColor] = useState<string>("#2c2c2c");
    const [text, setText] = useState<string>("")
    const [textIsValid, setTextIsValid] = useState<boolean>(false);

    const [colorOneIsValid, setColorOneIsValid] = useState<boolean>(false);
    const [colorTwoIsValid, setColorTwoIsValid] = useState<boolean>(false);
    const [colorThreeIsValid, setColorThreeIsValid] = useState<boolean>(false);

    const [isWrong, setIsWrong] = useState<boolean>(false);
    const [colorOneIsWrong, setColorOneIsWrong] = useState<boolean>(false);
    const [colorTwoIsWrong, setColorTwoIsWrong] = useState<boolean>(false);
    const [colorThreeIsWrong, setColorThreeIsWrong] = useState<boolean>(false);

    const [colorOne, setColorOne] = useState<string>("")
    const [colorTwo, setColorTwo] = useState<string>("")
    const [colorThree, setColorThree] = useState<string>("")


    const handleTextInput = () => {
        if (text === "color") {
            setTextIsValid(true)
            setValidProperty(true)
            return
        } else {
            setIsWrong(true)
            setTextIsValid(false)
            setValidProperty(false)

            setTimeout(() => setIsWrong(false), 1500)
        }
    }
    const handleColorOne = () => {
        if (colorOne.split(' ').join('') === "setColor('orange')" ||
            colorOne.split(' ').join('') === "setColor(\"orange\")") {
            setColor('orange')
            setColorOneIsValid(true)
            return
        } else {
            setColorOneIsWrong(true)
            setColorOneIsValid(false)
            setTimeout(() => setColorOneIsWrong(false), 1500)
        }
    }

    const handleColorTwo = () => {
        if (colorTwo.split(' ').join('') === "setColor('pink')" ||
            colorTwo.split(' ').join('') === "setColor(\"pink\")") {
            setColor('pink')
            setColorTwoIsValid(true)
            return
        } else {
            setColorTwoIsWrong(true)
            setColorTwoIsValid(false)
            setTimeout(() => setColorTwoIsWrong(false), 1500)

        }
    }
    const handleColorThree = () => {
        if (colorThree.split(' ').join('') === "setColor('beige')" ||
            colorThree.split(' ').join('') === "setColor(\"beige\")") {
            setColor('beige')
            setColorThreeIsValid(true)
            return
        } else {
            setColorThreeIsWrong(true)
            setColorThreeIsValid(false)
            setTimeout(() => setColorThreeIsWrong(false), 1500)

        }
    }

    const TextInputStyle = textIsValid
        ? CorrectExerciseTextInput
        : isWrong
            ? { ...WrongExerciseTextInput, animation: "shake 0.3s ease-in-out" }
            : ExerciseTextInput;

    const ColorOneInputStyle = colorOneIsValid
        ? CorrectExerciseTextInput
        : colorOneIsWrong
            ? { ...WrongExerciseTextInput, animation: "shake 0.3s ease-in-out" }
            : ExerciseTextInput;

    const ColorTwoInputStyle = colorTwoIsValid
        ? CorrectExerciseTextInput
        : colorTwoIsWrong
            ? { ...WrongExerciseTextInput, animation: "shake 0.3s ease-in-out" }
            : ExerciseTextInput;

    const ColorThreeInputStyle = colorThreeIsValid
        ? CorrectExerciseTextInput
        : colorThreeIsWrong
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
                    <div style={{ marginBottom: 20, width: "80%" }}>
                        <label style={textStyle}>
                            <b>
                                Primero añade el estado de color al estilo y luego prueba distintos
                                colores añadiendo funciones flecha para cambiar el estado del color.
                            </b>
                        </label>
                    </div>
                    <div>
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
                                    onChange={(e) => setText(e.target.value)}
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
                        <div style={{ width: "100%", display: "flex", gap: "1rem", marginTop: "1rem" }}>
                            <div>
                                <div style={{ padding: ".3rem" }}>
                                    <span style={{ ...textStyle }}>Añade "orange" al estado</span>
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
                                            value={colorOne}
                                            onChange={(e) => setColorOne(e.target.value)}
                                            style={{ ...ColorOneInputStyle, width: 150 }}
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
                            <div>
                                <div style={{ padding: ".3rem" }}>
                                    <span style={{ ...textStyle }}>Añade "pink" al estado</span>
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
                                            value={colorTwo}
                                            onChange={(e) => setColorTwo(e.target.value)}
                                            style={{ ...ColorTwoInputStyle, width: 150 }}
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
                                <div style={{ padding: ".3rem" }}>
                                    <span style={{ ...textStyle }}>Añade "beige" al estado</span>
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
                                            value={colorThree}
                                            onChange={(e) => setColorThree(e.target.value)}
                                            style={{ ...ColorThreeInputStyle, width: 150 }}
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
                        <p style={textStyle}><b>Observación:</b> Cuando añades una función con argumentos a la propiedad de un componente, 
                        siempre debes hacerlo mediante una función flecha.</p>
                    </div>
                </div>

            </div>
            <div style={rightPanelStyle}>
                <div
                    {...(
                        validProperty
                            ? { style: { ...resultBoxStyle, backgroundColor: color !== "" ? color : undefined } }
                            : { style: { ...resultBoxStyle } }
                    )}>
                    <h2>Cámbiame el color!</h2>
                </div>
            </div>
        </div>
    );
}

