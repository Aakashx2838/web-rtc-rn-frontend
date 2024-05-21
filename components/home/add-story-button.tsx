import { MaterialIcons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";

import { Colors } from "@/constants/Colors";

export default function AddStoryButton() {
  return (
    <View style={styles.badge}>
      <View style={styles.badge_view}>
        <View style={styles.button}>
          <MaterialIcons name="add" size={16} style={styles.icon} />
        </View>
      </View>
      <Text style={styles.title}>Add Story</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  icon: {
    backgroundColor: Colors.light.background(),
    color: Colors.light.text(),
    borderRadius: Number.MAX_SAFE_INTEGER,
    padding: 2,
  },
  badge: {
    alignItems: "center",
    gap: 4,
    marginLeft: 20,
  },
  button: {
    height: 60,
    width: 60,
    backgroundColor: Colors.light.primary(),
    borderRadius: Number.MAX_SAFE_INTEGER,
    alignItems: "center",
    justifyContent: "center",
  },
  badge_view: {
    padding: 4,
    borderWidth: 2,
    borderColor: Colors.light.text(20),
    borderRadius: Number.MAX_SAFE_INTEGER,
  },
  title: {
    fontSize: 14,
    fontFamily: "Outfit_500Medium",
    color: Colors.light.text(),
  },
});
