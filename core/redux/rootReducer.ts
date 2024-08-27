import { api } from '@/slices/api';
import menuSlice from '@/slices/menuSlice';
import { combineReducers } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
    [api.reducerPath]: api.reducer,
    menu: menuSlice
});
export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
