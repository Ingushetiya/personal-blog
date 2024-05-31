import { useTheme } from './providers/themeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from './providers/route';
import { Navbar } from 'widgets/Navbar';

import './styles/index.scss'
import { Sidebar } from 'widgets/Sidebar';
import React, { Suspense } from 'react';
import { useTranslation } from 'react-i18next';


const App = () => {
    const {theme} = useTheme()
  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback="">
      <Navbar />
        <div className='content-page'>
            <Sidebar/>
            <AppRouter />
        </div>
    </Suspense>
     
    </div>
   
  
  )
}
export default App