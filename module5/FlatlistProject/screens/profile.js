import React from 'react';
import {View, Text, FlatList, Stylesheet} from "react-native"

const Profile=()=>{
    const firstName="Omar";
    const lastName="Bahtijari";
    let FullName=`${firstName} ${lastName}`;
    const birthday="2010-29-04";
    const hobbies=["Gaming","Coding","Training"];

    return(
    <View>
    {/* Personal Info */}
    <Text>Personal Info</Text>
    <Text>Fullname: {FullName}</Text>
    <Text>birthday: {birthday}</Text>
    {/* Hobbies section          */}
    <Text>Hobbies</Text>
    <FlatList
    data={hobbies}
    renderItem={({item})=><Text>{item}</Text>}/>
 </View>

    )

}



export default Profile