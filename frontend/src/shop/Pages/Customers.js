import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CardGallary from "../Components/CardGallary";
import HomeCard from "../Components/HomeCard";
import { asyncGetAllKhatas } from "../Redux/Features/CustomerKhataSlice";

const Customers = () => {
  const Navigate = useNavigate();
  const dispatch = useDispatch();

  const { allKhatas } = useSelector((state) => ({ ...state.khatas }));
  useEffect(() => {
    dispatch(asyncGetAllKhatas());
  }, [dispatch]);
  if (allKhatas?.result?.length < 1) {
    return (
      <p className="text-3xl sm:text-xl text-center text-red-700 font-bold mt-20 animate-bounce">
        No data Found
      </p>
    );
  }
  return (
    <CardGallary>
      {allKhatas?.result &&
        allKhatas?.result.map((item) => {
          return (
            <HomeCard
              key={item.id}
              onClick={() => Navigate("/customerDetails", { state: item })}
              item={item}
              cnicNo={item?.cnicNo}
              customerOccupation={item?.customerOccupation}
              remainingAmount={item?.remainingAmount}
              address={item?.address}
              customerName={item?.customerName}
              phoneNo1={item?.phoneNo1}
              customerPic={item?.customerPic}
            />
          );
        })}
    </CardGallary>
  );
};

export default Customers;
