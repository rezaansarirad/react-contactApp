import ContactItem from "./ContactItem.jsx";
import styles from "./ContactsList.module.scss";
function ContactsList({ listContacts, deleteHandler }) {
  return (
    <div className={styles.container}>
      <h3> Contacts List</h3>
      {listContacts.length ? (
        <ul className={styles.contacts}>
          {listContacts.map((item) => (
            <ContactItem
              key={item.id}
              data={item}
              deleteHandler={deleteHandler}
            />
          ))}
        </ul>
      ) : (
        <p className={styles.message}>No Contacts Yet !</p>
      )}
    </div>
  );
}

export default ContactsList;
