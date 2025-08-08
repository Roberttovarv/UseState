import { ColoredText } from "../../../components/ColoredText";

export const HookLine = () => (
    <ColoredText
      text={[
        ["import ", "mediumorchid"],
        ["{", "orange"],
        [" useState ", "indianred"],
        ["} ", "orange"],
        ["from ", "mediumorchid"],
        ['"react"', "lightgreen"],
        [";"],
      ]}
      style={{
        display: "inline-flex",
        padding: 12,
      }}
    />
  );

