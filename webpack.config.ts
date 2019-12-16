// @ts-ignore
import ScreepsWebpackPlugin from './config/screepsWebpackPlugin'

export default (env: any) => {
	const config: any = {
		target: "node",
		mode: env === "development" ? "development" : "production",
		devtool: "source-map",
		stats: "minimal",
		entry: ["./src/main.ts"],
		module: {
			rules: [
				{
					test: /\.ts?$/,
					use: "ts-loader",
					exclude: /node_modules/
				}
			]
		},
		resolve: {
			extensions: [".ts", ".js"]
		},
		node: {
			__dirname: true
		},
		plugins: [],
		externals: {
			'main.js.map': 'main.js.map',
		},
		output: {
			filename: "main.js",
			path: __dirname,
			libraryTarget: 'commonjs2'
		}
	}

	config.plugins.push(new ScreepsWebpackPlugin());

	return config
}
