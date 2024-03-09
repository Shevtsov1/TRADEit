import React from 'react';
import {StyleSheet, View, Text, ScrollView, Image, TouchableOpacity} from 'react-native';
import ScreenHeader from "../../../components/ScreenHeader";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const Profile = ({user, theme, isDarkMode, navigation}) => {
    const {colors_dark, colors_light, neutral} = theme;
    const bgColor = isDarkMode ? colors_dark.bg : colors_light.bg;
    const backColor = isDarkMode ? neutral.ntrl90 : neutral.ntrl20;
    const accentColor = isDarkMode ? colors_dark.accent : colors_light.accent;
    const textColor = isDarkMode ? colors_dark.text : colors_light.text;
    const secondaryColor = isDarkMode ? colors_dark.secondary : colors_light.secondary;

    const handleAuthBtnPress = () => {
        navigation.navigate('Auth');
    }

    const styles = StyleSheet.create({

        /* SCREEN BEGIN */

        screen: {
            flex: 1,
            backgroundColor: backColor,
        },

        /* SCREEN END */

        /* HEADER BEGIN */

        accountHeader: {
            minHeight: hp('17%'),
            maxHeight: hp('17%'),
            paddingVertical: hp('1%'),
            paddingHorizontal: wp('5%'),
            backgroundColor: bgColor,
            borderBottomStartRadius: 20,
            borderBottomEndRadius: 20,
        },

        headerBtn: {
            width: wp('27%'),
            paddingVertical: hp('0.5%'),
            paddingHorizontal: wp('2%'),
            backgroundColor: backColor,
            borderRadius: 15,
            elevation: 5,
        },

        /* HEADER END */

        /* BODY BEGIN */

        body: {}

        /* BODY END */

    });

    return (
        <View style={{flex: 1}}>
            <ScreenHeader user={user} theme={theme} isDarkMode={isDarkMode} page={'profile'}/>
            <View style={styles.screen}>
                <View style={styles.accountHeader}>
                    <View>
                        <View style={{
                            flexDirection: "row",
                            alignItems: "center"
                        }}>
                            <TouchableOpacity style={{marginEnd: 12,}}>
                                <Image style={{
                                    width: 48,
                                    height: 48,
                                    borderRadius: 15,
                                }} source={require('../../../../assets/icon.png')} resizeMode={"contain"}/>
                            </TouchableOpacity>
                            <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center', height: 24}}
                                              onPress={handleAuthBtnPress}>
                                <Text style={{
                                    fontFamily: 'Montserrat-Bold',
                                    fontSize: 16,
                                    color: textColor,
                                    maxWidth: wp('70%'),
                                    overflow: 'hidden',
                                    alignSelf: 'center'
                                }} numberOfLines={1} ellipsizeMode="tail">
                                    {user ? user.email : 'user'}
                                </Text>
                                <Text style={{
                                    fontFamily: 'Montserrat-Bold',
                                    fontSize: 20,
                                    lineHeight: 20,
                                    color: textColor,
                                    marginLeft: 8
                                }}>&#8250;</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', marginTop: hp('1%')}}>
                        <TouchableOpacity style={styles.headerBtn}>
                            <Text>Button1</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.headerBtn}>
                            <Text>Button2</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.headerBtn}>
                            <Text>Button3</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <ScrollView indicatorStyle={isDarkMode ? 'white' : 'black'} overScrollMode={"never"}>
                    <Text>1</Text>
                    <Text>1</Text>

                    <Text>1</Text>

                    <Text>1</Text>
                    <Text>1</Text>
                    <Text>1</Text>
                    <Text>1</Text>
                    <Text>1</Text>
                    <Text>1</Text>
                    <Text>1</Text>
                    <Text>1</Text>
                    <Text>1</Text>
                    <Text>1</Text>
                    <Text>1</Text>
                    <Text>1</Text>
                    <Text>1</Text>
                    <Text>1</Text>
                    <Text>1</Text>
                    <Text>1</Text>
                    <Text>1</Text>
                    <Text>1</Text>
                    <Text>1</Text>
                    <Text>1</Text>
                    <Text>1</Text>
                    <Text>1</Text>
                    <Text>1</Text>
                    <Text>1</Text>
                    <Text>1</Text>
                    <Text>1</Text>
                    <Text>1</Text>
                    <Text>1</Text>
                    <Text>1</Text>
                    <Text>1</Text>
                    <Text>1</Text>
                    <Text>1</Text>
                    <Text>1</Text>
                    <Text>1</Text>
                    <Text>1</Text>
                    <Text>1</Text>
                    <Text>1</Text>
                    <Text>1</Text>
                    <Text>1</Text>
                    <Text>1</Text>
                    <Text>1</Text>
                    <Text>1</Text>
                    <Text>1</Text>
                    <Text>1</Text>
                    <Text>1</Text>
                    <Text>1</Text>
                    <Text>1</Text>
                    <Text>1</Text>
                    <Text>1</Text>
                    <Text>1</Text>
                    <Text>1</Text>
                    <Text>1</Text>
                    <Text>1</Text>
                    <Text>1</Text>
                    <Text>1</Text>
                    <Text>1</Text>

                </ScrollView>
            </View>
        </View>
    );
};

export default Profile;