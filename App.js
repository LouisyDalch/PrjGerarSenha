import {View, Text, StyleSheet,Image,TouchableOpacity} from "react-native"
import Slider from "@react-native-community/slider"

export default function /* Componentes têm letra maiúscula */ App(){
  return(
    <View style = {style.container}>
      <Image style = {style.logo}
      source={require("./rsc/assets/cadeado.png")}
      />
      <Text>
        16 caracteres
      </Text>
      <View style={style.area}>
        <Slider
          style={{
            height:50 //n use porcentagem aq
          }}
          minimumValue={8}
          maximumValue={20}
          thumbTintColor="#660000"//cor da bolinha
          minimumTrackTintColor="#660000"//cor da listrinha
        />
      </View>
      <TouchableOpacity
      style={style.button}>
        <Text
        style={style.btnText}>
          Gerar senha
        </Text>
      </TouchableOpacity>
    </View>
  )
}

const style = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: "#A82F2F",
    justifyContent:"center",
    alignItems:"center"
  },
  logo:{
    marginBottom: "10%"
  },
  area:{
    marginTop:"12%",
    marginBottom:14,
    width:"80%",
    backgroundColor:"#D44949",
    borderRadius:8,
    padding:"3%"
  },
  button:{
    width:"80%",
    backgroundColor:"#922727",
    height: "7%",
    justifyContent:"center",
    alignItems:"center",
    borderRadius:10
  },
  btnText:{
    color:"#fff",
    fontSize:20
  }
})