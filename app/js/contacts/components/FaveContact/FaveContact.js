import configureStore from '../../../store';
import { faveContact, unfaveContact } from '../../../actions';

const store = configureStore();

class FaveContact {
  static faveContact(event) {
    event.preventDefault();
    const id = this.getAttribute('data-id');

    store.dispatch(faveContact(id));
  }

  static unfaveContact(event) {
    event.preventDefault();
    const id = this.getAttribute('data-id');

    store.dispatch(unfaveContact(id));
  }

  static handleClickContact() {
    const contactList = document.querySelectorAll('.fave-contact');
    const favedList = document.querySelectorAll('.unfave-contact');

    if (contactList) {
      for (let i = 0; i < contactList.length; i++) {
        contactList[i].addEventListener('click', this.faveContact);
      }
    }

    if (favedList) {
      for (let i = 0; i < favedList.length; i++) {
        favedList[i].addEventListener('click', this.unfaveContact);
      }
    }

  }

}

export default FaveContact;

