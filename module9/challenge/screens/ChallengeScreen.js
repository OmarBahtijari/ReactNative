import React from 'react';
import { View, Text, Image, Button, StyleSheet, Alert } from 'react-native';

const ChallengeScreen = () => {
  const handlePress = () => {
    Alert.alert('Button Pressed!', 'You clicked the button.');
  };

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.flaticon.com%2Ffree-icon%2Fprofile_3135715&psig=AOvVaw21_f2fF4QejZwT13yhWY_x&ust=1733943639006000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCNjRq87xnYoDFQAAAAAdAAAAABAJ' }} 
        style={styles.image}
      />
      <Text style={styles.description}>
        This is the description of the icon image
      </Text>
      <Button title="Click Me" onPress={handlePress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    color: '#333',
    marginBottom: 16,
    textAlign: 'center',
  },
});

export default ChallengeScreen;