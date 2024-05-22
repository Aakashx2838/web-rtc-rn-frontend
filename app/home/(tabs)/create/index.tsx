import Button from "@/components/Button";
import InsetView from "@/components/InsetView";
import { Colors } from "@/constants/Colors";
import { DIMENSIONS } from "@/utils";
import { Image, ScrollView, StyleSheet, View } from "react-native";

export default function Create() {
  return (
    <InsetView>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.scrollable_container}
      >
        {Array.from({ length: 100 }).map((_, index) => (
          <View style={styles.story_item}>
            <Image
              src={"https://picsum.photos/200/300"}
              style={{
                flex: 1,
                width: "100%",
              }}
            />
          </View>
        ))}
      </ScrollView>
      <Button icon="photo-camera" variant="icon" size="md" floating />
    </InsetView>
  );
}

const styles = StyleSheet.create({
  story_item: {
    width: DIMENSIONS.width / 3,
    height: DIMENSIONS.width / 3,
    backgroundColor: Colors.light.background(10),
  },
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: Colors.light.text(),
  },
  scrollable_container: {
    flexDirection: "row",
    flex: 1,
    flexWrap: "wrap",
  },
});
