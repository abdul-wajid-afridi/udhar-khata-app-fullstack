import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import API from "../Api";

const initialState = {
  admin: null,
  error: null,
  loading: false,
};

// sign Up admin
export const asyncSignUp = createAsyncThunk(
  "post/asyncSignUp",
  async (data, { rejectWithValue }) => {
    const { toast, navigate, name, email, password } = data;
    try {
      const result = await API.post("/register", data, {
        withCredentials: true,
      });
      navigate("/login");
      toast.success("Registered successfully");
      return await result.data;
    } catch (error) {
      return rejectWithValue(error.response.data.error);
    }
  }
);

//Login user
export const asyncLoginAdmin = createAsyncThunk(
  "post/asyncLoginAdmin",
  async (data, { rejectWithValue }) => {
    console.log(data);
    const { name, password, Navigate, toast } = data;
    try {
      const result = await API.post("shop/login", data);
      toast.success("login successfully");
      Navigate("/customers");
      return await result.data;
    } catch (error) {
      return rejectWithValue(error.response.data.error);
    }
  }
);

const AdminSlice = createSlice({
  name: "AdminSlice",
  initialState,

  // simple reducer
  reducers: {
    setAdmin: (state, { payload }) => {
      state.admin = payload;
    },
    setAdminLogOut: (state, { payload }) => {
      state.admin = null;
    },
  },

  extraReducers: {
    //sign up
    [asyncSignUp.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [asyncSignUp.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.user = payload;
      state.error = null;
    },
    [asyncSignUp.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },

    // Login user
    [asyncLoginAdmin.pending]: (state, { payload }) => {
      state.loading = true;
      state.error = null;
    },
    [asyncLoginAdmin.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.admin = payload;
    },
    [asyncLoginAdmin.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

export const { setAdmin, setAdminLogOut } = AdminSlice.actions;
export default AdminSlice.reducer;
