import { ColoredText } from "../../../components/ColoredText";

export const InputTextExample1 = () => (
  <>
    <ColoredText text={[["<"], ["input ", "indianred"]]} />
    <ColoredText
      text={[
        ["   type", "orange"],
        ["=", "lightblue"],
        ['"text"', "lightgreen"],
      ]}
    />
    <ColoredText
      text={[
        ["   placeholder", "orange"],
        ["=", "lightblue"],
        ['"Escribe algo..."', "lightgreen"],
      ]}
    />
    <ColoredText
      text={[
        ["   value", "orange"],
        ["={", "lightblue"],
        ["userInput", "palegoldenrod"],
        ["}", "lightblue"],
      ]}
    />
    <ColoredText text={[["/>"]]} />
  </>
);
