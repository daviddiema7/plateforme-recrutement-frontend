import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   recruteurs: [],
   selectedRecruteur: null,
};


export const recruteursSlice = createSlice({
    name: 'recruteurs',
     initialState,
      reducers: {
      addRecruteur: (state, action) => {
           state.recruteurs.push(action.payload);
        },
       setRecruteurs: (state, action) => {
          state.recruteurs = action.payload
       },
        selectRecruteur: (state, action) => {
            state.selectedRecruteur = action.payload
        }

      },
    });
    export const { addRecruteur, setRecruteurs, selectRecruteur } = recruteursSlice.actions;
    export default recruteursSlice.reducer;