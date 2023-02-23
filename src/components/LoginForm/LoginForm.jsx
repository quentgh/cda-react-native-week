import { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import Btn from "../../ui/Btn/Btn";
import { AntDesign } from "@expo/vector-icons";
import InputWithError from "../../ui/InputWithError/InputWithError";
import { color } from "../../styles/color";
import {
  validateEmail,
  validatePassword,
  getEmailError,
  getPasswordError,
} from "../../utils/validations";

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
    setEmailError(getEmailError(emailInput));
    setPasswordError(getPasswordError(passwordInput));

    if (validateEmail(emailInput) && validatePassword(passwordInput)) {
      alert("connexion succeed !");
      return;
    }
  }

  // Lier données et composants
  return (
    <View>
      <Text style={styles.title}>Login form</Text>
      <InputWithError
        value={emailInput}
        onChangeText={handleEmail}
        placeholder="email"
        keyboardType="email-address"
        errorMsg={emailError}
      ></InputWithError>
      <InputWithError
        isPassword={true}
        value={passwordInput}
        onChangeText={handlePassword}
        placeholder="password"
        keyboardType="default"
        errorMsg={passwordError}
      ></InputWithError>
      <Btn action={login} label={"Connexion"}>
        <AntDesign name="login" size={24} color={color.lightColor} />
      </Btn>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    padding: 10,
    fontSize: 20,
  },
});
