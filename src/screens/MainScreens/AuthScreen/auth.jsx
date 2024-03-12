import React, {useRef, useState} from 'react';
import {Animated, View} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import LogIn from "./components/logIn";
import LogUp from "./components/logUp";
import ScreenHeader from "../../../components/ScreenHeader";
import {widthPercentageToDP as wp, widthPercentageToDP} from "react-native-responsive-screen";

const Auth = ({theme, isDarkMode, user, navigation}) => {
    const [activeAuthBtn, setActiveAuthBtn] = useState('Вход');
    const activeAuthBtnAnimatedValue = useRef(new Animated.Value(0)).current;
    const bgColor = isDarkMode ? theme.colors_dark.bg : theme.colors_light.bg;
    const backColor = isDarkMode ? theme.neutral.ntrl90 : theme.neutral.ntrl20;
    const textColor = isDarkMode ? theme.colors_dark.text : theme.colors_light.text;

    const Tab = createMaterialTopTabNavigator();

    return (
        <View style={{ flex: 1 }}>
            <ScreenHeader theme={theme} isDarkMode={isDarkMode} user={user} page={'auth'} navigation={navigation} />
            <Tab.Navigator
                initialRouteName={'LogIn'}
                screenOptions={{
                    tabBarItemStyle: {
                        padding: 0,
                        margin: 0,
                        width: 'auto',
                        paddingHorizontal: wp(5),
                    },
                    tabBarStyle: {
                        backgroundColor: bgColor,
                        elevation: 5,
                        shadowColor: textColor,
                    },
                    tabBarLabelStyle: {
                        margin: 0,
                        textTransform: 'none',
                        fontFamily: 'Montserrat-Bold',
                        fontSize: 16,
                        color: textColor,
                    },
                    tabBarPressColor: isDarkMode ? theme.neutral.ntrl90 : theme.neutral.ntrl50,
                    tabBarIndicatorStyle: {
                        backgroundColor: textColor
                    }
                }}
            >
                <Tab.Screen
                    name="LogIn"
                    options={{
                        tabBarLabel: 'Вход',
                    }}
                >
                    {(props) => (
                        <LogIn {...props} user={user} theme={theme} isDarkMode={isDarkMode}/>
                    )}
                </Tab.Screen>
                <Tab.Screen
                    name="LogUp"
                    options={{
                        tabBarLabel: 'Регистрация',
                    }}
                >
                    {(props) => (
                        <LogUp {...props} user={user} theme={theme} isDarkMode={isDarkMode}/>
                    )}
                </Tab.Screen>
            </Tab.Navigator>
        </View>
    );
};

export default Auth;