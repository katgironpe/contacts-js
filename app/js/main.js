// The app state
import throttle           from 'lodash.throttle';
import configureStore     from './store';
import { getContacts }    from './actions';
import CreateContact      from './contacts/components/AddContact';
import { saveState }      from './utils';


const store = configureStore();

// Get contacts
store.dispatch(getContacts());
store.subscribe(throttle(() => {
  saveState({ contact: store.getState().contact })
}, 4000))

// Listen for events
CreateContact.handleSubmit();
CreateContact.handleCreateContactBtn();
