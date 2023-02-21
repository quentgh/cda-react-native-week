import { StyleSheet, View, Text } from "react-native";

export default function Card(props) {
  return (
    <View style={cardStyle.container}>
      <Text
        style={{
          color: "#eee",
          fontSize: 30,
        }}
      >
        {props.title}
      </Text>
      <Text
        style={{
          margin: 10,
          color: "#eee",
        }}
      >
        {props.content}
      </Text>
      <View
        style={{
          margin: 20,
        }}
      >
        <Text>{props.children}</Text>
      </View>
    </View>
  );
}

const cardStyle = StyleSheet.create({
  container: {
    width: "100%",
    padding: 20,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    color: "#eee",
  },
});
