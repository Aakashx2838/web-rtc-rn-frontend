import React, { ComponentProps } from "react";
import { StyleSheet, Text, View } from "react-native";

import { Colors } from "@/constants/Colors";

type TProps = {
  required?: boolean;
  name?: string;
  label?: ComponentProps<typeof Text>;
  view?: ComponentProps<typeof View>;
  children?: React.ReactNode;
};

export default function InputWrapper({
  name,
  required,
  label,
  view,
  children,
}: TProps) {
  return (
    <View
      {...view}
      style={{
        flex: 1,
      }}
    >
      <Text
        {...label}
        style={{
          ...styles.label,
        }}
      >
        {name}
        {required && <Text style={styles.required}>*</Text>}
      </Text>
      <View style={styles.container}>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    color: Colors.light.text(),
    fontFamily: "Outfit_400Regular",
  },
  required: {
    color: Colors.states.danger,
  },
});
