import { StyleSheet } from "react-native";
import { WebView } from "react-native-webview";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import NotificationScreen from "./NotificationScreen";
import HomeScreen from "./HomeScreen";
import BusinessCardScreen from "./BusinessCardScreen";
import { NavigationContainer } from "@react-navigation/native";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        tabBarOptions={{
          activeTintColor: "#42f44b",
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: "커뮤니티",
          }}
        />
        <Tab.Screen
          name="BusinessCard"
          component={BusinessCardScreen}
          options={{
            tabBarLabel: "명함첩",
          }}
        />
        <Tab.Screen
          name="Notification"
          component={NotificationScreen}
          options={{
            tabBarLabel: "알림",
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
  /* return (
    <WebView
      style={styles.container}
      source={{
        uri: "https://react-bottom-nav-235g-git-main-99-zziy.vercel.app/",
      }}
    />
  ); */
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
