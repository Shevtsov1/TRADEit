import React from 'react';
import {View, StyleSheet} from 'react-native';
import Constants from "expo-constants";

const ScreenHeader = ({theme, isDarkMode, children}) => {

    const statusBarHeight = Constants.statusBarHeight;

    const styles = StyleSheet.create({
        header: {
            marginTop: statusBarHeight,
            minHeight: '8%',
            height: '9%',
            maxHeight: '9%',
            backgroundColor: isDarkMode ? theme.colors_dark.accent : theme.colors_light.accent,
            elevation: 3,
            shadowColor: isDarkMode ? theme.colors_dark.accent : theme.colors_light.accent,
        },
    });

    return (
        <View style={styles.header}>
            {children}
        </View>
    );
};

export default ScreenHeader;