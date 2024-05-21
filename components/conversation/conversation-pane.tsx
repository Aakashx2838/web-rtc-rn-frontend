import { Colors } from "@/constants/Colors";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import ConversationInput from "./conversation-input";

export default function ConversationPane() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.messages_view}>
        <Text style={styles.message_time_incoming}>12:00 PM</Text>
        <Text style={styles.message_incoming}>Hi</Text>

        <Text style={styles.message_time_outgoing}>12:00 PM</Text>
        <Text style={styles.message_outgoing}>Hello</Text>
      </ScrollView>
      <ConversationInput />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.light.text(),
    flex: 1,
    borderTopRightRadius: 32,
    borderTopLeftRadius: 32,
  },
  messages_view: {
    flexDirection: "column-reverse",
    padding: 20,
  },
  message_blank: {
    padding: 10,
  },
  message_incoming: {
    backgroundColor: Colors.light.primary(50),
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: Number.MAX_SAFE_INTEGER,
    maxWidth: "70%",
    alignSelf: "flex-start",
    fontFamily: "Outfit_500Medium",
    marginVertical: 5,
  },
  message_outgoing: {
    backgroundColor: Colors.light.primary(80),
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: Number.MAX_SAFE_INTEGER,
    maxWidth: "70%",
    alignSelf: "flex-end",
    fontFamily: "Outfit_500Medium",
    marginVertical: 5,
  },
  message_time_incoming: {
    color: Colors.light.background(70),
    fontSize: 12,
    textAlign: "left",
    marginVertical: 5,
    fontFamily: "Outfit_500Medium",
  },
  message_time_outgoing: {
    color: Colors.light.background(70),
    fontSize: 12,
    textAlign: "right",
    marginVertical: 5,
    fontFamily: "Outfit_500Medium",
  },
});
