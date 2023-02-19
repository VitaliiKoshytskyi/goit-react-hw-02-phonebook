import { Component } from 'react';

import PhonebookSection from './PhonebookSection/PhonebookSection';

import css from './App.module.css';
import { nanoid } from 'nanoid';

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


  handleChange = (event) => {
    const name = event.target.name
    const value = event.target.value
    this.setState({
      [name]:value
    })
  }
  
  handleSubmit = (event) => {
    event.preventDefault();


    if (this.dublicatedHandler()) {
       const {name} = this.state
        return alert (`${name} is already in contacts`)
      }

    this.setState(prevState => {
      const { name, number, contacts } = prevState;

      const newContact = {
        id: nanoid(),
        name,
        number,
      }

      return {contacts:[...contacts,newContact],name:'',number:''}
    })
  }

  dublicatedHandler() {
    const { name, contacts } = this.state
    const normalizedName = name.toLowerCase()
    const isDublicated = contacts.find(item => {
       return  (item.name.toLowerCase() === normalizedName)
    })
    return Boolean (isDublicated)
     
  }

  deleteContactHandler(id) {
    this.setState(prevState => {
      // console.log(prevState)
      const arrWithDeletedContact =  prevState.contacts.filter(item => item.id !==id)
      return {
        contacts:arrWithDeletedContact
      }
    })
    
  }

  filterContactsHandler() {
    const { filter, contacts } = this.state
    if (filter === '') {
      return contacts
    }
    const normalizedFilter = filter.toLowerCase()
    const filteredArr = contacts.filter(item => {
      return item.name.toLowerCase().includes(normalizedFilter)
    })
    return filteredArr
  }

  render() {
    const {  name, number } = this.state
    
const contacts = this.filterContactsHandler()
    const element = contacts.map(item => <li key={item.id} className={css.item}>{item.name} : {item.number}
      <button onClick={() => this.deleteContactHandler(item.id)}>Delete</button></li>)
    return (
      <div className={css.App}>
        <PhonebookSection title="Phonebook">
          <form  onSubmit={this.handleSubmit} className={css.form}>
            <div className={css.formBox}>
              <label>Name</label>
              <input onChange={this.handleChange}
                className={css.formText}
                value ={name}
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
              />
            </div>
            <div className={css.formBox}>
              <label>Number</label>
              <input onChange={this.handleChange}
                value={number}
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
          <input name='filter' onChange={this.handleChange}/>
          </div>
          <ul className={css.list}>
            {element}
          </ul>
        </PhonebookSection>
      </div>
    );
  }
}
