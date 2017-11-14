import configureStore from '../../../store';
import { createContact } from '../../../actions';

const store = configureStore();

class CreateContact {
  static addContact(event) {
    event.preventDefault();

    const firstNameField = document.getElementById('add-contact__first-name');
    const lastNameField = document.getElementById('add-contact__last-name');
    const emailField = document.getElementById('add-contact__email');
    const phoneField = document.getElementById('add-contact__phone');
    const typeField = document.getElementById('add-contact__type');
    const form = document.getElementById('add-contact');

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

      this.reset();
    }
  }

  static handleSubmit() {
    const form = document.getElementById('add-contact');

    if (form) {
      form.addEventListener('submit', this.addContact);
    }
  }

  static showAddContactForm() {
    document.getElementById('add-contact-tab-btn').click();
  }

  static showContactList() {
    document.getElementById('show-contacts-tab-btn').click();
  }

  static handleCreateContactBtn() {
    const btn = document.getElementById('add-contact-icon');

    if (btn) {
      btn.addEventListener('click', this.showAddContactForm);
    }
  }
}

export default CreateContact;
