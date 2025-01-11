import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  candidats: [],
  selectedCandidat: null,
};

export const candidatsSlice = createSlice({
  name: 'candidats',
  initialState,
  reducers: {
    addCandidat: (state, action) => {
      state.candidats.push(action.payload);
    },
    setCandidats: (state, action) => {
        state.candidats = action.payload
    },
    selectCandidat: (state, action) => {
        state.selectedCandidat = action.payload
    }
    
  },
});

export const { addCandidat, setCandidats, selectCandidat } = candidatsSlice.actions;
export default candidatsSlice.reducer;