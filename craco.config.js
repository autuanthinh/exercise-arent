const CracoAlias = require('craco-alias');

module.exports = {
  plugins: [
    {
      // Create absolute path
      plugin: CracoAlias,
      options: {
        source: 'tsconfig',
        baseUrl: './src',
        tsConfigPath: './tsconfig.extend.json',
      },
    },
  ],
};
