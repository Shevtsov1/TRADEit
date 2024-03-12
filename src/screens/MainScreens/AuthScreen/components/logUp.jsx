import React from 'react';
import { View, Text } from 'react-native';

const LogUp = ({theme, isDarkMode, user}) => {
    return (
        <View style={{flex: 1, backgroundColor: isDarkMode ? theme.neutral.ntrl90 : theme.neutral.ntrl20}}>
            <Text>LogUp Component</Text>
        </View>
    );
};

export default LogUp;