import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ScreenHeader from "../../../components/ScreenHeader";

const Main = ({theme, isDarkMode}) => {
    const { colors_dark, colors_light, neutral} = theme;
    const bgColor = isDarkMode ? colors_dark.bg : colors_light.bg;
    const backColor = isDarkMode ? neutral.ntrl90 : neutral.ntrl20;
    const accentColor = isDarkMode ? colors_dark.accent : colors_light.accent;
    const textColor = isDarkMode ? colors_dark.text : colors_light.text;
    const secondaryColor = isDarkMode ? colors_dark.secondary : colors_light.secondary;

    const styles = StyleSheet.create({

        /* BODY BEGIN */

        body: {
            flex:1,
            backgroundColor: backColor,
            justifyContent: "center",
            alignItems: "center",
        },

        /* BODY END */
    });

    return (
        <View style={{flex: 1}}>
            <ScreenHeader theme={theme} isDarkMode={isDarkMode} page={'main'}/>
            <View style={styles.body}>
                <Text>M A I N</Text>
            </View>
        </View>
    );
};

export default Main;