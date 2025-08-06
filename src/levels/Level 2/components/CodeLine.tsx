import { ColoredText } from "../../../components/ColoredText";

export const CodeLine = () => (
  <ColoredText
    text={[
      ["setUserInput", "lightblue"],
      ["(", "orange"],
      ["event.target.value", "indianred"],
      [")", "orange"],
    ]}
    style={{ display: "inline-flex" }}
  />
);
