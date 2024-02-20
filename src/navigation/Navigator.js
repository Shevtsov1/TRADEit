import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {NavigationContainer} from "@react-navigation/native";
import Main from '../screens/MainScreens/MainScreen/main';
import Catalog from '../screens/MainScreens/CatalogScreen/catalog';
import Favorites from '../screens/MainScreens/FavoritesScreen/favorites';
import Profile from '../screens/MainScreens/ProfileScreen/profile';

import {
    HomeTabBarIcon,
    CatalogTabBarIcon,
    FavoritesTabBarIcon,
    ProfileTabBarIcon
} from '../../assets/images/bottomTab/TabBarIcons';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = ({theme, isDarkMode}) => {
    const { colors_dark, colors_light } = theme;
    const bgColor = isDarkMode ? colors_dark.bg : colors_light.bg;
    const accentColor = isDarkMode ? colors_dark.accent : colors_light.accent;
    const secondaryColor = isDarkMode ? colors_dark.secondary : colors_light.secondary;
    return (
            <Tab.Navigator
                initialRouteName={Main}
                screenOptions={{
                    headerShown: false,
                    tabBarLabelStyle: {
                        fontFamily: 'Montserrat-Bold',
                    },
                    tabBarStyle: {
                      backgroundColor: bgColor,
                    },
                    tabBarActiveTintColor: accentColor,
                    tabBarInactiveTintColor: secondaryColor,
                }}
            >
                <Tab.Screen name="Main" options={{
                    title: 'Главная',
                    tabBarIcon: (props) => <HomeTabBarIcon {...props} theme={theme} isDarkMode={isDarkMode}/>,
                }}>
                    {(props) => <Main {...props} theme={theme} isDarkMode={isDarkMode}/>}
                </Tab.Screen>
                <Tab.Screen name="Catalog" options={{
                title: 'Каталог',
                tabBarIcon: (props) => <CatalogTabBarIcon {...props} theme={theme} isDarkMode={isDarkMode}/>,
            }}>
                    {(props) => <Catalog {...props} theme={theme} isDarkMode={isDarkMode}/>}
                </Tab.Screen>
            <Tab.Screen name="Favorites" options={{
                title: 'Избранное',
                tabBarIcon: (props) => <FavoritesTabBarIcon {...props} theme={theme} isDarkMode={isDarkMode}/>,
            }}>
                {(props) => <Favorites {...props} theme={theme} isDarkMode={isDarkMode}/>}
            </Tab.Screen>
            <Tab.Screen name="Profile" options={{
                title: 'Профиль',
                tabBarIcon: (props) => <ProfileTabBarIcon {...props} theme={theme} isDarkMode={isDarkMode}/>,
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