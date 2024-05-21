import { Image, StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import Button from "@/components/Button";
import { Colors } from "@/constants/Colors";

import { ASSETS } from "@/assets";
import { TextStyles } from "@/utils/styles";

export default function Auth() {
  return (
    <View style={styles.main}>
      <LinearGradient
        colors={[Colors.light.primary(20), "transparent"]}
        style={styles.background}
      />
      <View style={styles.logo_wrapper}>
        <View style={styles.logo_view}>
          <Image source={ASSETS.LOGO} style={styles.logo} />
        </View>
      </View>
      <View style={styles.text_button_wrapper}>
        <View style={styles.text_view}>
          <Text style={{ ...TextStyles.h1, textAlign: "center" }}>
            <Text style={{ color: Colors.light.primary() }}>Millions</Text> of
            users.
          </Text>
          <Text style={{ ...TextStyles.h1, textAlign: "center" }}>
            Waiting for{" "}
            <Text style={{ color: Colors.light.primary() }}>you</Text>.
          </Text>
        </View>
        <View style={styles.buttons_view}>
          <Button label="Sign up" path="/auth/register" variant="success" />
          <Button
            label="Continue with Google"
            path="/signup-google"
            variant="outline"
          />
          <Button label="Log in with email" path="/auth/login" variant="link" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    position: "relative",
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: Colors.light.background(),
  },
  logo_wrapper: {
    flex: 0.8,
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: 41,
  },
  logo_view: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.light.text(),
    width: 64,
    padding: 20,
    borderRadius: Number.MAX_SAFE_INTEGER,
    aspectRatio: 1,
  },
  logo: {
    width: 51,
    height: 51,
  },
  text_button_wrapper: {
    padding: 20,
    flex: 1,
  },
  text_view: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttons_view: {
    flex: 1,
    padding: 20,
    gap: 8,
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
});
