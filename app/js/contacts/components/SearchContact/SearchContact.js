import configureStore from '../../../store';
import { searchContacts } from '../../../actions';
import List from '../List';

const store = configureStore();

class SearchContact {
  constructor(contacts) {
    this.contacts = contacts;
  }

  searchContact(event) {
    event.preventDefault();
    const query = this.value;
    store.dispatch(searchContacts(query));
    new List(store.getState().contact.contacts).displayContacts();
  }

  handleSearchContact() {
    const searchField = document.getElementById('search');
    searchField.addEventListener('change', this.searchContact);
  }
}

export default SearchContact;

