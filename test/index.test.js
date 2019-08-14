import webServer from '../src';

describe('webServer', () => {
	test('initialization', () => {
		expect(webServer).toEqual(expect.any(Function));
	});
});
