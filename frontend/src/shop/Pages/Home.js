import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CustomerDetailsCard from "../Components/CustomerDetailsCard";
import AppInput from "../Components/Forms/AppInput";
import {
  asyncGetAllKhatas,
  asyncSearchKhata,
} from "../Redux/Features/CustomerKhataSlice";
const Home = () => {
  const [custName, setcustName] = useState("");
  const dispatch = useDispatch();
  const { allKhatas } = useSelector((state) => state.khatas);
  useEffect(() => {
    dispatch(asyncGetAllKhatas());
  }, [dispatch]);
  console.log(allKhatas);
  return (
    <div className="flex flex-col justify-center items-center mt-10 gap-10">
      <div>
        <AppInput
          placeholder="search Result with Name"
          onChange={(e) => setcustName(e.target.value)}
        />
      </div>

      {allKhatas?.result
        ?.filter((it) => {
          if (custName == "") return null;
          else if (
            it.customerName.toLowerCase().includes(custName.toLowerCase())
          )
            return it;
        })
        .map((it) => {
          return (
            <CustomerDetailsCard
              title={"customerName"}
              products={it.customerName}
              money="totalAmount"
              amount={it.remainingAmount}
            />
          );
        })}
    </div>
  );
};

export default Home;
