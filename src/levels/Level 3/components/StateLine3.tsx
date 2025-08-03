import { ColoredText } from "../../../components/ColoredText";
import { ExerciseTextInput } from "../../../styles/styles";
import type { FC } from "react";

type StateLine3Props = {
    color: string,
    onChange: (value: string) => void
}

export const StateLine3: FC<StateLine3Props> = ({color, onChange}) => {
    return (
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
                [`"`, "lightgreen"],
                [<input
                    type="text"
                    placeholder="Cambia el color"
                    value={color}
                    onChange={(e) => onChange(e.target.value)}
                    style={ExerciseTextInput}
                />, undefined],
                [`"`, "lightgreen"],
                [")", "mediumorchid"]
            ]}
        />
    )
}