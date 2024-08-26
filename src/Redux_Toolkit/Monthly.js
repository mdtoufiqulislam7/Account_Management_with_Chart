import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const base_url = "https://accounts-tracker.onrender.com"; // base url

export const getjandata = createAsyncThunk(
    'Month/getjan',
    async (_, { rejectWithValue }) => {
      try {
        const response = await axios.get(`${base_url}/api/january`);
        return response.data.data;
      } catch (error) {
        return rejectWithValue(error.response.data.detail || 'Failed to fetch expenses');
      }
    }
  );

export const getfebdata = createAsyncThunk(
    'Month/getfeb',
    async (_, { rejectWithValue }) => {
      try {
        const response = await axios.get(`${base_url}/api/february`);
        return response.data.data;
      } catch (error) {
        return rejectWithValue(error.response.data.detail || 'Failed to fetch expenses');
      }
    }
  );
export const getmardata = createAsyncThunk(
    'Month/getmar',
    async (_, { rejectWithValue }) => {
      try {
        const response = await axios.get(`${base_url}/api/march`);
        return response.data.data;
      } catch (error) {
        return rejectWithValue(error.response.data.detail || 'Failed to fetch expenses');
      }
    }
  );    
export const getaprdata = createAsyncThunk(
    'Month/getapr',
    async (_, { rejectWithValue }) => {
      try {
        const response = await axios.get(`${base_url}/api/april`);
        return response.data.data;
      } catch (error) {
        return rejectWithValue(error.response.data.detail || 'Failed to fetch expenses');
      }
    }
  );  

export const getmaydata = createAsyncThunk(
    'Month/getmay',
    async (_, { rejectWithValue }) => {
      try {
        const response = await axios.get(`${base_url}/api/may`);
        return response.data.data;
      } catch (error) {
        return rejectWithValue(error.response.data.detail || 'Failed to fetch expenses');
      }
    }
  );
  export const getjundata = createAsyncThunk(
    'Month/getjun',
    async (_, { rejectWithValue }) => {
      try {
        const response = await axios.get(`${base_url}/api/jun`);
        return response.data.data;
      } catch (error) {
        return rejectWithValue(error.response.data.detail || 'Failed to fetch expenses');
      }
    }
  );  

  export const getjuldata = createAsyncThunk(
    'Month/getjul',
    async (_, { rejectWithValue }) => {
      try {
        const response = await axios.get(`${base_url}/api/july`);
        return response.data.data;
      } catch (error) {
        return rejectWithValue(error.response.data.detail || 'Failed to fetch expenses');
      }
    }
  );
  export const getaugdata = createAsyncThunk(
    'Month/getaug',
    async (_, { rejectWithValue }) => {
      try {
        const response = await axios.get(`${base_url}/api/aug`);
        return response.data.data;
      } catch (error) {
        return rejectWithValue(error.response.data.detail || 'Failed to fetch expenses');
      }
    }
  );
  export const getsepdata = createAsyncThunk(
    'Month/getsep',
    async (_, { rejectWithValue }) => {
      try {
        const response = await axios.get(`${base_url}/api/sep`);
        return response.data.data;
      } catch (error) {
        return rejectWithValue(error.response.data.detail || 'Failed to fetch expenses');
      }
    }
  );
  export const getoctdata = createAsyncThunk(
    'Month/getoct',
    async (_, { rejectWithValue }) => {
      try {
        const response = await axios.get(`${base_url}/api/oct`);
        return response.data.data;
      } catch (error) {
        return rejectWithValue(error.response.data.detail || 'Failed to fetch expenses');
      }
    }
  );
  export const getnovdata = createAsyncThunk(
    'Month/getnov',
    async (_, { rejectWithValue }) => {
      try {
        const response = await axios.get(`${base_url}/api/nov`);
        return response.data.data;
      } catch (error) {
        return rejectWithValue(error.response.data.detail || 'Failed to fetch expenses');
      }
    }
  );

 export const getdecdata = createAsyncThunk(
    'Month/getdec',
    async (_, { rejectWithValue }) => {
      try {
        const response = await axios.get(`${base_url}/api/dec`);
        return response.data.data;
      } catch (error) {
        return rejectWithValue(error.response.data.detail || 'Failed to fetch expenses');
      }
    }
  );          
