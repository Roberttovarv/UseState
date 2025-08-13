import { InputTextExample1 } from "./InputTextExample1";
import { StateLine1 } from "./StateLine1";
import { CustomButton } from "../../../components/CustomButton";
import { CodeContainer } from "../../../styles/styles";
type Props = {
    text: string,
    setText: (value: string) => void,
    setUserInput: (value: string) => void
}
export const ContainerArea1 = ({text, setText, setUserInput}: Props) => (
  <div style={{ maxWidth: "45rem" }}>
    <div style={CodeContainer}>
      <StateLine1 text={text} setText={setText} />
      <br />
      <InputTextExample1 />
    </div>
    <div style={{ margin: 0, display: "flex", justifyContent: "end" }}>
      <CustomButton onClick={() => setUserInput(text)}>Probar</CustomButton>
    </div>
  </div>
);
