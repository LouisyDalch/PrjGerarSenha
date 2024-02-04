import {View,Text,StyleSheet,TouchableOpacity,Pressable} from "react-native"

export function ModalSenha(){
    return(
        <View style={style.container}>
            <View style={style.popUp}>
                <Text style={style.title}>
                    Senha gerada
                </Text>
                <Pressable style={style.innerPass}>
                    <Text style={style.text}>
                        123123
                    </Text>
                </Pressable>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container:{
        backgroundColor:"rgba(24,24,24,0.6)",
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    },
    popUp:{
        backgroundColor:"#fff",
        paddingTop:"10%",
        paddingBottom:"10%",
        width:"85%",
        alignItems:"center",
        borderRadius:10,
        justifyContent:"center"
    },
    title:{
        fontSize:25,
        fontWeight:"bold",
        marginBottom:"7%"
    },
    innerPass:{
        backgroundColor:"#0e0e0e",
        width:"90%",
        padding:"4%",
        alignItems:"center",
        borderRadius:10
    },
    text:{
        color:"#fff"
    }
})