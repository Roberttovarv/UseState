import { useEffect, useState } from "react";

import {
    containerStyle,
    leftPanelStyle,
    rightPanelStyle,
    resultBoxStyle,
    textStyle,
    injectShakeAnimation,
} from "../../styles/styles.ts";

import { ColoredText } from "../../components/ColoredText.tsx";
import { StyleSetter } from "./components/StyleSetter.tsx";
import { ColorSetter } from "./components/ColorSetter.tsx";

export const LevelFour = () => {
    useEffect(() => {
        injectShakeAnimation()
    }, [])
    
    const [color, setColor] = useState<string>("#2c2c2c");
    const [text, setText] = useState<string>("")
    
    const [textIsValid, setTextIsValid] = useState<boolean | null>(null);


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
                    <div style={{maxWidth: "80%"}}>
                        <StyleSetter text={text} onChange={setText} textIsValid={textIsValid} setTextIsValid={setTextIsValid} />
                        <div style={{ width: "100%", display: "flex", gap: "1rem", marginTop: "1rem" }}>
                            <ColorSetter label="Añade el color 'orange' al estado" expected="orange" onValid={()=> setColor("orange")}/>
                            <ColorSetter label="Añade el color '#FFC0CB' al estado" expected="#FFC0CB" onValid={()=> setColor("#FFC0CB")}/>
                            <ColorSetter label="Añade el color 'lightgreen' al estado" expected="lightgreen" onValid={()=> setColor("lightgreen")}/>
                        </div>
                        <p style={textStyle}><b>Observación:</b> Cuando añades una función con argumentos a la propiedad de un componente, 
                        siempre debes hacerlo mediante una función flecha.</p>
                    </div>
                </div>

            </div>
            <div style={rightPanelStyle}>
                <div
                    {...(
                        textIsValid
                            ? { style: { ...resultBoxStyle, backgroundColor: color !== "" ? color : undefined } }
                            : { style: { ...resultBoxStyle } }
                    )}>
                    <h2 style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.5)" }}>Cámbiame el color!</h2>
                </div>
            </div>
        </div>
    );
}

