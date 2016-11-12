import * as actions from './actions';

const { updateMedia, ...exposedActions } = actions;
module.exports = exposedActions;
