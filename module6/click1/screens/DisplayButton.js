import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';

const DisplayButton = () => {
  const [count, setCount] = useState(100);

  const handlePress = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <View style={stili.container}>
      <Text style={stili.counterText}>{count}</Text>
      <TouchableOpacity style={stili.button} onPress={handlePress}>
        <Text style={stili.buttonText}>Click Me</Text>
      </TouchableOpacity>
    </View>
  );
};

const stili = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  counterText: {
    fontSize: 60,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  button: {
    backgroundColor: '#007BFF',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default DisplayButton;