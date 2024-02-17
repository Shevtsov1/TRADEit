import React from 'react';
import {View, Text} from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

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
import CreateAd from "../screens/MainScreens/CreateAdScreen/createAd";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
            <Tab.Navigator
                initialRouteName={Main}
                screenOptions={{
                    tabBarLabelStyle: {
                        fontFamily: 'Montserrat-Bold',
                    }
                }}
            >
                <Tab.Screen name="Main" component={Main} options={{
                    title: 'Главная',
                    tabBarIcon: (props) => <HomeTabBarIcon {...props}/>,
                }} />
                <Tab.Screen name="Catalog" component={Catalog} options={{
                title: 'Каталог',
                tabBarIcon: (props) => <CatalogTabBarIcon {...props}/>,
            }}/>
            <Tab.Screen
                name="CreateAd"
                component={CreateAd}
                options={{
                    title: 'Создать объявление',
                    tabBarLabelStyle: {
                        display: 'none',
                    },
                    tabBarIcon: ({ focused, color, size }) => {
                        return (
                            <View
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    backgroundColor: "#5555ff",
                                    width: 56,
                                    height: 56,
                                    borderRadius: 28,
                                    marginBottom: 40,
                                    paddingBottom: 2,
                                    elevation: 5,
                                    shadowColor: "#52006A",
                                }}
                            >
                                <Text
                                    style={{
                                        fontSize: 36,
                                        fontWeight: 300,
                                        color: "#fff",
                                    }}
                                >
                                    +
                                </Text>
                            </View>
                        );
                    },
                }}
            />
            <Tab.Screen name="Favorites" component={Favorites} options={{
                title: 'Избранное',
                tabBarIcon: (props) => <FavoritesTabBarIcon {...props}/>,
            }}/>
            <Tab.Screen name="Profile" component={Profile} options={{
                title: 'Профиль',
                tabBarIcon: (props) => <ProfileTabBarIcon {...props}/>,
            }}/>
        </Tab.Navigator>
    );
};

export default BottomTabNavigator;