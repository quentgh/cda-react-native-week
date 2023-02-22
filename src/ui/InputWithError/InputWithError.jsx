import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { TextInput } from "react-native";
import { useState } from "react";
// import eye from "../../../assets/eye-solid.svg";
// import eyeSlash from "../../../assets/eye-slash-solid.svg";

export default function InputWithError({
  value,
  onChangeText,
  placeholder,
  keyboardType,
  errorMsg,
  isPassword,
}) {
  //   const [isPasswordShow, setIsPasswordShow] = useState(true);

  //   function togglePasseword() {
  //     setIsPasswordShow(!isPasswordShow);
  //   }

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
        keyboardType={keyboardType}
        secureTextEntry={isPassword}
      ></TextInput>
      <Text style={styles.error}>{errorMsg}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },

  error: {
    color: "tomato",
  },

//   img: {
//     width: 20,
//   },
});
