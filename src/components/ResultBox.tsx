import { resultBoxStyle } from "../styles/styles"
import { textInput } from "../styles/styles"
import type { FC } from "react"

type ResultBoxProps = {
  userInput?: string, //For LevelOne.tsx
  onChange: (value: string) => void,
  header: string,
  footer?: string
}
export const ResultBox: FC<ResultBoxProps> = ({ userInput, onChange, header, footer }) => {
  return (
    <div style={resultBoxStyle}>
      <h2 style={{color: "#ccc"}}>Resultado</h2>
      <p style={{ fontSize: "18px", color: "white" }}>
        {header}
        </p>
      <input
        type="text"
        placeholder="Escribe algo..."
        value={userInput}
        onChange={(e) => onChange(e.target.value)}
        style={textInput}
      />
    {footer && <p>{footer}</p>}
    </div>
  )
}