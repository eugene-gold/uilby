import { classNames } from 'shared/lib/className/className';
import './Loader.scss';

interface LoaderProps {
    className?: string
}

export const Loader = ({ className }: LoaderProps) => (
    <div className={classNames('lds-ripple', {}, [className])}>
        <div />
        <div />
    </div>
);
