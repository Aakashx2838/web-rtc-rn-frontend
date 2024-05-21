import { LinearGradient } from "expo-linear-gradient";
import { Image, StyleSheet, Text, View } from "react-native";

import Button from "@/components/Button";
import Input from "@/components/inputs/input";

import { Colors } from "@/constants/Colors";
import { ASSETS } from "@/assets";
import { TextStyles } from "@/utils/styles";
import DateInput from "@/components/inputs/date-input";

export default function Register() {
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
        <View style={styles.input_flex_group}>
          <Input
            name="First name"
            autoComplete="given-name"
            textContentType="givenName"
            flex={1}
          />
          <Input
            name="Last name"
            autoComplete="name-family"
            textContentType="familyName"
            flex={1}
          />
        </View>
        <DateInput name="Date of Birth" type="date" extendedDateFormat />
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
        <Button
          label="Sign in differently?"
          variant="link"
          path="/auth"
          plain
          size="sm"
        />
      </View>
      <Button label="Create account" icon="chevron-right" />
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
  input_flex_group: {
    flexDirection: "row",
    gap: 20,
  },
});
