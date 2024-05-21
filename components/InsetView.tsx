import React from "react";

import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { Colors } from "@/constants/Colors";

type TProps = {
  children: React.ReactNode;
};

export default function InsetView({ children }: TProps) {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{
        paddingTop: insets.top,
        flex: 1,
        backgroundColor: Colors.light.background(),
        position: "relative",
      }}
    >
      {children}
    </View>
  );
}
