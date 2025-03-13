import { useDispatch, useSelector } from 'react-redux';
import { selectLoading } from '../redux/contacts/selectors';
import Layout from '../components/Layout/Layout';
import ContactForm from '../components/ContactForm/ContactForm';
import SearchBox from '../components/SearchBox/SearchBox';
import Loader from '../components/Loader/Loader';
import ContactList from '../components/ContactList/ContactList';
import ScrollTop from '../components/ScrollTop/ScrollTop';
import { useEffect } from 'react';
import { fetchContacts } from '../redux/contacts/operations';

const ContactsPage = () => {
  const dispatch = useDispatch();
  // Отримуємо частини стану
  const loading = useSelector(selectLoading);
  useEffect(() => {
    //Встановлюємо abortController для відміни запиту на сервер
    const abortController = new AbortController();
    dispatch(fetchContacts(abortController.signal));

    //Налаштовуємо таймер для відміни запиту на сервер
    setTimeout(() => {
      abortController.abort();
    }, 6000); //якщо 6 секунд сервер не відповідає - відмінити запит

    //Якщо користувач перейшов на іншу сторінку... - відміняємо запит на сервер
    return () => {
      abortController.abort();
    };
  }, [dispatch]);
  return (
    <>
      <ContactForm />
      <SearchBox />
      {loading ? <Loader /> : <ContactList />}
      <ScrollTop />
    </>
  );
};
export default ContactsPage;
