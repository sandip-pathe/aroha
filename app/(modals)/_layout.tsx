import { Stack } from "expo-router";
import React from "react";

const AuthLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      {/* Add screens here */}
      <Stack.Screen name="login" options={{ title: "Login" }} />
      <Stack.Screen
        name="forgotPasswordModal"
        options={{ title: "Forgot Password" }}
      />
    </Stack>
  );
};

export default AuthLayout;
