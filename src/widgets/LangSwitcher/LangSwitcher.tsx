import React from 'react'
import i18n from 'shared/config/i18n/i18n';

import { classNames } from 'shared/lib/classNames/classNames';

import cls from './LangSwitcher.module.scss'
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';


export interface LangSwitcherProps {
    className?: string;
}
export const LangSwitcher = ({className}: LangSwitcherProps) => {
const {t} = useTranslation()
    const toggleLanguage = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    }
  return (
        <Button 
            className={classNames(cls.langSwitcher, {}, [className])} 
            theme={ThemeButton.CLEAR} 
            onClick={toggleLanguage}>

              {t('язык')}
              
        </Button>
  )
}
