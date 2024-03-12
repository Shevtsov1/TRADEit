import React from 'react';
import { View, Text } from 'react-native';

const LogIn = ({theme, isDarkMode, user}) => {
    return (
        <View style={{flex: 1, backgroundColor: isDarkMode ? theme.neutral.ntrl90 : theme.neutral.ntrl20}}>
            <Text>LogIn Component</Text>
        </View>
    );
};

export default LogIn;