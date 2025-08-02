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
} from "../styles/styles.ts";

export const Level = () => {
    return (
        <div style={containerStyle}>
            <div style={leftPanelStyle}>
                <h2>1 - Título</h2>
                <p style={textStyle}>Contenido</p>
                <p style={textStyle}>Más contenido</p>
                <div>
                    <div style={{ marginBottom: 20 }}>
                        <label style={textStyle}><b>Pruébalo aquí:</b></label>
                    </div>
                    <div style={{ width: "80%" }}>
                        <div style={CodeContainer}>
                            // Tu código aquí
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
};