const initialState = {
    month: [],
    
    status:'idle',
    error: null,
  };
  
  const monthlyshort = createSlice({
    name: 'month',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(getjandata.pending,(state)=>{
            state.status = 'loding'
        })
        .addCase(getjandata.fulfilled,(state,action)=>{
            state.status = 'succeeded'
            state.month = action.payload
        })
        .addCase(getjandata.rejected,(state,action)=>{
            state.status = 'rejected'
            state.error = action.payload
        })
        .addCase(getfebdata.pending,(state)=>{
            state.status = 'loding'
        })
        .addCase(getfebdata.fulfilled,(state,action)=>{
            state.status = 'succeeded'
            state.month = action.payload
        })
        .addCase(getfebdata.rejected,(state,action)=>{
            state.status = 'rejected'
            state.error = action.payload
        })
        .addCase(getmardata.pending,(state)=>{
            state.status = 'loding'
        })
        .addCase(getmardata.fulfilled,(state,action)=>{
            state.status = 'succeeded'
            state.month = action.payload
        })
        .addCase(getmardata.rejected,(state,action)=>{
            state.status = 'rejected'
            state.error = action.payload
        })
        .addCase(getaprdata.pending,(state)=>{
            state.status = 'loding'
        })
        .addCase(getaprdata.fulfilled,(state,action)=>{
            state.status = 'succeeded'
            state.month = action.payload
        })
        .addCase(getaprdata.rejected,(state,action)=>{
            state.status = 'rejected'
            state.error = action.payload
        })
        .addCase(getmaydata.pending,(state)=>{
            state.status = 'loding'
        })
        .addCase(getmaydata.fulfilled,(state,action)=>{
            state.status = 'succeeded'
            state.month = action.payload
        })
        .addCase(getmaydata.rejected,(state,action)=>{
            state.status = 'rejected'
            state.error = action.payload
        })
        .addCase(getjundata.pending,(state)=>{
            state.status = 'loding'
        })
        .addCase(getjundata.fulfilled,(state,action)=>{
            state.status = 'succeeded'
            state.month = action.payload
        })
        .addCase(getjundata.rejected,(state,action)=>{
            state.status = 'rejected'
            state.error = action.payload
        })
        .addCase(getjuldata.pending,(state)=>{
            state.status = 'loding'
        })
        .addCase(getjuldata.fulfilled,(state,action)=>{
            state.status = 'succeeded'
            state.month = action.payload
        })
        .addCase(getjuldata.rejected,(state,action)=>{
            state.status = 'rejected'
            state.error = action.payload
        })
        .addCase(getaugdata.pending,(state)=>{
            state.status = 'loding'
        })
        .addCase(getaugdata.fulfilled,(state,action)=>{
            state.status = 'succeeded'
            state.month = action.payload
        })
        .addCase(getaugdata.rejected,(state,action)=>{
            state.status = 'rejected'
            state.error = action.payload
        })
        .addCase(getsepdata.pending,(state)=>{
            state.status = 'loding'
        })
        .addCase(getsepdata.fulfilled,(state,action)=>{
            state.status = 'succeeded'
            state.month = action.payload
        })
        .addCase(getsepdata.rejected,(state,action)=>{
            state.status = 'rejected'
            state.error = action.payload
        })
        .addCase(getoctdata.pending,(state)=>{
            state.status = 'loding'
        })
        .addCase(getoctdata.fulfilled,(state,action)=>{
            state.status = 'succeeded'
            state.month = action.payload
        })
        .addCase(getoctdata.rejected,(state,action)=>{
            state.status = 'rejected'
            state.error = action.payload
        })
        .addCase(getnovdata.pending,(state)=>{
            state.status = 'loding'
        })
        .addCase(getnovdata.fulfilled,(state,action)=>{
            state.status = 'succeeded'
            state.month = action.payload
        })
        .addCase(getnovdata.rejected,(state,action)=>{
            state.status = 'rejected'
            state.error = action.payload
        })
        .addCase(getdecdata.pending,(state)=>{
            state.status = 'loding'
        })
        .addCase(getdecdata.fulfilled,(state,action)=>{
            state.status = 'succeeded'
            state.month = action.payload
        })
        .addCase(getdecdata.rejected,(state,action)=>{
            state.status = 'rejected'
            state.error = action.payload
        })
    
        
     
        
      
    },
  });
  
  export default monthlyshort.reducer;