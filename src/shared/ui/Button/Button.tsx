import React, { HtmlHTMLAttributes } from 'react'
import { classNames } from 'shared/lib/classNames/classNames';

import cls from './Button.module.scss';

export enum ThemeButton {
    CLEAR = 'clear',
}
export interface ButtonProps extends HtmlHTMLAttributes<HTMLButtonElement> {
    className? : string
    theme?: string
}
export const Button: React.FC<ButtonProps> = (props) => {
    const { className, children,theme, ...otherProps } = props;
  return (
    <button 
    className={classNames(cls.button, {}, [cls[theme], className])} 
    {...otherProps}
    >
        {children}
    </button>
  )
}

