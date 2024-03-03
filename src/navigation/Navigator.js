import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from "@react-navigation/native";
import React, { useEffect, useRef } from 'react';
import { SafeAreaView, StyleSheet, TouchableOpacity, Text, Animated, View } from 'react-native';
import Icon, { Icons } from '../../assets/images/bottomTab/TabBarIcons';
import * as Animatable from 'react-native-animatable';
import Main from "../screens/MainScreens/MainScreen/main";
import Catalog from "../screens/MainScreens/CatalogScreen/catalog";
import Favorites from "../screens/MainScreens/FavoritesScreen/favorites";
import Profile from "../screens/MainScreens/ProfileScreen/profile";

// Массив с конфигурациями вкладок
const TabArr = [
    {
        route: 'Main',
        label: 'Главная',
        type: Icons.Main,
        activeIcon: Icons.Main.activeIcon,
        inActiveIcon: Icons.Main.inActiveIcon,
        component: Main
    },
    {
        route: 'Catalog',
        label: 'Каталог',
        type: Icons.Catalog,
        activeIcon: Icons.Catalog.activeIcon,
        inActiveIcon: Icons.Catalog.inActiveIcon,
        component: Catalog
    },
    {
        route: 'Favorites',
        label: 'Избранное',
        type: Icons.Favorites,
        activeIcon: Icons.Favorites.activeIcon,
        inActiveIcon: Icons.Favorites.inActiveIcon,
        component: Favorites
    },
    {
        route: 'Profile',
        label: 'Профиль',
        type: Icons.Profile,
        activeIcon: Icons.Profile.activeIcon,
        inActiveIcon: Icons.Profile.inActiveIcon,
        component: Profile
    },
];

const Tab = createBottomTabNavigator();

// Компонент кнопки вкладки
const TabButton = React.memo((props) => {
    const { item, onPress, accessibilityState, theme, isDarkMode } = props;
    const focused = accessibilityState.selected;
    const scaleValue = useRef(new Animated.Value(1)).current;
    const translateYValue = useRef(new Animated.Value(0)).current;
    const opacityValue = useRef(new Animated.Value(0)).current;
    const activeTabBarIconColor = isDarkMode ? theme.colors_dark.accent : theme.colors_light.accent;
    const inActiveTabBarIconColor = theme.neutral.ntrl70;
    const label = focused ? item.label : '';
    const textColor = isDarkMode ? theme.colors_dark.accent : theme.colors_light.accent;

    useEffect(() => {
        const animations = [
            Animated.spring(scaleValue, {
                toValue: focused ? 1.2 : 1,
                useNativeDriver: true,
            }),
            Animated.spring(translateYValue, {
                toValue: focused ? -1 : 0,
                useNativeDriver: true,
            }),
            Animated.timing(opacityValue, {
                toValue: focused ? 1 : 0,
                duration: 200,
                useNativeDriver: true,
            }),
        ];

        Animated.parallel(animations).start();
    }, [focused, scaleValue, translateYValue, opacityValue]);

    const handlePress = () => {
        if (!focused) {
            onPress();
        }
    };

    return (
        <TouchableOpacity onPress={handlePress} activeOpacity={1} style={[styles.container, { top: 0, alignItems: "center" }]}>
            <View style={styles.iconContainer}>
                <Animated.View style={[styles.iconWrapper, { transform: [{ scale: scaleValue }, { translateY: translateYValue }] }]}>
                    <Icon
                        type={item.type}
                        name={focused ? item.activeIcon : item.inActiveIcon}
                        color={focused ? activeTabBarIconColor : inActiveTabBarIconColor}
                    />
                </Animated.View>
                {focused && (
                    <Animated.View style={[styles.labelContainer, { opacity: opacityValue }]}>
                        <Text style={{ fontFamily: 'Montserrat-Bold', fontSize: 12, color: textColor }}>{label}</Text>
                    </Animated.View>
                )}
            </View>
        </TouchableOpacity>
    );
});

// Компонент нижней навигации по вкладкам
const BottomTabNavigator = ({ theme, isDarkMode }) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Tab.Navigator
                screenOptions={{
                    headerShown: false,
                    tabBarStyle: {
                        borderTopWidth: 0,
                        elevation: 5,
                        shadowColor: isDarkMode ? theme.colors_light.bg : theme.colors_dark.bg,
                        height: 60,
                        backgroundColor: isDarkMode ? theme.colors_dark.bg : theme.colors_light.bg,
          },
        }}
      >
        {TabArr.map((item, index) => {
          return (
            <Tab.Screen key={index} name={item.route}
              options={{
                tabBarShowLabel: false,
                tabBarButton: (props) => (
                  <TabButton {...props} item={item} theme={theme} isDarkMode={isDarkMode} />
                ),
              }}
            >
              {(props) => <item.component {...props} theme={theme} isDarkMode={isDarkMode} />}
            </Tab.Screen>
          )
        })}
      </Tab.Navigator>
    </SafeAreaView>
  )
}

// Компонент навигации приложения
const AppNavigator = ({ theme, isDarkMode }) => (
  <NavigationContainer>
    <BottomTabNavigator theme={theme} isDarkMode={isDarkMode} />
  </NavigationContainer>
);

export default AppNavigator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    maxHeight: 60,
    height: 60,
    borderRadius: 30,
  },
  iconContainer: {
    alignItems: 'center',
  },
});