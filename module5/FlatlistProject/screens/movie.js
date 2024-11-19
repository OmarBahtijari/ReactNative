import React from "react";
import {View, Text, FlatList} from "react-native"


const Movie =()=>{
    const movieName="Dune"
    const type="TV show"
    const year=2024
    actors=["Angelina Jolie","Jodie Phoster","Tim Robbins"]
    return(
        <View>
            <Text>Movie: {movieName} </Text>
            <Text>Type: {type} </Text>
            <Text>Year: {year} </Text>
            <FlatList
            data={actors}
            renderItem={({item})=>{
                return <Text>{item}</Text>
            }}/>
        </View>
    )
}
export default Movie