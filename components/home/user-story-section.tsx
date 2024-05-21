import { ScrollView, StyleSheet, View } from "react-native";

import UserBadge from "./user-badge";
import AddStoryButton from "./add-story-button";

export default function UserStorySection() {
  return (
    <View>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal
        style={styles.user_badges_view}
      >
        <AddStoryButton />
        {Array.from({ length: 5 }).map((_, index) => (
          <UserBadge key={index} />
        ))}
        <View style={{ width: 16 }} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  user_badges_view: {
    paddingVertical: 2,
    flexDirection: "row",
  },
});
