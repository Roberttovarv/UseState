import { useEffect, useState } from "react";

import {
  containerStyle,
  leftPanelStyle,
  rightPanelStyle,
  textStyle,
  injectShakeAnimation,
} from "../../styles/styles.ts";
import { ButtonTextString } from "./components/strings/ButtonTextString.tsx";
import { LightColorString } from "./components/strings/LightColorString.tsx";
import { IsTunerOnString } from "./components/strings/IsTunerOnString.tsx";
import { TrueString } from "./components/strings/TrueString.tsx";
import { FalseString } from "./components/strings/FalseString.tsx";
import { ToggleLightText } from "./components/ToggleLightText.tsx";
import { TextAreaExercise } from "./components/TextAreaExercise.tsx";
import { ButtonSetter } from "./components/ButtonSetter.tsx";
import { LightPanel } from "./components/LightPanel.tsx";

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
            Los estados pueden ser manejardos sin tener que hardcodearlos todo
            el tiempo, para ello utilizaremos variables que nos permitirán
            cambiar estos estados y realizar múltiples acciones con ellos.
          </p>
          <p style={textStyle}>
            {" "}
            En éste módulo usaremos la función <ToggleLightText /> para cambiar
            los "encender" y "apagar" una luz.
          </p>
          <p style={textStyle}>
            Dentro de dicha función tendremos que cambiar los valores de{" "}
            <IsTunerOnString />, <LightColorString /> y <ButtonTextString />{" "}
            <b>—en ese orden—</b>.
          </p>
          <p style={textStyle}>
            Donde si <IsTunerOnString /> es <TrueString />, debemos cambiar su
            valor a <FalseString /> y viceversa.
          </p>
        </div>
        <div>
          <div style={{ marginBottom: 20 }}>
            <label style={textStyle}>
              <b>Pruébalo aquí:</b>
            </label>
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
            label="Añade la función que hemos creado arriba al hacer click en el botón"
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
