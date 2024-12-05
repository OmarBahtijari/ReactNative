import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import StudentScreen from './screens/StudentScreen';
import MenuScreen from './screens/MenuScreen';

export default function App() {
  return (
    StudentScreen
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
    Menu: MenuScreen,
    Students: StudentScreen

  },
  {
    initialRouteName: 'Menu',
    defaultNavigatorOptions: {
      title: 'App'      
    }
  }
)