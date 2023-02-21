import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

export default function Btn({ action, children, label }) {
  return (
    <TouchableOpacity style={styles.connexionButton} onPress={action}>
      <View>{children}</View>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  connexionButton: {
    alignItems: "center",
    backgroundColor: "royalblue",
    margin: 20,
    padding: 10,
    color: "#eee",
    borderRadius: 5,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  label: {
    color: "whitesmoke",
    textAlign: "center",
    fontSize: 15,
    marginHorizontal: 10,
  },
});
