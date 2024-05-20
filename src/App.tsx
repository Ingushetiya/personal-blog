import { Suspense, useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import { AboutPageAsync } from './pages/AboutPage/AboutPageAsync'
import { MainPageAsync } from './pages/MainPage/MainPageAsync';

import './styles/index.scss'
import { useTheme } from './theme/useTheme';
import { classNames } from './helpers/classNames/classNames';


const App = () => {
    const {theme, toggleTheme} = useTheme()
  return (
    <div className={classNames('app', {}, [theme])}>
        <button onClick={toggleTheme}>Toggle</button>
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                    <Route path='/' element={<AboutPageAsync />} />
                    <Route path='/about' element={<MainPageAsync />} />
            </Routes>
         </Suspense>
    </div>
   
  
  )
}
export default App