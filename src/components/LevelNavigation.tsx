import { Link, useLocation } from "react-router-dom";
import { CustomButton } from "./CustomButton";

const levels = [0, 1, 2, 3, 4, 5, 6];

export const LevelNavigation = () => {
  const location = useLocation();

  const isLanding = location.pathname === "/";

  const currentLevel = !isLanding
    ? parseInt(location.pathname.split("/").pop() || "0")
    : undefined;

  const prevLevel =
    currentLevel !== undefined
      ? currentLevel === 0
        ? "/"
        : `/level/${currentLevel - 1}`
      : undefined;

  const nextLevel = isLanding
    ? `/level/0`
    : currentLevel !== undefined && currentLevel < levels.length - 1
    ? `/level/${currentLevel + 1}`
    : undefined;

  return (
    <div
      style={{
        position: "fixed",
        bottom: "20px",
        left: "50.2%",
        transform: "translateX(-50%)",
        display: "flex",
        gap: "4rem",
        zIndex: 1000,
      }}
    >
      {prevLevel && (
        <Link to={prevLevel}>
          <CustomButton>Anterior</CustomButton>
        </Link>
      )}
      {nextLevel && (
        <Link to={nextLevel}>
          <CustomButton>{isLanding ? "¡Vamos!" : "Siguiente"}</CustomButton>
        </Link>
      )}
    </div>
  );
};
