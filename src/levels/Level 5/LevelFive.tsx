import { useEffect, useState } from "react";

import {
    containerStyle,
    leftPanelStyle,
    rightPanelStyle,
    resultBoxStyle,
    textStyle,
    textInput,
    injectShakeAnimation
} from "../../styles/styles.ts";
import { ButtonTextString } from "./components/ButtonTextString.tsx";
import { LightColorString } from "./components/LightColorString.tsx";
import { IsTunerOnString } from "./components/IsTunerOnString.tsx";
import { TrueString } from "./components/TrueString.tsx";
import { FalseString } from "./components/FalseString.tsx";
import { ToggleLightText } from "./components/ToggleLightText.tsx";
import { TextAreaExercise } from "./components/TextAreaExercise.tsx";
import { CustomButton } from "../../components/CustomButton.tsx";

export const LevelFive = () => {
    const [isTurnedOn, setIsTurnedOn] = useState<boolean>(false)
    const [lightColor, setLightColor] = useState<string>("black")
    const [buttonText, setButtonText] = useState<string>("Encender")


    const handleLight = () => {
        if (isTurnedOn) {
            setLightColor("green")
            setButtonText("Apagar")
            setIsTurnedOn(false)
            return
        }
        setLightColor("black")
        setButtonText("Encender")
        setIsTurnedOn(true)
    }
    useEffect(() => { injectShakeAnimation() }, [isTurnedOn])

    return (
        <div style={containerStyle}>
            <div style={leftPanelStyle}>
                <h2>5 - Manejo de estados dentro de variables:</h2>
                <div style={{ maxWidth: "80%" }}>

                    <p style={textStyle}>
                        Los estados pueden ser manejardos sin tener que hardcodearlos todo el tiempo,
                        para ello utilizaremos variables que nos permitirán cambiar estos estados y realizar múltiples acciones con ellos.
                    </p>
                    <p style={textStyle}>
                        En éste módulo usaremos la función <ToggleLightText /> para cambiar los "encender" y "apagar" una luz.
                    </p>
                    <p style={textStyle}>
                        Dentro de dicha función tendremos que cambiar los valores de <ButtonTextString />, <LightColorString /> y <IsTunerOnString />.
                        Donde si <IsTunerOnString /> es <TrueString />, debemos cambiar su valor a <FalseString /> y viceversa.
                    </p>
                </div>
                <div>
                    <div style={{ marginBottom: 20 }}>
                        <label style={textStyle}><b>Pruébalo aquí:</b></label>
                    </div>
                </div>
                <div style={{ width: "100%", display: "flex", gap: "1rem", marginTop: "1rem" }}>
                    <TextAreaExercise />
                </div>
                <div style={{ width: "100%", display: "flex", gap: "1rem", marginTop: "1rem" }}>

                    <h1 style={{ color: "gainsboro" }}>Hola</h1>
                </div>
            </div>

            <div style={rightPanelStyle}>
                <div style={resultBoxStyle}>
                    <h2>Bombilla</h2>
                    <div style={{
                        width: "15rem",
                        height: "15rem",
                        borderRadius: "50%",
                        backgroundColor: lightColor,
                        margin: "10px auto 0"
                    }} />
                    <CustomButton onClick={handleLight}>{buttonText}</CustomButton>
                </div>
            </div>
        </div>
    );

}

