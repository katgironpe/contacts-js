import sortBy from 'lodash.sortby';
import DeleteContact from '../DeleteContact';
import FaveContact from '../FaveContact';

class List {
  constructor(contacts) {
    this.contacts = contacts;
  }

  displayContacts() {
    const fbResult = this.contacts || {};
    const entries = Object.entries(fbResult).map(o => o[1]);
    const contacts = entries.map((o, i) => { return Object.assign(o, { 'id': Object.keys(this.contacts)[i] }) });
    const sortedContactsList = sortBy(contacts, ['last_name', 'first_name']);
    const data = { contacts: sortedContactsList };
    const result = tmpl('contact-list-items', data);
    document.getElementById('contacts-list').innerHTML = result;
    // Listen for click events
    DeleteContact.handleClickContact();
    FaveContact.handleClickContact();
  }
}

export default List;
