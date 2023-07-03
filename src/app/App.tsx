import './styles/index.scss'
import { Link } from 'react-router-dom';
import { classNames } from 'shared/lib/className/className';
import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from './providers/router';



const App = () => {

    const {theme, toggleTheme} = useTheme()

    return (
        <div className={classNames('app',{}, [theme])}>
            <button onClick={toggleTheme}>Theme</button>
            <Link to={'/about'}>
                About page
            </Link>
            <Link to={'/'}>
                 Main page
            </Link>
           
           <AppRouter/>
        </div>
    );
};

export default App;