import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AllRecipe from './screens/AllRecipe';
import AllQuotes from './screens/AllQuotes';

export default function App() {
  return (
    <AllQuotes/>
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
