import React, { useState, useEffect } from 'react';
import { View, Image, TouchableOpacity, Text, StyleSheet } from 'react-native';

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

  useEffect(() => {
    fetchRandomDog();
  }, []);

  return (
    <View style={styles.container}>
      {imageUrl && <Image source={{ uri: imageUrl }} style={styles.image} />}
      <TouchableOpacity style={styles.button} onPress={fetchRandomDog}>
        <Text style={styles.buttonText}>Get New Image</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  image: {
    width: 300,
    height: 300,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default DogImageViewer;