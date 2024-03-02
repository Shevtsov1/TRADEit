const { Image } = require('react-native');

const getIconStyle = (focused, isDarkMode, theme, size) => {
    const { colors_dark, colors_light, neutral } = theme;
    const activeColor = isDarkMode ? colors_dark.accent : colors_light.accent;
    const inactiveColor = neutral.ntrl70;

    return {
        width: size,
        height: size,
        tintColor: focused ? activeColor : inactiveColor
    };
};

const HomeTabBarIcon = ({ theme, focused, isDarkMode, size }) => (
    <Image
        source={require('./home.png')}
        style={getIconStyle(focused, isDarkMode, theme, size)}
    />
);

const CatalogTabBarIcon = ({ theme, focused, isDarkMode, size }) => (
    <Image
        source={require('./catalog.png')}
        style={getIconStyle(focused, isDarkMode, theme, size)}
    />
);

const AddTabBarIcon = ({ theme, focused, isDarkMode, size }) => (
    <Image
        source={require('./add.png')}
        style={getIconStyle(focused, isDarkMode, theme, size)}
    />
);

const FavoritesTabBarIcon = ({ theme, focused, isDarkMode, size }) => (
    <Image
        source={require('./favorite.png')}
        style={getIconStyle(focused, isDarkMode, theme, size)}
    />
);

const ProfileTabBarIcon = ({ theme, focused, isDarkMode, size }) => (
    <Image
        source={require('./profile.png')}
        style={getIconStyle(focused, isDarkMode, theme, size)}
    />
);

module.exports = {
    CatalogTabBarIcon,
    FavoritesTabBarIcon,
    ProfileTabBarIcon,
    HomeTabBarIcon,
    AddTabBarIcon
};