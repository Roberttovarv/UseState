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
                    <p>En React, el state es una forma de guardar información que puede cambiar con el tiempo y que 
                    React usará para actualizar la interfaz de usuario automáticamente cuando esa información cambie.</p>
                    <h4>¿Por qué nos interesa utilizarlo?</h4>
                    <ul>
                        <li>Permite que la app reaccione a las acciones del usuario, como clics o entradas de texto.</li>
                        <li>Cuando se actualiza el state, React vuelve a renderizar el componente para mostrar el nuevo valor.</li>
                    </ul>

                    <h4>¿Cuál es su sintaxis?</h4>
                    <p>Para declarar un estado hay que importar el useState</p>
                    <div style={{width: "20%"}}>
                    <SyntaxHighlighter language="javascript" style={okaidia}>
                           {`import { useState } from "react"; `}
                    </SyntaxHighlighter>
                    </div>
                    <p>Y luego definimos el estado que queremos declarar</p>
                    <div style={{width: "20%"}}>
                    <SyntaxHighlighter language="javascript" style={okaidia}>
                            const [text, setText] = useState("")
                    </SyntaxHighlighter>
                    </div>
                    <h4>¿Y ahora qué?</h4>
                    <p>
                        Ya tenemos definido nuestro estado, es hora de de definirlo, ya que por el momento no estamos haciendo nada con él. 😊 
                    </p>
                </div>

            </div>
        </>
    )
}