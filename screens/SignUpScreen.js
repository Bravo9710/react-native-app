import {
  Box,
  Button,
  Center,
  FormControl,
  Heading,
  Input,
  VStack,
  useToast,
} from "native-base";
import { useState } from "react";

export default function SignUpScreen() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const toast = useToast();

  const handleSignUp = async () => {
    try {
      // Check if passwords match
      if (password !== confirmPassword) {
        toast.show({
          title: "Passwords do not match",
          status: "error",
        });
        return;
      }

      const requestData = JSON.stringify({
        username,
        email,
        password,
      });

      // Send signup request to the server
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

      // Display success message
      toast.show({
        title: "Signup successful!",
        status: "success",
      });

      // Clear form fields
      setUsername("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    } catch (error) {
      toast.show({
        title: "Signup failed",
        status: "error",
      });
    }
  };

  return (
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
          <FormControl>
            <FormControl.Label>Username</FormControl.Label>
            <Input value={username} onChangeText={setUsername} />
          </FormControl>
          <FormControl>
            <FormControl.Label>Email</FormControl.Label>
            <Input value={email} onChangeText={setEmail} />
          </FormControl>
          <FormControl>
            <FormControl.Label>Password</FormControl.Label>
            <Input
              value={password}
              onChangeText={setPassword}
              type="password"
            />
          </FormControl>
          <FormControl>
            <FormControl.Label>Confirm Password</FormControl.Label>
            <Input
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              type="password"
            />
          </FormControl>
          <Button mt="2" colorScheme="indigo" onPress={handleSignUp}>
            Sign up
          </Button>
        </VStack>
      </Box>
    </Center>
  );
}
