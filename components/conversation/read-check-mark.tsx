import { MaterialIcons } from "@expo/vector-icons";
import { StyleSheet, View } from "react-native";

type TProps = {
  isRead?: boolean;
};

export default function CheckMark({ isRead }: TProps) {
  return (
    <View style={styles.container}>
      <MaterialIcons name="check" size={16} />
      {isRead && <MaterialIcons name="check" size={16} style={styles.read} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
  },
  read: {
    position: "absolute",
    right: 4,
    bottom: 1,
    color: "green",
  },
});
