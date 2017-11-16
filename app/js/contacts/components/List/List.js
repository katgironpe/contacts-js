import sortBy from 'lodash.sortby';

class List {
  constructor(contacts) {
    this.contacts = contacts;
  }

  displayContacts() {
    const sortedContactsList = sortBy(this.contacts, ['last_name', 'first_name']);
    const data = { contacts: sortedContactsList };
    const result = tmpl('contact-list-items', data);
    document.getElementById('contacts-list').innerHTML = result;
  }
}

export default List;
