import { AntDesign, EvilIcons, Feather, FontAwesome, Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import '@/styles/global.css'
type TabBarIconProps = { color: string };

const HomeRootLayout = () => {
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: "#34967C",
                headerShown: false,
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: "Home",
                    tabBarIcon: ({ color }: TabBarIconProps) => (
                        <AntDesign name="home" size={24} color={color} />
                    ),
                }}
            />

            <Tabs.Screen
                name="search"
                options={{
                    title: "Search",
                    headerShown: true,
                    tabBarIcon: ({ color }: TabBarIconProps) => (
                        <Feather name="search" size={24} color={color} />
                    ),
                }}
            />

            <Tabs.Screen
                name="saved"
                options={{
                    title: "Saved",
                    headerShown: true,
                    tabBarIcon: ({ color }: TabBarIconProps) => (
                        <EvilIcons name="heart" size={27} color={color} />
                    ),
                }}
            />

            <Tabs.Screen
                name="inbox"
                options={{
                    title: "Inbox",
                    headerShown: true,
                    tabBarIcon: ({ color }: TabBarIconProps) => (
                        <Ionicons name="chatbubbles-outline" size={24} color={color} />
                    ),
                }}
            />

            <Tabs.Screen
                name="profile"
                options={{
                    title: "Profile",

                    tabBarIcon: ({ color }: TabBarIconProps) => (
                        <FontAwesome name="user-o" size={24} color={color} />
                    ),
                }}
            />
        </Tabs>
    );
};

export default HomeRootLayout;
