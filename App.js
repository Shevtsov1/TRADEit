import React from 'react';
import { useFonts } from "expo-font";
import AppNavigator from "./src/navigation/Navigator";
import mainTheme from "./assets/themes/mainTheme";
import { StatusBar } from 'react-native';
import * as NavigationBar from "expo-navigation-bar"

const App = () => {
    const isDarkMode = false;
    NavigationBar.setBackgroundColorAsync(isDarkMode ? mainTheme.colors_dark.bg : mainTheme.colors_light.bg).then();
    NavigationBar.setButtonStyleAsync(isDarkMode ? 'light' : 'dark').then();
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
            <>
                <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} translucent
                           backgroundColor={isDarkMode ? mainTheme.colors_dark.accent : mainTheme.colors_light.accent } />
                <AppNavigator theme={mainTheme} isDarkMode={isDarkMode} />
            </>
        );
    }
};

export default App;