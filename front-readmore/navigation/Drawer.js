import { createDrawerNavigator } from '@react-navigation/drawer';
import UserHomeScreen from '../screens/UserHomeScreen';
import Bookshelf from '../screens/Bookshelf';
import { SearchStack } from './SearchStack';


const Drawer = createDrawerNavigator();

export const MainDrawer = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,

      }}>
      <Drawer.Screen name="Página Inicial" component={UserHomeScreen} />
      <Drawer.Screen name="Explorar Livros" component={SearchStack} />
      <Drawer.Screen name="Minha Estante" component={Bookshelf} />
    </Drawer.Navigator>

  );
}
