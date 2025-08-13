import { Outlet } from "react-router-dom";
import { LevelNavigation } from "../components/LevelNavigation";

export const MainLayout = () => (
    <>
    <Outlet />
    <LevelNavigation />
    </>
)