/* eslint-disable no-console */
import * as index from 'src';

describe('redux-viewport', () => {
    describe('exports', () => {
        it('has a src/index.js file', () => {
            expect(index).toBeDefined();
        });
    });

    describe('test environment', () => {
        it('check if window.matchMedia mocked function have an implementation function', () => {
            require('./_injectMatchMedia');
            expect(window.matchMedia.getMockImplementation()).toBeInstanceOf(Function);
        });
    });
});
