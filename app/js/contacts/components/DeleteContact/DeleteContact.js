import configureStore from '../../../store';
import { removeContact } from '../../../actions';
import { $, $$ } from '../../../utils/dom';

const store = configureStore();

class DeleteContact {
  static handleDeleteContactBtn() {
  }

  static showDeleteContactBtn(event) {
    console.log('Show a button later')
  }

  static handleClickContact() {
    const contactList = document.querySelectorAll('.mdl-list__item');

    if (contactList) {
      for (var i = 0; i < contactList.length; i++) {
        contactList[i].addEventListener('click', this.showDeleteContactBtn);
      }
    }
  }

}

export default DeleteContact;
