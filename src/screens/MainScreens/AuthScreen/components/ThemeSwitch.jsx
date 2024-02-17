import React from 'react';
import {StyleSheet, Image, TouchableOpacity} from 'react-native';
import themeSwitcher from "../../../../../assets/images/themeSwitcher.png";

const styles = StyleSheet.create({
    switchContainer: {
        position: 'absolute',
        top: '5%',
        left: '5%',
        width: '80%',
    },
    switchIcon: {
        width: 36,
        height: 36,
    },
});

function ThemeSwitch({toggleTheme}) {
    const handleToggleTheme = () => {
        toggleTheme();
    };

    return (
        <TouchableOpacity style={styles.switchContainer} onPress={handleToggleTheme}>
            <Image style={styles.switchIcon} source={themeSwitcher}/>
        </TouchableOpacity>
    );
}

export default ThemeSwitch;
