import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Auth from "./src/components/pages/Auth/Auth";
import Profil from "./src/components/pages/Profil/Profil";

export default function App() {
  const [user, setUser] = useState(null);

  return (
    <View style={styles.container}>
      {user === null ? <Auth /> : <Profil />}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    margin: 10,
    flex: 1,
    backgroundColor: "teal",
    alignItems: "center",
    justifyContent: "center",
  },
});

// 1er : les composants natifs
// 2d : les événements
// 2e : le style : inline style, stylesheet
