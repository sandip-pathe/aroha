import { Image, StyleSheet, View, Text, TouchableOpacity } from "react-native";

import ParallaxScrollView from "@/components/ParallaxScrollView";
import { Ionicons } from "@expo/vector-icons";
import { getAuth, signOut } from "firebase/auth";
import { useRouter } from "expo-router";
import { Colors } from "@/constants/Colors";

export default function HomeScreen() {
  const auth = getAuth();
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      // router.replace("../(modals)/login"); // This is the original line but in our case it is automatically handled by the onAuthStateChanged listener in _layout.tsx
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <Image
          source={require("@/assets/images/partial-react-logo.png")}
          style={styles.reactLogo}
        />
      }
    >
      <View style={styles.stepContainer}>
        <View style={styles.titleContainer}>
          <Text style={{ fontSize: 24 }}>Step 1: Install React Native</Text>
          <Ionicons name="add-circle" size={24} color="green" />
        </View>
        <Text style={{ color: "white" }}>
          Follow the instructions on the React Native website to install React
          Native and its dependencies.
        </Text>
        <TouchableOpacity
          onPress={handleLogout}
          style={{ backgroundColor: Colors.primary, padding: "auto" }}
        >
          <Text style={{ color: "blue" }}>Logout</Text>
        </TouchableOpacity>
      </View>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
