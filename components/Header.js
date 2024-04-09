import { NativeModules, StyleSheet, Text, View } from "react-native";
const { StatusBarManager } = NativeModules;
export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={{ color: "#fff" }}>Top nav bar</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#22c",
    width: "100%",
    height: 50,
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
});
