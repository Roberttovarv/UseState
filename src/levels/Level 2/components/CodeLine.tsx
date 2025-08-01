import { ColoredText } from "../../../components/ColoredText"

export const CodeLine = () => {
    return (
        <ColoredText text={[
            ["setUserInput", "lightblue"],
            ["(", "orange"],
            ["event.target.value", "indianred"],
            [")", "orange"]
        ]} style={{ display: "inline-flex" }}
        />)
}