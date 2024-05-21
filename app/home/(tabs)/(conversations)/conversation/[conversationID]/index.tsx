import { LinearGradient } from "expo-linear-gradient";
import { Image, StyleSheet, Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import InsetView from "@/components/InsetView";
import ConversationPane from "@/components/conversation/conversation-pane";

import { Colors } from "@/constants/Colors";
import { ASSETS } from "@/assets";
import { TextStyles } from "@/utils/styles";

export default function Conversation() {
  return (
    <InsetView>
      <LinearGradient
        colors={[Colors.light.primary(10), "transparent"]}
        style={styles.background}
      />

      <View style={styles.header_wrapper}>
        <View style={styles.container}>
          <Image source={ASSETS.USER} />
          <View style={styles.main}>
            <Text style={TextStyles.h3}>Aakash Acharya</Text>
            <Text style={TextStyles.h4}>
              <MaterialIcons name="wifi" color={Colors.states.success} />
              {"  "}
              Online
            </Text>
          </View>
        </View>
        <MaterialIcons name="more-vert" size={24} color={Colors.light.text()} />
      </View>
      <ConversationPane />
    </InsetView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 14,
    flex: 1,
  },
  header_wrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
  },
  main: {
    gap: 4,
    flex: 1,
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
});
