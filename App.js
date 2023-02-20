import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{fontSize:35}}>Hello !!</Text>
      <Button onPress={() => alert("Clique!")} title="Clique moi"></Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width:"80%",
    margin: 10,
    flex: 1,
    backgroundColor: 'teal',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// 1er : les composants natifs
// 2d : les événements
// 2e : le style : inline style, stylesheet