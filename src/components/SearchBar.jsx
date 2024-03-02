import React, {useState} from 'react';
import {View, StyleSheet, TextInput, Image, TouchableOpacity, Text} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const SearchBar = ({theme, isDarkMode}) => {
    const {colors_dark, colors_light} = theme;
    const bgColor = isDarkMode ? colors_dark.bg : colors_light.bg;
    const accentColor = isDarkMode ? colors_dark.accent : colors_light.accent;
    const infoColor = isDarkMode ? colors_dark.info : colors_light.info;
    const textColor = isDarkMode ? colors_dark.text : colors_light.text;
    const secondaryColor = isDarkMode ? colors_dark.secondary : colors_light.secondary;

    const [isExpanded, setExpanded] = useState(false);
    const [searchText, setSearchText] = useState('');

    const toggleExpanded = () => {
        setExpanded(!isExpanded);
        if (!isExpanded) {
            setSearchText('');
        }
    };

    const styles = StyleSheet.create({
        searchIcon: {
            width: wp('10%'),
            height: hp('5%'),
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 20,
            backgroundColor: theme.neutral.ntrl10,
            elevation: 5,
        },
        container: {
            flexDirection:'row',
            alignItems: 'center',
            marginHorizontal: wp('1%'),
        },
        searchContainer: {
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: wp('3%'),
            marginEnd: wp('6%'),
            backgroundColor: 'white',
            height: hp('7%'),
            width: wp('75%'),
            borderRadius: 10,
        },
        inputContainer: {
            flex: 1,
            marginLeft: wp('2%'),
            fontSize: hp('2%'),
            color: 'black',
        },
        icon: {
            width: wp('4%'),
            height: hp('2%'),
            tintColor: secondaryColor,
        },
        overlay: {
            ...StyleSheet.absoluteFillObject,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 1,
        },
    });

    return (
        <View>
            {!isExpanded && (
                <TouchableOpacity onPress={toggleExpanded} style={styles.searchIcon}>
                    <Image
                        source={require('../../assets/images/SearchBar/search.png')}
                        style={{width: wp('6%'), height: hp('3%'), tintColor: theme.neutral.ntrl90}}
                    />
                </TouchableOpacity>
            )}

            {isExpanded && (
                <View style={styles.container}>
                    <View style={styles.searchContainer}>
                        <Image source={require('../../assets/images/SearchBar/search.png')} style={{
                            width: wp('4%'),
                            height: hp('2%'),
                            tintColor: secondaryColor
                        }}/>
                        <TextInput
                            style={styles.inputContainer}
                            placeholder="Поиск"
                            value={searchText}
                            onChangeText={setSearchText}
                            autoFocus={true}
                            onBlur={toggleExpanded}
                            returnKeyType="search"
                            onSubmitEditing={() => {
                                // Выполните здесь действия при нажатии на клавишу поиска
                            }}
                        />
                        <TouchableOpacity onPress={() => setSearchText('')}>
                            <Image source={require('../../assets/images/SearchBar/cancel.png')} style={{ width: wp('4%'), height: hp('3%'), tintColor: secondaryColor }} />
                        </TouchableOpacity>
                    </View>
                        <Text style={{color: 'white'}}>Назад</Text>
                </View>
            )}
        </View>
    );
};

export default SearchBar;