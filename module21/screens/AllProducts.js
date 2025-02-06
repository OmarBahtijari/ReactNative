import React,{useEffect, useState} from "react";
import {View, Text, FlatList, Image, StyleSheet} from 'react-native'
import Icon from "react-native-vector-icons/MaterialIcons"
import Product from "./Product";

const AllProducts=()=>{
    const [products, setProducts] = useState([])
    useEffect(()=>{
        const pergjigjja=async ()=>{
            try{
                const response=await fetch("https://fakestoreapi.com/products");
                const data=await response.json();
                setProducts(data);
            }
            catch(error){
                console.log(error)
                 
            }
        }
        pergjigjja();
    },[])

    return (
        <FlatList
        data={products}
        keyExtractor={(item)=>item.id.toString()}
        renderItem={({item})=> <Product item={item}/> }
    />
    )
}
export default AllProducts;