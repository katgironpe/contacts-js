import configureStore from '../../../store';
import { faveContact } from '../../../actions';

const store = configureStore();

class FaveContact {
  static faveContact(event) {
    event.preventDefault();
    const id = this.getAttribute('data-id');

    store.dispatch(faveContact(id));
  }

  static handleClickContact() {
    const contactList = document.querySelectorAll('.fave-contact');

    if (contactList) {
      for (let i = 0; i < contactList.length; i++) {
        contactList[i].addEventListener('click', this.faveContact);
      }
    }
  }

}

export default FaveContact;

