import { LinearGradient } from "expo-linear-gradient";
import { Image, StyleSheet, Text, View } from "react-native";

import Button from "@/components/Button";
import Input from "@/components/inputs/input";

import { Colors } from "@/constants/Colors";
import { ASSETS } from "@/assets";
import { TextStyles } from "@/utils/styles";

export default function Login() {
  return (
    <View style={styles.main}>
      <LinearGradient
        colors={[Colors.light.primary(20), "transparent"]}
        style={styles.background}
      />
      <View style={styles.brand_container}>
        <Image source={ASSETS.LOGO} style={styles.logo} />
        <Text style={TextStyles.h1}>Ito</Text>
      </View>
      <View style={styles.form}>
        <Input
          name="Email"
          autoComplete="email"
          textContentType="emailAddress"
        />
        <Input
          name="Password"
          autoComplete="password"
          textContentType="password"
          secureTextEntry
        />
        <View style={styles.actions_view}>
          <Button
            label="Sign up?"
            variant="link"
            path="/auth/register"
            plain
            size="sm"
          />
          <Text style={styles.bar}> | </Text>
          <Button label="Forgot password?" variant="link" plain size="sm" />
        </View>
      </View>
      <Button label="Login" path="/home" />
    </View>
  );
}

const styles = StyleSheet.create({
  bar: {
    color: Colors.light.text(50),
  },
  actions_view: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  main: {
    flex: 1,
    position: "relative",
    flexDirection: "column",
    paddingVertical: 100,
    backgroundColor: Colors.light.background(),
    gap: 36,
    padding: 20,
  },
  brand_container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },
  logo: {
    width: 64,
    height: 64,
    alignSelf: "center",
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  form: {
    gap: 20,
  },
});
