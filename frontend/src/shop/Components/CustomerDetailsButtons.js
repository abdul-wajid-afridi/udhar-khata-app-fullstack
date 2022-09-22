import React from "react";
import AppButton from "./Forms/AppButton";
import { Link, useNavigate } from "react-router-dom";

const CustomerDetailsButtons = ({ id }) => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-10 my-10">
      <AppButton
        onClick={() => navigate("/createPayments", { state: id })}
        style={"bg-red-500 hover:bg-red-700"}
      >
        Add Payments
      </AppButton>
      <AppButton
        onClick={() => navigate("/createPurchases", { state: id })}
        style={"bg-blue-500 hover:bg-blue-700"}
      >
        Add Purchases
      </AppButton>
      <AppButton
        onClick={() => navigate("/ShowPayments", { state: id })}
        style={"bg-gray-500 hover:bg-gray-700"}
      >
        Show Payemnts
      </AppButton>
      <AppButton
        onClick={() => navigate("/ShowPurchases", { state: id })}
        style={"bg-yellow-500 hover:bg-yellow-700"}
      >
        Show Purchases
      </AppButton>
    </div>
  );
};

export default CustomerDetailsButtons;
