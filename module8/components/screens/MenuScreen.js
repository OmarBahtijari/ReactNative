import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Button, TouchableOpacity} from 'react-native-web';

const MenuScreen = (props) => {
    console.log(props)
    return(
        <View>
            <Text style = {styles.text}> Welcome to menu screen!</Text>
            <Button title='Go to Menu Screen' onPress={()=> props.navigation.navigate('Menu')}/>
            <TouchableOpacity   style={styles.btn} 
                                onPress={() => props.navigation.navigate('Students')}>

                <Text style={styles.btnText}>Go to Students Screen</Text>
                </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    text: {
        textAlign: 'center',
        fontSize: 20,
        marginVertical: 20
    },
    btn: {
        backgroundColor: '#3446eb',
        marginVertical: 10,
        paddingVertical: 7
    },
    btnText: {
        color: 'white',
        fontSize: 15,
        textTransform: 'uppercase',
        textAlign: 'center'
    }
});

export default MenuScreen;