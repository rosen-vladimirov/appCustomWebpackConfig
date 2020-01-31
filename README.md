# appCustomWebpackConfig

NativeScript JavaScript application with custom webpack configuration.

## Prerequisites

You need NativeScript CLI 6.4.0 or newer. You can use its rc version as well: `npm i -g nativescript@rc`.

## Implementation

The application demonstrates how you can use custom webpack configuration and copy additional files to the output directory via CopyWebpackPlugin.
This is achieved by setting the `webpackConfigPath` in `nsconfig.json` to point to our own file - `custom-webpack.config.js`.
The original `webpack.config.js` file is git ignored as it will be created by postinstall script of `nativescript-dev-webpack` - this way you can easily update its version without losing your local changes in the webpack configuration.

## Test the project
1. Clone the repo: `git clone https://github.com/rosen-vladimirov/appCustomWebpackConfig.git`
2. `cd appCustomWebpackConfig`
3. Ensure you have at least the `rc` version of NativeScript CLI: `npm i -g nativescript@rc`
4. `tns run android` or `tns run ios`
5. When you Tap the button you should see the content of the file located in `app/my-custom-dir/resources.txt`.