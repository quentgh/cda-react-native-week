import { useState } from "react";
import { Keyboard, StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { TextInput } from "react-native";

// function isEmailValid(email) {
//   return email.includes("@") && email.includes(".");
// }

// function isPasswordValid(password) {
//   return password.length >= 6;
// }

export default function LoginForm() {
  const [emailInput, setEmailInput] = useState("");
  // const [emailError, setEmailError] = useState("");

  const [passwordInput, setPasswordInput] = useState("");
  // const [passwordError, setPasswordError] = useState("");

  function handleEmail(e) {
    return setEmailInput(e.emailInput);
  }

  function handlePassword(e) {
    return setPasswordInput(e.passwordInput);
  }

  function testAlert(){
    alert("Envoi de : " + emailInput + " " + passwordInput);
  }

  // function validate() {
  //   setEmailError(!isEmailValid(emailInput) ? "Email incorrecte!" : "");
  //   setPasswordError(
  //     !isPasswordValid(passwordInput) ? "Mot de passe trop court!" : ""
  //   );

  //   if (isEmailValid(emailInput) && isPasswordValid(passwordInput)) {
  //     alert("Connexion success : Email: " + emailInput);
  //     return;
  //   }
  // }

  return (
    <View>
      <Text style={{ margin: 20 }}>Login form</Text>
      <TextInput
        style={styles.input}
        value={emailInput}
        onChangeText={handleEmail}
        placeholder="email"
      ></TextInput>
      <TextInput
        style={styles.input}
        secureTextEntry={true}
        value={passwordInput}
        onChangeText={handlePassword}
        placeholder="password"
      ></TextInput>
      <TouchableOpacity style={styles.connexionButton}>
        <Text style={styles.connexionButtonText} onPress={testAlert}>
          {"Connexion"}
        </Text>
      </TouchableOpacity>
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
