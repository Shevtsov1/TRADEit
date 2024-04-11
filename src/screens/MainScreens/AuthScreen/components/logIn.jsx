import React, {useEffect, useRef, useState} from 'react';
import {View, Text, Animated, Easing, StyleSheet, ScrollView, Image, TouchableOpacity} from 'react-native';
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from "react-native-responsive-screen";
import {CheckBox, Divider, Icon, Input} from "react-native-elements";

const LogIn = ({theme, isDarkMode, user}) => {
    const [isAdviceShown, setIsAdviceShown] = useState(true);
    const [adviceHeight, setAdviceHeight] = useState(0);
    const [isPasswordSecure, setIsPasswordSecure] = useState(true);
    const [authBtnDisabled, setAuthBtnDisabled] = useState(true);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const bgColor = isDarkMode ? theme.colors_dark.bg : theme.colors_light.bg;
    const backColor = isDarkMode ? theme.colors_dark.back : theme.colors_light.back;
    const textColor = isDarkMode ? theme.colors_dark.text : theme.colors_light.text;
    const accentColor = isDarkMode ? theme.colors_dark.accent : theme.colors_light.accent;

    const adviceAnimation = useRef(new Animated.Value(1)).current;

    let hasMinimumLength;
    let hasUppercaseLetter;
    let hasLowercaseLetter;
    let hasDigit;
    const [hasAllRequirements, setHasAllRequirements] = useState(false);

    useEffect(() => {
        const hasValidPassword = password;
        hasMinimumLength = password.length >= 8;
        hasUppercaseLetter = /[A-Z]/.test(password);
        hasLowercaseLetter = /[a-z]/.test(password);
        hasDigit = /\d/.test(password);

        if (password && hasMinimumLength && hasDigit && hasUppercaseLetter && hasLowercaseLetter) {
            setHasAllRequirements(true);
        } else {
            setHasAllRequirements(false)
        }

        if (
            email &&
            password &&
            hasValidPassword &&
            hasMinimumLength &&
            hasUppercaseLetter &&
            hasLowercaseLetter &&
            hasDigit
        ) {
            setAuthBtnDisabled(false);
        } else {
            setAuthBtnDisabled(true);
        }
    }, [email, password]);

    const closeAdvice = () => {
        Animated.parallel([
            Animated.timing(adviceAnimation, {
                toValue: 0,
                duration: 300,
                easing: Easing.ease,
                useNativeDriver: true,
            }),
        ]).start(() => {
            setIsAdviceShown(false);
        });
    };

    const adviceOpacity = adviceAnimation.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1],
    });

    const handleAdviceLayout = (event) => {
        const {height} = event.nativeEvent.layout;
        setAdviceHeight(height);
    };

    const handleEmailClear = () => {
        setEmail('');
    }

    const handleEmailChange = (value) => {
        setEmail(value)
    }

    const handlePasswordChange = (value) => {
        setPassword(value);
    }

    const styles = StyleSheet.create({
        passwordRequirementsText: {
            fontFamily: 'Montserrat-Medium',
            fontSize: 12,
            color: textColor,
        }
    })

    return (
        <ScrollView style={{
            flex: 1, backgroundColor: backColor
        }}>
            <View style={{marginVertical: hp(2), marginBottom: 24, marginHorizontal: wp(4)}}>
                {isAdviceShown &&
                    <Animated.View style={{
                        width: wp(92),
                        height: 'auto',
                        paddingVertical: hp(1),
                        paddingHorizontal: wp(2),
                        borderRadius: 15,
                        backgroundColor: bgColor,
                        opacity: adviceOpacity,
                        elevation: 1,
                        shadowColor: textColor,
                    }} onLayout={handleAdviceLayout}>
                        <Text
                            style={{fontFamily: 'Montserrat-Medium', fontSize: 14, color: textColor, marginBottom: 6,}}>Войдите,
                            чтобы:</Text>
                        <View style={{flexDirection: 'row', marginBottom: 3}}>
                            <Image style={{width: 18, height: 18, resizeMode: 'contain', marginEnd: 6}}
                                   source={require('../../../../../assets/images/createAd-sticker.png')}
                            />
                            <View style={{flex: 1}}>
                                <Text style={{fontFamily: 'Montserrat-Medium', fontSize: 14, color: textColor,}}>Подавать
                                    объявления</Text>
                            </View>
                        </View>
                        <View style={{flexDirection: 'row', marginBottom: 3}}>
                            <Image style={{width: 18, height: 18, resizeMode: 'contain', marginEnd: 6}}
                                   source={require('../../../../../assets/images/saved-sticker.png')}
                            />
                            <View style={{flex: 1}}>
                                <Text style={{fontFamily: 'Montserrat-Medium', fontSize: 14, color: textColor,}}>Сохранять
                                    товары и продавцов в Избранное</Text>
                            </View>
                        </View>
                        <View style={{flexDirection: 'row'}}>
                            <Image style={{width: 18, height: 18, resizeMode: 'contain', marginEnd: 6}}
                                   source={require('../../../../../assets/images/chatting-sticker.png')}
                            />
                            <View style={{flex: 1}}>
                                <Text style={{fontFamily: 'Montserrat-Medium', fontSize: 14, color: textColor,}}>Отправлять
                                    и получать сообщения</Text>
                            </View>
                        </View>
                        <TouchableOpacity onPress={closeAdvice}
                                          style={{
                                              position: 'absolute',
                                              top: hp(0.5),
                                              right: wp(0.5),
                                              height: 30,
                                              width: 30,
                                              justifyContent: 'center',
                                              alignItems: 'center'
                                          }}>
                            <Image source={require('../../../../../assets/images/SearchBar/cancel.png')}
                                   style={{width: 20, height: 20, tintColor: textColor}}
                                   resizeMode={'contain'}/>
                        </TouchableOpacity>
                    </Animated.View>
                }
                <View>
                    <Text style={{
                        fontFamily: 'Montserrat-SemiBold',
                        fontSize: 16,
                        marginStart: wp(3),
                        marginBottom: hp(1),
                        color: textColor,
                    }}>Сервисы</Text>
                    <TouchableOpacity style={{
                        width: 42,
                        height: 42,
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginStart: wp(3),
                        marginBottom: hp(1),
                        borderRadius: 5,
                        borderWidth: 1,
                        borderColor: theme.neutral.ntrl50,
                        backgroundColor: bgColor,
                    }}>
                        <Image source={require('../../../../../assets/images/google-icon.png')}
                               style={{height: 24, width: 24, resizeMode: 'contain'}}/>
                    </TouchableOpacity>
                </View>
                <Divider width={1} color={isDarkMode ? theme.neutral.ntrl50 : theme.neutral.ntrl70}
                         style={{marginBottom: hp(1)}}/>
                <View>
                    <Input
                        containerStyle={{height: 60, paddingHorizontal: 0}}
                        inputContainerStyle={{
                            paddingHorizontal: wp(3),
                            borderColor: isDarkMode ? theme.neutral.ntrl50 : theme.neutral.ntrl70
                        }}
                        disabledInputStyle={{background: "#ddd"}}
                        inputMode={'email'}
                        inputStyle={{color: textColor}}
                        errorMessage=""
                        leftIcon={<Icon type={'ionicon'} name='mail-outline' color={textColor}/>}
                        rightIcon={email &&
                            <TouchableOpacity onPress={handleEmailClear}><Icon type={'ionicon'} name={'close'}
                                                                               color={textColor}/></TouchableOpacity>}
                        labelStyle={{color: textColor}}
                        placeholder="Email"
                        value={email}
                        onChangeText={handleEmailChange}
                    />
                    <Input
                        containerStyle={{height: 60, paddingHorizontal: 0}}
                        inputContainerStyle={{
                            paddingHorizontal: wp(3),
                            borderColor: isDarkMode ? theme.neutral.ntrl50 : theme.neutral.ntrl70
                        }}
                        disabledInputStyle={{background: "#ddd"}}
                        inputStyle={{color: textColor}}
                        errorStyle={{marginStart: wp(3)}}
                        errorMessage={password ? (hasAllRequirements ? '' : 'Пароль не соответствует требованиям') : ''}
                        leftIcon={<Icon type={'ionicon'} name='key-outline' color={textColor}/>}
                        rightIcon={password &&
                            <TouchableOpacity onPress={() => setIsPasswordSecure(!isPasswordSecure)}>
                                <Icon color={textColor}
                                      type={'ionicon'}
                                      name={isPasswordSecure ? 'eye-outline' : 'eye-off-outline'}/>
                            </TouchableOpacity>}
                        labelStyle={{color: textColor}}
                        placeholder="Пароль"
                        secureTextEntry={isPasswordSecure}
                        value={password}
                        onChangeText={handlePasswordChange}
                    />
                </View>
                <TouchableOpacity
                    style={{
                        alignSelf: 'center',
                        height: 54,
                        width: wp(92),
                        borderRadius: 15,
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: authBtnDisabled ? theme.neutral.ntrl50 : accentColor
                    }}
                    disabled={authBtnDisabled}>
                    <Text style={{
                        fontFamily: 'Montserrat-Bold',
                        fontSize: 16,
                        color: theme.neutral.ntrl10
                    }}>Войти</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

export default LogIn;