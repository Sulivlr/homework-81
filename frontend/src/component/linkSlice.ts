import {Link} from '../../types';
import {createSlice} from '@reduxjs/toolkit';
import {createLink} from './linkThunk';

export interface LinkState {
  link: Link[] | null;
  isCreating: boolean;
}

const initialState: LinkState = {
  link: null,
  isCreating: false,
}

export const linkSlice = createSlice({
  name: 'link',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createLink.pending, (state) => {
      state.isCreating = true;
    }).addCase(createLink.fulfilled, (state,(payload: link)) => {
      state.link = link
      state.isCreating = false;
    }).addCase(createLink.rejected, (state) => {
      state.isCreating = false;
    })
  },
  selectors: {
    selectLinkIsCreating: (state) => state.isCreating,
  }
});