import {
  CONTACTS_FETCHING,
  CONTACTS_FAVE,
  CONTACTS_FAVED,
  CONTACTS_UNFAVE,
  CONTACTS_UNFAVED,
  CONTACTS_RECEIVED,
  CONTACTS_ADDING,
  CONTACT_ADDED,
  CONTACT_REMOVED,
  CONTACTS_RESET
} from '../constants';

const initialState = {
  contacts: []
}

export default function Contact (state = initialState, action) {
  switch (action.type) {
    case CONTACTS_FETCHING:
      return { ...state, fetchingContacts: true };

    case CONTACTS_RECEIVED:
      return { ...state, fetchingContacts: false, contacts: action.contacts };

    case CONTACTS_RESET:
      return { ...state, errors: null, fetchingContacts: false };

    case CONTACT_ADDED:
      return { ...state, contacts: action.message };

    case CONTACT_REMOVED:
      return { ...state, contacts: action.message };

    default:
      return state;
  }

}

