import { StyleSheet } from "react-native";
import { WebView } from "react-native-webview";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <WebView
      style={styles.container}
      source={{
        uri: "https://react-bottom-nav-235g-git-main-99-zziy.vercel.app/",
      }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
