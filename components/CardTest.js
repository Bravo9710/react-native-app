import { Box, HStack, Heading, Stack } from "native-base";
import {
  AspectRatio,
  Center,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function CardTest(props) {
  const handleLogoPress = () => {
    props.navigation.navigate("Home");
  };

  return (
    <View alignItems="center">
      <Image
        source={{
          uri: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg",
        }}
        alt="image"
      />
      <Center
        bg="violet.500"
        _dark={{
          bg: "violet.400",
        }}
        _text={{
          color: "warmGray.50",
          fontWeight: "700",
          fontSize: "xs",
        }}
        position="absolute"
        bottom="0"
        px="3"
        py="1.5">
        PHOTOS
      </Center>

      <Stack p="4" space={3}>
        <Stack space={2}>
          <Heading size="md" ml="-1">
            The Garden City
          </Heading>
          <Text
            fontSize="xs"
            _light={{
              color: "violet.500",
            }}
            _dark={{
              color: "violet.400",
            }}
            fontWeight="500"
            ml="-0.5"
            mt="-1">
            The Silicon Valley of India.
          </Text>
        </Stack>
        <Text fontWeight="400">
          Bengaluru (also called Bangalore) is the center of India's high-tech
          industry. The city is also known for its parks and nightlife.
        </Text>
        <HStack alignItems="center" space={4} justifyContent="space-between">
          <HStack alignItems="center">
            <Text
              color="coolGray.600"
              _dark={{
                color: "warmGray.200",
              }}
              fontWeight="400">
              6 mins ago
            </Text>
          </HStack>
        </HStack>
      </Stack>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#22c",
    flexDirection: "row",
    width: "100%",
    height: 60,
    padding: 5,
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  logo: {
    width: 50,
    height: 50,
    marginLeft: 10,
  },
});
