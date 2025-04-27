import { createSlice } from "@reduxjs/toolkit";

const contactSlice = createSlice({
    name: "contacts",
    initialState: {
        items: [],
    },
    reducers: {
        addContacts: (state, action) => {
          
            state.items.push(action.payload);
        },
        
        deleteContact: (state, action) => {
            state.items = state.items.filter(contact => contact.id !== action.payload);
        },
    },
    });

export const { addContacts, deleteContact } = contactSlice.actions;
export default contactSlice.reducer;