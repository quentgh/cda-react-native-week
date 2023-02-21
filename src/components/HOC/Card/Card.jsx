import { StyleSheet, View, Text } from "react-native";

export default function Card(props) {
  return (
    <View style={cardStyle.container}>
      <Text style={cardStyle.title}>{props.title}</Text>
      <Text style={cardStyle.content}>{props.content}</Text>
      <View style={cardStyle.children}>{props.children}</View>
    </View>
  );
}

//Styles
const cardStyle = StyleSheet.create({
  container: {
    backgroundColor: "royalblue",
    borderRadius: 10,
    width: "90%",
    alignSelf: "center",
  },

  title: {
    color: "whitesmoke",
    fontSize: 35,
    textAlign: "center",
  },
  content: {
    color: "whitesmoke",
    fontSize: 20,
    textAlign: "center",
    padding: 5,
  },
  children: {
    padding: 10,
    backgroundColor: "whitesmoke",
  },
});
