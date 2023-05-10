import React, { Suspense } from 'react';
import {Routes, Route, Link} from 'react-router-dom'
import './styles/index.scss'
import { MainAsync } from "./pages/Main/Main.async";
import {AboutAsync} from "./pages/About/About.async";
import {useTheme} from "./theme/useTheme";

const App = () => {
    const {theme, toggleTheme} = useTheme();
    return (
        <div className={`app ${theme}`}>
            <button onClick={toggleTheme}>toggle</button>
            <Link to='/'>Main</Link>
            <Link to='/about'>About</Link>
            <Suspense fallback={<h1>Loading profile...</h1>}>
                <Routes>
                    <Route element={<MainAsync/>} path={'/'}/>
                    <Route element={<AboutAsync/>} path={'/about'}/>
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;
