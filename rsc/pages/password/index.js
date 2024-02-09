import {View, Text, StyleSheet} from "react-native"
import {SafeAreaView} from "react-native-safe-area-context"
import {useState,useEffect} from "react"
import { useIsFocused} from "@react-navigation/native"
import useStorage from "../../hooks/useStorage"

export function Password(){
    const [listPassword, setListPasswords] = useState([])
    const focused = useIsFocused();//tela em foco ou n
    const {getItem} = useStorage();


    useEffect(() => {
        //chama oq ta dentro quando as infos da tela
        //sofrerem alguma alteração, ou caso a tela seja ativada
        async function loadPasswords(){
            const passwords = await getItem("@pass")
            //a chave serve para ele saber qual banco que ele tá buscando
            console.log(passwords);
        }
        loadPasswords();
    }, [focused])


    return(
        <SafeAreaView style={{flex:1}}>
            <View style={style.header}>
                <Text style={style.title}>
                    Minhas senhas
                </Text>
            </View>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    title:{
        color:"#fff",
        fontSize:25,
        fontWeight:"bold"
    },
    header:{
        backgroundColor:"#691a1a",
        paddingTop:"15%",
        paddingBottom:"10%",
        alignItems:"center",
        marginTop:"-6%"
    }
})