import { ColoredText } from "../../../../components/ColoredText"
type Prop = {
    color?: string
}
export const ButtonTextString = ({color}: Prop) => (
        <ColoredText text={[["buttonText", color ? color : "lightgreen"]]} style={{ display: "inline-flex" }} />
    )
