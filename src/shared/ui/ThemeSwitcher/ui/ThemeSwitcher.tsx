import { classNames } from "shared/lib/className/className";
import cls from './ThemeSwitcher.module.scss'
import { Theme, useTheme } from "app/providers/ThemeProvider";
import Light from 'shared/assets/icons/themeLight.svg'
import Dark from 'shared/assets/icons/themeDark.svg'
import { Button, ThemeButton } from "shared/ui/Button/Button";

interface ThemeSwitcherProps {
    className?: string
}

export const ThemeSwitcher = ({className}: ThemeSwitcherProps) => {

    const {theme, toggleTheme} = useTheme()
    
    return (
        <Button
            theme={ThemeButton.CLEAR} 
            className={classNames(cls.ThemeSwitcher, {}, [className] )}
            onClick={toggleTheme}
        >
           {theme === Theme.DARK ? <Dark/> : <Light/>}
        </Button>
    );
};