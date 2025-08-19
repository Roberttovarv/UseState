import { textStyle, leftPanelStyle, containerStyle } from "../../styles/styles";
import logo from "/src/assets/logo.svg";

import { ConsolasBold } from "../../components/ConsolasBold";
import { ColorState } from "./components/ColorState";

export const FinalPage = () => (
  <div style={containerStyle}>
    <div
      style={{ ...leftPanelStyle, display: "flex", justifyContent: "center" }}
    >
      <div style={{ width: "65rem" }}>
        <h2 style={{ textAlign: "center" }}>¡Felicidades!</h2>
        <div>
          <p style={{ ...textStyle, textAlign: "center" }}>
            En este punto has logrado comprender el uso de los estados de React,
            manejando variables de distintos tipos y usándolas dentro de
            funciones.
          </p>
          <h3 style={{ ...textStyle, textAlign: "center" }}>
            Te tengo un reto:{" "}
          </h3>

          <p style={textStyle}></p>
          <p style={textStyle}>
            Accede a este repositorio de mi propiedad y haz un fork{" "}
            <a
              href="https://github.com/Roberttovarv/TrafficLightExercise"
              target="_blank"
            >
              <ConsolasBold backgroundColor={true}>
                https://github.com/Roberttovarv/TrafficLightExercise
              </ConsolasBold>
            </a>
          </p>
          <h3>Simulación de un Semáforo</h3>
          <p style={textStyle}>
            Tu tarea es crear un componente de React que simule un semáforo como{" "}
            <a href="https://storage.googleapis.com/breathecode-asset-images/d320428e0f2e3a2a3343a981b1d2b45040ad5547221ba900ae3fbf9960289b21.gif">
              {" "}
              <ConsolasBold color="lightblue">este</ConsolasBold>
            </a>{" "}
            con tres luces: <ConsolasBold>roja, amarilla y verde.</ConsolasBold>{" "}
          </p>
          <h4>Requisitos principales</h4>
          <ul style={textStyle}>
            <li>El semáforo debe mostrar las tres luces.</li>
            <li>
              Cuando el usuario haga clic en una luz, esa luz debe encenderse
              (brillar) y las otras apagarse.
            </li>
            <li>
              El estado actual del semáforo debe guardarse en una variable de
              estado:
            </li>
            <ColorState />
            <li>
              Usa <ConsolasBold backgroundColor={true}>setColor</ConsolasBold>{" "}
              para cambiar el color seleccionado.
            </li>
          </ul>

          <span style={textStyle}>
            Observación: Solo debes trabajar en el componente{" "}
            <ConsolasBold>Home.jsx</ConsolasBold> de la ruta{" "}
            <ConsolasBold backgroundColor={true}>
              TrafficLightExercise/src/App.jsx
            </ConsolasBold>
          </span>
          <h4>Bonus</h4>
          <ul style={textStyle}>
            <li>
              Crea un botón que, al hacer clic en él, alterna el color
              seleccionado del semáforo entre rojo, verde y amarillo.
            </li>
            <li>
              Tener un botón que al hacer clic en él, añada un color extra
              "púrpura" al semáforo.
            </li>
          </ul>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            margin: "0 auto",
            paddingTop: "1rem",
            alignItems: "center",
          }}
        >
          <a
            href="https://www.linkedin.com/in/Roberttovarv"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={logo} width={200} title="Tech Monkey" />
          </a>
          <span style={{ textAlign: "center" }}>
            <ConsolasBold backgroundColor={true}>By Robert Tovar</ConsolasBold>
          </span>
        </div>
      </div>
    </div>
  </div>
);
