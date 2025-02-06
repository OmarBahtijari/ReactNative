import React,{useEffect, useState} from "react";
import { View, Text, FlatList, StyleSheet} from "react-native";

const AllQuotes=()=>{
    const [Quotes, setQuotes]=useState([])

    useEffect(()=>{
        fetch("https://dummyjson.com/quotes").then((res)=>res.json()).then((data)=>{
            setQuotes(data.Quotes)
            console.log(data)
        })
        .catch((error) => {
            console.error('Error fetching quotes:', error);
        });
    },[])

    return(
        <FlatList
        data={Quotes}
        keyExtractor={(item)=>item.id.toString()}
        renderItem={({item})=>{
            return( <View>
                <Text>{item.quote}</Text>
                <Text>{item.author}</Text>
            </View> )
        }}
    />
    )


}

export default AllQuotes;