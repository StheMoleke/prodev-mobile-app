import { View, Text, ImageBackground, Image, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { styles } from "../styles/_mainstyle";
import { BACKGROUNDIMAGE, HEROLOGO } from "../constants";

export default function Index() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <ImageBackground source={BACKGROUNDIMAGE} style={styles.backgroundImageContainer}>
        <View style={styles.logoContainer}>
          <Image source={HEROLOGO} resizeMode="contain" />
        </View>

        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>Welcome to ProDev App</Text>
        </View>

        <View style={styles.titleSubTextContainer}>
          <Text style={styles.titleSubText}>
            Build your skills and grow with interactive learning.
          </Text>
        </View>

        <View style={{ marginTop: 80 }}>
          <View style={styles.buttonGroup}>
            <TouchableOpacity
              style={styles.buttonPrimary}
              onPress={() => router.push("/signin")}
            >
              <Text style={styles.buttonPrimaryText}>Sign In</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.buttonSecondary}
              onPress={() => router.push("/join")}
            >
              <Text style={styles.buttonSecondaryText}>Join Now</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}
