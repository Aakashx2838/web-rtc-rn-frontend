import { ComponentProps, useCallback } from "react";
import { useRouter } from "expo-router";
import { GestureResponderEvent, Pressable, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { Colors } from "@/constants/Colors";
import { TextStyles } from "@/utils/styles";

type TProps = {
  label?: string;
  icon?: ComponentProps<typeof MaterialIcons>["name"];
  reversed?: boolean;
  size?: "sm" | "md" | "lg";
  variant?:
    | "light"
    | "outline"
    | "primary"
    | "icon"
    | "success"
    | "danger"
    | "link";
  path?: string;
  plain?: boolean;
  floating?: boolean;
  action?: (e: GestureResponderEvent) => void;
};

export default function Button({
  icon,
  label,
  reversed,
  variant = "light",
  path,
  action,
  plain,
  size,
  floating,
}: TProps) {
  const { navigate } = useRouter();

  const backgroundColor = useCallback(() => {
    switch (variant) {
      case "light":
        return Colors.light.text();
      case "outline":
        return "transparent";
      case "primary":
        return Colors.light.primary();
      case "success":
        return Colors.states.success;
      case "link":
        return "transparent";
      case "danger":
        return Colors.states.danger;
      case "icon":
        return "transparent";
    }
  }, [variant]);

  const handlePress = useCallback(() => {
    if (path) {
      navigate(path);
      return;
    }
  }, [path]);

  return (
    <Pressable
      onPress={action || handlePress}
      style={{
        flexDirection: reversed ? "row-reverse" : "row",
        ...(!plain && {
          alignItems: "center",
          justifyContent: "center",
          padding: 16,
        }),
        backgroundColor: backgroundColor(),
        borderRadius: Number.MAX_SAFE_INTEGER,
        ...(variant === "outline" && {
          borderColor: Colors.light.text(70),
          borderWidth: 1,
        }),
        ...(variant === "icon" && {
          padding: 8,
          height: 36,
          width: 36,
          backgroundColor: Colors.light.primary(),
        }),
        ...(floating && {
          position: "absolute",
          bottom: 16,
          right: 16,
          borderRadius: 100,
          zIndex: 100,
        }),
        ...(size === "md" && {
          height: 51,
          width: 51,
        }),
      }}
    >
      {label && variant !== "icon" && (
        <Text
          style={{
            ...TextStyles.button,
            ...(variant === "outline" && {
              color: Colors.light.text(),
            }),
            ...(variant === "link" && {
              color: Colors.light.text(),
              textDecorationLine: "underline",
            }),
            ...(size === "sm" && {
              fontSize: 12,
            }),
          }}
        >
          {label}
        </Text>
      )}
      {icon && (
        <MaterialIcons name={icon} size={variant === "icon" ? 18 : 24} />
      )}
    </Pressable>
  );
}
