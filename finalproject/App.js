import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen';
import DogImageViewer from './screens/DogImageViewer';
import BreedSelector from './screens/BreedSelector';
import FavoritesScreen from './screens/FavoritesScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="DogImageViewer" component={DogImageViewer} />
        <Stack.Screen name="BreedSelector" component={BreedSelector} />
        <Stack.Screen name="Favorites" component={FavoritesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}