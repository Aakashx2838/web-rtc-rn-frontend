import { ComponentProps, Fragment, useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

import { Colors } from "@/constants/Colors";
import { MaterialIcons } from "@expo/vector-icons";
import InputWrapper from "./input-wrapper";
import { ComponentStyles } from "@/utils/styles";

type TProps = ComponentProps<typeof TextInput> &
  ComponentProps<typeof InputWrapper> & {
    flex?: number;
  };

export default function Input({
  label,
  required,
  view,
  name,
  flex,
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
          <TextInput
            {...input}
            style={{
              ...ComponentStyles.input,
            }}
            secureTextEntry={input.secureTextEntry && !show}
          />
          {input.secureTextEntry && (
            <Pressable
              style={styles.icon_button}
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
  icon_button: {
    position: "absolute",
    right: 12,
    top: 13,
  },
  icon: {
    fontSize: 16,
    color: Colors.light.text(80),
  },
});
