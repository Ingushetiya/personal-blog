
import { classNames } from 'shared/lib/classNames/classNames'

import  cls from './NotFound.module.scss'
import { useTranslation } from 'react-i18next'

export interface NotFoundPageProps {
    className?: string 
}
export const NotFoundPage = ({className}: NotFoundPageProps) => {
const {t} = useTranslation()
  return (
    <div className={classNames(cls.notFound, {} , [className])}>
      <h1>
      {
        t('Страница не найдена')
      }
      </h1>
      

    </div>
  )
}
