import React from "react";
import type { FC, Fragment, CSSProperties } from "react";
import { containerStyle } from "../styles/styles";


type Fragment = [React.ReactNode, string?];

type ColoredTextProps = {
    text: Fragment[];
    style?: CSSProperties;
};

export const ColoredText: FC<ColoredTextProps> = ({ text, style }) => {
    return (
        <div
            style={{...componentStyle, ...style}}
        >
            {text.map(([content, color], index) => (
                <span key={index} style={{ color: color ?? "inherit" }}>
                    {content}
                </span>
            ))}
        </div>
    );
}

const componentStyle:  CSSProperties = {

                backgroundColor: containerStyle.backgroundColor,
                borderRadius: 10,
                paddingLeft: "20px",
                fontFamily: "Consolas, monospace",
                fontSize: "1rem",
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                whiteSpace: "pre-wrap",
            }