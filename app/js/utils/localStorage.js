import { CONTACTS_STATE } from '../constants'

export function loadState () {
  try {
    const serialized = localStorage.getItem(CONTACTS_STATE)
    if (serialized === null) {
      return undefined;
    }
    return JSON.parse(serialized);
  }
  catch (error) {
    return undefined
  }
}

export function saveState (state) {
  try {
    const serialized = JSON.stringify(state);
    localStorage.setItem(CONTACTS_STATE, serialized);
  }
  catch (error) {
    console.error(error);
    console.error('Failed to save state', state);
  }
}
