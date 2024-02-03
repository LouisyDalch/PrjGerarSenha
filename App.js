import {View, Text, StyleSheet,Image} from "react-native"

export default function /* Componentes têm letra maiúscula */ App(){
  return(
    <View style = {style.container}>
      <Image
      source={require("./rsc/assets/cadeado.png")}
      />
      <Text>
        Meu primeiro app em react
      </Text>
    </View>
  )
}

const style = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: "#5CC9C6",
    justifyContent:"center",
    alignItems:"center"
  }
})