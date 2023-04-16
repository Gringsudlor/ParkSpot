import * as React from "react";
import { View, Text } from "react-native";
import {
  NavigationContainer,
  useNavigationContainerRef,
  useNavigation,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Button, StyleSheet, Image } from "react-native";
import MapView, { Callout, Circle, Marker } from "react-native-maps";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

function ShowMap() {
  // const [pin, setPin] = React.useState({
  //   latitude: 37.78825,
  //   longitude: -122.4324,
  // });
  const [region, setRegion] = React.useState({
    latitude: 13.727156,
    longitude: 100.77485,
  });
  return (
    <View style={{ flex: 1, paddingTop: 50 }}>
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: 13.727156,
          longitude: 100.77485,
        }}
      >
        <Marker
          coordinate={{
            latitude: region.latitude,
            longitude: region.longitude,
          }}
        >
          <Image
            source={require("./marker1.png")}
            style={{ height: 35, width: 35 }}
          />
        </Marker>
      </MapView>
      <GooglePlacesAutocomplete
        placeholder="Search"
        fetchDetails={true}
        GooglePlacesSearchQuery={{
          rankby: "distance",
        }}
        onPress={(data, details = null) => {
          console.log(data, details);
          setRegion({
            latitude: details.geometry.location.lat,
            longitude: details.geometry.location.lng,
          });
        }}
        query={{
          key: "AIzaSyCC2ONx9Tr4pzoiW4mDGBa8yJYXjTZ8Tx0",
          language: "th",
          components: "country:th",
          types: "establishment",
          radius: 30000,
          // location: `${region.latitude}, ${region.longitude}`,
        }}
        style={{
          container: {
            flex: 0,
            position: "absolute",
            width: "100%",
            zIndex: 1,
          },
          listView: { BackgroundColor: "white" },
        }}
      />
    </View>
  );
}

function HomeScreen() {
  return (
    <View>
      <LoginButton />
      <RegisterButton />
    </View>
  );
}
function LoginButton() {
  const navigation = useNavigation();

  return <Button title="Login" onPress={() => navigation.navigate("Login")} />;
}
function RegisterButton() {
  const navigation = useNavigation();

  return (
    <Button title="Register" onPress={() => navigation.navigate("Register")} />
  );
}
function LoginScreen() {
  return (
    <View>
      <Text>Login Screen</Text>
    </View>
  );
}
function RegisterScreen() {
  return (
    <View>
      <Text>Resgister Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <ShowMap />

      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
