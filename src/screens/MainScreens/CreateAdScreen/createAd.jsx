import React from 'react';
import { View, Text } from 'react-native';

const CreateAd = ({theme, isDarkMode}) => {
    const { colors_dark, colors_light, neutral} = theme;
    const backColor = isDarkMode ? neutral.ntrl90 : neutral.ntrl20;

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: backColor }}>
            <Text>C R E A T E  A D</Text>
        </View>
    );
};

export default CreateAd;