import React from "react";
import {View, Text} from 'react-native';
const HomePage = ({navigation}) => {
    return(
    <View style={styles.container}>
        <Text>Welcome to Home Screen</Text>
        <Button title="Go to about screen" onPress={()=> navigation.navigate('About')}></Button>
        <Text> Drawer Navigation Button Functionality </Text>
        <Button title="Open Drawer" onPress={()=> navigation.openDrawer()}/>
  </View>
    );
}
export default HomePage;