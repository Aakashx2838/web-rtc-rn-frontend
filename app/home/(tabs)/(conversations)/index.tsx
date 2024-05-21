import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, Text, View } from "react-native";

import InsetView from "@/components/InsetView";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import UserStorySection from "@/components/home/user-story-section";
import ConversationsSection from "@/components/conversation/conversations-section";

import { Colors } from "@/constants/Colors";
import { TextStyles } from "@/utils/styles";

export default function Conversations() {
  return (
    <InsetView>
      <LinearGradient
        colors={[Colors.light.primary(10), "transparent"]}
        style={styles.background}
      />
      <ParallaxScrollView
        parallaxItem={
          <View style={styles.header_wrapper}>
            <View style={styles.main}>
              <View style={styles.title_users_view}>
                <Text style={TextStyles.h3}>
                  <Text style={{ fontFamily: "Outfit_400Regular" }}>
                    Welcome back
                  </Text>
                  , Aakash
                </Text>
              </View>
            </View>
            <UserStorySection />
          </View>
        }
      >
        <ConversationsSection />
      </ParallaxScrollView>
    </InsetView>
  );
}

const styles = StyleSheet.create({
  header_wrapper: {
    marginBottom: 12,
  },
  main: {
    flexDirection: "column",
  },
  title_users_view: {
    padding: 20,
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
});
