import {View, Text, StyleSheet,FlatList} from "react-native"
import {SafeAreaView} from "react-native-safe-area-context"
import {useState,useEffect} from "react"
import { useIsFocused} from "@react-navigation/native"
import useStorage from "../../hooks/useStorage"
import {PasswordItem} from "./componentes/passwordItens"

export function Password(){
    const [listPassword, setListPasswords] = useState([])
    const focused = useIsFocused();//tela em foco ou n
    const {getItem} = useStorage();
    const {removeItem} = useStorage();


    useEffect(() => {
        //chama oq ta dentro quando as infos da tela
        //sofrerem alguma alteração, ou caso a tela seja ativada
        async function loadPasswords(){
            const passwords = await getItem("@pass")
            //a chave serve para ele saber qual banco que ele tá buscando
            setListPasswords(passwords);
        }
        loadPasswords();
    }, [focused])

    async function handleDeletePassword(item){
        const passw = await removeItem("@pass", item);
        setListPasswords(passw)
    }


    return(
        <SafeAreaView style={{flex:1}}>
            <View style={style.header}>
                <Text style={style.title}>
                    Minhas senhas
                </Text>
            </View>
            <View style={style.content}>
                <FlatList
                    style={{flex:1}}
                    data={listPassword}
                    keyExtractor={(item) => String(item)}
                    renderItem={({item}) => <PasswordItem data={item}
                    removePassword={() => handleDeletePassword(item)}/>}
                />
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
        marginTop:"-6%",
        marginBottom:"5%"
    },
    content:{
        flex:1,
        paddingLeft:"5%",
        paddingRight:"5%"

    }
})