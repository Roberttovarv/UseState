import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { StartScreen } from "../levels/Level 0/StartScreen";
import { LevelOne } from "../levels/Level 1/LevelOne";
import { LevelTwo } from "../levels/Level 2/LevelTwo";
import { LevelThree } from "../levels/Level 3/LevelThree";
import { LevelFour } from "../levels/Level 4/LevelFour";
import { LevelFive } from "../levels/Level 5/LevelFive";
import { LandingPage } from "../levels/Landing Page/LandinPage";
import { MainLayout } from "../layouts/MainLayout";
import { FinalPage } from "../levels/FinalLevel/FinalLevel";

export const router = createBrowserRouter(createRoutesFromElements(
    <>
    <Route element={<MainLayout />} >

        <Route index element={<LandingPage />} />
        <Route path="/level/0" element={<StartScreen />} />
        <Route path="level/1" element={<LevelOne />}/>
        <Route path="level/2" element={<LevelTwo />}/>
        <Route path="level/3" element={<LevelThree />}/>
        <Route path="level/4" element={<LevelFour />}/>
        <Route path="level/5" element={<LevelFive />}/>
        <Route path="level/6" element={<FinalPage />}/>
        
    </Route>
    </>
))