import { MaterialIcons } from "@expo/vector-icons";
import { Image, StyleSheet, Text, View } from "react-native";

import Button from "@/components/Button";

import { ASSETS } from "@/assets";
import { Colors } from "@/constants/Colors";
import { DIMENSIONS } from "@/utils";
import { TextStyles } from "@/utils/styles";

export default function Onboarding() {
  return (
    <View style={styles.main}>
      <View style={styles.image_view}>
        <Image
          source={ASSETS.ONBOARDING_IMAGE}
          height={DIMENSIONS.height * 0.5}
          width={DIMENSIONS.width}
        />
        <Image source={ASSETS.BRAND_ABSTRACT} style={styles.abstract_image} />
      </View>
      <View style={styles.content_view_wrapper}>
        <View style={styles.content_view}>
          <View style={styles.text_content_view}>
            <Text style={TextStyles.h1}>
              Stay connected with your friends and family
            </Text>
            <View style={styles.feature_view}>
              <MaterialIcons
                name="verified"
                size={24}
                color={Colors.states.success}
              />
              <Text style={TextStyles.body}>Secure, private messaging</Text>
            </View>
          </View>
          <Button label="Get Started" icon="chevron-right" path="/auth" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: "column",
  },
  image_view: {
    flex: 0.9,
    backgroundColor: Colors.light.primary(),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
    position: "relative",
    overflow: "hidden",
  },
  abstract_image: {
    position: "absolute",
    top: 0,
    transform: "rotate(-45deg), scale(1.2)",
    zIndex: -1,
  },
  content_view_wrapper: {
    flex: 1,
    backgroundColor: Colors.light.background(),
  },
  content_view: {
    flex: 1,
    backgroundColor: Colors.light.background(),
    paddingHorizontal: 20,
    flexDirection: "column",
    justifyContent: "center",
    gap: 64,
  },
  text_content_view: {
    gap: 24,
  },
  feature_view: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
});
