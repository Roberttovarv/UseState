import { textStyle, leftPanelStyle, containerStyle } from "../../styles/styles";
import { StateLine } from "./components/StateLine";
import { HookLine } from "./components/HookLine";
import { ConsolasBold } from "../../components/ConsolasBold";

export const StartScreen = () => (
  <div style={containerStyle}>
    <div
      style={{ ...leftPanelStyle, display: "flex", justifyContent: "center" }}
    >
      <div style={{ width: "65rem" }}>
        <h2>¿Qué es un State en React?</h2>
        <span style={textStyle}>
          En React, el state es una forma de guardar información que puede
          cambiar con el tiempo. React utiliza ese estado para actualizar la
          interfaz de usuario automáticamente cuando la información cambia.
        </span>
        <h3>¿Por qué nos interesa utilizarlo?</h3>
        <ul>
          <li>
            Permite que la app reaccione a las acciones del usuario, como clics
            o entradas de texto.
          </li>
          <li>
            Cuando se actualiza el estado, React vuelve a renderizar el
            componente para mostrar el nuevo valor.
          </li>
        </ul>

        <h3>¿Cuál es su sintaxis?</h3>
        <p style={textStyle}>
          Para declarar un estado, primero hay que importar el hook{" "}
          <ConsolasBold>useState</ConsolasBold>
        </p>
        <div>
          <HookLine />
        </div>
        <p style={textStyle}>Y luego definimos nuestro estado:</p>
        <div>
          <StateLine />
        </div>
        <p style={textStyle}>
          Aquí:
          <ul>
            <li>
              <ConsolasBold backgroundColor={true} >userInput:</ConsolasBold> la variable de estado
            </li>
            <li>
              <ConsolasBold backgroundColor={true} >setUserInput:</ConsolasBold> la función que usamos
              para actualizarla.
            </li>
            <li>
              <ConsolasBold backgroundColor={true} >useState("")</ConsolasBold> define el valor inicial
              del estado. En este caso, un string vacío, pero podríamos poner{" "}
              <b style={{ fontFamily: "consolas" }}>"Hello World"</b> o
              cualquier otro valor.
            </li>
          </ul>
        </p>
        <h3>¿Y ahora qué?</h3>
        <span style={textStyle}>
          ¡Ya tenemos configurado nuestro estado! Ahora toca usarlo, porque por
          ahora solo lo hemos declarado, pero todavía no hacemos nada con él. 😊
        </span>
      </div>
    </div>
  </div>
);
