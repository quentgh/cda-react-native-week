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
    paddingTop: 50,
  },
});
