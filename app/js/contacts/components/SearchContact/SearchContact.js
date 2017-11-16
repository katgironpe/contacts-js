import configureStore from '../../../store';
import { searchContacts } from '../../../actions';

const store = configureStore();

class SearchContact {
  static searchContact(event) {
    event.preventDefault();
    const query = this.value;

    store.dispatch(searchContacts(query));
  }

  static handleSearchContact() {
    const searchField = document.getElementById('search');
    searchField.addEventListener('change', this.searchContact);
  }
}

export default SearchContact;

