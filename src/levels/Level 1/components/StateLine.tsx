import { ExerciseTextInput } from "../../../styles/styles"
import { ColoredText } from "../../../components/ColoredText"
import type { FC } from "react"

type StateTypeProps = {
    text: string,
    setText: (value: string) => void
}

export const StateLine: FC<StateTypeProps> = ({text, setText}) => {
    return (
                      <ColoredText
                        text={[
                          ["const [ ", "mediumorchid"],
                          ["userInput", "palegoldenrod"],
                          [", ", "white"],
                          ["setUserInput ", "lightblue"],
                          ["] ", "mediumorchid"],
                          ["= ", "white"],
                          ["useState", "lightblue"],
                          ["(", "mediumorchid"],
                          [`"`, "lightgreen"],
                          [<input
                            type="text"
                            placeholder="Escribe algo..."
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                            style={ExerciseTextInput}
                          />, undefined],
                          [`"`, "lightgreen"],
                          [")", "mediumorchid"]
                        ]}
                      />
    )
}