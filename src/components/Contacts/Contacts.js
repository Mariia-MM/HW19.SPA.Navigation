import React, { Component } from "react";
import Contact from "./contact";
import "./contact.css";

const contacts = [
  {
    id: 1,
    firstName: "Барней",
    lastName: "Стинсовський",
    phone: "+380956319521",
    gender: "male",
  },
  {
    id: 2,
    firstName: "Робін",
    lastName: "Щербатська",
    phone: "+380931460123",
    gender: "female",
  },
  {
    id: 3,
    firstName: "Анонімний",
    lastName: "Анонімус",
    phone: "+380666666666",
  },
  {
    id: 4,
    firstName: "Лілія",
    lastName: "Олдровна",
    phone: "+380504691254",
    gender: "female",
  },
  {
    id: 5,
    firstName: "Маршен",
    lastName: "Еріксонян",
    phone: "+380739432123",
    gender: "male",
  },
  {
    id: 6,
    firstName: "Теодор",
    lastName: "Мотсбес",
    phone: "+380956319521",
    gender: "male",
  },
];

export default class Contacts extends Component {
  state = {
    contact: [...contacts],
    search: "",
    filteredContacts: [...contacts],
  };
  handleSearchChange = (e) => {
    const value = e.target.value.toLowerCase();

    this.setState({
      search: value,
      filteredContacts: contacts.filter(
        (item) =>
          (item.firstName && item.firstName.toLowerCase().includes(value)) ||
          (item.lastName && item.lastName.toLowerCase().includes(value)) ||
          item.phone.includes(value)
      ),
    });
  };
  render() {
    let contacts = this.state.filteredContacts.map((contact) => {
      return (
        <Contact
          firstName={contact.firstName}
          lastName={contact.lastName}
          phone={contact.phone}
          gender={contact.gender}
          key={contact.id}
        />
      );
    });

    return (
      <div className="contact-wrapper">
        <div>
          <form className="search-form">
            <label for="name"> Search contact  </label>
            <input
              placeholder=" Enter name or number "
              value={this.state.search}
              onChange={this.handleSearchChange}
            ></input>
          </form>
        </div>
        <div>{contacts}</div>
      </div>
    );
  }
}
