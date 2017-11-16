import sortBy from 'lodash.sortby';

class List {
  constructor(contacts) {
    this.contacts = contacts;
  }

  displayContacts() {
    const entries = Object.entries(this.contacts).map(o => o[1]);
    const contacts = entries.map((o, i) => { return Object.assign(o, { 'id': Object.keys(this.contacts)[i] }) });
    const sortedContactsList = sortBy(contacts, ['last_name', 'first_name']);
    const data = { contacts: sortedContactsList };
    const result = tmpl('contact-list-items', data);
    document.getElementById('contacts-list').innerHTML = result;
  }
}

export default List;
