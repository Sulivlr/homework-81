import {createAsyncThunk} from '@reduxjs/toolkit';
import {LinkMutation} from '../../types';
import axiosApi from '../../axiosApi';

export const createLink = createAsyncThunk<void, LinkMutation>(
  'links/create',
  async (apiLink) => {
    const {data: link} = await axiosApi.post('/links', apiLink)
    return link
  },
);

