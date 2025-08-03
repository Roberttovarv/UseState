import { CodeBox } from "./CodeBox";
import { StateLine3 } from "./StateLine3";
import { CodeContainer } from "../../../styles/styles";
import type { FC } from "react";

type ExerciseContainer3Props = {
    color: string,
    onChange: (value: string) => void
}
export const ExerciseContainer3: FC<ExerciseContainer3Props> = ({color, onChange}) => {
    return (
                                <div style={CodeContainer}>
                                    <StateLine3 color={color} onChange={onChange} />
                                    <br />
                                    <CodeBox />
                                </div>
    )
}