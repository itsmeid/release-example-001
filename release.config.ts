import type { GlobalConfig } from 'semantic-release';

const Config: GlobalConfig = {
	branches: ['main', 'next', { name: 'alpha', prerelease: true }, { name: 'beta', prerelease: true }],
	repositoryUrl: 'https://github.com/itsmeid/release-example-001',
	tagFormat: 'v${version}',
	plugins: [
		[
			'@semantic-release/commit-analyzer',
			{
				preset: 'angular',
				releaseRules: [
					{
						breaking: true,
						release: 'major'
					},
					{
						type: 'feat',
						release: 'minor'
					},
					{
						type: 'fix',
						release: 'patch'
					},
					{
						type: 'docs',
						scope: 'README',
						release: 'patch'
					},
					{
						type: 'chore',
						release: 'patch'
					}
				],
				parserOpts: {
					noteKeywords: ['BREAKING CHANGE', 'BREAKING CHANGES', 'BREAKING']
				}
			}
		],
		['@semantic-release/release-notes-generator', {}],
		'@semantic-release/changelog',
		'@semantic-release/npm',
		'@semantic-release/github'
	]
};

export default Config;
