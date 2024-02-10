import React from "react";
import {View, Text, StyleSheet, Pressable} from "react-native";

export function PasswordItem({data, removePassword}){
    return(
        <Pressable onLongPress={removePassword} style={style.container}>
            <Text style={style.text}>
                {data}
            </Text>
        </Pressable>
    );
}

const style = StyleSheet.create({
    container:{
        backgroundColor:"#0e0e0e",
        width:"auto",
        padding:"5%",
        marginBottom:"3%",
        borderRadius:10,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between"
    },
    text:{
        color:"#fff"
    }



})