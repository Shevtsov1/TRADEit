import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Image} from 'react-native';
import Constants from "expo-constants";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import SearchBar from "./SearchBar";
import {GradientText} from "./GradientText";

const MainScreenHeader = ({theme, isDarkMode, styles, textGradientStartColor, textGradientEndColor}) => {

    return (
        <View style={styles.header}>
            <SearchBar theme={theme} isDarkMode={isDarkMode}/>
            <GradientText
                style={styles.logoText}
                theme={theme}
                isDarkMode={isDarkMode}
                text={'TRADEit'}
                colors={[textGradientStartColor, textGradientEndColor]}
            />
            <TouchableOpacity style={{
                width: wp('8%'),
                height: hp('4%'),
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Image source={require('../../assets/images/Chat/chat.png')} style={{
                    width: wp('6%'),
                    height: hp('3%'),
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
                text={'TRADEit'}
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
                text={'TRADEit'}
                colors={[textGradientStartColor, textGradientEndColor]}
            />
            <Text>Chat</Text>
        </View>
    );
};

const ProfileScreenHeader = ({theme, isDarkMode, styles, textGradientStartColor, textGradientEndColor}) => {

    return (
        <View style={styles.header}>
            <SearchBar theme={theme} isDarkMode={isDarkMode}/>
            <GradientText
                style={styles.logoText}
                theme={theme}
                isDarkMode={isDarkMode}
                text={'TRADEit'}
                colors={[textGradientStartColor, textGradientEndColor]}
            />
            <Text>Chat</Text>
        </View>
    );
};

const ScreenHeader = ({theme, isDarkMode, page}) => {
    const {colors_dark, colors_light} = theme;
    const textGradientStartColor = isDarkMode ? colors_dark.accent : colors_light.accent;
    const textGradientEndColor = isDarkMode ? colors_dark.info : colors_light.info;

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
                                    textGradientEndColor={textGradientEndColor}/>;
    } else {
        return null;
    }
};

export default ScreenHeader;