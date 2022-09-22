import { configureStore } from "@reduxjs/toolkit";
import AdminSlice from "./Features/AdminSlice";
import CustomerKhatasSlice from "./Features/CustomerKhataSlice";
import PaymentsSlice from "./Features/PaymentsSlice";
import PurchasesSlice from "./Features/PurchasesSlice";
const Store = configureStore({
  reducer: {
    admin: AdminSlice,
    khatas: CustomerKhatasSlice,
    payments: PaymentsSlice,
    purchases: PurchasesSlice,
  },
});

export default Store;
