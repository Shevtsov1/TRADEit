import React, {useRef, useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, Image, ScrollView, Animated, Easing} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from "react-native-responsive-screen";
import {CheckBox, Divider, Icon, Input} from "react-native-elements";

const LogUp = ({theme, isDarkMode, user}) => {
    const [isAdviceShown, setIsAdviceShown] = useState(true);
    const [accountType, setAccountType] = useState('personal');
    const [adviceHeight, setAdviceHeight] = useState(0);

    const bgColor = isDarkMode ? theme.colors_dark.bg : theme.colors_light.bg;
    const backColor = isDarkMode ? theme.colors_dark.back : theme.colors_light.back;
    const textColor = isDarkMode ? theme.colors_dark.text : theme.colors_light.text;
    const accentColor = isDarkMode ? theme.colors_dark.accent : theme.colors_light.accent;

    const adviceAnimation = useRef(new Animated.Value(1)).current;

    const closeAdvice = () => {
        Animated.parallel([
            Animated.timing(adviceAnimation, {
                toValue: 0,
                duration: 200,
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

    return (
        <ScrollView style={{
            flex: 1, paddingHorizontal: wp(4),
            paddingVertical: hp(1), backgroundColor: backColor
        }}>
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
                        style={{fontFamily: 'Montserrat-Medium', fontSize: 14, color: textColor, marginBottom: 6,}}>Зарегестрируйтесь,
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
            <View
                style={{flexDirection: 'row', paddingVertical: hp(1)}}>
                <View style={{flexDirection: 'row', alignItems: 'center', marginEnd: wp(3)}}>
                    <CheckBox
                        checkedColor={accentColor}
                        containerStyle={{paddingHorizontal: 0, marginHorizontal: 0}}
                        checked={accountType === 'personal'}
                        onPress={() => setAccountType('personal')}
                        disabled={accountType === 'personal'}
                        checkedIcon="dot-circle-o"
                        uncheckedIcon="circle-o"/>
                    <TouchableOpacity style={{height: 48, justifyContent: 'center'}} activeOpacity={1}
                                      disabled={accountType === 'personal'}
                                      onPress={() => setAccountType('personal')}>
                        <Text style={{fontFamily: 'Montserrat-SemiBold', fontSize: 15, color: textColor,}}>Частное
                            лицо</Text>
                    </TouchableOpacity>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <CheckBox
                        checkedColor={accentColor}
                        containerStyle={{paddingHorizontal: 0, marginHorizontal: 0}}
                        checked={accountType === 'company'}
                        onPress={() => setAccountType('company')}
                        disabled={accountType === 'company'}
                        checkedIcon="dot-circle-o"
                        uncheckedIcon="circle-o"/>
                    <TouchableOpacity style={{height: 48, justifyContent: 'center'}} activeOpacity={1}
                                      disabled={accountType === 'company'}
                                      onPress={() => setAccountType('company')}>
                        <Text style={{
                            fontFamily: 'Montserrat-SemiBold',
                            fontSize: 15,
                            color: textColor,
                        }}>Компания/ИП</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <Divider style={{marginBottom: hp(1)}}/>
            {accountType === 'personal' &&
                <>
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
                    <Divider style={{marginBottom: hp(1)}}/>
                </>
            }
            <View>
                <Input
                    disabledInputStyle={{background: "#ddd"}}
                    inputMode={'email'}
                    inputStyle={{color: textColor}}
                    errorMessage=""
                    leftIcon={<Icon type={'ionicon'} name='mail-outline' color={textColor} size={20}/>}
                    labelStyle={{color: textColor}}
                    placeholder="Email"
                />
                <Input
                    disabledInputStyle={{background: "#ddd"}}
                    inputStyle={{color: textColor}}
                    errorMessage=""
                    leftIcon={<Icon type={'ionicon'} name='key-outline' color={textColor} size={20}/>}
                    labelStyle={{color: textColor}}
                    placeholder="Пароль"
                />
                <Input
                    disabledInputStyle={{background: "#ddd"}}
                    inputStyle={{color: textColor}}
                    errorMessage=""
                    leftIcon={<Icon type={'ionicon'} name='key-outline' color={textColor} size={20}/>}
                    labelStyle={{color: textColor}}
                    placeholder='Подтвердите пароль'
                />
            </View>
            <View>
                <TouchableOpacity>
                    <Text>
                        Я соглашаюсь с условиями пользовательского соглашения
                    </Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity
                style={{
                    alignSelf: 'center',
                    height: 54,
                    width: wp(92),
                    borderRadius: 15,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: accentColor
                }}>
                <Text style={{
                    fontFamily: 'Montserrat-Bold',
                    fontSize: 16,
                    color: theme.neutral.ntrl10
                }}>Зарегистрироваться</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

export default LogUp;