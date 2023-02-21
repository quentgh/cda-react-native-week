import { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { TextInput } from "react-native";
import Btn from "../../ui/Btn/Btn";
import { AntDesign } from "@expo/vector-icons";

export default function LoginForm() {
  // 1. Variables d'état
  const [emailInput, setEmailInput] = useState("");
  const [emailError, setEmailError] = useState();

  const [passwordInput, setPasswordInput] = useState("");
  const [passwordError, setPasswordError] = useState();

  // 2. Fonction handle pour mettre à jour les entrées
  function handleEmail(txt) {
    return setEmailInput(txt);
  }

  function handlePassword(txt) {
    return setPasswordInput(txt);
  }

  function login() {
    setEmailError(!emailInput.includes("@") ? "Email incorrect" : "");
    setPasswordError(passwordInput.length < 6 ? "Mot de passe trop court" : "");

    if (emailInput.includes("@") && passwordInput.length >= 6) {
      alert("Envoi de : " + emailInput + " " + passwordInput);
      return;
    }
  }

  // Lier données et composants
  return (
    <View>
      <Text style={{ margin: 20 }}>Login form</Text>
      <TextInput
        style={styles.input}
        value={emailInput}
        onChangeText={handleEmail}
        placeholder="email"
        keyboardType="email-address"
      ></TextInput>
      <Text>{emailError}</Text>
      <TextInput
        style={styles.input}
        secureTextEntry={true}
        value={passwordInput}
        onChangeText={handlePassword}
        placeholder="password"
        keyboardType="default"
      ></TextInput>
      <Text>{passwordError}</Text>
      <Btn action={login} label={"Se connecter"}>
        <AntDesign name="login" size={24} color="black" />
      </Btn>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },

  connexionButton: {
    alignItems: "center",
    backgroundColor: "royalblue",
    margin: 20,
    padding: 10,
    color: "#eee",
  },

  connexionButtonText: {
    color: "#fff",
    fontSize: 20,
    textAlign: "center",
  },
});
