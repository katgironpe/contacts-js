import configureStore from '../../../store';
import { removeContact } from '../../../actions';

const store = configureStore();

class SearchContact {
  static searchContact(event) {
    event.preventDefault();
    const id = this.getAttribute('data-id');

    //store.dispatch(removeContact(id));
  }

  static handleSearchContact() {
    const searchField = document.getElementById('#search');
    searchField.addEventListener('click', this.searchContact);
  }
}

export default SearchContact;

