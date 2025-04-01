import React, { useState, useEffect } from 'react';
import { View, Image, TouchableOpacity, Text, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const DogImageViewer = () => {
  const [imageUrl, setImageUrl] = useState(null);

  const fetchRandomDog = async () => {
    try {
      const response = await fetch('https://dog.ceo/api/breeds/image/random');
      const data = await response.json();
      setImageUrl(data.message);
    } catch (error) {
      console.error('Error fetching dog image:', error);
    }
  };

  const saveToFavorites = async () => {
    if (!imageUrl) return;
    try {
      const storedFavorites = await AsyncStorage.getItem('favorites');
      const favorites = storedFavorites ? JSON.parse(storedFavorites) : [];
      favorites.push(imageUrl);
      await AsyncStorage.setItem('favorites', JSON.stringify(favorites));
      Alert.alert('Saved!', 'Dog image added to favorites.');
    } catch (error) {
      console.error('Error saving favorite:', error);
    }
  };

  useEffect(() => { fetchRandomDog(); }, []);

  return (
    <View style={styles.container}>
      {imageUrl && <Image source={{ uri: imageUrl }} style={styles.image} />}
      <TouchableOpacity style={styles.button} onPress={fetchRandomDog}>
        <Text style={styles.buttonText}>Get New Image</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={saveToFavorites}>
        <Text style={styles.buttonText}>Save to Favorites</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' },
  image: { width: 300, height: 300, marginBottom: 20 },
  button: { backgroundColor: '#000000', padding: 10, borderRadius: 5, marginBottom: 10 },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
});

export default DogImageViewer;
