import { Colors } from "@/constants/Colors";
import { StyleSheet } from "react-native";

export const TextStyles = StyleSheet.create({
  h1: {
    fontSize: 42,
    lineHeight: 51,
    color: Colors.light.text(),
    fontFamily: "Outfit_600SemiBold",
  },
  h2: {
    fontSize: 32,
    fontWeight: "bold",
    color: Colors.light.text(),
  },
  h3: {
    fontSize: 24,
    color: Colors.light.text(),
    fontFamily: "Outfit_600SemiBold",
  },
  h4: {
    fontSize: 14,
    color: Colors.light.text(),
    fontFamily: "Outfit_600SemiBold",
  },
  h5: {
    fontSize: 12,
    fontWeight: "bold",
    color: Colors.light.text(),
  },
  body: {
    fontSize: 18,
    lineHeight: 24,
    color: Colors.light.text(),
    fontFamily: "Outfit_500Medium",
  },
  caption: {
    fontSize: 12,
  },
  button: {
    fontSize: 16,
    lineHeight: 22,
    color: Colors.light.background(),
    letterSpacing: 0.5,
    fontFamily: "Outfit_600SemiBold",
  },
});

export const ComponentStyles = StyleSheet.create({
  input: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4,
    borderWidth: 1,
    backgroundColor: Colors.light.text(10),
    borderColor: Colors.light.text(40),
    color: Colors.light.text(),
    fontFamily: "Outfit_400Regular",
  },
});
