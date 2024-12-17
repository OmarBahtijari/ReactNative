import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

const BoxScreen=()=>{
    return <View style={{flex:1, flexDirection:'column', justifyContent:'space-around'}}>
           <View style={{width:50, height:50, backgroundColor:"green"}}></View>
           <View style={{width:50, height:50, backgroundColor:"skyblue"}}></View>
           <View style={{width:50, height:50, backgroundColor:"red"}}></View>
        </View>

}
const styles=StyleSheet.create({
    viewStyle:{
        borderWidth:3,
        borderColor:'black'
    },
});
export default BoxScreen;