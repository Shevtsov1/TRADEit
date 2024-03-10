import React from 'react';
import {Text, View} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import MaskedView from '@react-native-masked-view/masked-view';

export function GradientText(props) {

    return (
        <MaskedView maskElement={<Text style={[props.style, {backgroundColor: 'transparent'}]}>{props.text}</Text>}>
            <LinearGradient
                locations={[0.4, 0.6]}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 1}}
                colors={props.colors}
            >
                <Text style={[props.style, {opacity: 0}]}>{props.text}</Text>
            </LinearGradient>
        </MaskedView>
    );
};
