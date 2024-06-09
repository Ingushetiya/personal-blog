import React from 'react'
import { classNames } from 'shared/lib/classNames/classNames';
import './Loader.scss'
export interface LoaderProps {
    className?: string;
}
export const Loader = ({className}: LoaderProps) => {
  return (
    <div className={classNames('loader', {}, [className])}>
        <div className="lds-ellipsis">
            <div></div><div></div><div></div><div></div></div>
    </div>
  )
}
