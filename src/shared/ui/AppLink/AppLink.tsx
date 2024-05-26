import { FC } from 'react'
import { Link } from 'react-router-dom'
import { LinkProps } from 'react-router-dom'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './AppLink.module.scss'

export  enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary'
}
export interface AppLinkProps extends LinkProps {
    className?: string
    theme?: AppLinkTheme
}
export const AppLink: FC<AppLinkProps>= (props) =>{
  const { className, children,theme = AppLinkTheme.PRIMARY, to, ...otherProps } = props
  return (
    <Link to={to} className={classNames('', {}, [className, cls[theme]])} {...otherProps}>
        {children}
    </Link>
  )
}
