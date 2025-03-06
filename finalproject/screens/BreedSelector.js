import React, {useState, useEffect} from "react";
import { View, Picker, Image, TouchableOpacity, Text, StyleSheet} from 'react-native';

const BreedSelector = () => {
    const [breeds, setBreeds] = useState([]);
    const [selectedBreed, setSelectedBreed] = useState('');
    const [imageUrl, setImageUrl] = useState(null);

    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/list/all')
        .then(response => response.json())
        .then(data => setBreeds(Object.keys(data.message)))
        .catch(error => console.error('Error fetching breed list:', error));
    }, []);

    const fetchBreedImage = async () => {
        if (!selectedBreed) return;
        try{
            const response = await fetch('https://dog.ceo/api/breed/${selectedBreed}/images/random');
            const data = await response.json();
            setImageUrl(data.message);
        } catch (error) {
            console.error('Error fetching breed image:', error);
        }
    };

    return (
        <View style={styles.container}>
            <Picker
            selectedValue={selectedBreed}
            style={styles.picker}
            onValueChange={(itemValue) => setSelectedBreed(itemValue)}
            >
            <Picker.Item label="Select a breed" value=""/>
            {breeds.map(breed => (
                <Picker.Item key={breed} label={breed} value={breed} />
            ))}
            </Picker>

            <TouchableOpacity style={styles.button} onPress={fetchBreedImage}>
                <Text style={styles.buttonText}>Get Dog Breed Image</Text>
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
    picker: {
        height: 50,
        width: 250,
    },
    button: {
        backgroundColor: '#007bff',
        padding: 10,
        marginTop: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    image: {
        width: 300,
        height: 300,
        marginTop: 20,
    },
});

export default BreedSelector;