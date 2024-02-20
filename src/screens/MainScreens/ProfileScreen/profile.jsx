import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import ScreenHeader from "../../../components/ScreenHeader";

const Profile = ({theme, isDarkMode}) => {

    const styles = StyleSheet.create({

        /* BODY BEGIN */

        body: {
        },

        /* BODY END */

    });

    return (
        <View style={{flex: 1}}>
            <ScreenHeader theme={theme} isDarkMode={isDarkMode}>

            </ScreenHeader>
            <ScrollView style={styles.body}>
                <Text>P R O F I L E</Text>
            </ScrollView>
        </View>
    );
};

export default Profile;