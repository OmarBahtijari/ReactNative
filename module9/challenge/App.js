import { StatusBar } from 'expo-status-bar';
import { View, Text, Image, Button, StyleSheet } from 'react-native';
import ChallengeScreen from './screens/ChallengeScreen';

export default function App() {
  return (
    <ChallengeScreen>
    </ChallengeScreen>
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
