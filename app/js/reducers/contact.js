import {
  CONTACTS_FETCHING,
  CONTACTS_RECEIVED,
  CONTACTS_SEARCHING,
  CONTACTS_SEARCHED,
  CONTACT_ADDING,
  CONTACT_FAVE,
  CONTACT_FAVED,
  CONTACT_UNFAVE,
  CONTACT_UNFAVED,
  CONTACT_ADDED,
  CONTACT_REMOVING,
  CONTACT_REMOVED
} from '../constants';

const initialState = {
  contacts: []
};

export default function Contact (state = initialState, action) {
  switch (action.type) {
    case CONTACTS_FETCHING:
      return { ...state, fetchingContacts: true };

    case CONTACTS_RECEIVED:
      const contacts = action.contacts || {};
      return { ...state, fetchingContacts: false, contacts: contacts };

    case CONTACTS_SEARCHING:
      return { ...state, searchingContacts: true };

    case CONTACTS_SEARCHED:
      const allContacts = action.contacts || {};
      return { ...state, searchingContacts: false, contacts: allContacts };

    case CONTACT_ADDING:
      return { ...state, addingContact: true };

    case CONTACT_FAVE:
      return { ...state, favingContact: true };

    case CONTACT_FAVED:
      return { ...state, contacts: action.message, favingContact: false };

    case CONTACT_UNFAVE:
      return { ...state, unfavingContact: true };

    case CONTACT_UNFAVED:
      return { ...state, contacts: action.message, unfavingContact: false };

    case CONTACT_ADDED:
      return { ...state, contacts: action.message, addingContact: false };

    case CONTACT_ADDING:
      return { ...state, addingContact: true };

    case CONTACT_ADDED:
      return { ...state, contacts: action.message, addingContact: false };
    case CONTACT_REMOVING:
      return { ...state, removingContact: true };

    case CONTACT_REMOVED:
      return { ...state, contacts: action.message, removingContact: false };

    default:
      return state;
  }

}

