import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import API from "../Api";

const initialState = {
  allKhatas: [],
  userKhata: [],
  error: null,
  loading: false,
  searchKhata: [],
};

// getting all data 1
export const asyncGetAllKhatas = createAsyncThunk(
  "get/asyncGetAllKhatas",
  async (data, { rejectWithValue }) => {
    try {
      const result = await API.get(`shop/khata`);
      return await result.data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

//post user data 2
export const asyncCreateCustomerKhata = createAsyncThunk(
  "post/asyncCreateCustomerKhata",
  async (data, { rejectWithValue }) => {
    console.log(data);
    const { toast, fd } = data;
    try {
      const res = await API.post(`shop/khata`, fd);
      toast.success("Data posted");
      return await res.data;
    } catch (error) {
      console.log(error.response.data.error);
      return rejectWithValue(error.response.data.error);
    }
  }
);
// get remaining amount 3
export const asyncGetRemaingAmount = createAsyncThunk(
  "get/asyncGetRemaingAmount",
  async (id, { rejectWithValue }) => {
    try {
      const result = await API.put(`shop/remainkhata/${id}`, {});
      return await result.data;
    } catch (error) {
      rejectWithValue(error.response.data.message);
    }
  }
);
// get search khata 4
export const asyncSearchKhata = createAsyncThunk(
  "get/asyncSearchKhata",
  async (id, { rejectWithValue }) => {
    try {
      const result = await API.get(`searchkhata/${id}`, {});
      return await result.data;
    } catch (error) {
      rejectWithValue(error.response.data.error);
    }
  }
);

const CustomerKhatasSlice = createSlice({
  name: "CustomerKhatasSlice",
  initialState,

  extraReducers: {
    // get all khatas
    [asyncGetAllKhatas.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [asyncGetAllKhatas.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.allKhatas = payload;
    },
    [asyncGetAllKhatas.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    // post user khatas 2
    [asyncCreateCustomerKhata.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [asyncCreateCustomerKhata.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.allKhatas = [payload];
    },
    [asyncCreateCustomerKhata.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    // get all users posts 3
    [asyncGetRemaingAmount.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [asyncGetRemaingAmount.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.usersIdPosts = payload;
    },
    [asyncGetRemaingAmount.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    // search customer khata
    [asyncSearchKhata.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [asyncSearchKhata.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.searchKhata = payload;
    },
    [asyncSearchKhata.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

export const selectIdDetailsData = (state) => state.IdDetails.AllIdDetailsData;

export default CustomerKhatasSlice.reducer;
