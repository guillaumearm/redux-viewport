const is = type => x => typeof x === type;

export const isString = is('string');
