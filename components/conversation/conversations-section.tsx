import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { Link, useRouter } from "expo-router";

import CheckMark from "./read-check-mark";

import { ASSETS } from "@/assets";
import { Colors } from "@/constants/Colors";
import { DIMENSIONS } from "@/utils";

export default function ConversationsSection() {
  const router = useRouter();

  const handleConversationSelect = () => {
    router.push("/home/conversation/1");
  };

  return (
    <View style={styles.container}>
      <View style={styles.bar} />
      <View style={styles.conversations}>
        {Array.from({ length: 10 }).map((_, index) => (
          <Pressable onPress={handleConversationSelect} key={index}>
            <View style={styles.conversation_card}>
              <Image source={ASSETS.USER} height={60} width={60} />
              <View style={styles.message_view}>
                <View style={styles.flex_container}>
                  <Text style={styles.name}>John Doe</Text>
                  <Text style={styles.time}>12:25 PM</Text>
                </View>
                <View style={styles.flex_container}>
                  <Text style={styles.message}>Hey, how are you?</Text>
                  <CheckMark />
                </View>
              </View>
            </View>
          </Pressable>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  message_view: {
    gap: 4,
    flex: 1,
  },
  time: {
    fontSize: 12,
    color: Colors.light.background(80),
    fontFamily: "Outfit_500Medium",
  },
  name: {
    fontSize: 17,
    fontFamily: "Outfit_600SemiBold",
  },
  message: {
    fontSize: 14,
    color: Colors.light.background(80),
    fontFamily: "Outfit_500Medium",
  },
  flex_container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  bar: {
    height: 6,
    width: DIMENSIONS.width * 0.3,
    backgroundColor: Colors.light.primary(50),
    borderRadius: 3,
    alignSelf: "center",
  },
  container: {
    padding: 20,
    backgroundColor: Colors.light.text(),
    flex: 1,
    borderTopRightRadius: 32,
    borderTopLeftRadius: 32,
  },
  conversations: {},
  conversation_card: {
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: Colors.light.background(10),
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
});
