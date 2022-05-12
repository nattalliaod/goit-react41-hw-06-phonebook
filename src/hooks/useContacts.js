import { useSelector, useDispatch } from 'react-redux';
import { getContactItem, getVisibleContacts, getFilter } from 'redux/contactsSelectors';
import { addContact, deleteContact, filterContact } from 'redux/contactsSlice';

export const useContacts = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(getContactItem);
    const contactsVisible = useSelector(getVisibleContacts);
    const value = useSelector(getFilter);
    const add = value => dispatch(addContact(value));
    const del = id => dispatch(deleteContact(id));
    const filter = el => dispatch(filterContact(el));

    return {
        contacts,
        contactsVisible,
        value,
        addContact: add,
        deleteContact: del,
        filterContact: filter,
    };
};