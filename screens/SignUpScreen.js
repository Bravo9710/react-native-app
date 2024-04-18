import { useNavigation } from "@react-navigation/native";
import {
  Box,
  Button,
  Center,
  FormControl,
  HStack,
  Heading,
  Input,
  Link,
  ScrollView,
  Text,
  VStack,
  useToast,
} from "native-base";
import { useState } from "react";

export default function SignUpScreen() {
  const navigation = useNavigation();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState([]);
  const toast = useToast();

  const handleSignUp = async () => {
    const emptyFields = Object.entries(formData)
      .filter(([key, value]) => {
        return key !== "confirmPassword" && key !== "lastName" ? !value : false;
      })
      .map(([field]) => {
        return field === "firstName" ? "first name" : field;
      });

    if (emptyFields.length > 0) {
      setErrors((prevErrors) => [...prevErrors, ...emptyFields]);

      toast.show({
        title: `Please fill in ${emptyFields.join(", ")}`,
        status: "error",
        // bgColor: "#0F3", // Set a custom background color
      });
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      toast.show({
        title: "Passwords do not match",
        status: "error",
      });
      return;
    }

    try {
      const requestData = JSON.stringify(formData);
      const response = await fetch(
        "http://192.168.0.105:5000/api/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: requestData,
        },
      );

      const { message } = await response.json();
      toast.show({
        title: message,
        status: response.ok ? "success" : "error",
      });

      if (response.ok) {
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          confirmPassword: "",
        });
      }
    } catch (error) {
      toast.show({
        title: "Signup failed",
        status: "error",
      });
    }
  };

  return (
    <ScrollView>
      <Center w="100%">
        <Box safeArea p="2" w="90%" maxW="290" py="8">
          <Heading
            size="lg"
            color="coolGray.800"
            _dark={{
              color: "warmGray.50",
            }}
            fontWeight="semibold">
            Welcome
          </Heading>
          <Heading
            mt="1"
            color="coolGray.600"
            _dark={{
              color: "warmGray.200",
            }}
            fontWeight="medium"
            size="xs">
            Sign up to continue!
          </Heading>
          <VStack space={3} mt="5">
            <FormControl isRequired isInvalid={errors.includes("first name")}>
              <FormControl.Label>First name</FormControl.Label>
              <Input
                value={formData.firstName}
                onChangeText={(text) =>
                  setFormData({ ...formData, firstName: text })
                }
              />
            </FormControl>
            <FormControl>
              <FormControl.Label>Last name</FormControl.Label>
              <Input
                value={formData.lastName}
                onChangeText={(text) =>
                  setFormData({ ...formData, lastName: text })
                }
              />
            </FormControl>
            <FormControl isRequired isInvalid={errors.includes("email")}>
              <FormControl.Label>Email</FormControl.Label>
              <Input
                value={formData.email}
                type="email"
                onChangeText={(text) =>
                  setFormData({ ...formData, email: text })
                }
              />
            </FormControl>
            <FormControl isRequired isInvalid={errors.includes("password")}>
              <FormControl.Label>Password</FormControl.Label>
              <Input
                value={formData.password}
                onChangeText={(text) =>
                  setFormData({ ...formData, password: text })
                }
                type="password"
              />
              {/* <FormControl.ErrorMessage>
              Try different from previous passwords.
            </FormControl.ErrorMessage> */}
            </FormControl>
            <FormControl isRequired>
              <FormControl.Label>Confirm Password</FormControl.Label>
              <Input
                value={formData.confirmPassword}
                onChangeText={(text) =>
                  setFormData({ ...formData, confirmPassword: text })
                }
                type="password"
              />
            </FormControl>
            <Button mt="2" colorScheme="indigo" onPress={handleSignUp}>
              Sign up
            </Button>
            <HStack mt="6" justifyContent="center">
              <Text
                fontSize="sm"
                color="coolGray.600"
                _dark={{
                  color: "warmGray.200",
                }}>
                I have registration.{" "}
              </Text>
              <Link
                _text={{
                  color: "indigo.500",
                  fontWeight: "medium",
                  fontSize: "sm",
                }}
                onPress={() => navigation.navigate("Sign In")}>
                Sign In
              </Link>
            </HStack>
          </VStack>
        </Box>
      </Center>
    </ScrollView>
  );
}
