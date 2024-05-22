import { ASSETS } from "@/assets";
import Button from "@/components/Button";
import Input from "@/components/inputs/input";
import OTPInput from "@/components/inputs/otp-input";
import { Colors } from "@/constants/Colors";
import { TextStyles } from "@/utils/styles";
import { LinearGradient } from "expo-linear-gradient";
import { Image, StyleSheet, Text, View } from "react-native";

export default function VerifyOTP() {
  const handleInitiateRecovery = () => {};

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
        <OTPInput />
        <View>
          <Button label="Verify OTP" path="/auth/new-password" />
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
    paddingVertical: 100,
    backgroundColor: Colors.light.background(),
    gap: 64,
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
    gap: 64,
  },
});
