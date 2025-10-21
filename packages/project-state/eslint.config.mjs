import baseConfig from '../../eslint.config.mjs';

export default [
	...baseConfig,
	{
		files: ['**/*.json'],
		rules: {
			'@nx/dependency-checks': [
				'error',
				{
					ignoredFiles: [
						'{projectRoot}/eslint.config.{js,cjs,mjs,ts,cts,mts}',
						'{projectRoot}/vite.config.{js,ts,mjs,mts}',
						'{projectRoot}/src/lib/state.bench.ts'
					],
					ignoredDependencies: ['immer', 'mobx']
				}
			]
		},
		languageOptions: {
			parser: await import('jsonc-eslint-parser')
		}
	},
	{
		ignores: ['**/out-tsc']
	}
];
