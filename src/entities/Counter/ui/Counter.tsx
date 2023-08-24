import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { counterActions } from '../model/slice/counterSlice';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';

export const Counter = () => {
    const dispatch = useDispatch();
    const { t } = useTranslation();
    const counterValue = useSelector(getCounterValue);
    const incr = () => {
        dispatch(counterActions.increment());
    };

    const decr = () => {
        dispatch(counterActions.decrement());
    };

    return (
        <div>
            <h1 data-testid="value-title">
                {counterValue}
            </h1>
            <Button onClick={incr} data-testid="increment-btn">
                {t('increm')}
            </Button>
            <Button onClick={decr} data-testid="decrement-btn">
                {t('decrem')}
            </Button>
        </div>
    );
};
