import { ComponentProps, Fragment, useState } from "react";
import { Pressable, StyleSheet, TextInput, View } from "react-native";

import { Colors } from "@/constants/Colors";
import { MaterialIcons } from "@expo/vector-icons";
import InputWrapper from "./input-wrapper";
import { ComponentStyles } from "@/utils/styles";

type TProps = ComponentProps<typeof TextInput> &
  ComponentProps<typeof InputWrapper> & {
    flex?: number;
    variant?: "search";
  };

export default function Input({
  label,
  required,
  view,
  name,
  flex,
  variant,
  ...input
}: TProps) {
  const [show, setShow] = useState(false);

  return (
    <View
      style={{
        flexDirection: "row",
        gap: 20,
        flex,
      }}
    >
      <InputWrapper label={label} name={name} required={required} view={view}>
        <Fragment>
          {variant === "search" && (
            <Pressable
              style={styles.icon_button_left}
              onPress={() => setShow((prev) => !prev)}
            >
              <MaterialIcons name={"search"} size={26} color={"white"} />
            </Pressable>
          )}
          <TextInput
            {...input}
            placeholderTextColor={Colors.light.text(90)}
            style={{
              ...ComponentStyles.input,
              ...(variant === "search" && {
                borderRadius: Number.MAX_SAFE_INTEGER,
                paddingLeft: 48,
                paddingRight: 24,
                paddingVertical: 12,
                fontSize: 16,
              }),
            }}
            secureTextEntry={input.secureTextEntry && !show}
          />
          {input.secureTextEntry && (
            <Pressable
              style={{ ...styles.icon_button_right }}
              onPress={() => setShow((prev) => !prev)}
            >
              <MaterialIcons
                name={show ? "visibility" : "visibility-off"}
                style={styles.icon}
              />
            </Pressable>
          )}
        </Fragment>
      </InputWrapper>
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
  icon_button_right: {
    position: "absolute",
    right: 12,
    top: 13,
  },
  icon_button_left: {
    position: "absolute",
    left: 12,
    top: 14,
  },
  icon: {
    fontSize: 16,
    color: Colors.light.text(80),
  },
});
