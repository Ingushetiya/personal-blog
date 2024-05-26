import { useTheme } from 'app/providers/themeProvider'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
export interface NavbarProps {
    className?: string
}
export function Navbar({className}: NavbarProps) {
  return (
    <div className={classNames(cls.navbar, {}, [className])}>
        <ThemeSwitcher />

    </div>
  )
}
