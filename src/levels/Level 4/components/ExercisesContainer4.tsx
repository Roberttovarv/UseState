import { StyleSetter } from "./StyleSetter";
import { ColorSetter } from "./ColorSetter";

type Props = {
  text: string;
  setText: (value: string) => void;
  textIsValid: boolean | null;
  setTextIsValid: (value: boolean | null) => void;
  setColor: (value: string) => void;
};

export const ExercisesContainer4 = ({
  text,
  setText,
  textIsValid,
  setTextIsValid,
  setColor,
}: Props) => (
  <>
      <StyleSetter
        text={text}
        onChange={setText}
        textIsValid={textIsValid}
        setTextIsValid={setTextIsValid}
      />
      <div
        style={{
          width: "100%",
          display: "flex",
          gap: "1rem",
          marginTop: "3rem",
          maxWidth: "45rem"
        }}
      >
        <ColorSetter
          label="Añade el color 'orange' al estado"
          expected="orange"
          onValid={() => setColor("orange")}
        />
        <ColorSetter
          label="Añade el color '#FFC0CB' al estado"
          expected="#FFC0CB"
          onValid={() => setColor("#FFC0CB")}
        />
        <ColorSetter
          label="Añade el color 'lightgreen' al estado"
          expected="lightgreen"
          onValid={() => setColor("lightgreen")}
        />
      </div>
  </>
);
