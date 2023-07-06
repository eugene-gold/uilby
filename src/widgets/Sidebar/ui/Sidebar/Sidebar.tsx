import { classNames } from 'shared/lib/className/className';
import { useState } from 'react';
import { LangSwitcher } from 'widgets/LangSwitcher/LangSwitcher';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };
    return (
        <div className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>
            <button
                type="button"
                onClick={onToggle}
            >
                toggle
            </button>
            <div className={cls.swithcers}>
                <ThemeSwitcher className="sdf" />
                <LangSwitcher className={cls.lang} />
            </div>
        </div>
    );
};
