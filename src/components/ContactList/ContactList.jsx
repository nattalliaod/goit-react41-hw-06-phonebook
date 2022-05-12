import { useContacts } from 'hooks/useContacts';
import PropTypes from 'prop-types';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { Contacts, ContactName } from './ContactList.styled';

export const ContactList = () => {
    const {contactsVisible} = useContacts();
    
    return (
        <Contacts>
            {contactsVisible.map(({ id, name, number }) =>
                <ContactName key={id}>
                    <ContactItem id={id} name={name} number={number} />
                </ContactName>)}
        </Contacts>
    );
}

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
        })),      
}