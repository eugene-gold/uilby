import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { memo, useCallback, useEffect } from 'react';
import { TextTheme, Text } from 'shared/ui/Text/Text';
import { ReduxStorewithManger } from 'app/providers/StoreProvider';
import { useAppDispatch } from 'shared/lib/hooks/useappDispatch/useAppDispatch';
import {
    getLoginPassword,
} from '../../model/selectors/getLoginPassword/getLoginPassword';
import {
    getLoginIsLoading,
} from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import {
    getLoginUsername,
} from '../../model/selectors/getLoginUsername/getLoginUserName';
import { loginByUserName } from '../../model/services/loginByUserName/loginByUserName';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import cls from './LoginForm.module.scss';

export interface LoginFormProps {
    className?: string;
    onSuccess: ()=> void
}

const LoginForm = memo(({ className, onSuccess }: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const store = useStore() as ReduxStorewithManger;
    const username = useSelector(getLoginUsername);
    const password = useSelector(getLoginPassword);
    const isLoading = useSelector(getLoginIsLoading);
    const error = useSelector(getLoginError);

    useEffect(() => {
        store.reducerManager.add('loginForm', loginReducer);

        return () => {
            store.reducerManager.remove('loginForm');
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUserName(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const onLoginClick = useCallback(async () => {
        const result = await dispatch(loginByUserName({ password, username }));
        if (result.meta.requestStatus === 'fulfilled') {
            onSuccess();
        }
    }, [dispatch, onSuccess, password, username]);

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Text text={t('Authorization')} theme={TextTheme.PRIMARY} />
            {error && <Text text={t('Wrong username or password')} theme={TextTheme.ERROR} />}
            <Input
                autoFocus
                type="text"
                className={cls.input}
                placeholder={t('Username')}
                onChange={onChangeUsername}
                value={username}

            />
            <Input
                type="text"
                className={cls.input}
                placeholder={t('Password')}
                onChange={onChangePassword}
                value={password}

            />
            <Button
                theme={ThemeButton.OUTLINE}
                className={cls.loginBtn}
                onClick={onLoginClick}
                disabled={isLoading}
            >
                {t('Войти')}
            </Button>
        </div>
    );
});

export default LoginForm;
