import React, { FC, ReactElement, useState, useRef, useEffect } from "react";
import {
  Dimensions,
  View,
  Text,
  Pressable,
  Button,
  StyleSheet,
  Image,
  TextInput,
} from "react-native";
import {
  NavigationContainer,
  useNavigationContainerRef,
  useNavigation,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MapView, { Callout, Circle, Marker } from "react-native-maps";
//import { PanGestureHandler } from "react-native-gesture-handler";
//import { useGestureHandlerRef } from "react-native-gesture-handler";
import RBSheet from "react-native-raw-bottom-sheet";
import { RegisterScreen } from "./Register.js";
import { LoginScreen } from "./Login.js";
import { ShowMap } from "./ShowMap.js";
import { BottomSheet } from "./BottomSheet.js";
import { StatusBar } from "expo-status-bar";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const ScreenHeight = Dimensions.get("screen").height;
const ScreenWidth = Dimensions.get("screen").width;

export function DrawerContent() {
  const navigation = useNavigation();
  return (
    <Pressable
      style={{
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 16,
        width: "60%",
        height: 45,
        backgroundColor: "#DB7038",
        marginBottom: 40,
      }}
      onPress={() => navigation.navigate("Login")}
    >
      <Text style={{ fontWeight: "bold", color: "#fff" }}>Sign In</Text>
    </Pressable>
  );
}

export function LoginButton() {
  const navigation = useNavigation();

  return (
    <Pressable onPress={() => navigation.navigate("Login")}>
    <Text style={{right: 15, fontSize: 18 , fontWeight: "bold"}}>Sign In</Text>
    </Pressable>
  );
}

export function DrawerButton() {
  const navigation = useNavigation();

  return (
    <Pressable onPress={() => navigation.toggleDrawer()}>
      <Image
        style={{
          width: 25,
          height: 25,
          left: 15,
        }}
        source={require("../Image/drawerIcon.png")}
      />
    </Pressable>
  );
}

export function CustomHeaderLoggedOut() {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flexDirection: "row",
        height: 60,
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 35,
      }}
    >
      <DrawerButton />
      <Image
        source={require("../Image/logo.png")}
        style={{ width: 100, height: 25 }}
      />
      <LoginButton />
    </View>
  );
}

export default CustomHeaderLoggedOut;
