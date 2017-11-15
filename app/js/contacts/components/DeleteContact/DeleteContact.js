import configureStore from '../../../store';
import { removeContact } from '../../../actions';

const store = configureStore();

class DeleteContact {
  static deleteContact(event) {
    event.preventDefault();
    const id = this.getAttribute('data-id');

    store.dispatch(removeContact(id));
  }

  static handleClickContact() {
    const contactList = document.querySelectorAll('.delete-contact');

    if (contactList) {
      for (var i = 0; i < contactList.length; i++) {
        contactList[i].addEventListener('click', this.deleteContact);
      }
    }
  }

}

export default DeleteContact;
