import { resultBoxStyle } from "../../../styles/styles";
import { CustomButton } from "../../../components/CustomButton";
import type { CSSProperties } from "react";

type Props = {
  lightColor: string;
  handleLight: () => void;
  buttonText: string;
  textAreaVerified: boolean;
  buttonVerified: boolean;
  isTurnedOn: boolean
};
export const LightPanel = ({
  lightColor,
  handleLight,
  buttonText,
  textAreaVerified,
  buttonVerified,
  isTurnedOn
}: Props) => {
  const LightStyle: CSSProperties = {
    width: "15rem",
    height: "15rem",
    borderRadius: "50%",
    backgroundColor: lightColor,
    margin: "10px auto 0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const Bombilla =
    textAreaVerified && buttonVerified ? (
      <p style={{ color: "lime" }}>Bombilla configurada</p>
    ) : (
      <p style={{ color: "crimson" }}>Bombilla por configurar</p>
    );

  return (
    <div style={resultBoxStyle}>
      <h2>{Bombilla}</h2>
      <div style={LightStyle}>
        {isTurnedOn ? <i className="fa-solid fa-person-walking" style={PersonStyle}/> : null}
      </div>
      <CustomButton onClick={handleLight}>{buttonText}</CustomButton>
    </div>
  );
};

const PersonStyle: CSSProperties = {
    fontSize: "7rem",
    color: "white"
}

