import { createAction } from 'redux-actions';
import * as firebase from 'firebase/app';
// These import load individual services into the firebase namespace.
import 'firebase/database';

import {
  CONTACTS_FETCHING,
  CONTACTS_FAVE,
  CONTACTS_FAVED,
  CONTACTS_UNFAVE,
  CONTACTS_UNFAVED,
  CONTACTS_RECEIVED,
  CONTACT_ADDING,
  CONTACT_ADDED,
  CONTACT_REMOVING,
  CONTACT_REMOVED,
  CONTACTS_RESET,
  CONTACT_REMOVE_BTN_HIDE,
  CONTACT_REMOVE_BTN_SHOW
} from '../constants';

import List from '../contacts/components/List/List';
import DeleteContact from '../contacts/components/DeleteContact/DeleteContact';

// Firebase config
let config = {
  apiKey: "AIzaSyDO3m-Rb5VJ_tHqVtv0GEW-yRLNcEeQe2E",
  authDomain: "contacts-5f945.firebaseapp.com",
  databaseURL: "https://contacts-5f945.firebaseio.com",
  projectId: "contacts-5f945",
  storageBucket: "",
  messagingSenderId: "994573974087"
};

firebase.initializeApp(config);

export const getContacts = () => {
  return dispatch => {
    const ref = firebase.database().ref('/contacts');

    dispatch({
      type: CONTACTS_FETCHING
    });

    ref.on("value", function(snapshot) {
      dispatch({
        type: CONTACTS_RECEIVED,
        contacts: snapshot.val()
      });

      // Display the contact list
      new List(snapshot.val()).displayContacts();

      // Listen for click events
      DeleteContact.handleClickContact();
    }, function (error) {
      console.log(`Error ${error.code}`);
    });
  }
};

export const createContact = (contact) => {
  return dispatch => {
    const ref = firebase.database().ref('/contacts');

    dispatch({
      type: CONTACT_ADDING
    });

    ref.push(contact);

    dispatch({
      type: CONTACT_ADDED
    });
  }
};

export const removeContact = (contactId) => {
  return dispatch => {
    const ref = firebase.database().ref(`/contacts/${contactId}`);

    dispatch({
      type: CONTACT_REMOVING
    });

    ref.remove();

    dispatch({
      type: CONTACT_REMOVED
    });
  }
};
