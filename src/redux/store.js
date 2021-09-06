import { configureStore } from '@reduxjs/toolkit';
import blogReducer from './reducers/blogReducer';
import navReducer from './reducers/navReducer';
import searchReducer from './reducers/searchReducer';
export const store = configureStore({
    reducer: {
      searchPage:searchReducer,
      blogPage:blogReducer,
      nav:navReducer
    }
});
  