import { createSlice } from '@reduxjs/toolkit';
interface Props {
    isOpen: boolean;
}
const initialState: Props = {
    isOpen: false
};
const menuSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {
        SET_MENU_STATE: (state, action) => {
            state.isOpen = action.payload.isOpen;
        }
    }
});
// Extract the action creators object and the reducer
const { actions, reducer } = menuSlice;
export const { SET_MENU_STATE } = actions;
export default reducer;
