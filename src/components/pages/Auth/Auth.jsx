import { useState } from "react";
import { TouchableOpacity } from "react-native";
import Card from "../../HOC/Card/Card";
import LoginForm from "../../LoginForm/LoginForm";
import SignUpForm from "../../SignUpForm/SignUpForm";
import { StyleSheet, View, Text } from "react-native";

const card = {
  title: "Welcome !",
  content: "Please log in",
};

export default function Auth() {
  // Les useState, useEffect... doivent être déclaré à l'int. du composant
  const [login, setIsLogin] = useState(true);

  function toggleLogin() {
    setIsLogin(!login);
  }

  return (
    <View style={styles.container}>
      <Card title={card.title} content={login ? "Login" : "Subscribe"}>
        {login ? <LoginForm /> : <SignUpForm />}
        <TouchableOpacity style={styles.button} onPress={toggleLogin}>
          <Text> {login ? "Not a member yet ? Subscribe here" : "Login"}</Text>
        </TouchableOpacity>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingBottom: 100,
  },

  button: {
    alignItems: "center",
    margin: 20,
    padding: 10,
    color: "#333",
  },
});
