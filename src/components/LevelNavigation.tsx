import { Link, useLocation } from "react-router-dom";
import { CustomButton } from "./CustomButton";

const levels = [0, 1, 2, 3, 4, 5];

export const LevelNavigation = () => {
  const location = useLocation();
  const currentLevel = parseInt(location.pathname.split("/").pop() || "0");

  const prevLevel = currentLevel > 0 ? `/level/${currentLevel - 1}` : null;
  const nextLevel =
    currentLevel < levels.length - 1 ? `/level/${currentLevel + 1}` : null;

  return (
    <div
      style={{
        position: "fixed",
        bottom: "20px",
        left: "50.3%",
        transform: "translateX(-50%)",
        display: "flex",
        gap: "1rem",
      }}
    >
      {prevLevel && (
        <Link to={prevLevel}>
          <CustomButton>Anterior</CustomButton>
        </Link>
      )}
      {nextLevel && (
        <Link to={nextLevel}>
          <CustomButton>{!prevLevel ? "Vamos!" : "Siguiente"}</CustomButton>
        </Link>
      )}
    </div>
  );
};
