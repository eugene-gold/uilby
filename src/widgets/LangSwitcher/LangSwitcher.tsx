import { classNames } from "shared/lib/className/className";
import cls from './LangSwitcher.module.scss'
import { useTranslation } from "react-i18next";
import { Button, ThemeButton } from "../../shared/ui/Button/Button";

interface LangSwicherProps {
    className?: string
}

export const LangSwitcher = ({className}: LangSwicherProps) => {

    const { t, i18n } = useTranslation()

    const toggleLang = async () => {
        
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
    }


 return (
    
        <Button className={classNames(cls.LangSwicher, {}, [className])}
            theme={ThemeButton.CLEAR} 
            onClick={toggleLang}
        >
            {t('Язык')}
        </Button>           
    )
};

