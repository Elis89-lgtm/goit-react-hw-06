import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";

const ContactList = () => {
  const contacts = useSelector((state) => state.contacts.item);
  const filter = useSelector((state) => state.filters.status);
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().incvludes(filter)
  );
  return (
    <ul className={s.list}>
      {filteredContacts.map(({ id, name, number }) => {
        return <Contact key={id} id={id} name={name} number={number} />;
      })}
      ;
    </ul>
  );
};
export default ContactList;
