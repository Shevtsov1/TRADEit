import React, {useEffect} from 'react';
import {useFonts} from "expo-font";
import AppNavigator from "./src/navigation/Navigator";
import mainTheme from "./assets/themes/mainTheme";
import {StatusBar} from 'react-native';
import * as NavigationBar from "expo-navigation-bar"
import {SafeAreaProvider} from 'react-native-safe-area-context';

const App = () => {
    const isDarkMode = false;
    useEffect(() => {
        const setNavigationBarColor = async () => {
            try {
                const backgroundColor = isDarkMode
                    ? mainTheme.neutral.ntrl100
                    : mainTheme.neutral.ntrl10;

                if (backgroundColor != null) {
                    await NavigationBar.setBackgroundColorAsync(backgroundColor);
                } else {
                    console.error("Error: Invalid background color value");
                }
            } catch (error) {
                console.error("Error setting background color:", error);
            }
        };

        setNavigationBarColor().catch((error) => {
            console.log("Error while loading NavigationBarColor", error);
        });
    }, []);
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
            <SafeAreaProvider>
                <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} translucent
                           backgroundColor={isDarkMode ? mainTheme.colors_dark.bg : mainTheme.colors_light.bg}/>
                <AppNavigator theme={mainTheme} isDarkMode={isDarkMode}/>
            </SafeAreaProvider>
        );
    }
};

export default App;