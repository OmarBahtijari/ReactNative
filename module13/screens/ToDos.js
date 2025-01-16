import React, {useEffect, useState} from "react";
import {View, FlatList, Text, StyleSheet }from "react-native";

const ToDos=()=>{
    const[data,setData]=useState([])

    const ThirrAPI =async ()=>{
        try{
            const pergjigjja = await fetch("https://jsonplaceholder.typicode.com/todos")
            const json=await pergjigjja.json();
            setData(json)
        }catch(error){
            console.error(error)
        }
    }
    const renderItem=({item})=>{
        <View>
        <Text>{item.title}</Text>
        <Text>{item.completed}</Text>
        </View>
    }
    return(
        <View>
            <FlatList
                 data={data}
                 keyExtractor={(item)=>item.id.toString()}
                 renderItem={renderItem}
            />
        </View>
    )
}
export default ToDos; 