import React, { useMemo, useState } from 'react'
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './themeContext'

const defaulTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT

const ThemeProvider:React.FC = ({children}) => {


    const [theme, setTheme] = useState<Theme>(defaulTheme)

    const toggleTheme = () => setTheme(theme === Theme.DARK ? Theme.LIGHT : Theme.DARK)

    const defaultProps = useMemo(()=> (
        {
            theme: theme, 
            setTheme: setTheme
        }
    ), [theme])

  return (

    <ThemeContext.Provider value={defaultProps}>
        {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider