import React from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'

import cls from './PageError.module.scss'
import { Button } from 'shared/ui/Button/Button'

export interface PageErrorProps {
    className?: string
}
export const PageError = ({className}: PageErrorProps) => {
    const {t} = useTranslation()

    const reloadPage = () =>{
        location.reload()
    }

  return (
    <div className={classNames(cls.pageError, {}, [className])}>
       <p> {t('Произошла непредвиденная ошибка')}</p>
       <Button onClick={reloadPage} >
        {t('Обновить страницу')}
       </Button>
    </div>
  )
}
