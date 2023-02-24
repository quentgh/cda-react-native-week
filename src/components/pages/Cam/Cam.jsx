import { Camera } from "expo-camera";
import { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  Dimensions,
} from "react-native";
import Card from "../../HOC/Card/Card";
import { color } from "../../../styles/color";

const card = {
  title: "Camera preview",
  content: "Take a picture for your avatar",
};

export default function Cam() {
  const [permission, requestPermission] = Camera.useCameraPermissions();
  let size = Dimensions.get("window");
  const camWidth = size.width;
  const camHeight = (size.width * 16) / 9;

  useEffect(() => {
    if (permission && permission.status != "granted") {
      requestPermission();
    }
  }, [permission]);

  if (!permission) {
    return <Text>Please accept to use camera</Text>;
  }

  if (!permission.granted) {
    return <Text>Camera access denied</Text>;
  }

  return (
    <View style={styles.camPrw}>
      <Camera
        ratio="1:1"
        style={{ width: camWidth, height: camHeight }}
      ></Camera>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    paddingTop: 50,
  },

  camPrw: {
    padding: 16,
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  // title: {
  //   padding: 10,
  //   fontSize: 20,
  // },

  // userZone: {
  //   marginTop: 20,
  //   padding: 8,
  //   backgroundColor: "#5F9EA0",
  //   borderRadius: 4,
  // },

  flipCamBtn: {
    alignItems: "center",
    backgroundColor: color.primaryColor,
    margin: 20,
    padding: 10,
    color: color.lightColor,
    borderRadius: 5,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
