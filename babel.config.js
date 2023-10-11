module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      // Required for expo-router
      'expo-router/babel',
      'nativewind/babel',
      'react-native-paper/babel',
      // optional, only if you ever use process.env
      "transform-inline-environment-variables",
      // NOTE: this is optional, you don't *need* the compiler
     
      // NOTE: this is only necessary if you are using reanimated for animations
      "react-native-reanimated/plugin",
      ["module:react-native-dotenv"]
    ],
  };
};
