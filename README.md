redux-viewport
===================

Keep the browser viewport sync with your redux state.

### Introduction
First of all, if you want to do reponsive things with React and Redux, take a look at [redux-responsive](https://github.com/AlecAivazis/redux-responsive).

#### When use redux-viewport ?
__redux-viewport__ is designed to dynamically set viewport listeners in your application.

examples :
- _responsive breakpoints_ __are not the same__ between pages.
- _responsive breakpoints_ are __sent by a remote server__.
- you wants to disable some _responsive breakpoints_ in specific situation.

### Usage
#### Setting up store
```js
import { createStore, applyMiddleware } from 'redux';
import { viewportMiddleware, viewportReducer } from 'redux-viewport';

const rootReducer = {
    ...reducers,
    viewport: viewportReducer, // this is a reducer, so you can put it everywhere you want in the state
};

const initialState = {};

const store = createStore(rootReducer, initialState, applyMiddleware(viewportMiddleware));
```

#### Listen a single media
```js
import { listenMedia } from 'redux-viewport';
const { store, getState } = store;
const getIsLandScape = () => getState().viewport.isLandscape;

getIsLandScape() // should be undefined
dispatch(listenMedia('isLandscape', '(orientation: landscape)'));
getIsLandScape() // should be a boolean value
```
`state.viewport.isLandscape` will be keep in sync with the browser.


#### Stop to listen a single media
- you can use clearMedia() action creator to stop listening media.

```js
import { clearMedia } from 'redux-viewport';

dispatch(clearMedia('isLandscape'))
getIsLandScape() // should be undefined
```

- if you want to keep last boolean value in the store when clear a media, use the optional parameter of clearMedia()
```js
import { clearMedia } from 'redux-viewport';

dispatch(clearMedia('isLandscape'), { keepValue: true });
getIsLandScape() // should be a boolean value
```

#### Listen multiple media in one dispatch
```js
import { listenMedia } from 'redux-viewport';

dispatch(listenMedia({
    'isLandscape': '(orientation: landscape)',
    'isPortrait': '(orientation: portrait)',
}))
```
#### Stop to listen multiple media in one dispatch
```js
import { clearMedia } from 'redux-viewport';

dipatch(clearMedia([
    'isLandscape,'
    'isPortrait',
]))
```
note you can use `keepValue` option here too.

### Actions
__redux-viewport__ actions are [FSA compliant](https://github.com/acdlite/flux-standard-action) :
```js
import { LISTEN_MEDIA, CLEAR_MEDIA } from 'redux-viewport';

listenMedia('isLandscape', '(orientation: landscape)');
/* return this action
{
    type: LISTEN_MEDIA, // @@viewport/LISTEN_MEDIA
    payload: {
        'isLandscape': '(orientation: landscape)',
    },
}
*/

clearMedia('isLandscape');
/* return this action
{
    type: CLEAR_MEDIA, // @@viewport/CLEAR_MEDIA
    payload: ['isLandscape'],
    meta: { keepValue: false },
}
*/
```
