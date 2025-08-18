import { ColoredText } from "../../../components/ColoredText";


export const ColorState = () => (
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
        ["red", "indianred"],
        [`"`, "lightgreen"],
        [")", "mediumorchid"],
      ]}
      style={{display: "inline-flex", padding: ".5rem", marginTop: "1rem", marginBottom: "1rem"}}
    />
  );
