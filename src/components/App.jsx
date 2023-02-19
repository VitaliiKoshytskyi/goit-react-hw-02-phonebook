import { Component } from 'react';

import PhonebookSection from './PhonebookSection/PhonebookSection';

import css from './App.module.css';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  render() {
    return (
      <div className={css.App}>
        <PhonebookSection title="Phonebook">
          <form className={css.form}>
            <div className={css.formBox}>
              <label>Name</label>
              <input
                className={css.formText}
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
              />
            </div>
            <div className={css.formBox}>
              <label>Number</label>
              <input
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
              />
            </div>
             <button type='submit'>Add contact</button>
          </form>
        </PhonebookSection>
        <PhonebookSection title="Contacts">
          <div>
              <p>Find contacts by name</p>
          <input/>
          </div>
          <ul className={css.list}>
            <li className={css.item}>Rose Simons : 12345-566-09</li> <button>Delete</button>
            <li className={css.item}>Rose Simons : 12345-566-09</li> <button>Delete</button>
            <li className={css.item}>Rose Simons : 12345-566-09</li> <button>Delete</button>
           
          </ul>
        </PhonebookSection>
      </div>
    );
  }
}
