import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navigation from './react-app/screens/menu';

export default function App() {
  return (
  <Navigation/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const navigator = createStackNavigator(
    {
        menu: MenuScreen
    },
    {
        initialRouteName: 'Menu',
        defaultNavigatorOptions: {
            title: 'App'
        }
    }
)