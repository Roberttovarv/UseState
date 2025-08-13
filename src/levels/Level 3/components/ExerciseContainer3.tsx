import { CodeBox } from "./CodeBox";
import { StateLine3 } from "./StateLine3";
import { CodeContainer } from "../../../styles/styles";
import { CustomButton } from "../../../components/CustomButton";
import { textStyle } from "../../../styles/styles";

type Props = {
  color: string;
  onChange: (value: string) => void;
  setNewColor: (value: string) => void;
};
export const ExerciseContainer3 = ({ color, onChange, setNewColor }: Props) => {
  return (
    <>
      <div style={{ maxWidth: "45rem" }}>
        <div style={CodeContainer}>
          <StateLine3 color={color} onChange={onChange} />
          <br />
          <CodeBox />
        </div>
        <div style={{ margin: 0, display: "flex", justifyContent: "end" }}>
          <CustomButton onClick={() => setNewColor(color)}>Probar</CustomButton>
        </div>
        <p style={textStyle}>
          <b>Pista</b>:
        </p>
        <p style={{ ...textStyle }}>
          Puede añadir los siguientes colores para probarlos: green, red,
          lightblue, orange, yellow.
        </p>
        <p style={textStyle}>
          <b>
            Recuerda escribir algo en el input de al lado para poder visualizar
            los cambios.
          </b>
        </p>
      </div>
    </>
  );
};
