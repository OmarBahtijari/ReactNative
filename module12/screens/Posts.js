import React,{useEffect, useState} from 'react'
import { View, Text, StyleSheet, Flatlist} from 'react-native'
const Posts =()=>{
    const [postimet, vendosPostimet] = useState([])
    console.log("hapja e postimet")
        const merrTeDhenat = async ()=>{
            console.log('Fetching data started'); // Before the API call

            try{
               const pergjigja= await fetch("https://jsonplaceholder.typicode.com/posts")
               const rezultati= await pergjigja.json();
               vendosPostimet(rezultati)
               console.log(postimet)


            }catch(error){
                console.log("Error fetching Data:",error)
            }
        }
    useEffect(()=>{
        merrTeDhenat();

    },[])
    return <View>
        <Flatlist
        data={postimet}
        keyExtractor={(item)=>item.id.toString()}
        renderItem={({item})=>{
            <Text>{item.body}</Text>
        }}
        />
    </View>
}
export default Posts