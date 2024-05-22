import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, Text, View } from "react-native";

import InsetView from "@/components/InsetView";
import ParallaxScrollView from "@/components/ParallaxScrollView";

import { Colors } from "@/constants/Colors";
import { TextStyles } from "@/utils/styles";
import Input from "@/components/inputs/input";
import UsersSection from "@/components/search/users-section";

export default function Search() {
  return (
    <InsetView>
      <LinearGradient
        colors={[Colors.light.primary(10), "transparent"]}
        style={styles.background}
      />
      <ParallaxScrollView
        parallaxItem={
          <View style={styles.header_wrapper}>
            <View style={styles.title_users_view}>
              <Text style={TextStyles.h3}>Search users</Text>
              <Input variant="search" placeholder="Search users..." />
            </View>
          </View>
        }
      >
        <View style={styles.container}>
          <UsersSection title="From contacts" layout="horizontal" />
          <UsersSection title="From search" layout="vertical" />
        </View>
      </ParallaxScrollView>
    </InsetView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: Colors.light.text(),
    flex: 1,
    borderTopRightRadius: 32,
    borderTopLeftRadius: 32,
  },
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
