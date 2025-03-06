import React from "react";
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Welcome to Dog Image Viewer App!</Text>

            <TouchableOpacity
            style={styles.button}
            onPress={()=> navigation.navigate('Dog Image Viewer')}
            >
                <Text style={styles.buttonText}>Go To Dog Image Viewer</Text>
            </TouchableOpacity>

            <TouchableOpacity
            style={styles.button}
            onPress={()=> navigation.navigate('Breed Selector')}
            >
                <Text style={styles.buttonText}>Go to Breed Selector</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
    },
    text: {
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 20,
    },
    button: {
      backgroundColor: '#007bff',
      padding: 10,
      marginVertical: 10,
      borderRadius: 5,
    },
    buttonText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
    },
  });
  
export default HomeScreen;
