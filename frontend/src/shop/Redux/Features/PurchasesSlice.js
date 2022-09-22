import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { base_url } from "../../Config/UrlConfig";
import API from "../Api";

const initialState = {
  allPurchases: [],
  customerPurchases: [],
  totalAmount: [],
  error: null,
  loading: false,
};

// getting all data 1
export const asyncGetTotalKhata = createAsyncThunk(
  "get/asyncGetTotalKhata",
  async (id, { rejectWithValue }) => {
    try {
      const result = await API.put(`shop/totalkhata/${id}`);

      return await result.data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

//post user data 2
export const asyncCreateCustomerKhata = createAsyncThunk(
  "post/asyncCreateCustomerKhata",
  async (data, { rejectWithValue, getState }) => {
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
// getting all user purchases 3
export const asyncGetCustomerPurchases = createAsyncThunk(
  "get/asyncGetCustomerPurchases",
  async (id, { rejectWithValue }) => {
    try {
      const result = await API.get(`shop/purchase/${id}`);
      return await result.data;
    } catch (error) {
      rejectWithValue(error.response.data.message);
    }
  }
);
// create purchases 4
export const asyncCreatePurchases = createAsyncThunk(
  "get/asyncCreatePurchases",
  async (data, { rejectWithValue }) => {
    console.log(data);
    const { toast, id, amount, products } = data;

    try {
      const result = await API.post(`shop/purchase/${id}`, {
        amount,
        products,
      });
      toast.success(`purchase added`);
      return await result.data;
    } catch (error) {
      rejectWithValue(error.response.data.error);
    }
  }
);
const PurchasesSlice = createSlice({
  name: "PurchasesSlice",
  initialState,

  extraReducers: {
    // get all khatas
    [asyncGetTotalKhata.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [asyncGetTotalKhata.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.totalAmount = payload;
    },
    [asyncGetTotalKhata.rejected]: (state, { payload }) => {
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
    // get  customer purhcases 3
    [asyncGetCustomerPurchases.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [asyncGetCustomerPurchases.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.customerPurchases = payload;
    },
    [asyncGetCustomerPurchases.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    // create  customer purhcases 4
    [asyncCreatePurchases.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [asyncCreatePurchases.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.customerPurchases = [payload];
    },
    [asyncCreatePurchases.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

export default PurchasesSlice.reducer;
