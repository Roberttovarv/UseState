import type { CSSProperties } from "react";

export const containerStyle: CSSProperties = {
    display: "flex",
    justifyContent: "center",
    width: "100vw",
    height: "100vh",
    fontFamily: "sans-serif",
    backgroundColor: "#1e1e1e",
    overflow: "hidden"
};

export const leftPanelStyle: CSSProperties = {
    width: "50%",
    padding: ".5rem 2rem",
    overflowY: "auto",
    borderRight: "1px solid #333",
    backgroundColor: "#2c2c2c",
    color: "#f0f0f0",
    overflow: "hidden"
};

export const rightPanelStyle: CSSProperties = {
    width: "50%",
    padding: ".5rem 2rem",
    overflowY: "auto",
    backgroundColor: "#1e1e1e", // fondo más oscuro panel derecho
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#f0f0f0",
};

export const resultBoxStyle: CSSProperties = {
    backgroundColor: "#2c2c2c", // fondo de la caja de resultado
    borderRadius: "16px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
    padding: "2rem",
    width: "100%",
    maxWidth: "400px",
    textAlign: "center",
};


export const textStyle: CSSProperties = {
    marginBottom: "1rem",
    color: "#cccccc",
};

export const textArea: CSSProperties = {
    width: "80%",
    height: "120px",
    backgroundColor: "#1e1e1e",
    color: "#00ff88",
    border: "1px solid #333",
    padding: "1rem",
    borderRadius: "8px",
    fontFamily: "monospace",
    resize: "none"
};

export const textInput: CSSProperties = {
    width: "80%",
    padding: "0.5rem",
    marginBottom: "1rem",
    fontSize: "16px",
    borderRadius: "6px",
    border: "1px solid #666",
    backgroundColor: "#2c2c2c",
    color: "#fff",
};

export const buttonStyle: CSSProperties = {
    marginTop: "1rem",
    padding: "0.3rem 0.8rem", // menos espacio interior
    fontSize: "14px",         // texto más pequeño
    backgroundColor: "#2c2c2c",
    border: "1px solid #666",
    borderRadius: "4px",      // opcionalmente más pequeño
    fontWeight: "bold",
    cursor: "pointer",
    transition: "background-color 0.3s ease"
}
export const ExerciseTextInput: CSSProperties = {
    ...textInput,
    width: 120,
    color: "lightgreen",
    height: ".7rem",
    marginTop: 15,
    fontSize: "1em",
    padding: "0.2em 0.4em",
    verticalAlign: "middle",
    border: "1px solid #333",
    borderRadius: "5px",
    fontFamily: "monospace",
    resize: "horizontal"
}