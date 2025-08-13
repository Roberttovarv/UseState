type Props = {
  children: string;
  color?: string;
  backgroundColor?: boolean;
};

export const ConsolasBold = ({ children, backgroundColor, color }: Props) => (
  <b
    style={{
      fontFamily: "Consolas, monospace",
      color: color || "white",
      ...(backgroundColor
        ? {
            backgroundColor: "#1e1e1e",
            padding: ".15rem .3rem",
            borderRadius: 7
          }
        : {})
    }}
  >
    {children}
  </b>
);