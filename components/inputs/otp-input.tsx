import { Colors } from "@/constants/Colors";
import { ComponentStyles, TextStyles } from "@/utils/styles";
import { StyleSheet } from "react-native";
import { OtpInput } from "react-native-otp-entry";

export default function OTPInput() {
  return (
    <OtpInput
      numberOfDigits={6}
      focusColor="green"
      focusStickBlinkingDuration={500}
      onTextChange={(text) => console.log(text)}
      onFilled={(text) => console.log(`OTP is ${text}`)}
      textInputProps={{
        accessibilityLabel: "One-Time Password",
      }}
      theme={{
        containerStyle: styles.container,
        pinCodeContainerStyle: styles.pinCodeContainer,
        pinCodeTextStyle: styles.pinCodeText,
        focusStickStyle: styles.focusStick,
        focusedPinCodeContainerStyle: styles.activePinCodeContainer,
      }}
    />
  );
}

const styles = StyleSheet.create({
  container: {},
  pinCodeContainer: ComponentStyles.input,
  pinCodeText: TextStyles.h2,
  focusStick: {
    backgroundColor: Colors.light.text(),
  },
  activePinCodeContainer: {
    borderColor: Colors.light.text(),
  },
});
