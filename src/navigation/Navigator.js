import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer, getFocusedRouteNameFromRoute} from "@react-navigation/native";
import Main from '../screens/MainScreens/MainScreen/main';
import Catalog from '../screens/MainScreens/CatalogScreen/catalog';
import Favorites from '../screens/MainScreens/FavoritesScreen/favorites';
import Profile from '../screens/MainScreens/ProfileScreen/profile';
import CreateAd from "../screens/MainScreens/CreateAdScreen/createAd";

import {
    HomeTabBarIcon,
    CatalogTabBarIcon,
    AddTabBarIcon,
    FavoritesTabBarIcon,
    ProfileTabBarIcon
} from '../../assets/images/bottomTab/TabBarIcons';
import {TouchableOpacity, View} from "react-native";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = ({theme, isDarkMode}) => {
    const {colors_dark, colors_light, neutral} = theme;
    const bgColor = isDarkMode ? colors_dark.bg : colors_light.bg;
    const accentColor = isDarkMode ? colors_dark.accent : colors_light.accent;
    const secondaryColor = isDarkMode ? colors_dark.secondary : colors_light.secondary;

    const AddButton = ({children, onPress}) => {
        return (<TouchableOpacity onPress={onPress} style={{
                top: -20,
            }}>
                <View style={{
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: bgColor,
                    width: 50,
                    height: 50,
                    borderRadius: 30,
                    elevation: 5,
                }}>
                    {children}
                </View>
            </TouchableOpacity>
        );
    }

    return (
        <Tab.Navigator
            initialRouteName={Main}
            screenOptions={({route}) => ({
                tabBarShowLabel: false,
                headerShown: false,
                tabBarStyle: {
                    borderTopWidth: 0,
                    position: "absolute",
                    bottom: 15,
                    left: 15,
                    right: 15,
                    elevation: 5,
                    borderRadius: 15,
                    height: 60,
                    backgroundColor: bgColor,
                },
                tabBarActiveTintColor: accentColor,
                tabBarInactiveTintColor: secondaryColor,
            })}
        >
            <Tab.Screen name="Main" options={{
                title: 'Главная',
                tabBarIcon: (props) => <HomeTabBarIcon {...props} theme={theme} isDarkMode={isDarkMode} size={24}/>,
            }}>
                {(props) => <Main {...props} theme={theme} isDarkMode={isDarkMode}/>}
            </Tab.Screen>
            <Tab.Screen name="Catalog" options={{
                title: 'Каталог',
                tabBarIcon: (props) => <CatalogTabBarIcon {...props} theme={theme} isDarkMode={isDarkMode} size={24}/>,
            }}>
                {(props) => <Catalog {...props} theme={theme} isDarkMode={isDarkMode}/>}
            </Tab.Screen>
            <Tab.Screen name="CreateAd" options={{
                title: 'Подать',
                tabBarIcon: (props) => <AddTabBarIcon {...props} theme={theme} isDarkMode={isDarkMode} size={48}/>,
                tabBarButton: (props) => (
                    <AddButton {...props}/>
                )
            }}>
                {(props) => <CreateAd {...props} theme={theme} isDarkMode={isDarkMode}/>}
            </Tab.Screen>
            <Tab.Screen name="Favorites" options={{
                title: 'Избранное',
                tabBarIcon: (props) => <FavoritesTabBarIcon {...props} theme={theme} isDarkMode={isDarkMode}
                                                            size={24}/>,
            }}>
                {(props) => <Favorites {...props} theme={theme} isDarkMode={isDarkMode}/>}
            </Tab.Screen>
            <Tab.Screen name="Profile" options={{
                title: 'Профиль',
                tabBarIcon: (props) => <ProfileTabBarIcon {...props} theme={theme} isDarkMode={isDarkMode} size={24}/>,
            }}>
                {(props) => <Profile {...props} theme={theme} isDarkMode={isDarkMode}/>}
            </Tab.Screen>
        </Tab.Navigator>
    );
};

const AppNavigator = ({theme, isDarkMode}) => (
    <NavigationContainer>
        <BottomTabNavigator theme={theme} isDarkMode={isDarkMode}/>
    </NavigationContainer>
);

export default AppNavigator;