import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigator from "./src/navigation/Navigator";
import {useFonts} from "expo-font";

const App = () => {
    let [fontsLoaded] = useFonts({
        'Montserrat-Black': require('./assets/fonts/Montserrat-Black.ttf'),
        'Montserrat-Bold': require('./assets/fonts/Montserrat-Bold.ttf'),
        'Montserrat-Italic': require('./assets/fonts/Montserrat-Italic.ttf'),
        'Montserrat-Light': require('./assets/fonts/Montserrat-Light.ttf'),
        'Montserrat-Regular': require('./assets/fonts/Montserrat-Regular.ttf'),
        'Montserrat-Thin': require('./assets/fonts/Montserrat-Thin.ttf'),
    });
    if (fontsLoaded) {
        return (
            <NavigationContainer>
                <BottomTabNavigator />
            </NavigationContainer>
        );
    }
};

export default App;