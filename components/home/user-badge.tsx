import React from "react";

import { Image, StyleSheet, Text, View } from "react-native";

import { ASSETS } from "@/assets";
import { Colors } from "@/constants/Colors";

export default function UserBadge() {
  return (
    <View style={styles.badge}>
      <View style={styles.badge_view}>
        <Image style={styles.user_image} source={ASSETS.USER} />
      </View>
      <Text style={styles.username}>Pranish</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    alignItems: "center",
    gap: 4,
    marginLeft: 14,
  },
  user_image: {
    height: 60,
    width: 60,
  },
  badge_view: {
    padding: 4,
    borderWidth: 2,
    borderColor: Colors.light.primary(),
    borderRadius: Number.MAX_SAFE_INTEGER,
  },
  username: {
    fontSize: 14,
    fontFamily: "Outfit_500Medium",
    color: Colors.light.text(),
  },
});
