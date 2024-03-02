import React from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import ScreenHeader from "../../../components/ScreenHeader";

const Main = ({theme, isDarkMode}) => {
    const { colors_dark, colors_light } = theme;
    const bgColor = isDarkMode ? colors_dark.bg : colors_light.bg;
    const accentColor = isDarkMode ? colors_dark.accent : colors_light.accent;
    const textColor = isDarkMode ? colors_dark.text : colors_light.text;
    const secondaryColor = isDarkMode ? colors_dark.secondary : colors_light.secondary;

    const styles = StyleSheet.create({

        /* BODY BEGIN */

        body: {
            flex:1,
            backgroundColor: bgColor,
        },

        /* BODY END */
    });

    return (
        <View style={{flex: 1}}>
            <View style={styles.body}>
                <ScreenHeader theme={theme} isDarkMode={isDarkMode}/>
            </View>
        </View>
    );
};

export default Main;