import { classNames } from "shared/lib/className/className";
import cls from './Navbar.module.scss'
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher";

interface NavbarProps {
    className?: string
}

export const Navbar = ({className}: NavbarProps) => {

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <ThemeSwitcher className={'sdf'}/>
            <div className={cls.links}>
                <AppLink theme={AppLinkTheme.SECONDARY} to={'/'} className={cls.mainLink}>
                    Main page
                </AppLink>
                <AppLink
                    theme={AppLinkTheme.SECONDARY}
                to={'/about'}>
                    About page
                </AppLink>
            </div>            
        </div>
    );
};

