import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { okaidia } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { textStyle } from '../styles/styles';


export const StartScreen = () => {
    return (
        <>
            <div style={{
                paddingLeft: 30,
                display: "flex",
                flexDirection: "column",
                backgroundColor: "#1e1e1e",
                width: "100%",
                boxSizing: "border-box",
                paddingBottom: "150px" // deja espacio para los botones
            }}>                <div
                style={{
                    flex: 1,
                    padding: "1rem",
                    borderRight: "1px, solid, #000000"
                }}
            >
                    <h4>¿Qué es un State en React?</h4>
                    <span style={{ ...textStyle, fontSize: "0.9rem", lineHeight: "1.3" }}>En React, el state es una forma de guardar información que puede cambiar con el tiempo.
                        React utiliza ese estado para actualizar automáticamente la interfaz de usuario cuando dicha información cambia.</span>
                    <h5>¿Por qué nos interesa utilizarlo?</h5>
                    <ul>
                        <li>Permite que la app reaccione a las acciones del usuario, como clics o entradas de texto.</li>
                        <li>Cuando se actualiza el state, React vuelve a renderizar el componente para mostrar el nuevo valor.</li>
                    </ul>

                    <h5>¿Cuál es su sintaxis?</h5>
                    <span style={{ ...textStyle, fontSize: "0.9rem", lineHeight: "1.3" }}>Para declarar un estado, primero hay que importar el hook <b>useState</b>:</span>
                    <div style={{ width: "40%" }}>
                        <SyntaxHighlighter language="javascript" style={okaidia} customStyle={{
                            maxHeight: "100px",
                            overflow: "hidden",
                            fontSize: "0.8rem",
                        }} >
                            {`import { useState } from "react"; `}
                        </SyntaxHighlighter>
                    </div>
                    <span style={{ ...textStyle, fontSize: "0.9rem", lineHeight: "1.3" }}>Y luego definimos nuestro estado:</span>
                    <div style={{ width: "40%" }}>
                        <SyntaxHighlighter language="javascript" style={okaidia} customStyle={{
                            maxHeight: "100px",
                            overflow: "hidden",
                            fontSize: "0.8rem",
                        }}>
                            const [userInput, setUserInput] = useState("")
                        </SyntaxHighlighter>
                    </div>
                    <span style={{ ...textStyle, fontSize: "0.9rem", lineHeight: "1.3" }}>Aquí:
                        <ul>
                            <li><b>userInput</b> es la variable de estado</li>
                            <li><b>setUserInput</b> es la función que usamos para actualizarla.</li>
                            <li><b>useState("")</b> define el valor inicial del estado. En este caso, un string vacío, pero podríamos poner <b>"Hello World"</b> o cualquier otro valor.</li>
                        </ul>
                    </span>
                    <h6>¿Y ahora qué?</h6>
                    <span style={{ ...textStyle, fontSize: "0.9rem", lineHeight: "1.3" }}>
                        ¡Ya tenemos configurado nuestro estado!
                        Ahora toca usarlo, porque de momento solo lo declaramos,
                        pero de momento no hacemos nada con él. 😊
                    </span>
                </div>

            </div>
        </>
    )
}