import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Image} from 'react-native';
import Constants from "expo-constants";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import SearchBar from "./SearchBar";
import {GradientText} from "./GradientText";
import {auth} from "../firebase/firebaseConfig";

const AuthScreenHeader = ({theme, isDarkMode, styles, textGradientStartColor, textGradientEndColor, navigation}) => {

    const handleCloseAuthBtn = () => {
        navigation.goBack();
    }

    return (
        <View style={styles.header}>
            <GradientText style={styles.logoText} theme={theme} isDarkMode={isDarkMode} text={'RoccaRent'}
                          colors={[textGradientStartColor, textGradientEndColor]}/>
            <TouchableOpacity onPress={handleCloseAuthBtn}>
                <Text style={{
                    fontFamily: 'Montserrat-Medium',
                    fontSize: 16,
                    color: isDarkMode ? theme.colors_dark.text : theme.colors_light.text
                }}>Закрыть</Text>
            </TouchableOpacity>
        </View>
    );
};


const MainScreenHeader = ({theme, isDarkMode, styles, textGradientStartColor, textGradientEndColor}) => {

    return (
        <View style={styles.header}>
            <SearchBar theme={theme} isDarkMode={isDarkMode}/>
            <GradientText
                style={styles.logoText}
                theme={theme}
                isDarkMode={isDarkMode}
                text={'RoccaRent'}
                colors={[textGradientStartColor, textGradientEndColor]}
            />
            <TouchableOpacity style={{
                width: 24,
                height: 24,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Image source={require('../../assets/images/Chat/chat.png')} style={{
                    width: 24,
                    height: 24,
                    tintColor: isDarkMode ? theme.colors_dark.accent : theme.colors_light.accent
                }}/>
            </TouchableOpacity>
        </View>
    );
};

const CatalogScreenHeader = ({theme, isDarkMode, styles, textGradientStartColor, textGradientEndColor}) => {

    return (
        <View style={styles.header}>
            <SearchBar theme={theme} isDarkMode={isDarkMode}/>
            <GradientText
                style={styles.logoText}
                theme={theme}
                isDarkMode={isDarkMode}
                text={'RoccaRent'}
                colors={[textGradientStartColor, textGradientEndColor]}
            />
            <Text>Chat</Text>
        </View>
    );
};

const FavoritesScreenHeader = ({theme, isDarkMode, styles, textGradientStartColor, textGradientEndColor}) => {

    return (
        <View style={styles.header}>
            <SearchBar theme={theme} isDarkMode={isDarkMode}/>
            <GradientText
                style={styles.logoText}
                theme={theme}
                isDarkMode={isDarkMode}
                text={'RoccaRent'}
                colors={[textGradientStartColor, textGradientEndColor]}
            />
            <Text>Chat</Text>
        </View>
    );
};

const ProfileScreenHeader = ({user, theme, isDarkMode, setInitializing, styles}) => {
    const handleSignOutBtn = () => {
        setInitializing(true);
        auth.signOut().then();
        setInitializing(false);
    }
    return (
        <View style={styles.header}>
            <Text style={{
                fontFamily: 'Montserrat-Black',
                fontSize: 24,
                color: isDarkMode ? theme.colors_dark.accent : theme.colors_light.accent,
            }}>Профиль</Text>
            {!user.isAnonymous && (
                <View style={{flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center'}}>
                    <TouchableOpacity
                        style={{width: 36, height: 36, alignItems: 'center', justifyContent: 'center', marginEnd: 12}}>
                        <Image
                            source={require('../../assets/images/screens/profile/settings.png')}
                            style={{
                                width: 24,
                                height: 24,
                                tintColor: isDarkMode ? theme.colors_dark.accent : theme.colors_light.accent,
                            }} resizeMode={"contain"}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={{width: 36, height: 36, alignItems: 'center', justifyContent: 'center'}}
                                      onPress={handleSignOutBtn}>
                        <Image
                            source={require('../../assets/images/screens/profile/logout-filled.png')}
                            style={{
                                width: 24,
                                height: 24,
                                tintColor: isDarkMode ? theme.colors_dark.accent : theme.colors_light.accent,
                            }} resizeMode={"contain"}/>
                    </TouchableOpacity>
                </View>
            )}
        </View>
    );
};

const ScreenHeader = ({user, theme, isDarkMode, page, setInitializing, navigation}) => {
        const {colors_dark, colors_light} = theme;
        const textGradientStartColor = isDarkMode ? colors_dark.accent : colors_light.accent;
        const textGradientEndColor = isDarkMode ? colors_dark.secondary : colors_light.secondary;

        const statusBarHeight = Constants.statusBarHeight;

        const styles = StyleSheet.create({
            header: {
                alignItems: "center",
                justifyContent: "space-between",
                flexDirection: "row",
                marginTop: statusBarHeight,
                paddingHorizontal: wp('5%'),
                minHeight: hp('6%'),
                height: hp('8%'),
                maxHeight: hp('8%'),
                backgroundColor: isDarkMode ? theme.colors_dark.bg : theme.colors_light.bg,
                elevation: 8,
                shadowColor: isDarkMode ? theme.colors_dark.bg : theme.colors_light.bg,
            },
            logoText: {
                fontFamily: 'Montserrat-Black',
                fontSize: 26,
            },
        });

        // В зависимости от значения `page`, выбираем нужный компонент для рендеринга
        if (page === 'main') {
            return <MainScreenHeader theme={theme} isDarkMode={isDarkMode} styles={styles}
                                     textGradientStartColor={textGradientStartColor}
                                     textGradientEndColor={textGradientEndColor}/>;
        } else if (page === 'catalog') {
            return <CatalogScreenHeader theme={theme} isDarkMode={isDarkMode} styles={styles}
                                        textGradientStartColor={textGradientStartColor}
                                        textGradientEndColor={textGradientEndColor}/>;
        } else if (page === 'favorites') {
            return <FavoritesScreenHeader theme={theme} isDarkMode={isDarkMode} styles={styles}
                                          textGradientStartColor={textGradientStartColor}
                                          textGradientEndColor={textGradientEndColor}/>;
        } else if (page === 'profile') {
            return <ProfileScreenHeader theme={theme} isDarkMode={isDarkMode} styles={styles}
                                        textGradientStartColor={textGradientStartColor}
                                        textGradientEndColor={textGradientEndColor} user={user} setInitializing={setInitializing}/>;
        } else if (page === 'auth') {
            return <AuthScreenHeader theme={theme} isDarkMode={isDarkMode} styles={styles}
                                     textGradientStartColor={textGradientStartColor}
                                     textGradientEndColor={textGradientEndColor} user={user} navigation={navigation}/>
        } else {
            return null;
        }
    }
;

export default ScreenHeader;