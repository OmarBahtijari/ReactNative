import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import BreedSelector from './screens/BreedSelector';
import DogImageViewer from './screens/DogImageViewer';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: '#007bff' },
          headerTintColor: '#fff',
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Dog Image Viewer" component={DogImageViewer} />
        <Stack.Screen name="Breed Selector" component={BreedSelector} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;