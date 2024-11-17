import s from "./ContactList.module.css"

import Contact from "../Contact/Contact"

const ContactList = ({contacts}) => {
  return (
      <ul className={s.list}>
        {contacts.map((contact) => (
          <li className={s.item} key={contact.id}>
          <Contact data={contact}/>
          </li>
        ))}   
      </ul> 
  );
}

export default ContactList