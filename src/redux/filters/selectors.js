//Оголошуємо складний селектор для фільтрування контактів по імені та статусу

import { createSelector } from '@reduxjs/toolkit';
import { selectContacts } from '../contacts/selectors';
import { selectNameFilter } from './slice';

//Обчислюємо масив контактів, які необхідно відображати в інтерфейсі
export const selectVisibleContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, nameFilter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(nameFilter.toLowerCase().trim())
    );
  }
);
