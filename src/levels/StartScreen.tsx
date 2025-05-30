import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { okaidia } from 'react-syntax-highlighter/dist/esm/styles/prism';

export const StartScreen = () => {
    return (
        <>
            <div style={{ display: "flex", height: "100vh" }}>
                <div
                    style={{
                        flex: 1,
                        padding: "1rem",
                        borderRight: "1px, solid, #000000"
                    }}
                >
                    <h3>¿Qué es un State en React?</h3>
                    <p>En React, el state es una forma de guardar información que puede cambiar con el tiempo.
                        React utiliza ese estado para actualizar automáticamente la interfaz de usuario cuando dicha información cambia.</p>
                    <h4>¿Por qué nos interesa utilizarlo?</h4>
                    <ul>
                        <li>Permite que la app reaccione a las acciones del usuario, como clics o entradas de texto.</li>
                        <li>Cuando se actualiza el state, React vuelve a renderizar el componente para mostrar el nuevo valor.</li>
                    </ul>

                    <h4>¿Cuál es su sintaxis?</h4>
                    <p>Para declarar un estado, primero hay que importar el hook <b>useState</b>:</p>
                    <div style={{ width: "20%" }}>
                        <SyntaxHighlighter language="javascript" style={okaidia}>
                            {`import { useState } from "react"; `}
                        </SyntaxHighlighter>
                    </div>
                    <p>Y luego definimos nuestro estado:</p>
                    <div style={{ width: "20%" }}>
                        <SyntaxHighlighter language="javascript" style={okaidia}>
                            const [text, setText] = useState("")
                        </SyntaxHighlighter>
                    </div>
                    <p>Aquí:
                        <ul>
                            <li><b>text</b> es la variable de estado</li>
                            <li><b>setText</b> es la función que usamos para actualizarla.</li>
                            <li><b>useState("")</b> define el valor inicial del estado. En este caso, un string vacío, pero podríamos poner <b>"Hello World"</b> o cualquier otro valor.</li>
                        </ul>
                    </p>
                    <h4>¿Y ahora qué?</h4>
                    <p>
                        ¡Ya tenemos configurado nuestro estado!
                        Ahora toca usarlo, porque de momento solo lo declaramos,
                        pero de momento no hacemos nada con él. 😊
                    </p>
                </div>

            </div>
        </>
    )
}