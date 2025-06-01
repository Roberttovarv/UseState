import React from "react";
import type { FC, Fragment, CSSProperties } from "react";


type Fragment = [React.ReactNode, string?];

type ColoredTextProps = {
    text: Fragment[];
    style?: CSSProperties;
};

export const ColoredText: FC<ColoredTextProps> = ({ text, style }) => {
    return (
        <span
            style={{...componentStyle, ...style}}
        >
            {text.map(([content, color], index) => (
                <span key={index} style={{ color: color ?? "inherit" }}>
                    {content}
                </span>
            ))}
        </span>
    );
}

const componentStyle:  CSSProperties = {

                backgroundColor: "#1e1e1e",
                borderRadius: 7,
                width: "auto",
                padding: "0 .3rem",
                fontFamily: "Consolas, monospace",
                fontSize: "1rem",
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                whiteSpace: "pre-wrap",
            }