import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const BreedSelector = () => {
  const [breeds, setBreeds] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState('');
  const [imageUrl, setImageUrl] = useState(null);

  // Fetch list of breeds
  useEffect(() => {
    const fetchBreeds = async () => {
      try {
        const response = await fetch('https://dog.ceo/api/breeds/list/all');
        const data = await response.json();
        setBreeds(Object.keys(data.message));
      } catch (error) {
        console.error('Error fetching breeds:', error);
      }
    };
    fetchBreeds();
  }, []);

  // Fetch image for selected breed
  const fetchBreedImage = async () => {
    if (!selectedBreed) return;
    try {
      const response = await fetch(`https://dog.ceo/api/breed/${selectedBreed}/images/random`);
      const data = await response.json();
      setImageUrl(data.message);
    } catch (error) {
      console.error('Error fetching breed image:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select a Dog Breed 🐶</Text>

      <Picker
        selectedValue={selectedBreed}
        onValueChange={(itemValue) => setSelectedBreed(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="Choose a breed" value="" />
        {breeds.map((breed) => (
          <Picker.Item key={breed} label={breed} value={breed} />
        ))}
      </Picker>

      <TouchableOpacity style={styles.button} onPress={fetchBreedImage}>
        <Text style={styles.buttonText}>Get Breed Image</Text>
      </TouchableOpacity>

      {imageUrl && <Image source={{ uri: imageUrl }} style={styles.image} />}
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
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  picker: {
    width: 250,
    height: 50,
    marginBottom: 200,
  },
  button: {
    backgroundColor: '#000000',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  image: {
    width: 250,
    height: 250,
    marginTop: 20,
  },
});

export default BreedSelector;