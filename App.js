import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native";
import { UserContext } from "./src/components/contexts/UserContext";
import Auth from "./src/components/pages/Auth/Auth";
import Profil from "./src/components/pages/Profil/Profil";

export default function App() {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider
      value={{ utilisateur: user, setUtilisateur: setUser }}
    >
      <ScrollView style={styles.container}>
        {user === null ? <Auth /> : <Profil />}
        <StatusBar style="auto" />
      </ScrollView>
    </UserContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingBottom: 100,
  },
});
