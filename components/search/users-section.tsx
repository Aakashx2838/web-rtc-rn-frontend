import { Image, Pressable, StyleSheet, Text, View } from "react-native";

import { ASSETS } from "@/assets";
import { Colors } from "@/constants/Colors";
import { TextStyles } from "@/utils/styles";
import { Fragment } from "react";
import Button from "../Button";

type TProps = {
  title: string;
  layout: "horizontal" | "vertical";
};

export default function UsersSection({ title, layout }: TProps) {
  return (
    <Fragment>
      <Text style={TextStyles.h4_dark}>{title}</Text>
      <View
        style={
          layout === "horizontal"
            ? styles.users_horizontal
            : styles.users_vertical
        }
      >
        {Array.from({ length: 7 }).map((_, index) => (
          <Pressable
            key={index}
            style={
              layout === "horizontal"
                ? styles.user_card_horizontal
                : styles.user_card_vertical
            }
          >
            <View style={styles.image}>
              <Image source={ASSETS.USER} />
            </View>
            {layout === "vertical" && (
              <View style={styles.card_data_wrapper}>
                <View style={styles.card_data}>
                  <View style={{ gap: 5 }}>
                    <Text style={TextStyles.h5_dark}>First Last</Text>
                    <Text style={styles.subtext_sm}>Joined 2030, May 10th</Text>
                  </View>
                  <Text style={styles.subtext}>Last active 4 years ago</Text>
                </View>
                <Button variant="icon" icon="add" />
              </View>
            )}
          </Pressable>
        ))}
      </View>
    </Fragment>
  );
}

const styles = StyleSheet.create({
  card_data: {
    justifyContent: "space-between",
    flex: 1,
  },
  subtext: {
    color: Colors.light.background(90),
    fontFamily: "Outfit_500Medium",
    fontSize: 12,
  },
  subtext_sm: {
    color: Colors.light.background(90),
    fontFamily: "Outfit_500Medium",
    fontSize: 10,
  },
  users_horizontal: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingVertical: 28,
    rowGap: 8,
  },
  users_vertical: {
    marginTop: 16,
  },
  card_data_wrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "stretch",
    flex: 1,
  },
  image: {
    paddingVertical: 3,
    paddingHorizontal: 2,
    backgroundColor: Colors.light.background(10),
    borderRadius: 8,
  },
  user_card_horizontal: {
    flexBasis: "20%",
    alignItems: "center",
    justifyContent: "center",
  },
  user_card_vertical: {
    paddingVertical: 8,
    borderBottomColor: Colors.light.background(10),
    borderBottomWidth: 1,
    flexDirection: "row",
    gap: 16,
  },
});
