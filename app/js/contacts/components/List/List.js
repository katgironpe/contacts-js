class List {
  constructor(contacts) {
    this.contacts = contacts;
  }

  displayContacts() {
    const data = { contacts: Object.entries(this.contacts).map(o => o[1]) };
    const result = tmpl('contact-list-items', data);
    document.getElementById('contacts-list').innerHTML = result;
  }
}

export default List;
