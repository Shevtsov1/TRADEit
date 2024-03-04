import React, {useEffect, useState} from 'react';
import {useFonts} from 'expo-font';
import AppNavigator from './src/navigation/Navigator';
import mainTheme from './assets/themes/mainTheme';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {StatusBar} from "expo-status-bar";

const App = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    // Загрузка шрифтов
    let [fontsLoaded] = useFonts({
        'Montserrat-Black': require('./assets/fonts/Montserrat-Black.ttf'),
        'Montserrat-Bold': require('./assets/fonts/Montserrat-Bold.ttf'),
        'Montserrat-Italic': require('./assets/fonts/Montserrat-Italic.ttf'),
        'Montserrat-Light': require('./assets/fonts/Montserrat-Light.ttf'),
        'Montserrat-Regular': require('./assets/fonts/Montserrat-Regular.ttf'),
        'Montserrat-Thin': require('./assets/fonts/Montserrat-Thin.ttf'),
    });

    useEffect(() => {
        // Загрузка сохраненной темы при запуске приложения
        const loadTheme = async () => {
            try {
                const savedTheme = await AsyncStorage.getItem('theme');
                if (savedTheme) {
                    const theme = JSON.parse(savedTheme);
                    setIsDarkMode(!theme.isDarkMode);
                }
            } catch (error) {
                console.error('Error loading theme:', error);
            }
        };

        loadTheme().then((r) => console.log('Theme loaded successfully'));
    }, []); // Загрузка темы только один раз при запуске приложения

    useEffect(() => {
        // Сохранение темы при изменении режима
        const saveTheme = async () => {
            try {
                const theme = {isDarkMode};
                await AsyncStorage.setItem('theme', JSON.stringify(theme));
            } catch (error) {
                console.error('Error saving theme:', error);
            }
        };

        saveTheme().then((r) => console.log('Theme saved successfully'));
    }, [isDarkMode]);

    if (fontsLoaded) {
        return (
            <>
                <StatusBar style={isDarkMode ? 'light' : 'dark'}
                           backgroundColor={isDarkMode ? mainTheme.colors_dark.bg : mainTheme.colors_light.bg}/>
                <SafeAreaProvider>
                    <AppNavigator theme={mainTheme} isDarkMode={isDarkMode}/>
                </SafeAreaProvider>
            </>
        );
    } else {
        return null;
    }
};

export default App;