import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { base_url } from "../../Config/UrlConfig";
import API from "../Api";

const initialState = {
  allPayments: [],
  customerPayments: [],
  paidAmount: [],
  lastPayemnts: [],
  error: null,
  loading: false,
};

// getting all data 1
export const asyncGetPaidAmount = createAsyncThunk(
  "get/asyncGetPaidAmount",
  async (id, { rejectWithValue }) => {
    try {
      const result = await API.put(`shop/payments/${id}`);
      return await result.data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

//post customer payments
export const asyncCreatePayments = createAsyncThunk(
  "post/asyncCreatePayments",
  async (data, { rejectWithValue }) => {
    console.log(data);
    const { toast, enterAmount, id } = data;
    try {
      const res = await API.post(`shop/payments/${id}`, {
        enterAmount,
      });
      toast.success("Data posted");
      return await res.data;
    } catch (error) {
      console.log(error.response.data.error);
      return rejectWithValue(error.response.data.error);
    }
  }
);
// getting all user data 3
export const asyncGetCustomerPayments = createAsyncThunk(
  "get/asyncGetCustomerPayments",
  async (id, { rejectWithValue }) => {
    try {
      const result = await API.get(`shop/payments/${id}`);
      return await result.data;
    } catch (error) {
      rejectWithValue(error.response.data.message);
    }
  }
);
// deleteing user data 4
export const asyncGetLastPayment = createAsyncThunk(
  "get/asyncGetLastPayment",
  async (id, { rejectWithValue }) => {
    try {
      const result = await API.get(`shop/lastpayments/${id}`);
      return await result.data;
    } catch (error) {
      rejectWithValue(error.response.data.error);
    }
  }
);
const PaymentsSlice = createSlice({
  name: "PaymentsSlice",
  initialState,

  extraReducers: {
    // get all khatas
    [asyncGetPaidAmount.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [asyncGetPaidAmount.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.PaidAmount = payload;
    },
    [asyncGetPaidAmount.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    // post user khatas 2
    [asyncCreatePayments.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [asyncCreatePayments.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.customerPayments = [payload];
    },
    [asyncCreatePayments.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    // get customerPayments 3
    [asyncGetCustomerPayments.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [asyncGetCustomerPayments.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.customerPayments = payload;
    },
    [asyncGetCustomerPayments.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    // get last payments 3
    [asyncGetLastPayment.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [asyncGetLastPayment.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.lastPayemnts = payload;
    },
    [asyncGetLastPayment.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

export default PaymentsSlice.reducer;
