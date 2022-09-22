import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import AppButton from "../Components/Forms/AppButton";
import AppInput from "../Components/Forms/AppInput";
import Form from "../Components/Forms/Form";
import { toast } from "react-toastify";
import { asyncCreatePurchases } from "../Redux/Features/PurchasesSlice";

const CreatePurchases = () => {
  const [products, setProducts] = useState("");
  const [amount, setAmount] = useState("");
  const { state } = useLocation();
  const dispatch = useDispatch();
  const handleCreatePurchases = (e) => {
    e.preventDefault();
    dispatch(asyncCreatePurchases({ toast, id: state, products, amount }));
    setProducts("");
    setAmount("");
  };
  return (
    <div className="flex justify-center mt-10">
      <Form>
        <AppInput
          placeholder={"products"}
          value={products}
          type="text"
          onChange={(e) => setProducts(e.target.value)}
        />
        <AppInput
          placeholder={"amounts"}
          value={amount}
          type="number"
          onChange={(e) => setAmount(e.target.value)}
        />
        <AppButton
          style={"bg-blue-700 hover:bg-blue-600"}
          onClick={handleCreatePurchases}
        >
          pay
        </AppButton>
      </Form>
    </div>
  );
};

export default CreatePurchases;
