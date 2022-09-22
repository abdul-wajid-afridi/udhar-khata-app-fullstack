import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { asyncCreatePayments } from "../Redux/Features/PaymentsSlice";
import { toast } from "react-toastify";
import Form from "../Components/Forms/Form";
import AppButton from "../Components/Forms/AppButton";
import AppInput from "../Components/Forms/AppInput";
import { useDispatch } from "react-redux";
const CreatePayments = () => {
  const [enterAmount, setEnterAmount] = useState("");
  const { state } = useLocation();
  const dispatch = useDispatch();
  const handleCreatePayments = (e) => {
    e.preventDefault();
    console.log("object");

    dispatch(asyncCreatePayments({ toast, id: state, enterAmount }));
    setEnterAmount("");
  };
  return (
    <div className="flex justify-center mt-10">
      <Form>
        <AppInput
          placeholder={"enterAmount"}
          value={enterAmount}
          type="number"
          onChange={(e) => setEnterAmount(e.target.value)}
        />
        <AppButton
          style={"bg-blue-700 hover:bg-blue-600"}
          onClick={handleCreatePayments}
        >
          pay
        </AppButton>
      </Form>
    </div>
  );
};

export default CreatePayments;
