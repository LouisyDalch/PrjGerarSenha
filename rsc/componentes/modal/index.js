import {View,Text,StyleSheet,TouchableOpacity,Pressable} from "react-native"
import * as Clipboard from "expo-clipboard"
import useStorage from "../../hooks/useStorage"

export function ModalSenha({senha, handleClose}){

    const {saveItem} = useStorage();

    async function handleCopyPassword(){
        await Clipboard.setStringAsync(senha)
        alert("Senha salva com sucesso!")
        handleClose();
    }


    return(
        <View style={style.container}>
            <View style={style.popUp}>
                <Text style={style.title}>
                    Senha gerada
                </Text>
                <Pressable style={style.innerPass} onLongPress={handleCopyPassword}>
                    <Text style={style.text}>
                        {senha}
                    </Text>
                </Pressable>
                <View style={style.buttonArea}>
                    <TouchableOpacity style={style.button} onPress={handleClose}>
                        <Text>
                            Voltar
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[style.button,style.btnSave]}>
                        <Text style={style.textSave}>
                            Salvar senha
                        </Text>
                    </TouchableOpacity>
                </View>
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
    },
    buttonArea:{
        flexDirection:"row",
        width:"85%",
        marginTop:"3%",
        alignItems:"center",
        justifyContent:"space-between"
    },
    button:{
        flex:1,
        alignItems:"center",
        marginTop:"3%",
        padding:"5%",
        borderRadius:10
    },
    btnSave:{
        backgroundColor:"#D44949"
    },
    textSave:{
        color:"#fff",
        fontSize:15,
        fontWeight:"bold"
    }
})