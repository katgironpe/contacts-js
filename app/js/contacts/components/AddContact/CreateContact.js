import configureStore from '../../../store';
import { createContact } from '../../../actions';

const store = configureStore();

class CreateContact {
  static addContact(event) {
    event.preventDefault();
    const getEl = document.getElementById;

    const firstNameField = getEl('add-contact__first-name');
    const lastNameField = getEl('add-contact__last-name');
    const emailField = getEl('add-contact__email');
    const phoneField = getEl('add-contact__phone');
    const typeField = getEl('add-contact__type');

    if (firstNameField && lastNameField && emailField && phoneField && typeField ) {
      const firstName = firstNameField.value;
      const lastName = lastNameField.value;
      const email = emailField.value;
      const phone = phoneField.value;
      const type = typeField.value;

      const contact = {
        first_name: firstName,
        last_name: lastName,
        email: email,
        phone: phone,
        type: type,
        important: false
      }

      store.dispatch(createContact(contact));
    }
  }

  static handleSubmit() {
    const form = document.getElementById('add-contact');

    if (form) {
      form.addEventListener('submit', this.addContact);
    }
  }

}

export default CreateContact;
