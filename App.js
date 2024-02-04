import {View, Text, StyleSheet,Image} from "react-native"
import slider from "@react-native-comunity/slider"

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

      </View>
    </View>
  )
}

const style = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: "#5CC9C6",
    justifyContent:"center",
    alignItems:"center"
  },
  logo:{
    marginBottom: "10%"
  },
  area:{
    
  }
})