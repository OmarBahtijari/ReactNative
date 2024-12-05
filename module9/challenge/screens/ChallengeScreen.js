import React from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';

const ChallengeScreen = () => {
  const handleButtonPress = () => {
    alert('Button Pressed!');
  };

  
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freeiconspng.com%2Fimg%2F2414&psig=AOvVaw26mvq3RjcWZfGp3dgA_ZE-&ust=1733512399779000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDd54urkYoDFQAAAAAdAAAAABAT' }} // Replace with a valid image URL
        style={styles.image}
      />
      <Text style={styles.description}>
        This is a car image it is png, and transparent background.
      </Text>
      <Button title="Press Me" onPress={handleButtonPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 16,
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    color: '#333',
    marginBottom: 20,
  },
});

export default ChallengeScreen;