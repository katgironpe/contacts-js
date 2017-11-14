// The app state
import configureStore from './store';
import { getContacts } from './actions';
import CreateContact from './contacts/components/AddContact/CreateContact';

const store = configureStore();

// Get contacts
store.dispatch(getContacts());

// Listen for events
CreateContact.handleSubmit();
CreateContact.handleCreateContactBtn();
