import * as firebase from 'firebase/app';
import config from 'clientconfig';
// These import load individual services into the firebase namespace.
import 'firebase/database';

import {
  CONTACTS_FETCHING,
  CONTACTS_RECEIVED,
  CONTACTS_SEARCHING,
  CONTACTS_SEARCHED,
  CONTACT_ADDING,
  CONTACT_ADDED,
  CONTACT_REMOVING,
  CONTACT_REMOVED,
  CONTACT_FAVE,
  CONTACT_FAVED,
  CONTACT_UNFAVE,
  CONTACT_UNFAVED,
} from '../constants';

import List from '../contacts/components/List';
import SearchContact from '../contacts/components/SearchContact';

// Firebase config
let clientconfig = {
  apiKey: config.apiKey,
  authDomain: config.authDomain,
  databaseURL: config.databaseURL,
  projectId: config.projectId,
  storageBucket: config.storageBucket,
  messagingSenderId: config.messagingSenderId
};

firebase.initializeApp(clientconfig);

export const getContacts = () => {
  return dispatch => {
    const ref = firebase.database().ref('/contacts');

    dispatch({
      type: CONTACTS_FETCHING
    });

    ref.on('value', function(snapshot) {
      dispatch({
        type: CONTACTS_RECEIVED,
        contacts: snapshot.val()
      });

      // Display the contact list
      new List(snapshot.val()).displayContacts();

      new SearchContact(snapshot.val()).handleSearchContact();
    }, function (error) {
      console.log(`Error ${error.code}`);
    });
  };
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
  };
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
  };
};

export const faveContact = (contactId) => {
  return dispatch => {
    const ref = firebase.database().ref(`/contacts/${contactId}`);

    dispatch({
      type: CONTACT_FAVE
    });

    ref.update({ important: true });

    dispatch({
      type: CONTACT_FAVED
    });
  };
};


export const unfaveContact = (contactId) => {
  return dispatch => {
    const ref = firebase.database().ref(`/contacts/${contactId}`);

    dispatch({
      type: CONTACT_UNFAVE
    });

    ref.update({ important: false });

    dispatch({
      type: CONTACT_UNFAVED
    });
  };
};

export const searchContacts = (query) => {
  return dispatch => {
    dispatch({
      type: CONTACTS_SEARCHING
    });

    dispatch({
      type: CONTACTS_SEARCHED,
      query: query.toLowerCase(),
      contacts: JSON.parse(window.localStorage.CONTACTS_STATE).contact.contacts
    });
  };
};
