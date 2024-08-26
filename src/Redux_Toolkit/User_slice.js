import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const base_url = "https://accounts-tracker.onrender.com" // base url

export const getexpense = createAsyncThunk(
  'expense/getexpense',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${base_url}/api/showexpense`);
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.response.data.detail || 'Failed to fetch expenses');
    }
  }
);

export const postexpense = createAsyncThunk(
    'expense/postexpense',
    async ({ title, amount, date, category, description }, { rejectWithValue }) => {
      try {
        console.log('Sending data:', { title, amount, date, category, description }); // Debugging line
  
        const response = await axios.post(`${base_url}/api/addexpense`, {
          title,
          amount,
          date,
          category,
          description,
           // Ensure type is sent if required
        });
  
        console.log('Response data:', response.data); // Debugging line
        return response.data;
      } catch (error) {
        console.error('Error response:', error.response?.data); // Debugging line
        return rejectWithValue(error.response?.data?.detail || 'Failed to add expense');
      }
    }
  );
  export const deleteexpense = createAsyncThunk('expense/deleteexpense', async (id) => {
    
    await axios.delete(`${base_url}/api/expense-delete/${id}`,{
       
    });
    return id; // Return the id of the deleted product
  });
// income

export const getincome = createAsyncThunk(
  'income/getincome',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${base_url}/api/showincome`);
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.response.data.detail || 'Failed to fetch expenses');
    }
  }
);

export const postincome = createAsyncThunk(
    'income/postincome',
    async ({ title, amount, date, category, description }, { rejectWithValue }) => {
      try {
        console.log('Sending data:', { title, amount, date, category, description }); // Debugging line
  
        const response = await axios.post(`${base_url}/api/addincome`, {
          title,
          amount,
          date,
          category,
          description,
           // Ensure type is sent if required
        });
  
        console.log('Response data:', response.data); // Debugging line
        return response.data;
      } catch (error) {
        console.error('Error response:', error.response?.data); // Debugging line
        return rejectWithValue(error.response?.data?.detail || 'Failed to add expense');
      }
    }
  );
  export const deleteincome = createAsyncThunk('income/deleteincome', async (id) => {
    
    await axios.delete(`${base_url}/api/delete/${id}`,{
       
    });
    return id; // Return the id of the deleted product
  });







const initialState = {
  income: [],
  expense: [],
  incomeStatus: 'idle',
  expenseStatus: 'idle',
  error: null,
};

const accountTracker = createSlice({
  name: 'accounts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getexpense.pending, (state) => {
        state.expenseStatus = 'loading';
      })
      .addCase(getexpense.fulfilled, (state, action) => {
        state.expenseStatus = 'succeeded';
        state.expense = action.payload;
      })
      .addCase(getexpense.rejected, (state, action) => {
        state.expenseStatus = 'failed';
        state.error = action.payload;
      })
      .addCase(postexpense.pending, (state) => {
        state.expenseStatus = 'loading';
      })
      .addCase(postexpense.fulfilled, (state) => {
        state.expenseStatus = 'succeeded';
        state.error = null;
      })
      .addCase(postexpense.rejected, (state, action) => {
        state.expenseStatus = 'failed';
        state.error = action.payload;
      })
      .addCase(deleteexpense.fulfilled, (state,action) => {
        state.expense = state.expense.filter((expenses) => expenses._id !== action.payload);
      })
      //income
      .addCase(getincome.pending, (state) => {
        state.incomeStatus = 'loading';
      })
      .addCase(getincome.fulfilled, (state, action) => {
        state.incomeStatus = 'succeeded';
        state.income = action.payload;
      })
      .addCase(getincome.rejected, (state, action) => {
        state.incomeStatus = 'failed';
        state.error = action.payload;
      })
      .addCase(postincome.pending, (state) => {
        state.incomeStatus = 'loading';
      })
      .addCase(postincome.fulfilled, (state) => {
        state.incomeStatus = 'succeeded';
        state.error = null;
      })
      .addCase(postincome.rejected, (state, action) => {
        state.incomeStatus = 'failed';
        state.error = action.payload;
      })
      .addCase(deleteincome.fulfilled, (state,action) => {
        state.income = state.income.filter((incomes) => incomes._id !== action.payload);
      }) 
      
    
  },
});

export default accountTracker.reducer;
