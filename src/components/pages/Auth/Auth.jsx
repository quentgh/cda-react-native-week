import { useState } from "react";
import { TouchableOpacity } from "react-native";
import Card from "../../HOC/Card/Card";
import LoginForm from "../../LoginForm/LoginForm";
import SignUpForm from "../../SignUpForm/SignUpForm";
import { StyleSheet, View, Text } from "react-native";

const card = {
  title: "Bienvenu !",
  content:"Veuillez vous authentifier",
};

export default function Auth() {

  // Les useState, useEffect... doivent être déclaré à l'int. du composant
  const [login, setIsLogin] = useState(true);

  function toggleLogin() {
    setIsLogin(!login);
  }

  return (
    <View>
      <Card title={card.title} content={login ? "Connexion" : "Inscription"}>
        {login ? <LoginForm /> : <SignUpForm />}
        <TouchableOpacity style={styles.button} onPress={toggleLogin}>
          <Text> {login ? "Pas encore membre ? Inscrivez-vous ici." : "Connectez-vous."}</Text>
        </TouchableOpacity>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    // backgroundColor: "#ddd",
    margin:20,
    padding: 10,
    color: "#333",
  },
});
