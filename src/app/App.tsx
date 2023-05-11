import React, { Suspense } from 'react';
import {Routes, Route, Link} from 'react-router-dom'
import { classNames } from 'shared/lib/classNames/classNames';
import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { useTheme } from 'app/providers/ThemeProvider';
import './styles/index.scss'

const App = () => {
    const {theme, toggleTheme} = useTheme();
    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>toggle</button>
            <Link to='/'>Main</Link>
            <Link to='/about'>About</Link>
            <Suspense fallback={<h1>Loading profile...</h1>}>
                <Routes>
                    <Route element={<MainPage/>} path={'/'}/>
                    <Route element={<AboutPage/>} path={'/about'}/>
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;
