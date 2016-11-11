redux-viewport
===================

Keep the browser viewport sync with your redux state.

### Introduction
Firs of all, if you want to do reponsive things with React and Redux, please see [redux-responsive](https://github.com/AlecAivazis/redux-responsive).

#### When use redux-viewport ?
__redux-viewport__ is designed to dynamically set viewport listeners in your application.

example :
- _responsive breakpoints_ __are not the same__ between pages.
- _responsive breakpoints_ are __sent by a remote server__.

#### Usage
```js
import { createStore, applyMiddleware } from 'redux';
import { viewportMiddleware, viewportReducer, listenMedia, clearMedia } from 'redux-viewport';

const rootReducer = {
    ...reducers,
    viewport: viewportReducer,
};

const store = createStore(rootReducer, applyMiddleware(viewportMiddleware));
const { dispatch, getState } = store;

const getIsLandScape = () => getState().viewport.isLandscape;

getIsLandScape() // should be undefined
dispatch(listenMedia('isLandscape', '(orientation: landscape)'));
getIsLandScape() // should be a boolean

/*
 * state.viewport.isLandscape will be keep in sync with the browser
 * if you want to stop listening for it, you can use the clearMedia action creator.
*/

dispatch(clearMedia('isLandscape'))
getIsLandScape() // should be a boolean

// if you want to erase value in the store when clear a media, use the optional parameter of clearMedia()
dispatch(clearMedia('isLandscape'), { eraseValue: true });
getIsLandScape() // should be null



// you can listen more one media in one dispatch :
dispatch(listenMedia({
    'isLandscape': '(orientation: landscape)',
    'isPortrait': '(orientation: portrait)',
}))
// or clear more one media :
dipatch(clearMedia([
    'isLandscape,'
    'isPortrait',
]))
```

#### actions are [FSA compliant](https://github.com/acdlite/flux-standard-action) :
```js
import { LISTEN_MEDIA, CLEAR_MEDIA } from 'redux-viewport';

// listenMedia('isLandscape', '(orientation: landscape)') return
{
    type: LISTEN_MEDIA, // @@viewport/LISTEN_MEDIA
    payload: {
        'isLandscape': '(orientation: landscape)',
    },
}

// clearMedia('isLandscape') return
{
    type: CLEAR_MEDIA, // @@viewport/CLEAR_MEDIA
    payload: ['isLandscape'],
    meta: { keepValue: false },
}
```
