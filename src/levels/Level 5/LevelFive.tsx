import { useEffect, useState, type CSSProperties } from "react";

import {
  containerStyle,
  leftPanelStyle,
  rightPanelStyle,
  textStyle,
  injectShakeAnimation,
  ExerciseTextArea,
} from "../../styles/styles.ts";
import { ButtonTextString } from "./components/strings/ButtonTextString.tsx";
import { LightColorString } from "./components/strings/LightColorString.tsx";
import { IsTunerOnString } from "./components/strings/IsTunerOnString.tsx";
import { TrueString } from "./components/strings/TrueString.tsx";
import { FalseString } from "./components/strings/FalseString.tsx";
import { ToggleLightString } from "./components/strings/ToggleLightString.tsx";
import { TextAreaExercise } from "./components/TextAreaExercise.tsx";
import { ButtonSetter } from "./components/ButtonSetter.tsx";
import { LightPanel } from "./components/LightPanel.tsx";
import { ConsolasBold } from "../../components/ConsolasBold.tsx";

export const LevelFive = () => {
  const [isTurnedOn, setIsTurnedOn] = useState<boolean>(false);
  const [lightColor, setLightColor] = useState<string>("black");
  const [buttonText, setButtonText] = useState<string>("Encender");

  const [textAreaVerified, setTextAreaVerified] = useState<boolean>(false);
  const [buttonVerified, setButtonVerified] = useState<boolean>(false);

  const handleLight = () => {
    if (textAreaVerified && buttonVerified) {
      if (!isTurnedOn) {
        setIsTurnedOn(true);
        setLightColor("lime");
        setButtonText("Apagar");
      } else {
        setIsTurnedOn(false);
        setLightColor("black");
        setButtonText("Encender");
      }
    }
  };

  useEffect(() => {
    injectShakeAnimation();
  }, [isTurnedOn]);

  return (
    <div style={containerStyle}>
      <div style={leftPanelStyle}>
        <h2>5 - Manejo de estados dentro de variables:</h2>
        <div style={{ maxWidth: "80%" }}>
          <p style={textStyle}>
            Los estados pueden ser manejados sin tener que escribirlos
            manualmente todo el tiempo, para ello utilizaremos variables que nos
            permitirán cambiar estos estados y realizar múltiples acciones con
            ellos.
          </p>
          <p style={textStyle}>
            {" "}
            En este módulo usaremos la función <ToggleLightString /> para
            "encender" y "apagar" una luz.
          </p>
          <p style={textStyle}>
            Dentro de dicha función tendremos que cambiar los valores de{" "}
            <IsTunerOnString />, <LightColorString /> y <ButtonTextString />{" "}
            <ConsolasBold>—en ese orden específico—</ConsolasBold>.
          </p>
          <p style={textStyle}>
            Donde si <IsTunerOnString /> es <TrueString />, debemos cambiar su
            valor a <FalseString /> y viceversa parea el caso contrario.
          </p>
        </div>
        <div>
          <div>
            <ConsolasBold>Pruébalo aquí:</ConsolasBold>
          </div>
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            gap: "1rem",
            marginTop: "1rem",
          }}
        >
          <TextAreaExercise valid={() => setTextAreaVerified(true)} />
          <div style={instructions}>
            <span>
              Crea un condicional en el que si isTurnedOn es true, cambie el
              estado isTurnedOn a false, el estado color a "black" y buttonText
              a "encender", si no, el valor de estos serían: true, "green" y
              "apagar"
            </span>
          </div>
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            gap: "1rem",
            marginTop: "1rem",
          }}
        >
          <ButtonSetter
            label="Añade la función que hemos creado arriba a la propiedad onClick del botón para que se ejecute al hacer clic."
            onValid={() => setButtonVerified(true)}
          />
        </div>
      </div>
      <div style={rightPanelStyle}>
        <LightPanel
          lightColor={lightColor}
          handleLight={handleLight}
          buttonText={buttonText}
          textAreaVerified={textAreaVerified}
          buttonVerified={buttonVerified}
          isTurnedOn={isTurnedOn}
        />
      </div>
    </div>
  );
};
const instructions: CSSProperties = {
  width: "18rem",
    height: "14rem",
    padding: "0.25em 0.8em",
    margin: 5,
    alignItems: "center",
    borderRadius: "7px",
    fontFamily: "consolas",
    backgroundColor: "#1e1e1e",
    marginTop: "4.5rem"
}