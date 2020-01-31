const webpackConfig = require("./webpack.config");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = env => {
	const config = webpackConfig(env);
	const customCopyInstance = new CopyWebpackPlugin([
		{ from: { glob: "my-custom-dir/**" } },
	]);

	config.plugins.unshift(customCopyInstance);

	return config;
};