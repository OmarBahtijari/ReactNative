import React from "react"
import {Text, Stylesheet, View, FlatList} from "react-native"

const students=[
    {name:"Arianit", age:17},
    {name:"Blerti", age:18},
    {name:"Amari", age:15},
    {name:"Orkidea", age:19},
    {name:"Festimi", age:16}
]
const FlatListExample=()=>{
return<View>
    <Text>This is the Flatlist Screen</Text>
    <FlatList
    data={students}
    renderItem={({item})=>{
        return <Text>{item.name} - {item.age}</Text>
    }}/>
</View>
}
const stili=Stylesheet.create({
    textEdit:{
        fontSize:20,
        backgroundColor:'blue'
    }
})
export default FlatListExample;