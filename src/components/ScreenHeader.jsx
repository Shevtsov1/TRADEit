import React from 'react';
import {View, StyleSheet} from 'react-native';
import Constants from "expo-constants";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import SearchBar from "./SearchBar";

const ScreenHeader = ({theme, isDarkMode}) => {

    const statusBarHeight = Constants.statusBarHeight;

    const styles = StyleSheet.create({
        header: {
            justifyContent: "center",
            marginTop: statusBarHeight,
            paddingHorizontal: wp('2%'),
            minHeight: hp('6%'),
            height: hp('8%'),
            maxHeight: hp('8%'),
            backgroundColor: isDarkMode ? theme.colors_dark.bg : theme.colors_light.bg,
            elevation: 5,
            shadowColor: isDarkMode ? theme.colors_dark.bg : theme.colors_light.bg,
        },
    });

    return (
        <View style={styles.header}>
            <SearchBar theme={theme} isDarkMode={isDarkMode}/>
        </View>
    );
};

export default ScreenHeader;