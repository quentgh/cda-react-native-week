import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native";
import { UserContext } from "./src/components/contexts/UserContext";
import Auth from "./src/components/pages/Auth/Auth";
// import Profil from "./src/components/pages/Profil/Profil";
// import ProfilStack from "./src/components/stacks/ProfilStack";
import { NavigationContainer } from "@react-navigation/native";
import GlobalDrawer from "./src/components/Drawer/GlobalDrawer/GlobalDrawer";
// import defaultImage from "./assets/perso-avatar-cadet-blue.png";

export default function App() {
  const userFromDB = {
    id: 1,
    email: "john@doe.fr",
    username: "joe",
    avatar: null,
    description: null,
  };

  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider
      value={{ utilisateur: user, setUtilisateur: setUser }}
    >
      <View style={styles.container}>
        <NavigationContainer>
          {/* {user === null ? <Auth /> : <ProfilStack />} */}
          {user ? <GlobalDrawer /> : <Auth />}
          <StatusBar style="auto" />
        </NavigationContainer>
      </View>
    </UserContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    // paddingBottom: 100,
    flex: 1,
  },
});
