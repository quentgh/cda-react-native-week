import { createDrawerNavigator } from "@react-navigation/drawer";
import ProfilStack from "../../stacks/ProfilStack";
import Navbar from "../../Container/Navbar/Navbar";
import GOT from "../../pages/GOT/GOT";
import { color } from "../../../styles/color";
import News from "../../pages/News/News";

const Drawer = createDrawerNavigator();

export default function GlobalDrawer() {
  return (
    <Drawer.Navigator
      screenOptions={{
        header: (navProps) => <Navbar {...navProps} />,
      }}
    >
      <Drawer.Screen
        name="news"
        component={News}
        options={{
          title: "Top headlines from News API",
        }}
      />
      <Drawer.Screen
        name="profilstack"
        component={ProfilStack}
        options={{
          title: "Profile page",
        }}
      />
      <Drawer.Screen
        name="map"
        component={Map}
        options={{
          title: "Map view with your location",
        }}
      />
      <Drawer.Screen
        name="got"
        component={GOT}
        options={{
          title: "Game of thrones characters",
        }}
      />
    </Drawer.Navigator>
  );
}
