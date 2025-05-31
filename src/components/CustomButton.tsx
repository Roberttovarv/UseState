import type { CSSProperties, FC, MouseEventHandler, ReactNode } from "react";
import { buttonStyle } from "../styles/styles";

type CustomButtonProps = {
    onClick?: MouseEventHandler<HTMLButtonElement>;
    children: ReactNode;
    style?: CSSProperties;
    type?: "button"
}

export const CustomButton: FC<CustomButtonProps> = ({
    onClick,
    children,
    style,
    type = "button"
}) => {
    return (
        <button
            type={type}
            onClick={onClick}
            style={{ ...buttonStyle, ...style }}
        >
            {children}
        </button>
    )
}
