import React from 'react';
import {View, StyleSheet} from 'react-native';
import Constants from "expo-constants";

const ScreenHeader = ({theme, isDarkMode, children}) => {

    const statusBarHeight = Constants.statusBarHeight;

    const styles = StyleSheet.create({
        header: {
            height: (57 + statusBarHeight),
            backgroundColor: isDarkMode ? theme.colors_dark.bg : theme.colors_light.bg,
            elevation: 3,
        },
    });

    return (
        <View style={styles.header}>
            {children}
        </View>
    );
};

export default ScreenHeader;