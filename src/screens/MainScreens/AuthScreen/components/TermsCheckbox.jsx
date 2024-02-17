import React, {useState} from 'react';
import {TouchableOpacity, Image, Text, StyleSheet, View} from 'react-native';

import images from '../../../../../assets/images/checkboxes';
import Terms from "./Terms";

const TermsCheckbox = ({theme, isActive, onCheckboxToggle}) => {
    const [isChecked, setIsChecked] = useState(isActive);
    const [showTerms, setShowTerms] = useState(false);

    const handleCheckboxPress = () => {
        const updatedChecked = !isChecked;
        setIsChecked(updatedChecked);
        onCheckboxToggle(updatedChecked);
    };

    const handleShowTerms = () => {
        setShowTerms(true);
    };

    const handleTermsPress = () => {
        isChecked ? handleCheckboxPress() : handleShowTerms();
    }

    const handleCloseTerms = () => {
        setShowTerms(false);
    };

    return (
        <View>
            <TouchableOpacity onPress={handleTermsPress} style={styles.container}>
                <Image
                    source={isChecked ? images.checkboxDark : images.uncheckedCheckboxDark}
                    style={[styles.checkbox, {tintColor: theme.colors.primary}]}
                />
                <Text style={[styles.label, {color: theme.colors.text}]}>
                    Пользовательское соглашение
                </Text>
            </TouchableOpacity>
            <Terms theme={theme} isVisible={showTerms} handleConfirm={handleCheckboxPress} onClose={handleCloseTerms}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    checkbox: {
        width: 20,
        height: 20,
        marginRight: 5,
    },
    label: {
        fontSize: 16,
    },
});

export default TermsCheckbox;
