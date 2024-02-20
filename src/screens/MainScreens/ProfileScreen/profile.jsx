import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import ScreenHeader from "../../../components/ScreenHeader";
import { SearchBar } from 'react-native-elements';

const Profile = ({theme, isDarkMode}) => {
    const { colors_dark, colors_light } = theme;
    const bgColor = isDarkMode ? colors_dark.bg : colors_light.bg;
    const accentColor = isDarkMode ? colors_dark.accent : colors_light.accent;
    const textColor = isDarkMode ? colors_dark.text : colors_light.text;
    const secondaryColor = isDarkMode ? colors_dark.secondary : colors_light.secondary;

    const styles = StyleSheet.create({

        /* BODY BEGIN */

        body: {
        },

        /* BODY END */

    });

    return (
        <View style={{flex: 1}}>
            <ScreenHeader theme={theme} isDarkMode={isDarkMode} style={{alignItems: 'center',
                justifyContent: 'center'}}>
                <SearchBar
                platform="android"
                containerStyle={{borderRadius: 10}}
                inputContainerStyle={{}}
                inputStyle={'text'}
                leftIconContainerStyle={{tintColor: secondaryColor}}
                rightIconContainerStyle={{}}
                loadingProps={{}}
                placeholder="Поиск"
                placeholderTextColor={secondaryColor}
                cancelButtonTitle="Отменить"
                />
            </ScreenHeader>
            <ScrollView style={styles.body}>
                <View style={{backgroundColor: accentColor, borderBottomStartRadius: 20, borderBottomEndRadius: 20, elevation: 5}}>
                    <Text>adad</Text>
                </View>
                <Text>P R O F I L E</Text>
            </ScrollView>
        </View>
    );
};

export default Profile;