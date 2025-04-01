import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="paw" size={32} color="#000000" />
        <Text style={styles.title}>Dog Image Viewer</Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('DogImageViewer')}>
        <Ionicons name="image-outline" size={20} color="white" />
        <Text style={styles.buttonText}>View Random Dog</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('BreedSelector')}>
        <Ionicons name="search-outline" size={20} color="white" />
        <Text style={styles.buttonText}>Browse Breeds</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Favorites')}>
        <Ionicons name="heart" size={20} color="white" />
        <Text style={styles.buttonText}>View Favorites</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f5f5f5' },
  header: { flexDirection: 'row', alignItems: 'center', marginBottom: 30 },
  title: { fontSize: 24, fontWeight: 'bold', color: '#000000', marginLeft: 10 },
  button: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#000000', padding: 12, borderRadius: 10, marginBottom: 15, width: '80%', justifyContent: 'center' },
  buttonText: { color: 'white', fontSize: 16, fontWeight: 'bold', marginLeft: 10 },
});

export default HomeScreen;
