import type { GlobalConfig } from 'semantic-release';

const Config: GlobalConfig = {
	branches: ['main', 'develop'],
	repositoryUrl: 'https://github.com/itsmeid/release-example-001',
	tagFormat: 'v${version}',
	plugins: [
		'@semantic-release/commit-analyzer',
		'@semantic-release/release-notes-generator',
		'@semantic-release/npm',
		'@semantic-release/github'
	]
};

export default Config;
