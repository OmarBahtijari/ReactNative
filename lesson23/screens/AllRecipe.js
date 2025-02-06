import React,{useEffect, useState} from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

const AllRecipe=()=>{
    const [recipe, setRecipe]=useState([])

    useEffect(()=>{
        fetch("https://dummyjson.com/recipes").then((res)=>res.json()).then((data)=>{
            setRecipe(data.recipes)
        })
    },[])

    return(
        <FlatList
        data={recipe}
        keyExtractor={(item)=>item.id.toString()}
        renderItem={({item})=>{
             return(<View>
                <Text>{item.name}</Text>
                <Text>{item.difficulty}</Text>
            </View> )
        }}
    />
    )


}

export default AllRecipe;