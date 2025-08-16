import { textStyle, leftPanelStyle, containerStyle } from "../../styles/styles";

import { ConsolasBold } from "../../components/ConsolasBold";

export const LandingPage = () => (
  <div style={containerStyle}>
    <div
      style={{ ...leftPanelStyle, display: "flex", justifyContent: "center" }}
    >
      <div style={{ width: "65rem" }}>
        <h2 style={{ textAlign: "center" }}>
          Aprende React de forma práctica e interactiva
        </h2>
        <div>
          <p style={{ ...textStyle, textAlign: "center" }}>
            En esta plataforma descubrirás cómo funcionan los estados en React
            mientras practicas directamente en el navegador.
          </p>
          <h3 style={{ textAlign: "center" }}>
            A través de ejemplos claros y ejercicios guiados, aprenderás a:
          </h3>
          <ul style={textStyle}>
            <li>
              Declarar y actualizar estados con{" "}
              <ConsolasBold>useState</ConsolasBold>
            </li>
            <li>Sincronizar inputs y valores dinámicos.</li>
            <li>Cambiar estilos y propiedades en tiempo real.</li>
            <li>
              Usar eventos como onChange y onClick para crear interfaces
              interactivas.
            </li>
          </ul>

          <p style={{ ...textStyle
                      }}>
            Cada lección combina explicaciones simples con prácticas inmediatas,
            para que no solo entiendas la teoría, sino que también puedas ver
            los cambios en acción.
          </p>
          <p style={{ ...textStyle
                      }}>
            Perfecto para principiantes que quieren dominar React desde cero y
            desarrollar aplicaciones dinámicas paso a paso.
          </p>
        </div>
        <img
          src="src/assets/logo.svg"
          width={400}
          height={400}
          style={{ display: "block", margin: "0 auto", paddingTop: "4rem" }}
        />{" "}
      </div>
    </div>
  </div>
);
