import {createStackNavigator, createAppContainer} from 'react-navigation';
import Home from '../views/Home';
import Filmes from '../views/Filmes';
import Personagens from '../views/Personagens';
import Phantom from '../views/Phantom';
import Ator from '../views/Ator';

const AppNavigator = createStackNavigator({
    Home,
    Filmes,
    Personagens,
    Phantom,
    Ator,
}, {initialRouteName: 'Home',
defaultNavigationOptions: {
    header: null,
}});

export default createAppContainer(AppNavigator);