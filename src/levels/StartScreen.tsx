import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { okaidia } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { textStyle, leftPanelStyle, containerStyle } from '../styles/styles';
import { ColoredText } from '../components/ColoredText';


export const StartScreen = () => {
    return (
        <div style={containerStyle}>
            <div style={{ ...leftPanelStyle, width: "100%" }}>
                <div>
                    <h2>¿Qué es un State en React?</h2>
                    <span style={textStyle}>En React, el state es una forma de guardar información que puede cambiar con el tiempo.
                        React utiliza ese estado para actualizar automáticamente la interfaz de usuario cuando dicha información cambia.</span>
                    <h3>¿Por qué nos interesa utilizarlo?</h3>
                    <ul>
                        <li>Permite que la app reaccione a las acciones del usuario, como clics o entradas de texto.</li>
                        <li>Cuando se actualiza el state, React vuelve a renderizar el componente para mostrar el nuevo valor.</li>
                    </ul>

                    <h3>¿Cuál es su sintaxis?</h3>
                    <p style={textStyle}>Para declarar un estado, primero hay que importar el hook <b>useState</b>:</p>
                    <div>
                        <ColoredText text={[
                            ["import ", "mediumorchid"],
                            ["{", "orange"],
                            [" useState ", "indianred"],
                            ["} ", "orange"],
                            ["from", "mediumorchid"],
                            ['"react"', "lightgreen"],
                            [";"]
                        ]}
                            style={{
                                display: "inline-flex",
                                padding: 12
                            }} />
                    </div>
                    <p style={textStyle}>Y luego definimos nuestro estado:</p>
                    <div >
                        <ColoredText
                            text={[
                                ["const [ ", "mediumorchid"],
                                ["color", "palegoldenrod"],
                                [", ", "white"],
                                ["setColor ", "lightblue"],
                                ["] ", "mediumorchid"],
                                ["= ", "white"],
                                ["useState", "lightblue"],
                                ["(", "mediumorchid"],
                                [`""`, "lightgreen"],
                                [")", "mediumorchid"]
                            ]}
                            style={{
                                display: "inline-flex",
                                padding: 12
                            }} />
                    </div>
                    <p style={textStyle}>Aquí:
                        <ul>
                            <li><b>userInput</b> es la variable de estado</li>
                            <li><b>setUserInput</b> es la función que usamos para actualizarla.</li>
                            <li><b>useState("")</b> define el valor inicial del estado. En este caso, un string vacío, pero podríamos poner <b>"Hello World"</b> o cualquier otro valor.</li>
                        </ul>
                    </p>
                    <h3>¿Y ahora qué?</h3>
                    <span style={textStyle}>
                        ¡Ya tenemos configurado nuestro estado!
                        Ahora toca usarlo, porque de momento solo lo declaramos,
                        pero de momento no hacemos nada con él. 😊
                    </span>
                </div>

            </div>
        </div>
    )
}