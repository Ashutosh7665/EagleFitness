import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const STATUSES = Object.freeze({
  IDLE: "idle",
  LOADING: "loading",
  ERROR: "error"
});

const initialState = {
  forms: [],
  selectedForm: null,
  status: STATUSES.IDLE,
  error: null,
  isSuccess: false
};

// Thunks for async actions

// Fetch all form submissions
export const fetchForms = createAsyncThunk('forms/fetchForms', async () => {
  const response = await axios.get(`${import.meta.env.VITE_API_URI}/forms/forms`);
  return response.data.data;
});

// Create a new form submission
export const createForm = createAsyncThunk('forms/createForm', async (formData) => {
  const response = await axios.post(`${import.meta.env.VITE_API_URI}/forms/join`, formData);
  return response.data;
});

// Fetch a single form submission by ID
// export const fetchFormById = createAsyncThunk('forms/fetchFormById', async (id) => {
//   const response = await axios.get(`${import.meta.env.VITE_API_URI}/forms/getFormById/${id}`);
//   return response.data;
// });

// // Delete a form submission by ID
// export const deleteForm = createAsyncThunk('forms/deleteForm', async (id) => {
//   const response = await axios.delete(`${import.meta.env.VITE_API_URI}/forms/deleteForm/${id}`);
//   return response.data;
// });

// Form slice
const formSlice = createSlice({
  name: 'forms',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchForms.pending, (state) => {
        state.status = STATUSES.LOADING;
      })
      .addCase(fetchForms.fulfilled, (state, action) => {
        state.status = STATUSES.IDLE;
        state.forms = action.payload;
      })
      .addCase(fetchForms.rejected, (state, action) => {
        state.status = STATUSES.ERROR;
        state.error = action.error.message;
      })
      .addCase(createForm.pending, (state) => {
        state.isSuccess = false;
        state.status = STATUSES.LOADING;
      })
      .addCase(createForm.fulfilled, (state, action) => {
        state.status = STATUSES.IDLE;
        state.isSuccess = true;
        state.forms.push(action.payload.data);
      })
      .addCase(createForm.rejected, (state, action) => {
        state.status = STATUSES.ERROR;
        state.isSuccess = false;
        state.error = action.error.message || 'Failed to create form';
      })
    //   .addCase(fetchFormById.pending, (state) => {
    //     state.status = STATUSES.LOADING;
    //     state.selectedForm = null;
    //   })
    //   .addCase(fetchFormById.fulfilled, (state, action) => {
    //     state.status = STATUSES.IDLE;
    //     state.selectedForm = action.payload;
    //   })
    //   .addCase(fetchFormById.rejected, (state, action) => {
    //     state.status = STATUSES.ERROR;
    //     state.error = action.error.message || 'Failed to fetch form by ID';
    //   })
    //   .addCase(deleteForm.pending, (state) => {
    //     state.status = STATUSES.LOADING;
    //   })
    //   .addCase(deleteForm.fulfilled, (state, action) => {
    //     state.status = STATUSES.IDLE;
    //     state.forms = state.forms.filter(form => form._id !== action.payload.data._id);
    //   })
    //   .addCase(deleteForm.rejected, (state, action) => {
    //     state.status = STATUSES.ERROR;
    //     state.error = action.error.message || 'Failed to delete form';
    //   });
  },
});

export default formSlice.reducer;
