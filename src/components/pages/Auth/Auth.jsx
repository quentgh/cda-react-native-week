import { useState } from "react";
import { TouchableOpacity } from "react-native";
import Card from "../../HOC/Card/Card";
import LoginForm from "../../LoginForm/LoginForm";
import SignUpForm from "../../SignUpForm/SignUpForm";
import { StyleSheet, View, Text } from "react-native";

const card = {
  title: "Bienvenu !",
  content: "Veuillez vous authentifier",
};

export default function Auth() {
  const [login, isLogin] = useState(true);

  function toggleLogin() {
    isLogin(!login);
  }

  return (
    <View>
      <Card title={card.title} content={card.content}>
        <View>
        {login ? <LoginForm /> : <SignUpForm />}
        <TouchableOpacity style={styles.button} onPress={toggleLogin}>
          <Text>Pas encore inscrit ?</Text>
        </TouchableOpacity>
      </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: "#ddd",
    margin:20,
    padding: 10,
    color: "#333",
  },
});
