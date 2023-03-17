module.exports = {
	globDirectory: 'src/',
	globPatterns: [
		'**/*.{ts,html,svelte,svg,png,jpg,css}'
	],
	swDest: 'src/service-worker.ts',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};