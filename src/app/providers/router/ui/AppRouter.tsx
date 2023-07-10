import { Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'widgets/PageLoader/PageLoader';

const AppRouter = () => {
    const { t } = useTranslation();
    return (
        <div>
            <Suspense fallback={<PageLoader />}>
                <Routes>
                    {Object.values(routeConfig).map(({ element, path }) => (
                        <Route
                            key={path}
                            element={(
                                <div className="page-wrapper">
                                    {element}
                                </div>
                            )}
                            path={path}
                        />
                    ))}
                </Routes>
            </Suspense>
        </div>
    );
};

export default AppRouter;
