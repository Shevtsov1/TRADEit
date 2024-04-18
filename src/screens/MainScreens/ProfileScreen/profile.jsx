import React from 'react';
import {StyleSheet, View, Text, ScrollView, Image, TouchableOpacity} from 'react-native';
import ScreenHeader from "../../../components/ScreenHeader";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {Avatar} from "react-native-elements";

const Profile = ({user, theme, isDarkMode, navigation, setUser}) => {
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
            <ScreenHeader user={user} theme={theme} isDarkMode={isDarkMode} setUser={setUser} page={'profile'}/>
            <View style={styles.screen}>
                <View style={styles.accountHeader}>
                    <View>
                        <View style={{
                            flexDirection: "row",
                            alignItems: "center"
                        }}>
                            {user.isAnonymous ?
                                <TouchableOpacity style={{
                                    flexDirection: "row",
                                    alignItems: "center"
                                }} onPress={handleAuthBtnPress}>
                                    <View style={{
                                        width: 48,
                                        height: 48,
                                        marginEnd: 12,
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        <Avatar
                                            size={32}
                                            rounded
                                            source={require('../../../../assets/images/screens/profile/incognito.png')}
                                        />
                                    </View>
                                    <View style={{flexDirection: 'row', alignItems: 'center', height: 24}}>
                                        <Text style={{
                                            fontFamily: 'Montserrat-Bold',
                                            fontSize: 16,
                                            color: textColor,
                                            maxWidth: wp('70%'),
                                            overflow: 'hidden',
                                            alignSelf: 'center'
                                        }} numberOfLines={1} ellipsizeMode="tail">
                                            Вход и регистрация
                                        </Text>
                                        <Text style={{
                                            fontFamily: 'Montserrat-Bold',
                                            fontSize: 20,
                                            lineHeight: 20,
                                            color: textColor,
                                            marginLeft: 8
                                        }}>&#8250;</Text>
                                    </View>
                                </TouchableOpacity>
                                :
                                <>
                                    <TouchableOpacity style={{
                                        width: 48,
                                        height: 48,
                                        marginEnd: 12,
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        <Avatar
                                            size={32}
                                            rounded
                                            source={require('../../../../assets/images/bottomTab/profile.png')}
                                        />
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
                                            {user.email}
                                        </Text>
                                        <Text style={{
                                            fontFamily: 'Montserrat-Bold',
                                            fontSize: 20,
                                            lineHeight: 20,
                                            color: textColor,
                                            marginLeft: 8
                                        }}>&#8250;</Text>
                                    </TouchableOpacity>
                                </>
                            }
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
                    <Text>Hello my dear friend i will play with you today</Text>
                    <Text>Hello my dear friend i will play with you today</Text>
                    <Text>Hello my dear friend i will play with you today</Text>
                    <Text>Hello my dear friend i will play with you today</Text>
                    <Text>Hello my dear friend i will play with you today</Text>
                    <Text>Hello my dear friend i will play with you today</Text>
                    <Text>Hello my dear friend i will play with you today</Text>
                    <Text>Hello my dear friend i will play with you today</Text>
                    <Text>Hello my dear friend i will play with you today</Text>
                    <Text>Hello my dear friend i will play with you today</Text>
                    <Text>Hello my dear friend i will play with you today</Text>
                    <Text>Hello my dear friend i will play with you today</Text>
                    <Text>Hello my dear friend i will play with you today</Text>
                    <Text>Hello my dear friend i will play with you today</Text>
                    <Text>Hello my dear friend i will play with you today</Text>
                    <Text>Hello my dear friend i will play with you today</Text>
                    <Text>Hello my dear friend i will play with you today</Text>
                    <Text>Hello my dear friend i will play with you today</Text>
                    <Text>Hello my dear friend i will play with you today</Text>
                    <Text>Hello my dear friend i will play with you today</Text>
                    <Text>Hello my dear friend i will play with you today</Text>
                    <Text>Hello my dear friend i will play with you today</Text>
                    <Text>Hello my dear friend i will play with you today</Text>
                    <Text>Hello my dear friend i will play with you today</Text>
                    <Text>Hello my dear friend i will play with you today</Text>
                    <Text>Hello my dear friend i will play with you today</Text>
                    <Text>Hello my dear friend i will play with you today</Text>
                    <Text>Hello my dear friend i will play with you today</Text>
                    <Text>Hello my dear friend i will play with you today</Text>
                    <Text>Hello my dear friend i will play with you today</Text>
                    <Text>Hello my dear friend i will play with you today</Text>
                    <Text>Hello my dear friend i will play with you today</Text>
                    <Text>Hello my dear friend i will play with you today</Text>
                    <Text>Hello my dear friend i will play with you today</Text>
                    <Text>Hello my dear friend i will play with you today</Text>
                    <Text>Hello my dear friend i will play with you today</Text>
                    <Text>Hello my dear friend i will play with you today</Text>
                    <Text>Hello my dear friend i will play with you today</Text>
                    <Text>Hello my dear friend i will play with you today</Text>
                    <Text>Hello my dear friend i will play with you today</Text>
                </ScrollView>
            </View>
        </View>
    );
};

export default Profile;