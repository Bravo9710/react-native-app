// import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  AspectRatio,
  Box,
  Button,
  Center,
  HStack,
  Heading,
  Image,
  Stack,
  Toast,
  VStack,
} from "native-base";
import { StyleSheet, Text, View } from "react-native";
import Card from "../components/Card";
import CardTest from "../components/CardTest";

export default function HomeScreen() {
  return (
    <VStack>
      <CardTest />
    </VStack>
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
