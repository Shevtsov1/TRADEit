import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import ScreenHeader from "../../../components/ScreenHeader";
import SearchBar from "../../../components/SearchBar";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const Profile = ({theme, isDarkMode}) => {
    const { colors_dark, colors_light } = theme;
    const bgColor = isDarkMode ? colors_dark.bg : colors_light.bg;
    const accentColor = isDarkMode ? colors_dark.accent : colors_light.accent;
    const textColor = isDarkMode ? colors_dark.text : colors_light.text;
    const secondaryColor = isDarkMode ? colors_dark.secondary : colors_light.secondary;

    const styles = StyleSheet.create({

        /* BODY BEGIN */

        body: {
            backgroundColor: bgColor,
        },

        /* BODY END */

        /* HEADER BEGIN */

        header: {
            minHeight: hp('15%'),
            maxHeight: hp('20%'),
            backgroundColor: accentColor,
            borderBottomStartRadius: 20,
            borderBottomEndRadius: 20,
        }

        /* HEADER END */

    });

    return (
        <View style={{flex: 1}}>
            <ScrollView style={styles.body}>
                <ScreenHeader theme={theme} isDarkMode={isDarkMode}/>
                <View style={styles.header}>
                    <Text>adad</Text>
                </View>
                <Text>P R O F I L E</Text>
            </ScrollView>
        </View>
    );
};

export default Profile;