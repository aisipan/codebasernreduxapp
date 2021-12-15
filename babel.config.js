module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          // assets: './src/assets',
          const: './src/const',
          // components: './src/components',
          pages: './src/pages',
          // redux: './src/redux',
          routes: './src/routes',
          services: './src/services',
          utils: './src/utils'
        },
      },
    ],
  ],
};
