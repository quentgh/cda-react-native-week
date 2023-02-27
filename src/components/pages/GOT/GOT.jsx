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

  useEffect(() =>
    // Expl with Fetch method
    // {
    //   fetch("https://thronesapi.com/api/v2/Characters").then((response) => {
    //     response.json().then((data) => {
    //       setListChar(data);
    //     });
    //   });
    // }, []);

    //Expl with Axios method
    {
      axios.get(GOT_GET_CHARACTERS_URL).then((response) => {
        setListChar(response.data);
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
            <Text style={styles.content}>{char.title}</Text>
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
    backgroundColor: "#f8f8f8",
    margin: 20,
    padding: 20,
    borderBottomWidth: 2,
    borderTopWidth: 2,
    borderColor: color.secondaryColor,
    maxWidth: 500,
    alignSelf: "center",
  },
  title: {
    color: color.thirdColor,
    fontSize: 30,
    fontWeight: "bold",
  },
  content: {
    margin: 12,
    color: color.thirdColor,
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
