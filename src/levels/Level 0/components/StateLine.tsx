import { ColoredText } from "../../../components/ColoredText";

export const StateLine = () => (
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
      [`""`, "lightgreen"],
      [")", "mediumorchid"],
    ]}
    style={{
      display: "inline-flex",
      padding: 12,
    }}
  />
);
