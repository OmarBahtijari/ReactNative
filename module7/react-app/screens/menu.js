import React from "react";
import {View, Text, StyleSheet, Button} from "react-native"


const MenuScreen = (props) => {
    console.log(props)
    return(
        <View>
            <Text style = {style.text}> Welcome to menu screen!</Text>
            <Button title='Go to Menu Screen' onPress={()=>  props.navigation.navigate('Menu')}/>
        </View>
    )
}

const styles = StyleSheet.create({
    text:{
        textAlign: 'center',
        fontSize: 20,
        marginVertical: 20
    }
});

export default Navigation;
