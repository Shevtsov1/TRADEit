const {Image} = require('react-native');

const HomeTabBarIcon = ({theme, focused}) => (
    <Image
        source={require('./home.png')}
        style={{width: 30, height: 30, tintColor: 'black'}}
    />
);

const CatalogTabBarIcon = ({theme, focused}) => (
    <Image
        source={require('./catalog.png')}
        style={{width: 30, height: 30, tintColor: 'black'}}
    />
);

const FavoritesTabBarIcon = ({theme, focused}) => (
    <Image
        source={require('./favorite.png')}
        style={{width: 30, height: 30, tintColor: 'black'}}
    />
);

const ProfileTabBarIcon = ({theme, focused}) => (
    <Image
        source={require('./profile.png')}
        style={{width: 30, height: 30, tintColor: 'black'}}
    />
);

module.exports = {
    CatalogTabBarIcon,
    FavoritesTabBarIcon,
    ProfileTabBarIcon,
    HomeTabBarIcon
};
