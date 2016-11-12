import { createAction } from 'redux-actions';
import { isString } from 'src/internal'

export const LISTEN_MEDIA = '@@viewport/LISTEN_MEDIA';
export const CLEAR_MEDIA = '@@viewport/CLEAR_MEDIA';
export const UPDATE_MEDIA = '@@viewport/UPDATE_MEDIA';

const listenPayloadCreator = (a, b) => (b ? { a: b } : a);
const clearPayloadCreator = (a) => isString(a) ? [a] : a
const withMeta = (a, b) => b;

export const listenMedia = createAction(LISTEN_MEDIA, listenPayloadCreator);
export const clearMedia = createAction(CLEAR_MEDIA, clearPayloadCreator, withMeta);

// low level private action creator
export const updateMedia = createAction(UPDATE_MEDIA);
