import React from "react";
import {
  StyleSheet,
  Text,
  Image,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { IgcyScreenProps, RootStackScreenProps } from "../navigation";

const LoginScreen = ({ navigation }: RootStackScreenProps<"LoginScreen">) => {
  return (
    <View
      style={{
        backgroundColor: "#fff",
        width: "100%",
        height: "100%",
      }}
    >
      <View
        style={{
          alignItems: "center",
          height: "100%",
          justifyContent: "space-around",
        }}
      >
        <View style={{ height: 80, width: 60 }} />
        <Image
          source={require("../images/brand_name.png")}
          style={{
            resizeMode: "contain",
            height: 200,
          }}
        />
        <View
          style={{
            width: "80%",
            justifyContent: "center",
            flex: 1,
          }}
        >
          <TextInput
            keyboardType="default"
            placeholder="email or username"
            placeholderTextColor={"gray"}
            returnKeyType={"done"}
            style={styles.inputText}
          />
          <TextInput
            keyboardType="default"
            secureTextEntry
            placeholder="password"
            placeholderTextColor={"gray"}
            returnKeyType={"done"}
            style={styles.inputText}
          />
          <TouchableOpacity
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-end",
              marginTop: 5,
              paddingVertical: 3,
            }}
          >
            <Text style={{ color: "gray", fontSize: 14 }}>
              Forgot password?
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              height: 50,
              marginTop: 30,
              backgroundColor: "#000",
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 10,
              borderWidth: 10,
              borderColor: "#000",
            }}
            onPress={() => {
              navigation.navigate("CreateAccountScreen");
            }}
          >
            <Text
              style={{
                fontSize: 20,
                color: "#fff",
              }}
            >
              Sign up
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              height: 50,
              marginTop: 40,
              backgroundColor: "#000",
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 10,
              borderWidth: 10,
              borderColor: "#000",
            }}
          >
            <Text
              style={{
                color: "#fff",
                fontSize: 20,
              }}
            >
              Sign In
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ height: 200, width: 60 }} />
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  inputText: {
    backgroundColor: "#EFF0F6",
    marginTop: 20,
    textAlign: "center",
    width: "100%",
    marginLeft: 0,
    height: 60,
    borderColor: "#EFF0F6",
    borderWidth: 2,
    borderRadius: 5,
    fontSize: 18,
    paddingHorizontal: 10,
  },
});
