import React, { useEffect, useState } from 'react';
import { useFonts } from 'expo-font';
import AppNavigator from './src/navigation/Navigator';
import mainTheme from './assets/themes/mainTheme';
import { StatusBar } from 'react-native';
import * as NavigationBar from 'expo-navigation-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
        // Установка цвета панели навигации
        const setNavigationBarColor = async () => {
            try {
                const backgroundColor = isDarkMode
                    ? mainTheme.colors_dark.bg
                    : mainTheme.colors_light.bg;

                if (backgroundColor != null) {
                    await NavigationBar.setBackgroundColorAsync(backgroundColor);
                    await NavigationBar.setButtonStyleAsync(
                        isDarkMode ? 'light' : 'dark'
                    ).then();
                } else {
                    console.error('Error: Invalid background color value');
                }
            } catch (error) {
                console.error('Error setting background color:', error);
            }
        };

        setNavigationBarColor().catch((error) => {
            console.log('Error while loading NavigationBarColor', error);
        });
    }, [isDarkMode]);

    NavigationBar.setButtonStyleAsync(isDarkMode ? 'light' : 'dark').then();

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
                const theme = { isDarkMode };
                await AsyncStorage.setItem('theme', JSON.stringify(theme));
            } catch (error) {
                console.error('Error saving theme:', error);
            }
        };

        saveTheme().then((r) => console.log('Theme saved successfully'));
    }, [isDarkMode]);

    if (fontsLoaded) {
        return (
            <SafeAreaProvider>
                <StatusBar
                    barStyle={isDarkMode ? 'light-content' : 'dark-content'}
                    translucent
                    backgroundColor={
                        isDarkMode
                            ? mainTheme.colors_dark.bg
                            : mainTheme.colors_light.bg
                    }
                />
                <AppNavigator theme={mainTheme} isDarkMode={isDarkMode} />
            </SafeAreaProvider>
        );
    } else {
        return null;
    }
};

export default App;