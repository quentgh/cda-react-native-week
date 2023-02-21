import { View, Text } from "react-native";
import Card from "../../HOC/Card/Card";

let card = {
  title: "Bienvenu !",
  content: "Veuillez vous authentifier",
  children: "Un composant Card",
};

export default function Auth() {
  return (
    <View>
      {/* <Text>Authentification</Text> */}
      <Card
        title={card.title}
        content={card.content}
        children={card.children}
      ></Card>
    </View>
  );
}
