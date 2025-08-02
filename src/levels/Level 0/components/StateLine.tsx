import { ColoredText } from "../../../components/ColoredText"

export const StateLine = () => {
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
                [`""`, "lightgreen"],
                [")", "mediumorchid"]
            ]}
            style={{
                display: "inline-flex",
                padding: 12
            }} />
    )
}