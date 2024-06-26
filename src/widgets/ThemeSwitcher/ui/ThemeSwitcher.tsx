
import { useTheme } from 'app/providers/themeProvider'
import { classNames } from 'shared/lib/classNames/classNames';
import { Theme } from 'app/providers/themeProvider';

import cls from './ThemeSwitcher.module.scss'

import LightIcon from 'shared/assets/icons/theme-light.svg'
import DarkIcon from 'shared/assets/icons/theme-dark.svg'
import { Button, ThemeButton } from 'shared/ui/Button/Button';
export interface ThemeSwitcherProps {
    className?: string;

}
export const ThemeSwitcher = ({className}:ThemeSwitcherProps) =>{
    
    const {theme,toggleTheme} = useTheme()
  return (
    <Button 
    theme= {ThemeButton.CLEAR}
    className={classNames(cls.themeSwitcher, {} , [className])} 
    onClick={toggleTheme}
    >
        {theme ===Theme.DARK ? <DarkIcon/> : <LightIcon/>}

        </Button>

  )
}
