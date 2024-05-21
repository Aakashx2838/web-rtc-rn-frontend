import { MaterialIcons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { View } from "react-native";

export default function AppLayout() {
  return (
    <View style={{ flex: 1 }}>
      <Tabs
        screenOptions={{
          headerShown: false,
        }}
      >
        <Tabs.Screen
          name="(conversations)/index"
          options={{
            href: "/home/(tabs)/conversations",
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons
                name="chat-bubble-outline"
                size={size}
                color={color}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="calls/index"
          options={{
            href: "/home/(tabs)/calls",
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="call" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="profile/index"
          options={{
            href: "/home/(tabs)/profile",
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="person" size={size} color={color} />
            ),
          }}
        />
      </Tabs>
    </View>
  );
}
