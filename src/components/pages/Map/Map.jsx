import React, { useState } from "react";
import { color } from "../../../styles/color";
import MapView from "react-native-maps";

export default function Map() {
  const [mapRegion, setmapRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  return (
    <View style={styles.container}>
      <MapView
        style={{ alignSelf: "stretch", with: "100%", height: "100%" }}
        region={mapRegion}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgb(220,220,220)",
    margin: 20,
    padding: 20,
    borderBottomWidth: 2,
    borderTopWidth: 2,
    borderColor: color.secondaryColor,
    maxWidth: 500,
    alignContent: "center",
  },

  map: {
    backgroundColor: "rgb(220,220,220)",
    margin: 20,
    padding: 20,
    borderBottomWidth: 2,
    borderTopWidth: 2,
    borderColor: color.secondaryColor,
    alignContent: "center",
  },
});
