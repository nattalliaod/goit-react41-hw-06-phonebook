import { useContacts } from 'hooks/useContacts';
import { ContactName, ContactNumber, ContactDelete } from "./ContactItem.styled"

export const ContactItem = ({ id, name, number }) => {
    const { deleteContact } = useContacts();
    return (
        <>
            <ContactName>{name}:
                <ContactNumber href={`tel:${number}`}> {number}</ContactNumber>
            </ContactName>
            <ContactDelete type='button' onClick={() => deleteContact(id)}>Delete</ContactDelete>
        </>
    );
}