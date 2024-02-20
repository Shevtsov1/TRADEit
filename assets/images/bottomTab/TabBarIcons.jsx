const { Image } = require('react-native');

const getIconStyle = (focused, isDarkMode, theme) => {
    const { colors_dark, colors_light } = theme;
    const accentColor = isDarkMode ? colors_dark.accent : colors_light.accent;
    const secondaryColor = isDarkMode ? colors_dark.secondary : colors_light.secondary;

    return {
        width: 24,
        height: 24,
        tintColor: focused ? accentColor : secondaryColor
    };
};

const HomeTabBarIcon = ({ theme, focused, isDarkMode }) => (
    <Image
        source={require('./home.png')}
        style={getIconStyle(focused, isDarkMode, theme)}
    />
);

const CatalogTabBarIcon = ({ theme, focused, isDarkMode }) => (
    <Image
        source={require('./catalog.png')}
        style={getIconStyle(focused, isDarkMode, theme)}
    />
);

const FavoritesTabBarIcon = ({ theme, focused, isDarkMode }) => (
    <Image
        source={require('./favorite.png')}
        style={getIconStyle(focused, isDarkMode, theme)}
    />
);

const ProfileTabBarIcon = ({ theme, focused, isDarkMode }) => (
    <Image
        source={require('./profile.png')}
        style={getIconStyle(focused, isDarkMode, theme)}
    />
);

module.exports = {
    CatalogTabBarIcon,
    FavoritesTabBarIcon,
    ProfileTabBarIcon,
    HomeTabBarIcon
};