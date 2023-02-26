import { createDrawerNavigator } from "@react-navigation/drawer";
import ProfilStack from "../../stacks/ProfilStack";
import Navbar from "../../Container/Navbar/Navbar";
import GOT from "../../pages/GOT/GOT";

const Drawer = createDrawerNavigator();

export default function GlobalDrawer() {
  return (
    <Drawer.Navigator
      screenOptions={{
        header: (navProps) => <Navbar {...navProps} />,
      }}
    >
      <Drawer.Screen
        name="profilstack"
        component={ProfilStack}
        options={{
          title: "Profile page",
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
