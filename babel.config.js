module.exports = function (api) {
    api.cache(true);
    return {
        presets: ["babel-preset-expo", "module:metro-react-native-babel-preset"],
        plugins: [
            require.resolve("expo-router/babel"),
            'react-native-reanimated/plugin'
            // [
            //     'react-native-reanimated/plugin', {
            //     relativeSourceLocation: true,
            //   }
            // ]
        ],
    };
};
