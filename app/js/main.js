// The app state
import configureStore from './store';
import { getContacts } from './actions';
import CreateContact from './contacts/components/AddContact';
import SearchContact from './contacts/components/SearchContact';

const store = configureStore();

// Get contacts
store.dispatch(getContacts());

// Listen for events
CreateContact.handleSubmit();
CreateContact.handleCreateContactBtn();
SearchContact.handleSearchContact();
