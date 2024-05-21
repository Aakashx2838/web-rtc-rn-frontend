import { Colors } from "@/constants/Colors";
import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import Button from "../Button";

export default function ConversationInput() {
  return (
    <View style={styles.container}>
      <Button icon="add" variant="icon" />
      <TextInput multiline placeholder="Type a message" style={styles.input} />
      <View style={styles.separator} />
      <Button icon="mic" variant="icon" />
      {/* <Button icon="send" variant="icon" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  separator: {
    width: 1,
    backgroundColor: Colors.light.background(30),
    height: "60%",
  },
  container: {
    borderWidth: 1,
    borderColor: Colors.light.background(20),
    borderRadius: 25,
    marginHorizontal: 20,
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 8,
    gap: 8,
  },
  input: {
    paddingVertical: 10,
    fontFamily: "Outfit_500Medium",
    maxHeight: 250,
    flex: 1,
  },
});
