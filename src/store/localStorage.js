import store from 'store';

export const getStorage = key => store.get(key);

export const setStorage = (key, value) => store.set(key, value);

export const removeState = key => store.remove(key);

export const hasStorage = key => {
  const item = getStorage(key);
  return typeof item !== 'undefined';
};