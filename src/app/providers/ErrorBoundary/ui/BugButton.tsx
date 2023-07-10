import { Button } from 'shared/ui/Button/Button';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

// test component
export const BugButton = () => {
    const [error, setError] = useState(false);
    const { t } = useTranslation();
    const throwEr = () => {
        setError(true);
    };

    useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error]);

    return (
        <Button
            onClick={throwEr}
        >
            {t('throw error')}
        </Button>
    );
};
