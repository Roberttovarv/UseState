import { ColoredText } from "../../../components/ColoredText"
type Prop = {
    color?: string
}
export const ButtonTextString = ({color}: Prop) => (
        <ColoredText text={[["buttonText", color ? color : "lightgreen"]]} style={{ display: "inline-flex" }} />
    )
export const FalseString = () => (
    <ColoredText text={[["false", "lightgreen"]]} style={{ display: "inline-flex" }} />
)
export const IsTunerOnString = () => (
    <ColoredText text={[["isTurnedOn", "lightgreen"]]} style={{ display: "inline-flex" }} />
)
export const LightColorString = () => (
    <ColoredText text={[["lightColor", "lightgreen"]]} style={{ display: "inline-flex" }} />
)
export const ToggleLightString = () => (
    <ColoredText text={[["toggleLight", "palegoldenrod"]]} style={{ display: "inline-flex" }} />
)
export const TrueString = () => (
    <ColoredText text={[["true", "lightgreen"]]} style={{ display: "inline-flex" }} />
)