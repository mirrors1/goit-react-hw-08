//Імпортуємо функцію createAction
import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  // Ім'я слайсу
  name: 'filters',
  // Початковий стан редюсера слайсу
  initialState: {
    name: '',
  },
  // Об'єкт case-редюсерів
  reducers: {
    changeFilter(state, action) {
      // ✅ Immer замінить це на операцію оновлення
      state.name = action.payload;
    },
  },
});

export default filtersSlice.reducer;

// Експортуємо фабрики екшенів
export const { changeFilter, setStatusFilter } = filtersSlice.actions;

export const selectNameFilter = state => state.filters.name;
