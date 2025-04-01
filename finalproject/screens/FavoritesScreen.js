import React, { useState, useEffect } from 'react';
import { View, Image, FlatList, StyleSheet, Text, TouchableOpacity, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const FavoritesScreen = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    loadFavorites();
  }, []);

  const loadFavorites = async () => {
    try {
      const storedFavorites = await AsyncStorage.getItem('favorites');
      setFavorites(storedFavorites ? JSON.parse(storedFavorites) : []);
    } catch (error) {
      console.error('Error loading favorites:', error);
    }
  };

  const removeFavorite = async (imageUrl) => {
    try {
      const updatedFavorites = favorites.filter((item) => item !== imageUrl);
      await AsyncStorage.setItem('favorites', JSON.stringify(updatedFavorites));
      setFavorites(updatedFavorites);
      Alert.alert('Removed!', 'Dog image removed from favorites.');
    } catch (error) {
      console.error('Error removing favorite:', error);
    }
  };

  return (
    <View style={styles.container}>
      {favorites.length === 0 ? (
        <Text style={styles.emptyText}>No favorites saved.</Text>
      ) : (
        <FlatList
          data={favorites}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.imageContainer}>
              <Image source={{ uri: item }} style={styles.image} />
              <TouchableOpacity style={styles.removeButton} onPress={() => removeFavorite(item)}>
                <Text style={styles.removeButtonText}>Remove</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10, alignItems: 'center', backgroundColor: '#000000' },
  emptyText: { fontSize: 18, fontWeight: 'bold', marginTop: 20, color: '#555' },
  imageContainer: { alignItems: 'center', marginBottom: 20 },
  image: { width: 300, height: 300, borderRadius: 10 },
  removeButton: { backgroundColor: '#ff0000', padding: 8, marginTop: 10, borderRadius: 5 },
  removeButtonText: { color: 'white', fontWeight: 'bold' },
});

export default FavoritesScreen;
