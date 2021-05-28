import React from "react";
import {
  Alert,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";

import styles from "./styles/estilo";

export default function App() {
  var clicou = () => {
    Alert.alert("Aulas  de  Mobile React native, Você clicou aqui!");
  };

  return (
    <View style={styles.container}>
      <Image source={require("./assets/mobile.png")} style={styles.logo} />

      <TextInput style={styles.input} placeholder="Digite seu email" />

      <TextInput
        style={styles.input}
        secureTextEntry={true}
        placeholder="Digite sua senha"
      />

      <TouchableOpacity
        style={styles.botao}
        onPress={() => {
          this.clicou();
        }}
      >
        <Text style={styles.botaoText}> Login </Text>
      </TouchableOpacity>
    </View>
  );
}
