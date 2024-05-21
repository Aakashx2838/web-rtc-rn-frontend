import { Colors } from "@/constants/Colors";
import { Feather } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { Fragment } from "react";
import { View } from "react-native";

export default function AppLayout() {
  return (
    <View style={{ flex: 1, backgroundColor: Colors.light.text() }}>
      <Tabs
        tabBar={() => <Fragment />}
        screenOptions={{
          headerShown: false,
          tabBarLabelStyle: {
            display: "none",
          },
          tabBarStyle: {
            backgroundColor: "white",
            borderColor: "rgba(0,0,0,0.1)",
            borderWidth: 1,
            height: 60,
            paddingHorizontal: 24,
          },
          tabBarItemStyle: {
            justifyContent: "center",
            borderRadius: Number.MAX_SAFE_INTEGER,
          },
          tabBarIconStyle: {
            flex: 0.5,
          },
        }}
      >
        <Tabs.Screen
          name="(conversations)/index"
          options={{
            tabBarActiveBackgroundColor: Colors.light.text(90),
            href: "/home/(tabs)/(conversations)",
            tabBarIcon: ({ focused }) => (
              <Feather
                name="message-circle"
                size={28}
                color={
                  focused
                    ? Colors.light.background()
                    : Colors.light.background(90)
                }
              />
            ),
          }}
        />
        <Tabs.Screen
          name="calls/index"
          options={{
            tabBarActiveBackgroundColor: Colors.light.text(90),
            href: "/home/(tabs)/calls",
            tabBarIcon: ({ focused }) => (
              <Feather
                name="phone-call"
                size={25}
                color={
                  focused
                    ? Colors.light.background()
                    : Colors.light.background(90)
                }
              />
            ),
          }}
        />
        <Tabs.Screen
          name="create/index"
          options={{
            href: "/home/(tabs)/create",
            tabBarIcon: () => (
              <View
                style={{
                  backgroundColor: Colors.light.primary(),
                  aspectRatio: 1,
                  borderRadius: Number.MAX_SAFE_INTEGER,
                  height: 64,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Feather name="plus" size={28} />
              </View>
            ),
            tabBarItemStyle: {
              bottom: 32,
              justifyContent: "center",
              alignItems: "center",
            },
          }}
        />
        <Tabs.Screen
          name="search/index"
          options={{
            tabBarActiveBackgroundColor: Colors.light.text(90),
            href: "/home/(tabs)/search",
            tabBarIcon: ({ focused }) => (
              <Feather
                name="search"
                size={26}
                color={
                  focused
                    ? Colors.light.background()
                    : Colors.light.background(90)
                }
              />
            ),
          }}
        />
        <Tabs.Screen
          name="profile/index"
          options={{
            tabBarActiveBackgroundColor: Colors.light.text(90),
            href: "/home/(tabs)/profile",
            tabBarIcon: ({ focused }) => (
              <Feather
                name="user"
                size={26}
                color={
                  focused
                    ? Colors.light.background()
                    : Colors.light.background(90)
                }
              />
            ),
          }}
        />
        <Tabs.Screen
          name="(conversations)/conversation/[conversationID]/index"
          options={{
            href: null,
          }}
        />
      </Tabs>
    </View>
  );
}
