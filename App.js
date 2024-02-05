import { useState } from "react"
import { View, Text, StyleSheet, Image, TouchableOpacity, Modal } from "react-native"
import Slider from "@react-native-community/slider"
import { ModalSenha } from "./rsc/componentes/modal"

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890"

export default function /* Componentes têm letra maiúscula */ App() {
  const [size, setSize] = useState(10)
  //const {nome,ação} = useState(val inicial)
  const [valSenha, setValSenha] = useState("")
  const [modalVisible, setModalVisible] = useState(false)

  function gerarSenha() {
    let senha = "";
    for (let i = 0, n = charset.length; i < size; i++) {
      senha += charset.charAt(Math.floor(Math.random() * n))
    }
    setValSenha(senha);
    setModalVisible(true);
  }


  return (
    <View style={style.container}>
      <Image style={style.logo}
        source={require("./rsc/assets/cadeado.png")}
      />
      <Text style={style.title}>
        {size} caracteres
      </Text>
      <View style={style.area}>
        <Slider
          style={{
            height: 50 //n use porcentagem aq
          }}
          minimumValue={8}
          maximumValue={20}
          thumbTintColor="#660000"//cor da bolinha
          minimumTrackTintColor="#660000"//cor da listrinha
          value={size}
          onValueChange={(value) => setSize(value.toFixed(0))}
        />
      </View>
      <TouchableOpacity
        onPress={gerarSenha}
        style={style.button}>
        <Text
          style={style.btnText}>
          Gerar senha
        </Text>
      </TouchableOpacity>
      <Modal visible={modalVisible} animationType="fade" transparent={true}>
        <ModalSenha
          senha = {valSenha} handleClose = {() => setModalVisible(false)}
        />
      </Modal>
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#A82F2F",
    justifyContent: "center",
    alignItems: "center"
  },
  logo: {
    marginBottom: "10%"
  },
  area: {
    marginTop: "12%",
    marginBottom: 14,
    width: "80%",
    backgroundColor: "#D44949",
    borderRadius: 8,
    padding: "3%"
  },
  button: {
    width: "80%",
    backgroundColor: "#922727",
    height: "7%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10
  },
  btnText: {
    color: "#fff",
    fontSize: 20
  },
  title: {
    fontSize: 30,
    fontWeight: "bold"
  }
})