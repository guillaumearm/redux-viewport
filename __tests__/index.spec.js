/* eslint-disable no-console */
import * as index from 'src';

describe('redux-viewport', () => {
    describe('exports', () => {
        it('has a src/index.js file', () => {
            expect(index).toBeDefined();
        });
        it('cannot use updateMedia() private action creator', () => {
            expect(index.updateMedia).toBeUndefined();
        });
        it('expose listenMedia() action creator', () => {
            expect(index.listenMedia).toBeDefined();
        });
        it('expose clearMedia() action creator', () => {
            expect(index.clearMedia).toBeDefined();
        });
        it('expose LISTEN_MEDIA action type', () => {
            expect(index.LISTEN_MEDIA).toBeDefined();
        });
        it('expose CLEAR_MEDIA action type', () => {
            expect(index.CLEAR_MEDIA).toBeDefined();
        });
        it('expose UPDATE_MEDIA action type', () => {
            expect(index.UPDATE_MEDIA).toBeDefined();
        });
    });

    describe('test environment', () => {
        it('check if window.matchMedia mocked function have an implementation function', () => {
            require('./_injectMatchMedia');
            expect(window.matchMedia.getMockImplementation()).toBeInstanceOf(Function);
        });
    });
});
