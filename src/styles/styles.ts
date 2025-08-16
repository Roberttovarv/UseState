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
    padding: ".5rem 5rem",
    overflowY: "auto",
    borderRight: "1px solid #333",
    backgroundColor: "#2c2c2c",
    color: "#f0f0f0",
};

export const rightPanelStyle: CSSProperties = {
    width: "50%",
    padding: ".5rem 5rem",
    overflowY: "auto",
    backgroundColor: "#1e1e1e",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#f0f0f0",
};

export const resultBoxStyle: CSSProperties = {
    backgroundColor: "#2c2c2c",
    borderRadius: "16px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
    padding: "2rem",
    width: "100%",
    maxWidth: "400px",
    textAlign: "center",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "normal",
    wordWrap: "break-word",
};


export const textStyle: CSSProperties = {
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

export const ExerciseTextInput: CSSProperties = {
    width: "11.5rem",
    color: "#ffeb3b",
    height: ".7rem",
    fontSize: "1em",
    padding: "0.2em 0.4em",
    alignItems: "center",
    border: "1px solid #333",
    borderRadius: "5px",
    fontFamily: "monospace",
    resize: "horizontal",
    backgroundColor: "#2c2c2c",
    boxShadow: "inset 0 0 3px rgba(0,0,0,0.4)",
}

export const WrongExerciseTextInput: CSSProperties = {
    width: "11.5rem",
    color: "#ffeb3b",
    height: ".7rem",
    fontSize: "1em",
    padding: "0.2em 0.4em",
    alignItems: "center",
    border: "1px solid #FF4500",
    borderRadius: "5px",
    fontFamily: "monospace",
    resize: "horizontal",
    backgroundColor: "#2c2c2c",
    boxShadow: "inset 0 0 3px rgba(0,0,0,0.4)",
    
}

export const CorrectExerciseTextInput: CSSProperties = {
    width: "11.5rem",
    color: "#ffeb3b",
    height: ".7rem",
    fontSize: "1em",
    padding: "0.2em 0.4em",
    alignItems: "center",
    verticalAlign: "middle",
    border: "1px solid rgb(53, 223, 48)",
    borderRadius: "5px",
    fontFamily: "monospace",
    resize: "horizontal",
    boxShadow: "inset 0 0 3px rgba(0,0,0,0.4)",
}
export const ExerciseTextArea: CSSProperties = {
    width: "18rem",
    height: "14rem",
    color: "#ffeb3b",
    fontSize: "1em",
    padding: "0.25em 0.5em",
    margin: 5,
    alignItems: "center",
    border: "1px solid #333",
    borderRadius: "7px",
    fontFamily: "monospace",
    resize: "none",
    backgroundColor: "#2c2c2c",
    boxShadow: "inset 0 0 3px rgba(0,0,0,0.4)",
};
export const WrongExerciseTextArea: CSSProperties = {
    width: "18rem",
    height: "14rem",
    color: "#ffeb3b",
    fontSize: "1em",
    padding: "0.25em 0.5em",
    margin: 5,
    alignItems: "center",
    border: "1px solid #FF4500",
    borderRadius: "7px",
    fontFamily: "monospace",
    resize: "none",
    backgroundColor: "#2c2c2c",
    boxShadow: "inset 0 0 3px rgba(0,0,0,0.4)",
};
export const CorrectExerciseTextArea: CSSProperties = {
    width: "18rem",
    height: "14rem",
    color: "#ffeb3b",
    fontSize: "1em",
    padding: "0.25em 0.5em",
    margin: 5,
    alignItems: "center",
    border: "1px solid rgb(53, 223, 48)",
    borderRadius: "7px",
    fontFamily: "monospace",
    resize: "none",
    backgroundColor: "#2c2c2c",
    boxShadow: "inset 0 0 3px rgba(0,0,0,0.4)",
};

export const CodeContainer: CSSProperties = {
    backgroundColor: " #1e1e1e",
    borderRadius: 5,
    padding: ".5rem"
}

export const injectShakeAnimation = () => {
    const styleId = "shake-animation-style";
    if (document.getElementById(styleId)) return; // Ya está inyectado
    
    const style = document.createElement("style");
    style.id = styleId;
    style.innerHTML = `
    @keyframes shake {
        0% { transform: translateX(0); }
        25% { transform: translateX(-4px); }
        50% { transform: translateX(4px); }
        75% { transform: translateX(-4px); }
        100% { transform: translateX(0); }
    }
  `;
    document.head.appendChild(style);
};