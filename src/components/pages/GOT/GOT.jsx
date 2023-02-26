import axios from "axios";
import { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { color } from "../../../styles/color";

const GOT_GET_CHARACTERS_URL = "https://thronesapi.com/api/v2/Characters";

export default function GOT() {
  const [listChar, setListChar] = useState([]);
  const [update, setUpdate] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios.get(GOT_GET_CHARACTERS_URL).then((reponse) => {
      setListChar(reponse.data);
      setIsLoading(false);
    });
    return () => {
      setIsLoading(true);
      setListChar([]);
    };
  }, [update]);

  if (isLoading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <ScrollView>
      {listChar.map((char) => {
        return (
          <View style={styles.charContainer} key={char.id}>
            <Text style={styles.title}>{char.fullName}</Text>
            <Image
              style={{ width: 300, height: 300 }}
              source={{ uri: char.imageUrl }}
            />
            <Text style={styles.charContainer}>{char.title}</Text>
          </View>
        );
      })}
      <TouchableOpacity
        style={styles.refreshBtn}
        onPress={() => setUpdate(!update)}
      >
        <Text style={styles.txtBtn}>Refresh</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  charContainer: {
    backgroundColor: "rgb(220,220,220)",
    margin: 20,
    padding: 20,
    borderBottomWidth: 2,
    borderTopWidth: 2,
    borderColor: "hsl(180,20%,25%)",
    maxWidth: 500,
    alignContent: "center",
  },
  title: {
    color: "hsl(180,20%,25%)",
    fontSize: 30,
    fontWeight: "bold",
  },
  content: {
    color: "hsl(180,20%,25%)",
    fontSize: 20,
  },
  refreshBtn: {
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
  txtBtn: {
    color: color.lightColor,
    textAlign: "center",
    fontSize: 20,
    marginHorizontal: 10,
  },
});
