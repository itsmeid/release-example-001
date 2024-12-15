import { describe, it, expect } from 'bun:test';
import { releaseExample } from 'index';

describe('example', () => {
	it('release example', () => {
		expect(releaseExample()).toBe('releaseExample');
	});

	it('longer duration', () => {
		const temp = [];
		const length = 1000000;

		for (let i = 0; i < length; i++) {
			temp.push(releaseExample());
		}

		expect(temp).toBeArrayOfSize(length);
	});
});
