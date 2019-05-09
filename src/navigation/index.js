import {createStackNavigator, createAppContainer} from 'react-navigation';
import Home from '../views/Home';
import Filmes from '../views/Filmes';
import Personagens from '../views/Personagens';
import FilmeCartaz from '../views/FilmeCartaz';
import FilmesAtor from '../views/FilmesAtor';
import Ator from '../views/Ator';

const AppNavigator = createStackNavigator({
    Home,
    Filmes,
    Personagens,
    FilmeCartaz,
    Ator,
    FilmesAtor
}, {initialRouteName: 'Personagens',
defaultNavigationOptions: {
    header: null,
}});

export default createAppContainer(AppNavigator);