import type { CSSProperties, FC, MouseEventHandler, ReactNode } from "react";

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
export const buttonStyle: CSSProperties = {
    marginTop: "1rem",
    padding: "0.3rem 0.8rem",
    fontSize: "14px",
    backgroundColor: "#2c2c2c",
    border: "1px solid #666",
    borderRadius: "4px",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "background-color 0.3s ease"
}
