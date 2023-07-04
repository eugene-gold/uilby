import './styles/index.scss'
import { Link } from 'react-router-dom';
import { classNames } from 'shared/lib/className/className';
import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from './providers/router';
import { Navbar } from 'widgets/Navbar';



const App = () => {

    const {theme} = useTheme()

    return (
        <div className={classNames('app',{}, [theme])}>
           <Navbar/>           
           <AppRouter/>
        </div>
    );
};

export default App;