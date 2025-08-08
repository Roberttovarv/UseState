import { ColoredText } from "../../../components/ColoredText";

export const CodeBox = () => {
    return (
        <>
            <ColoredText text={[["<"], ["div", "indianred"], [">"]]} />
            <ColoredText text={[["   ..."]]} />
            <ColoredText text={[
                ["   <"],
                ["p", "indianred"],
                [" style", "orange"],
                ["={", "lightblue"],
                ["{", "orange"],
                [" color", "indianred"],
                [":"],
                [" color ", "palegoldenrod"],
                ["}", "orange"],
                ["}", "lightblue"],
                [">"]
            ]}
            />
            <ColoredText
                text={[
                    ["      {", "orange"],
                    ["userInput", "palegoldenrod"],
                    ["}", "orange"]
                ]}
            />
            <ColoredText text={[
                ["   <"],
                ["p", "indianred"],
                ["/>"]
            ]} />
            <ColoredText text={[["</"], ["div", "indianred"], [">"]]} />

        </>
    )
}