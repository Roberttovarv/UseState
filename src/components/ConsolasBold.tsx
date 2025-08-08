type Prop = {
    children: string
}

export const ConsolasBold = ({children}: Prop) => ( <b style={{fontFamily: "consolas", color: "white"}}>{children}</b>)